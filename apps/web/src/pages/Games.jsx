import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout.jsx";
import { duskline } from "@/data/site.js";

const EARLY_MESSAGES = [
  "Whoa, you're too early. This page hasn't taken form yet.",
  "Access denied. Come back after launch.",
  "Nice try, speedrunner. This page isn't unlocked yet.",
  "Not yet buddy...",
];

const MoreInfo = ({ wikiUrl }) => {
  const [msg, setMsg] = useState(null);

  useEffect(() => {
    if (!msg) return;
    const t = setTimeout(() => setMsg(null), 3200);
    return () => clearTimeout(t);
  }, [msg]);

  // Once the wiki exists, the button becomes a real link
  if (wikiUrl) return <Link className="np-btn" to={wikiUrl}>More info</Link>;

  const tooEarly = () => {
    const next = EARLY_MESSAGES[Math.floor(Math.random() * EARLY_MESSAGES.length)];
    setMsg(next === msg ? EARLY_MESSAGES[0] : next);
  };

  return (
    <div className="np-early">
      {msg && <div className="np-pop" role="status">{msg}</div>}
      <button type="button" className="np-btn" onClick={tooEarly}>More info</button>
    </div>
  );
};

const Games = () => (
  <SiteLayout title="Games" description="Games from Project Neverphorm, including Duskline.">
    <section>
      <p className="np-label">Games</p>
      <h1>Our games</h1>
      <p className="np-lede">Everything the studio has in the works. More titles get added here as they're announced.</p>
    </section>

    <section>
      <div className="np-split">
        <div>
          <span className="np-status">{duskline.status}</span>
          <h2 style={{ marginTop: 16 }}>{duskline.title}</h2>
          <p className="np-lede">{duskline.long}</p>
          <div style={{ marginTop: 32 }}>
            <MoreInfo wikiUrl={duskline.wikiUrl} />
          </div>
        </div>
        <dl className="np-game np-specs">
          {duskline.specs.map(([k, v]) => (
            <React.Fragment key={k}><dt>{k}</dt><dd>{v}</dd></React.Fragment>
          ))}
        </dl>
      </div>
    </section>
  </SiteLayout>
);

export default Games;