import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";

const PrivacyPolicy = () => {
  return (
    <div className="np">
      <div className="np-wrap">
        <Header />

        <main className="np-page">
          <section>
            <article className="np-doc">
              <p className="np-label">Legal</p>
              <h1>Privacy Policy</h1>
              <p className="np-updated">Last updated: May 2026</p>

              <h2>Information We Collect</h2>
              <p>
                Project Neverphorm may collect basic information that you choose
                to provide, such as your name, email address, message content, or
                other details submitted through contact forms or direct communication.
              </p>

              <h2>How We Use Information</h2>
              <p>
                Information may be used to respond to messages, review inquiries,
                improve the website, share updates, manage supporter communication,
                or support future studio-related services and projects.
              </p>

              <h2>Cookies and Analytics</h2>
              <p>
                This website may use basic cookies, analytics, or third-party
                services to understand website traffic and improve the experience.
                These tools may collect general usage data such as browser type,
                pages visited, and approximate location.
              </p>

              <h2>Data Sharing</h2>
              <p>
                Project Neverphorm does not sell personal information. Information
                may only be shared when necessary to operate the website, comply
                with legal requirements, protect the studio, or use trusted service
                providers.
              </p>

              <h2>Contact</h2>
              <p>
                For privacy-related questions, please contact Project Neverphorm
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

export default PrivacyPolicy;