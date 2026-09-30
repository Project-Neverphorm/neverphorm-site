import React from "react";
import SiteLayout from "@/components/SiteLayout.jsx";
import Avatar from "@/components/Avatar.jsx";
import { team } from "@/data/site.js";

const facts = [
  ["Founded", "2025"],
  ["Team", `${team.length} people, fully remote`],
  ["In development", "Duskline"],
  ["Focus", "Games across every genre"],
];

const About = () => (
  <SiteLayout title="About" description="About Project Neverphorm and the team behind it.">
    <section>
      <div className="np-split">
        <div>
          <p className="np-label">About</p>
          <h1>The studio</h1>
          <p className="np-lede">
            Project Neverphorm is an independent game studio founded in 2025 by Cody McCullough. It started as more than fifteen years of game ideas that never left the notebook, and it exists to finally make them.
          </p>
          <p className="np-lede">
            The catalog is planned and deliberately varied, from platformers to narrative games to open worlds. The studio doesn't stick to one genre. Each project gets made when it's ready, by a small team working around real lives.
          </p>
        </div>
        <dl className="np-game np-specs">
          {facts.map(([k, v]) => (
            <React.Fragment key={k}><dt>{k}</dt><dd>{v}</dd></React.Fragment>
          ))}
        </dl>
      </div>
    </section>

    <section>
      <p className="np-label">Meet the team</p>
      <h2>The people behind the games</h2>
      <div className="np-crew">
        {team.map((p) => (
          <article className="np-bio" key={p.name}>
            <Avatar person={p} />
            <div>
              <h3>{p.name}</h3>
              <span className="np-role">{p.role}</span>
              <p>{p.bio}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  </SiteLayout>
);

export default About;