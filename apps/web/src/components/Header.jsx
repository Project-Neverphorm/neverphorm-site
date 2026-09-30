import React from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/games", label: "Games" },
  { to: "/about", label: "About" },
  { to: "/culture", label: "Culture" },
  { to: "/contact", label: "Contact" },
];

const Header = () => (
  <header className="np-header">
    <Link className="np-mark" to="/">Project Neverphorm</Link>
    <nav className="np-nav" aria-label="Main">
      {links.map((l) => (
        <NavLink key={l.to} to={l.to} end={l.end} className={({ isActive }) => (isActive ? "active" : undefined)}>
          {l.label}
        </NavLink>
      ))}
    </nav>
  </header>
);

export default Header;