import "./webflow.css";
import "./landingPage.css";

import dnLogo from "./images/dn-logo.svg";
import fiverrIcon from "./images/fiverr-icon.svg";
import githubIcon from "./images/github-icon.svg";
import linkedinIcon from "./images/linkedin-icon.svg";
import phone1 from "./images/undraw_app_installation_re_h36x.svg";
import phone2 from "./images/undraw_mobile_apps_re_3wjf.svg";
import code from "./images/undraw_code_review_re_woeb.svg";
import management from "./images/undraw_file_manager_re_ms29.svg";

const LandingPage = () => {
  return (
    <>
      {/* 

    <script type="text/javascript">
      WebFont.load({
        google: {
          families: [
            'Open Sans:300,300italic,400,400italic,600,600italic,700,700italic,800,800italic',
            'Arimo:regular,700',
          ],
        },
      })
    </script> */}
      <div className="webflow-wrapper">
        <div
          data-animation="default"
          data-collapse="medium"
          data-duration="200"
          data-easing="ease"
          data-easing2="ease"
          role="banner"
          className="navbar w-nav"
        >
          <div className="container">
            <a
              href="/"
              aria-current="page"
              className="brand w-nav-brand w--current"
            >
              <div className="text-block">
                <img
                  src={dnLogo}
                  loading="lazy"
                  width="331"
                  alt="Digital notes logo"
                  className="image-4"
                />
              </div>
            </a>
            <div className="div-block-2">
              <a
                href="/app"
                className="nav-link nav-link-button last-link w-nav-link"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
        <div className="hero">
          <div className="container hero-container">
            <div className="hero-text-wrapper">
              <h1 className="heading">
                Fast, accessible, and easy to use app for taking notes
              </h1>
              <p className="paragraph">
                You can use Digital Notes for absolutely free. Just click the
                link below:
              </p>
              <a href="/app" className="hero-get-started">
                Get Started
              </a>
            </div>
            <div className="svg-wrapper">
              <div className="first-svg">
                <img
                  src={phone2}
                  loading="lazy"
                  alt="Phone illustration"
                  className="image-2"
                />
              </div>
              <div className="second-svg">
                <img
                  src={phone1}
                  loading="lazy"
                  alt="Phone illustration"
                  className="image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="about">
          <div>
            <div className="container-2">
              <div className="w-layout-grid content-grid">
                <div
                  id="w-node-_587f8631-da8a-161e-e623-07db5a8de9f0-96bf0405"
                  className="content-block bg-text"
                >
                  <h2 className="heading-4">
                    Manage your life in a better way
                  </h2>
                  <p>
                    Free up your mental space by creating notes or even big text
                    documents with our app. Mobile-friendly, accessible, and
                    super fast free app at your disposal.
                  </p>
                  <a href="/app" className="button button-space w-button">
                    Get Started
                  </a>
                </div>
                <div className="image-block">
                  <img src={management} alt="Management illustration" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="container-2">
              <div className="w-layout-grid content-grid">
                <div className="content-block bg-text">
                  <h2 className="heading-6">Built from the ground up</h2>
                  <p>
                    This app utilizes cutting edge technologies like: HTML5,
                    CSS3, TypeScript, React, React-quill, Styled-components and
                    others.
                  </p>
                  <a href="/app" className="button button-space w-button">
                    Get Started
                  </a>
                </div>
                <div className="image-block">
                  <img src={code} alt="Code illustration" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="container-2">
            <div className="footer-legal">
              <div className="footer-detail-left">
                <div className="legal">
                  Built by&#160;
                  <a href="http://www.sergeweb.com" className="webflow-link">
                    Sergeweb
                  </a>
                  <a
                    href="http://webflow.com/"
                    target="_blank"
                    className="webflow-link"
                  ></a>
                </div>
              </div>
              <div className="footer-detail-right">
                <div className="social-icon-wrap">
                  <a
                    href="https://github.com/SergeiKOS"
                    aria-label="Github"
                    className="social-link w-inline-block"
                  >
                    <img
                      src={githubIcon}
                      alt="Github logo"
                      className="social-icon"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/serge-kos/"
                    aria-label="Linkedin"
                    className="social-link w-inline-block"
                  >
                    <img
                      src={linkedinIcon}
                      alt="Linkedin logo"
                      className="social-icon"
                    />
                  </a>
                  <a
                    href="https://www.fiverr.com/serge_web"
                    aria-label="Fiverr"
                    className="social-link w-inline-block"
                  >
                    <img
                      src={fiverrIcon}
                      alt="Fiverr logo"
                      className="social-icon"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
