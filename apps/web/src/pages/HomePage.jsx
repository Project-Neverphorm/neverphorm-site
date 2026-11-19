import React from "react";
import SiteLayout from "@/components/SiteLayout.jsx";

// TODO: set this to the real studio inbox
const CONTACT_EMAIL = "contact@projectneverphorm.com";

const HomePage = () => {
  return (
    <SiteLayout description="Project Neverphorm is an independent game studio building games across every genre.">
      <section id="games">
        <div className="np-split">
          <div>
            <h1 style={{ margin: 0 }}>
              <img
                src="/pictures/indie-game-studio.png"
                alt="Independent game studio"
                style={{
                  display: "block",
                  width: "100%",
                  maxWidth: 520,
                  height: "auto",
                  mixBlendMode: "multiply",
                }}
              />
            </h1>
          </div>
          <div>
            <p className="np-label">Games</p>
            <article className="np-game">
              <h2 style={{ margin: 0 }}>In development</h2>
            </article>
          </div>
        </div>
      </section>

      <section id="about">
        <p className="np-label">About</p>
        <h2>About the Studio</h2>
        <p className="np-lede">
          Project Neverphorm is an independent game studio founded in 2025 by Cody. There's been a lot of
          ideas, concepts, and visions being put together for the last 10+ years and it was decided that Cody wanted
          to finally cut back on playing and rather start building. Back in the day software and game engines were
          expensive, complicated, and pretty much out of reach for someone just starting out. Now, with tools like
          Unity, UE, Blender, ZBrush, and more available to anyone, there was no reason left to keep those ideas stuck in a notebook or
          just in thoughts.
        </p>
      </section>

      <section id="contact">
        <div className="np-split">
          <div>
            <p className="np-label">Join the team</p>
            <h2>Want to build games with us?</h2>
            <p className="np-lede">
              We're growing slowly and on purpose. Artists, designers, programmers, and more are welcome to reach out.
            </p>
          </div>
          <div>
            <p className="np-label">Contact</p>
            <h2>Get in touch</h2>
            <p className="np-lede">Business inquiries, feedback, or just a question. Every message gets read.</p>
            <a className="np-more" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL} →
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default HomePage;