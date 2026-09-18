import React from "react";
import { createRoot } from "react-dom/client";
import { ArrowUpRight, Check, Play, Sparkles } from "lucide-react";
import "./styles.css";

const skills = ["Digital Marketing", "Content", "Strategy"];

function ProofCard() {
  return (
    <div className="proof-card" aria-label="Sample PROOF profile">
      <div className="proof-card__top">
        <span className="eyebrow eyebrow--dark">PROOF PROFILE</span>
        <span className="status-pill"><span className="status-dot" /> Open to work</span>
      </div>

      <div className="proof-card__person">
        <div className="avatar" role="img" aria-label="Sample candidate portrait">
          <div className="avatar__shine" />
          <div className="avatar__head" />
          <div className="avatar__body" />
        </div>

        <div>
          <p className="proof-card__name">Amara Okafor</p>
          <p className="proof-card__role">Digital Marketing Strategist</p>
          <p className="proof-card__location">Lagos, Nigeria</p>
        </div>
      </div>

      <div className="video-preview">
        <div className="video-preview__portrait">
          <div className="video-preview__gradient" />
          <div className="video-preview__person">
            <div className="video-preview__head" />
            <div className="video-preview__torso" />
          </div>
        </div>
        <div className="video-preview__overlay">
          <button className="play-button" aria-label="Play proof video">
            <Play size={16} fill="currentColor" />
          </button>
          <span>60 sec Proof</span>
        </div>
      </div>

      <div className="proof-card__skills">
        {skills.map((skill) => <span key={skill}>{skill}</span>)}
      </div>

      <div className="proof-card__result">
        <div>
          <span className="result-label">Example result</span>
          <strong>+35% qualified leads</strong>
        </div>
        <ArrowUpRight size={18} />
      </div>
    </div>
  );
}

function App() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="site-shell">
      <header className="nav">
        <a className="brand" href="#" aria-label="PROOF home">PROOF<span>.</span></a>

        <nav className="nav__links" aria-label="Primary">
          <button onClick={() => scrollTo("how")}>How it works</button>
          <button onClick={() => scrollTo("talent")}>For talent</button>
          <button onClick={() => scrollTo("employers")}>For employers</button>
        </nav>

        <div className="nav__actions">
          <button className="button button--ghost" onClick={() => scrollTo("cta")}>Sign in</button>
          <button className="button button--dark" onClick={() => scrollTo("cta")}>Build my Proof</button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero__copy">
            <div className="hero__kicker"><Sparkles size={15} /> Skills should speak for themselves.</div>
            <h1>DON'T JUST<br /><span>TELL THEM.</span><br />SHOW THEM.</h1>
            <p className="hero__lead">
              Your CV tells employers where you've been. Your Proof shows them what you can do.
            </p>

            <div className="hero__buttons">
              <button className="button button--lime button--large" onClick={() => scrollTo("cta")}>
                Build my Proof <ArrowUpRight size={18} />
              </button>
              <button className="button button--outline button--large" onClick={() => scrollTo("employers")}>
                I'm hiring talent
              </button>
            </div>

            <div className="hero__trust">
              <div className="avatar-stack" aria-hidden="true">
                <span>AO</span><span>TM</span><span>KA</span><span>+</span>
              </div>
              <p><strong>Show your work.</strong><br />Let the right people find you.</p>
            </div>
          </div>

          <div className="hero__visual">
            <div className="visual-glow" />
            <div className="floating-tag floating-tag--one">Real work</div>
            <div className="floating-tag floating-tag--two">Skills first</div>
            <ProofCard />
          </div>
        </section>

        <section className="statement">
          <div className="statement__label">THE PROBLEM</div>
          <div>
            <h2>A CV can tell your story.<br /><em>It can't show all of it.</em></h2>
            <p>
              Communication. Creativity. Thinking. Practical ability. The work you have
              actually done. PROOF puts those signals in one place.
            </p>
          </div>
        </section>

        <section id="how" className="how section">
          <div className="section-head">
            <span className="eyebrow">HOW IT WORKS</span>
            <h2>Turn your experience into evidence.</h2>
          </div>

          <div className="steps">
            {[
              ["01", "CREATE", "Build a profile that feels like you."],
              ["02", "SHOW", "Record your Proof and add the work."],
              ["03", "DISCOVER", "Find opportunities or get discovered."],
              ["04", "GET HIRED", "Connect with people who need your skills."]
            ].map(([number, title, text]) => (
              <article className="step" key={number}>
                <span className="step__number">{number}</span>
                <div className="step__body">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                <ArrowUpRight className="step__arrow" size={20} />
              </article>
            ))}
          </div>
        </section>

        <section id="talent" className="split-section section">
          <div className="split-copy">
            <span className="eyebrow">FOR TALENT</span>
            <h2>Your experience is bigger than your CV.</h2>
            <p>
              Put your skills, work, results and personality in one shareable profile.
              Make it easier for the right opportunities to understand you.
            </p>
            <button className="text-link" onClick={() => scrollTo("cta")}>Build my Proof <ArrowUpRight size={18} /></button>
          </div>

          <div className="mini-profile">
            <div className="mini-profile__top">
              <span>YOUR PROOF</span>
              <span className="mini-profile__live"><span className="status-dot" /> Live</span>
            </div>
            <div className="mini-profile__content">
              <div className="mini-avatar">DK</div>
              <div>
                <strong>Daniel K.</strong>
                <p>Brand &amp; Growth</p>
              </div>
            </div>
            <div className="mini-video">
              <Play size={18} fill="currentColor" />
              <span>01:00</span>
            </div>
            <div className="mini-stats">
              <div><strong>08</strong><span>skills</span></div>
              <div><strong>12</strong><span>projects</span></div>
              <div><strong>07</strong><span>results</span></div>
            </div>
          </div>
        </section>

        <section id="employers" className="employer-band">
          <div className="employer-band__inner">
            <div>
              <span className="eyebrow eyebrow--light">FOR EMPLOYERS</span>
              <h2>See what candidates can<br /><span>actually do.</span></h2>
              <p>
                Discover talent through skills, experience, work and Proof — not just
                a stack of CVs.
              </p>
              <button className="button button--lime button--large" onClick={() => scrollTo("cta")}>
                Find talent <ArrowUpRight size={18} />
              </button>
            </div>

            <div className="employer-list">
              <div className="employer-list__head">
                <span>Talent you can understand</span>
                <span>View all</span>
              </div>
              {[
                ["MJ", "Michael James", "Product Designer", "UI/UX • Figma"],
                ["TS", "Tolu Samuel", "Video Editor", "Content • Storytelling"],
                ["NA", "Nneka Ada", "Growth Marketer", "Growth • Paid Media"]
              ].map(([initials, name, role, skillsText]) => (
                <div className="talent-row" key={name}>
                  <div className="row-avatar">{initials}</div>
                  <div className="talent-row__meta">
                    <strong>{name}</strong>
                    <span>{role}</span>
                  </div>
                  <span className="talent-row__skills">{skillsText}</span>
                  <span className="talent-row__check"><Check size={15} /></span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="proof-promise section">
          <div className="promise-card">
            <span className="promise-card__mark">“</span>
            <div>
              <span className="eyebrow">THE PROOF PROMISE</span>
              <h2>Show the person.<br />Show the work.<br /><em>Show the possibility.</em></h2>
            </div>
          </div>
        </section>

        <section id="cta" className="cta section">
          <div className="cta__inner">
            <span className="eyebrow">START HERE</span>
            <h2>What can you do?</h2>
            <p>Don't just put it on your CV. Prove it.</p>
            <div className="cta__buttons">
              <button className="button button--dark button--large">Build my Proof <ArrowUpRight size={18} /></button>
              <button className="button button--outline button--large">I'm hiring talent</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <a className="brand" href="#">PROOF<span>.</span></a>
          <p>People. Skills. Opportunities.</p>
        </div>
        <div className="footer__links">
          <a href="#talent">For talent</a>
          <a href="#employers">For employers</a>
          <a href="#how">How it works</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
        <span className="footer__copy">© 2026 PROOF — Demo</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
