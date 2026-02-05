import React from "react";
import "./about.css";
import Heading from "../../common/Heading";

const About = () => {
  return (
    <>
      <section className="about padding">
        <div className="container">
          <Heading
            title="About Our Firm"
            subtitle="Rooted in integrity, driven by results, and committed to delivering practical legal solutions."
          />

          <div className="about-content">
            <div className="about-text">
              <h3>Trusted Legal Partners</h3>
              <p>
                We are a full-service law firm providing strategic legal counsel
                across corporate, commercial, litigation, family, and estate
                matters. Our approach blends deep legal expertise with a clear
                understanding of our clients’ business and personal goals.
              </p>

              <p>
                From startups to established enterprises and individuals, we
                prioritize clarity, responsiveness, and results — ensuring every
                client feels informed and supported at every stage.
              </p>
            </div>

            <div className="about-stats">
              <div className="stat-box">
                <h4>2+</h4>
                <span>Years Experience</span>
              </div>
              <div className="stat-box">
                <h4>50+</h4>
                <span>Cases Handled</span>
              </div>
              <div className="stat-box">
                <h4>98%</h4>
                <span>Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
