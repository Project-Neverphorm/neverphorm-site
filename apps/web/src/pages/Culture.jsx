import React from "react";
import SiteLayout from "@/components/SiteLayout.jsx";
import { tenets } from "@/data/site.js";

const Culture = () => (
  <SiteLayout title="Culture" description="How Project Neverphorm works.">
    <section>
      <div className="np-split">
        <div>
          <p className="np-label">Culture</p>
          <h1>How we work.</h1>
          <p className="np-lede">A small team building around real lives. These are the few things that guide every project.</p>
        </div>
        <div className="np-tenets">
          {tenets.map((t) => (
            <div className="np-tenet" key={t.title}><h3>{t.title}</h3><p>{t.text}</p></div>
          ))}
        </div>
      </div>
    </section>
  </SiteLayout>
);

export default Culture;