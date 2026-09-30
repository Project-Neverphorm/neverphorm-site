import React from "react";
import SiteLayout from "@/components/SiteLayout.jsx";

const Culture = () => (
  <SiteLayout title="Culture" description="How Project Neverphorm works.">
    <section>
      <p className="np-label">Culture</p>
      <h1>How we work.</h1>
      <p className="np-lede">
        We're a small team that doesn't believe in the whole corporate grind or mandatory overtime.
        We believe taking our time and being patient with our work is more satisfying, doesn't create
        unnecessary stress, and keeps anyone from burning out. Good games come from people who actually
        enjoy making them.
      </p>
      <p className="np-lede">
        Everyone here has a life outside the studio, whether that's a day job, school, or family, and
        we build around that instead of against it. We'd rather ship something we're proud of than
        rush something out the door to hit a deadline. We keep things honest, respect each other's
        time, and try to have some fun along the way.
      </p>
    </section>
  </SiteLayout>
);

export default Culture;