import React from "react";
import SiteLayout from "@/components/SiteLayout.jsx";
import { duskline } from "@/data/site.js";

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
          <ul className="np-features">
            {duskline.features.map((f) => <li key={f}>{f}</li>)}
          </ul>
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