import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";

const TermsOfService = () => {
  return (
    <div className="np">
      <div className="np-wrap">
        <Header />

        <main className="np-page">
          <section>
            <article className="np-doc">
              <p className="np-label">Legal</p>
              <h1>Terms of Service</h1>
              <p className="np-updated">Last updated: May 2026</p>

              <h2>Use of This Website</h2>
              <p>
                By using this website, you agree to use it responsibly and not
                misuse, damage, disrupt, or attempt to interfere with the website,
                its services, or its content.
              </p>

              <h2>Studio Content</h2>
              <p>
                All studio names, logos, written content, game concepts, artwork,
                screenshots, branding, and related materials belong to Project
                Neverphorm unless otherwise stated. Content may not be copied,
                redistributed, modified, or used commercially without permission.
              </p>

              <h2>Project Information</h2>
              <p>
                Game details, release plans, features, pricing, development updates,
                and studio plans are subject to change. Any future release dates,
                features, or project descriptions are not guaranteed unless formally
                announced.
              </p>

              <h2>Third-Party Links</h2>
              <p>
                This website may include links to third-party websites, platforms,
                stores, social media pages, or services. Project Neverphorm is not
                responsible for the content, privacy practices, or policies of
                third-party sites.
              </p>

              <h2>Limitation of Liability</h2>
              <p>
                This website is provided as-is. Project Neverphorm is not responsible
                for damages, losses, interruptions, or issues that may occur from
                using this website or relying on information provided here.
              </p>

              <h2>Contact</h2>
              <p>
                For questions about these terms, please contact Project Neverphorm
                through the contact page.
              </p>
            </article>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default TermsOfService;