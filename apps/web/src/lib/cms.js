// apps/web/src/lib/cms.js
import { useEffect, useState } from "react";
import { team as fallbackTeam } from "@/data/site.js";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export async function cmsFetch(table, query) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}?${query}`, {
    headers: { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}` },
  });
  if (!res.ok) throw new Error(`${table}: ${res.status}`);
  return res.json();
}

// Shows `fallback` instantly, then swaps in live data from the portal.
export function useCms(table, query, fallback = []) {
  const [data, setData] = useState(fallback);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    cmsFetch(table, query)
      .then((rows) => {
        if (!cancelled) setData(rows);
      })
      .catch((err) => console.error("CMS fetch failed:", err))
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [table, query]);

  return { data, loading };
}

// Converts a team_members row into the shape Avatar and the pages use
const toPerson = (m) => ({
  name: m.name,
  initials: m.name.charAt(0).toUpperCase(),
  role: m.role ?? "",
  photo: m.photo_url,
  bio: m.bio ?? "",
  favorites: (m.favorite_games ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean),
});

export function useTeam() {
  const { data, loading } = useCms(
    "team_members",
    "select=name,role,bio,favorite_games,photo_url&published=eq.true&order=sort_order.asc",
    null
  );
  return { team: data ? data.map(toPerson) : fallbackTeam, loading };
}