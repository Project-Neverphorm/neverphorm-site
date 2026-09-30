import React from "react";
import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout.jsx";
import Avatar from "@/components/Avatar.jsx";
import { team, tenets, duskline } from "@/data/site.js";

const HomePage = () => (
  <SiteLayout description="Project Neverphorm is an independent game studio building games across every genre.">
    <section>
      <div className="np-split">
        <div>
          <p className="np-label">Independent game studio</p>
          <h1>Fifteen years of ideas, finally getting made.</h1>
          <p className="np-lede">
            Project Neverphorm is a small studio building games across every genre. No house style, just the next idea worth making.
          </p>
        </div>
        <div>
          <p className="np-label">Games</p>
          <article className="np-game">
            <span className="np-status">{duskline.status}</span>
            <h2>{duskline.title}</h2>
            <p>{duskline.short}</p>
            <p className="np-meta">{duskline.platformsShort}</p>
          </article>
          <Link className="np-more" to="/games">More on Duskline →</Link>
        </div>
      </div>
    </section>

    <section>
      <div className="np-split">
        <div>
          <p className="np-label">About</p>
          <h2>The studio</h2>
          <p className="np-lede">
            Founded in 2025 by Cody McCullough after more than fifteen years of concepting. The catalog is planned and varied, from platformers to narrative games to open worlds, and each one gets made when it's ready.
          </p>
          <Link className="np-more" to="/about">More about the studio →</Link>
        </div>
        <div>
          <p className="np-label">Team</p>
          <div className="np-members">
            {team.map((p) => (
              <div className="np-member" key={p.name}>
                <Avatar person={p} />
                <h3>{p.name}</h3>
                <span>{p.role}</span>
              </div>
            ))}
          </div>
          <Link className="np-more" to="/about">Meet the team →</Link>
        </div>
      </div>
    </section>

    <section>
      <div className="np-split">
        <div>
          <p className="np-label">Culture</p>
          <h2>How we work</h2>
          <p className="np-lede">A small team building around real lives, with a few principles that guide every project.</p>
          <Link className="np-more" to="/culture">More on our culture →</Link>
        </div>
        <div className="np-tenets">
          {tenets.slice(0, 2).map((t) => (
            <div className="np-tenet" key={t.title}><h3>{t.title}</h3><p>{t.text}</p></div>
          ))}
        </div>
      </div>
    </section>

    <section>
      <div className="np-split">
        <div>
          <p className="np-label">Join the team</p>
          <h2>Want to build games with us?</h2>
          <p className="np-lede">We're growing slowly and on purpose. Artists, designers, programmers, and more are welcome to reach out.</p>
          <Link className="np-more" to="/contact">See what we're looking for →</Link>
        </div>
        <div>
          <p className="np-label">Contact</p>
          <h2>Get in touch</h2>
          <p className="np-lede">Business inquiries, feedback, or just a question. Every message gets read.</p>
          <Link className="np-more" to="/contact">Contact us →</Link>
        </div>
      </div>
    </section>
  </SiteLayout>
);

export default HomePage;