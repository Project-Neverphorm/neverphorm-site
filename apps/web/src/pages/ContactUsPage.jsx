import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout.jsx";
import { lookingFor } from "@/data/site.js";

const SUBJECTS = [
  "General inquiry",
  "Join the team",
  "Contract / business inquiry",
  "Feedback",
  "Other",
];

// Lets footer links like /contact?subject=join preselect a subject
const fromParam = { join: "Join the team", business: "Contract / business inquiry", feedback: "Feedback" };

const ContactUsPage = () => {
  const [params] = useSearchParams();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const nameRef = useRef(null);

  useEffect(() => {
    const s = fromParam[params.get("subject")];
    if (s) setForm((f) => ({ ...f, subject: s }));
  }, [params]);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const applyToJoin = () => {
    setForm((f) => ({ ...f, subject: "Join the team" }));
    nameRef.current?.focus();
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      // TODO: hook this up to the same submit logic your old ContactSection.jsx used
      // (for example your PocketBase client). `form` holds name, email, subject, message.
      console.log("Contact form:", form);
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

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
            <button type="button" className="np-more np-linkbtn" onClick={applyToJoin}>Apply through the form</button>
          </div>

          <div>
            <p className="np-label">Contact us</p>
            <h2>Send a message</h2>
            <form className="np-form" onSubmit={onSubmit}>
              <div className="np-row">
                <label htmlFor="c-name">Name
                  <input id="c-name" ref={nameRef} autoComplete="name" required value={form.name} onChange={update("name")} />
                </label>
                <label htmlFor="c-email">Email
                  <input id="c-email" type="email" autoComplete="email" required value={form.email} onChange={update("email")} />
                </label>
              </div>
              <label htmlFor="c-subj">Subject
                <select id="c-subj" required value={form.subject} onChange={update("subject")}>
                  <option value="" disabled>Choose a subject</option>
                  {SUBJECTS.map((s) => <option key={s}>{s}</option>)}
                </select>
              </label>
              <label htmlFor="c-body">Message
                <textarea id="c-body" required value={form.message} onChange={update("message")} />
              </label>
              <button className="np-btn" type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
              {status === "sent" && <p className="np-note">Message sent. We'll get back to you soon.</p>}
              {status === "error" && <p className="np-note">That didn't go through. Check your connection and try again.</p>}
            </form>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default ContactUsPage;