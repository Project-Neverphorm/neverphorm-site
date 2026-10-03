import React from "react";
import { Link } from "react-router-dom";
import { socials } from "@/data/site.js";

const Footer = () => (
  <footer className="np-footer">
    <div className="np-foot">
      <div className="np-foot-brand">
        <Link className="np-mark" to="/">Project Neverphorm</Link>
        <p>An independent game studio. Now building Duskline.</p>
        <Link className="np-btn" to="/contact">Get in touch</Link>
      </div>

      <nav className="np-foot-col" aria-label="Site">
        <h4>Site</h4>
        <Link to="/">Home</Link>
        <Link to="/games">Games</Link>
        <Link to="/about">About</Link>
        <Link to="/culture">Culture</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <nav className="np-foot-col" aria-label="Studio">
        <h4>Studio</h4>
        <Link to="/contact?subject=join">Join the team</Link>
        <Link to="/contact?subject=business">Business inquiries</Link>
        <Link to="/games">Duskline</Link>
      </nav>

      <nav className="np-foot-col" aria-label="Follow">
        <h4>Follow</h4>
        {socials.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
        ))}
      </nav>
    </div>

    <div className="np-foot-base">
      <span>© 2025 - {new Date().getFullYear()} Project Neverphorm LLC</span>
      <span className="np-legal">
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/terms">Terms of Service</Link>
        <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>Back to top ↑</a>
      </span>
    </div>
  </footer>
);

export default Footer;