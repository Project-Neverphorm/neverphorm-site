import React from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import "@/styles/neverphorm.css";

// Wraps every page with the dark theme, header, and footer
const SiteLayout = ({ title, description, children }) => (
  <div className="np" id="top">
    <Helmet>
      <title>{title ? `${title} · Project Neverphorm` : "Project Neverphorm"}</title>
      {description && <meta name="description" content={description} />}
    </Helmet>
    <div className="np-wrap">
      <Header />
      <main className="np-page">{children}</main>
      <Footer />
    </div>
  </div>
);

export default SiteLayout;