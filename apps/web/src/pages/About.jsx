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
            Project Neverphorm is an independent game studio founded in 2025 by Cody McCullough. There's been a lot of ideas, concepts, and visions being put together for the last 10+ years and it was decided
            that Cody wanted to finally cut back on playing and rather start building. Back in the day software and game engines were expensive, complicated, and pretty much out of reach for someone just starting
            out. Now, with tools like Unity and Blender available to anyone, there was no reason left to keep those ideas stuck in a notebook or just in thoughts. 
          </p>
          <p className="np-lede">
            There's already a catalog that is planned, mapped out, and deliberately varied, from platformers to narrative games to open worlds. We're refusing to stay stuck on one singular genre. 
            We are a collaborative team and that's what we thrive on. Everyone here has a voice, innovative skillsets, opinions, thoughts, ideas, concepts, and so on, and we intend on strengthening all those values
            as we grow as a team.
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
      <h2 className="np-label">Meet the team</h2>
      <div className="np-crew">
        {team.map((p) => (
          <article className="np-bio" key={p.name}>
            <Avatar person={p} />
            <div>
              <h3>{p.name}</h3>
              <span className="np-role">{p.role}</span>
              <p>{p.bio}</p>
              {p.favorites?.length > 0 && (
                <p className="np-favs"><span>Favorite games:</span> {p.favorites.join(", ")}</p>
                )}
            </div>
          </article>
        ))}
      </div>
    </section>
  </SiteLayout>
);

export default About;