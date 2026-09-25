import React, { useEffect } from "react";
import { ArrowRight, Check, CalendarDays, MessageCircle, MapPin, Clock3, Zap } from "lucide-react";
import "./tiktok-ads.css";

const REGISTRATION_LINK = "https://selar.com/998n289191";

const learnItems = [
  "Set up TikTok Ads Manager the right way",
  "Find and target the people most likely to buy",
  "Build TikTok creatives that stop the scroll",
  "Launch campaigns without wasting budget",
  "Read campaign data and know what to fix",
  "Turn views and clicks into real enquiries and sales",
];

const fitItems = [
  "Business owners who want customers, not just views",
  "Marketers and social media managers",
  "Creators who want to monetize attention",
  "Startups and growing brands ready to advertise",
];

function openRegistration() {
  window.open(REGISTRATION_LINK, "_blank", "noopener,noreferrer");
}

export default function TikTokAdsLanding() {
  useEffect(() => {
    document.title = "TikTok Ads Training | Lagos Digital Marketing Academy";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Learn how to run TikTok ads that convert at a 100% practical 2-day training with Lagos Digital Marketing Academy."
      );
    }
  }, []);

  return (
    <div className="tiktok-page">
      <div className="ttk-topbar">
        <span className="ttk-live-dot" />
        <span>2-DAY PRACTICAL TRAINING • OCTOBER 2–3, 2026</span>
      </div>

      <nav className="ttk-nav">
        <a href="#top" className="ttk-brand" aria-label="Lagos Digital Marketing Academy">
          <img className="ttk-logo-image" src="/assets/ldma-logo.png" alt="Lagos Digital Marketing Academy" />
        </a>
        <button className="ttk-nav-cta" onClick={openRegistration}>
          Reserve My Seat <ArrowRight size={17} />
        </button>
      </nav>

      <main id="top">
        <section className="ttk-hero">
          <div className="ttk-hero-inner">
            <div className="ttk-hero-copy">
              <div className="ttk-eyebrow">TIKTOK ADS MASTERCLASS</div>
              <h1>STOP BOOSTING.<br /><span>START CONVERTING.</span></h1>
              <p className="ttk-hero-lead">
                Learn how to run TikTok ads that reach the right people, hold attention and drive real enquiries, leads and sales.
              </p>

              <div className="ttk-hero-proof">
                <div className="ttk-proof-item"><Zap size={16} /> 100% practical</div>
                <div className="ttk-proof-item"><CalendarDays size={16} /> Friday + Saturday</div>
                <div className="ttk-proof-item"><MessageCircle size={16} /> Online registration</div>
              </div>

              <button className="ttk-primary-cta" onClick={openRegistration}>
                <span>JOIN THE TRAINING</span>
                <ArrowRight size={20} />
              </button>

              <p className="ttk-microcopy">Limited early-bird slots. Reserve your seat online.</p>
            </div>

            <div className="ttk-ad-card">
              <div className="ttk-ad-card-top">
                <span className="ttk-ad-dot" />
                <span>YOUR TIKTOK AD</span>
                <span className="ttk-ad-time">43s</span>
              </div>
              <div className="ttk-ad-frame ttk-video-frame">
                <video
                  className="ttk-ad-video"
                  src="/assets/tiktok-training-ad.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="metadata"
                  aria-label="TikTok Ads training promotional video"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="ttk-split">
          <div>
            <span className="ttk-section-kicker">THE REAL PROBLEM</span>
            <h2>Getting views is not the same as getting customers.</h2>
          </div>
          <div className="ttk-split-copy">
            <p>
              TikTok can put your business in front of thousands of people. But attention alone does not pay the bills.
            </p>
            <p>
              You need the right audience, the right creative, the right campaign structure and a clear path from click to customer.
            </p>
          </div>
        </section>

        <section className="ttk-dark-section">
          <div className="ttk-container">
            <div className="ttk-section-heading">
              <span className="ttk-section-kicker ttk-kicker-light">WHAT YOU WILL LEARN</span>
              <h2>Turn TikTok attention into business.</h2>
              <p>No theory-only class. You will learn by doing.</p>
            </div>

            <div className="ttk-learn-grid">
              {learnItems.map((item, index) => (
                <div className="ttk-learn-card" key={item}>
                  <span className="ttk-number">0{index + 1}</span>
                  <Check size={18} />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ttk-schedule">
          <div className="ttk-container">
            <div className="ttk-section-heading">
              <span className="ttk-section-kicker">TWO DAYS. ONE OUTCOME.</span>
              <h2>Learn it Friday. Apply it Saturday.</h2>
            </div>

            <div className="ttk-day-grid">
              <article className="ttk-day-card ttk-day-virtual">
                <div className="ttk-day-top">
                  <span className="ttk-day-label">DAY 01</span>
                  <span className="ttk-format">VIRTUAL</span>
                </div>
                <div className="ttk-date">FRI · 02 OCT 2026</div>
                <h3>Learn the system.</h3>
                <p>
                  Build your foundation, understand TikTok Ads Manager, audience targeting, campaign structure and the creative principles that drive action.
                </p>
                <div className="ttk-day-meta"><Clock3 size={17} /> Exact time shared with registered participants</div>
              </article>

              <article className="ttk-day-card ttk-day-virtual">
                <div className="ttk-day-top">
                  <span className="ttk-day-label">DAY 02</span>
                  <span className="ttk-format">VIRTUAL</span>
                </div>
                <div className="ttk-date">SAT · 03 OCT 2026</div>
                <h3>Build and launch.</h3>
                <p>
                  Build campaigns hands-on from wherever you are. Practical exercises, implementation and optimisation with live guidance.
                </p>
                <div className="ttk-day-meta"><Clock3 size={17} /> Live virtual training</div>
              </article>
            </div>

            <div className="ttk-practical-banner">
              <strong>100% PRACTICAL.</strong>
              <span>You will not just watch someone run an ad. You will understand how to do it yourself.</span>
            </div>
          </div>
        </section>

        <section className="ttk-fit">
          <div className="ttk-container ttk-fit-grid">
            <div>
              <span className="ttk-section-kicker">WHO THIS IS FOR</span>
              <h2>Come with a business, brand or idea you want to grow.</h2>
              <p className="ttk-muted">This is built for people who want to turn TikTok into a practical acquisition channel.</p>
            </div>

            <div className="ttk-fit-list">
              {fitItems.map((item) => (
                <div className="ttk-fit-row" key={item}>
                  <span className="ttk-check"><Check size={17} /></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ttk-final">
          <div className="ttk-final-inner">
            <span className="ttk-section-kicker ttk-kicker-light">YOUR NEXT CUSTOMER COULD BE ON TIKTOK</span>
            <h2>Don't leave your sales to chance.</h2>
            <p>Learn the strategy. Build the campaign. Know what to do next.</p>
            <button className="ttk-primary-cta ttk-primary-cta-light" onClick={openRegistration}>
              <span>RESERVE MY SEAT</span>
              <ArrowRight size={20} />
            </button>
            <div className="ttk-final-date">
              <span><CalendarDays size={17} /> 2–3 October 2026</span>
              <span><MessageCircle size={17} /> Online registration</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="ttk-footer">
        <div>
          <div className="ttk-footer-brand">Lagos Digital Marketing Academy</div>
          <p>Practical digital marketing training for people who want results.</p>
        </div>
        <div className="ttk-footer-contact">
          <span>0708 853 7842</span>
          <span>0706 347 7432</span>
        </div>
      </footer>

      <div className="ttk-mobile-cta">
        <button onClick={openRegistration}><MessageCircle size={19} /> Reserve My Seat</button>
      </div>
    </div>
  );
}
