"use client";
import "./sample-space.css";

import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import CTAWindow from "@/components/CTAWindow/CTAWindow";
import Copy from "@/components/Copy/Copy";

const page = () => {
  return (
    <>
      <Nav />
      <div className="page sample-space">
        <section className="sample-space-hero">
          <div className="sample-space-hero-img">
            <img src="/sample-space/hero.jpg" alt="Colonnade House Lisbon" />
          </div>
          <div className="sample-space-hero-overlay"></div>
          <div className="container">
            <div className="sample-space-hero-header">
              <Copy delay={1} animateOnScroll={false}>
                <h1>Colonnade House</h1>
              </Copy>
            </div>
            <div className="sample-space-content">
              <div className="sample-space-col">
                <Copy delay={1.05} animateOnScroll={false}>
                  <p>Lisbon, Portugal</p>
                </Copy>
              </div>
              <div className="sample-space-col">
                <div className="sample-space-content-wrapper">
                  <Copy delay={1.1} animateOnScroll={false}>
                    <p>Europe</p>
                  </Copy>
                </div>
                <div className="sample-space-content-wrapper">
                  <Copy delay={1.15} animateOnScroll={false}>
                    <h3>
                      Colonnade House is a study in rhythm and light, where slim
                      colonnades and vaulted thresholds frame everyday life with
                      a quiet sense of grandeur.
                    </h3>
                    <h3>
                      It pairs classical proportion with a contemporary touch, so the
                      house feels rooted in tradition yet entirely at home in the
                      present.
                    </h3>
                  </Copy>
                </div>
                <div className="sample-space-content-wrapper sample-space-meta">
                  <div className="sample-space-hero-row">
                    <div className="sample-space-hero-sub-col">
                      <Copy delay={0.2}>
                        <p>Date Completed</p>
                        <p>2021</p>
                      </Copy>
                    </div>
                    <div className="sample-space-hero-sub-col">
                      <Copy delay={0.2}>
                        <p>Project Type</p>
                        <p>Residential Architecture</p>
                        <p>Retreat Wellness</p>
                      </Copy>
                    </div>
                  </div>
                </div>
                <div className="sample-space-content-wrapper sample-space-meta">
                  <div className="sample-space-hero-row">
                    <div className="sample-space-hero-sub-col">
                      <Copy delay={0.35}>
                        <p>Collaborators</p>
                        <p>Atelier Forma</p>
                        <p>LX Stoneworks</p>
                        <p>Studio Maré</p>
                      </Copy>
                    </div>
                    <div className="sample-space-hero-sub-col">
                      <Copy delay={0.35}>
                        <p>Photography</p>
                        <p>Atelier Forma</p>
                        <p>Inês Almeida</p>
                      </Copy>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sample-space-details sample-space-details-1">
          <div className="container">
            <div className="sample-space-col">
              <Copy delay={0.1}>
                <p>Architectural Story</p>
              </Copy>
            </div>
            <div className="sample-space-col">
              <Copy delay={0.1}>
                <h3>
                  At Colonnade House, a run of arches sets a measured rhythm that
                  guides you through the home. Each passage catches the daylight
                  differently, so the mood shifts as you move from courtyard to
                  living room.
                </h3>

                <h3>
                  Materials were chosen for their quiet permanence: pale stone,
                  lime plaster, and timber accents. They invite touch and age
                  gently, letting the house grow richer in character over time.
                </h3>
              </Copy>
              <div className="sample-space-details-img">
                <img src="/sample-space/sample-space-1.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="sample-space-details sample-space-details-2">
          <div className="container">
            <div className="sample-space-col">
              <Copy delay={0.1}>
                <p>Spatial Qualities</p>
              </Copy>
            </div>
            <div className="sample-space-col">
              <div className="sample-space-content-wrapper sample-space-meta">
                <div className="sample-space-hero-row">
                  <div className="sample-space-hero-sub-col">
                    <Copy delay={0.1}>
                      <p>Atmosphere</p>
                      <p>Calm</p>
                      <p>Softened acoustics</p>
                      <p>Filtered light</p>
                    </Copy>
                  </div>
                  <div className="sample-space-hero-sub-col">
                    <Copy delay={0.1}>
                      <p>Flow</p>
                      <p>Passages</p>
                      <p>Guided movement</p>
                      <p>Rhythmic</p>
                    </Copy>
                  </div>
                </div>
              </div>
              <div className="sample-space-content-wrapper sample-space-meta">
                <div className="sample-space-hero-row">
                  <div className="sample-space-hero-sub-col">
                    <Copy delay={0.2}>
                      <p>Materials</p>
                      <p>Lime plaster walls</p>
                      <p>Local stone flooring</p>
                      <p>Timber inlays</p>
                    </Copy>
                  </div>
                  <div className="sample-space-hero-sub-col">
                    <Copy delay={0.2}>
                      <p>Natural Elements</p>
                      <p>Court planting</p>
                      <p>Daylight wells</p>
                      <p>Cross ventilation</p>
                    </Copy>
                  </div>
                </div>
              </div>
              <div className="sample-space-details-img">
                <img
                  src="/sample-space/sample-space-2.jpg"
                  alt="Colonnade House interiors and light"
                />
              </div>
              <Copy delay={0.2}>
                <h3>
                  Every choice in the house was led by how it would feel. The aim
                  was not only to frame views but to shape how sound, touch, and
                  warmth are sensed as you move from room to room.
                </h3>
              </Copy>
            </div>
          </div>
        </section>
        <CTAWindow
          img="/sample-space/next-project.jpg"
          header="Next Project"
          callout="Built for stillness and clarity"
          description="A study in restraint and resonance, this space invites quietude. Materials, light, and layout come together."
        />
      </div>
      <ConditionalFooter />
    </>
  );
};

export default page;
