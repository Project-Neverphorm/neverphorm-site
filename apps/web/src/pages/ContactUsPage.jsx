import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout.jsx";
import { lookingFor } from "@/data/site.js";

const STUDIO_EMAIL = "projectneverphorm@gmail.com";

const SUBJECTS = [
  "General inquiry",
  "Join the team",
  "Contract / business inquiry",
  "Feedback",
  "Other",
];

// Lets footer links like /contact?subject=join preselect a subject
const fromParam = { join: "Join the team", business: "Contract / business inquiry", feedback: "Feedback" };

const mailto = (subject) =>
  `mailto:${STUDIO_EMAIL}?subject=${encodeURIComponent(subject || "Hello Project Neverphorm")}`;

const ContactUsPage = () => {
  const [params] = useSearchParams();
  const [subject, setSubject] = useState("General inquiry");

  useEffect(() => {
    const s = fromParam[params.get("subject")];
    if (s) setSubject(s);
  }, [params]);

  return (
    <SiteLayout title="Contact" description="Contact Project Neverphorm or apply to join the team.">
      <section>
        <div className="np-split">
          <div>
            <p className="np-label">What we're looking for</p>
            <h1>The people who fit here</h1>
            <p className="np-lede">Skill matters, but how you work matters just as much. You don't need a studio résumé to be a good fit.</p>
          </div>
          <div className="np-tenets">
            {lookingFor.map((t) => (
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
            <p className="np-lede">
              We're a small team that grows slowly and on purpose. If you want to help make games, tell us what you do and what you'd like to work on.
            </p>
            <ul className="np-areas">
              {["2D / UI art", "3D modeling", "Game design", "Programming", "Audio & music", "Marketing"].map((a) => <li key={a}>{a}</li>)}
            </ul>
            <a className="np-more" href={mailto("Join the team")}>Email us about joining</a>
          </div>

          <div>
            <p className="np-label">Contact us</p>
            <h2>Send us an email</h2>
            <p className="np-lede">Pick what it's about and we'll open your mail app with everything ready to go.</p>
            <div className="np-form">
              <label htmlFor="c-subj">Subject
                <select id="c-subj" value={subject} onChange={(e) => setSubject(e.target.value)}>
                  {SUBJECTS.map((s) => <option key={s}>{s}</option>)}
                </select>
              </label>
              <a className="np-btn" href={mailto(subject)}>Contact us</a>
              <p className="np-note">Or email us directly: {STUDIO_EMAIL}</p>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default ContactUsPage;