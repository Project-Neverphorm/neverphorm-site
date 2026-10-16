// apps/web/src/lib/cms.js
import { useEffect, useState } from 'react'

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

export async function cmsFetch(table, query) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}?${query}`, {
    headers: { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}` },
  })
  if (!res.ok) throw new Error(`${table}: ${res.status}`)
  return res.json()
}

// Shows `fallback` instantly, then swaps in live data from the portal.
// If Supabase is ever down, the page still shows the fallback instead of breaking.
export function useCms(table, query, fallback = []) {
  const [data, setData] = useState(fallback)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    cmsFetch(table, query)
      .then((rows) => {
        if (!cancelled) setData(rows)
      })
      .catch((err) => console.error('CMS fetch failed:', err))
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [table, query])

  return { data, loading }
}