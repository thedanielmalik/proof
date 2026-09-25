import React, { useEffect } from "react";
import { ArrowRight, Check, CalendarDays, BookOpen, Video, Award, Target, BarChart3, Megaphone, Users, Wallet, Settings2, PlayCircle, Laptop, Zap } from "lucide-react";
import "./tiktok-ads.css";

const REGISTRATION_LINK = "https://selar.com/998n289191";

const learnItems = [
  "Understand how TikTok advertising works and where it fits into your marketing strategy",
  "Set up and navigate TikTok Ads Manager correctly",
  "Define the right audience and build effective targeting",
  "Create ad campaigns, choose objectives and structure your budget",
  "Create TikTok ads and creatives designed to stop the scroll",
  "Track results, read campaign data and identify what needs fixing",
  "Optimise campaigns instead of simply boosting posts",
  "Use TikTok ads to generate leads, enquiries, sales and other business outcomes",
];

const outcomes = [
  ["01", "Plan campaigns with purpose", "Move from random boosting to campaigns built around clear business objectives."],
  ["02", "Understand your audience", "Know who you are trying to reach and how to approach targeting."],
  ["03", "Build ads properly", "Understand the relationship between your creative, offer, audience and campaign setup."],
  ["04", "Control your budget", "Learn how campaign budgets work and how to make more informed spending decisions."],
  ["05", "Read your results", "Understand the numbers behind your campaigns and spot what needs attention."],
  ["06", "Optimise for better results", "Know the practical steps to take when an ad is not performing as expected."],
];

const fitItems = [
  "Business owners and entrepreneurs",
  "Digital marketers and social media managers",
  "Content creators and personal brands",
  "Freelancers and marketing consultants",
  "Startups and growing businesses",
  "Beginners who want to learn TikTok advertising properly",
];

const inclusions = [
  [BookOpen, "TikTok Ads Book", "Receive the practical book after payment so you can read and prepare before the class."],
  [Laptop, "Live Virtual Classes", "Two thorough days of live, practical training — not prerecorded lessons."],
  [Video, "Full Class Recording", "Receive the complete training recording after the class for future reference."],
  [Award, "Certificate of Attendance", "Receive a certificate after completing the training."],
];

function openRegistration() {
  window.open(REGISTRATION_LINK, "_blank", "noopener,noreferrer");
}

export default function TikTokAdsLanding() {
  useEffect(() => {
    document.title = "TikTok Ads Masterclass | Lagos Digital Marketing Academy";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "A 2-day Virtual Plus TikTok Ads Masterclass by Lagos Digital Marketing Academy. Learn how to plan, create, launch, manage and optimise TikTok advertising campaigns."
      );
    }
  }, []);

  return (
    <div className="tiktok-page">
      <div className="ttk-topbar">
        <span className="ttk-live-dot" />
        <span>2-DAY VIRTUAL PLUS TRAINING • OCTOBER 2–3, 2026</span>
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
              <div className="ttk-eyebrow">TIKTOK ADS MASTERCLASS · VIRTUAL PLUS</div>
              <h1>STOP BOOSTING.<br /><span>START CONVERTING.</span></h1>
              <p className="ttk-hero-lead">
                A thorough, live and practical 2-day training that teaches you how to plan, create, launch, manage and optimise TikTok advertising campaigns for real business goals.
              </p>

              <div className="ttk-hero-proof">
                <div className="ttk-proof-item"><Zap size={16} /> 100% practical</div>
                <div className="ttk-proof-item"><CalendarDays size={16} /> 2–3 October 2026</div>
                <div className="ttk-proof-item"><Laptop size={16} /> 100% virtual</div>
              </div>

              <button className="ttk-primary-cta" onClick={openRegistration}>
                <span>RESERVE MY SEAT</span>
                <ArrowRight size={20} />
              </button>

              <p className="ttk-microcopy">Early Bird: ₦10,000 until 29th September 2026.</p>
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
            <span className="ttk-section-kicker">WHAT IS THIS TRAINING?</span>
            <h2>Learn TikTok Ads as a marketing system — not a boost button.</h2>
          </div>
          <div className="ttk-split-copy">
            <p>
              This is a 2-day Virtual Plus TikTok Ads Masterclass built for people who want to understand what actually goes into running paid campaigns on TikTok.
            </p>
            <p>
              You will learn the strategy behind the campaign, the technical setup inside Ads Manager, how to create effective ads, how to work with audiences and budgets, and how to read and optimise your results.
            </p>
            <p>
              It is live, thorough and practical. You are not simply watching videos — you are learning the process you can apply to your own business, brand or clients.
            </p>
          </div>
        </section>

        <section className="ttk-dark-section">
          <div className="ttk-container">
            <div className="ttk-section-heading">
              <span className="ttk-section-kicker ttk-kicker-light">WHAT YOU WILL LEARN</span>
              <h2>From campaign idea to optimisation.</h2>
              <p>We take you through the key parts of TikTok advertising in a practical, structured way.</p>
            </div>

            <div className="ttk-learn-grid ttk-learn-grid-wide">
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

        <section className="ttk-outcomes">
          <div className="ttk-container">
            <div className="ttk-section-heading ttk-section-heading-dark">
              <span className="ttk-section-kicker">WHAT YOU WILL GAIN</span>
              <h2>You leave with a clearer way to approach TikTok advertising.</h2>
            </div>

            <div className="ttk-outcome-grid">
              {outcomes.map(([number, title, text]) => (
                <article className="ttk-outcome-card" key={number}>
                  <span className="ttk-outcome-number">{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ttk-curriculum">
          <div className="ttk-container">
            <div className="ttk-section-heading">
              <span className="ttk-section-kicker">THE 2-DAY EXPERIENCE</span>
              <h2>Thorough enough to understand. Practical enough to apply.</h2>
            </div>

            <div className="ttk-day-grid">
              <article className="ttk-day-card ttk-day-virtual">
                <div className="ttk-day-top">
                  <span className="ttk-day-label">DAY 01</span>
                  <span className="ttk-format">VIRTUAL</span>
                </div>
                <div className="ttk-date">FRI · 02 OCT 2026</div>
                <h3>Understand &amp; build.</h3>
                <p>
                  Understand the TikTok advertising ecosystem, Ads Manager, campaign objectives, audience targeting, creative strategy, offers, campaign structure and budgeting.
                </p>
                <div className="ttk-topic-list">
                  <span><Target size={15} /> Strategy &amp; objectives</span>
                  <span><Users size={15} /> Audience &amp; targeting</span>
                  <span><Megaphone size={15} /> Creative &amp; ad setup</span>
                  <span><Wallet size={15} /> Budget &amp; campaign structure</span>
                </div>
              </article>

              <article className="ttk-day-card ttk-day-virtual">
                <div className="ttk-day-top">
                  <span className="ttk-day-label">DAY 02</span>
                  <span className="ttk-format">VIRTUAL</span>
                </div>
                <div className="ttk-date">SAT · 03 OCT 2026</div>
                <h3>Launch, read &amp; optimise.</h3>
                <p>
                  Put the learning into practice. Work through campaign setup, measurement, performance analysis, troubleshooting and optimisation so you know what to do after launch.
                </p>
                <div className="ttk-topic-list">
                  <span><PlayCircle size={15} /> Campaign launch</span>
                  <span><BarChart3 size={15} /> Metrics &amp; reporting</span>
                  <span><Settings2 size={15} /> Optimisation</span>
                  <span><Zap size={15} /> Practical implementation</span>
                </div>
              </article>
            </div>

            <div className="ttk-practical-banner">
              <strong>100% PRACTICAL.</strong>
              <span>Bring your questions, your business and your marketing goals. Learn the process and understand how to apply it.</span>
            </div>
          </div>
        </section>

        <section className="ttk-includes">
          <div className="ttk-container">
            <div className="ttk-section-heading ttk-section-heading-dark">
              <span className="ttk-section-kicker">VIRTUAL PLUS</span>
              <h2>More than a live class.</h2>
              <p>Your registration comes with preparation material and resources to help you get more from the training.</p>
            </div>

            <div className="ttk-includes-grid">
              {inclusions.map(([Icon, title, text]) => (
                <article className="ttk-include-card" key={title}>
                  <div className="ttk-include-icon"><Icon size={21} /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>

            <div className="ttk-access-note">
              <div>
                <strong>How access works</strong>
                <p>Your TikTok Ads Book is sent after payment. Your class access link is sent one day before the training. After the training, you receive the full class recording and certificate of attendance.</p>
              </div>
              <CalendarDays size={26} />
            </div>
          </div>
        </section>

        <section className="ttk-fit">
          <div className="ttk-container ttk-fit-grid">
            <div>
              <span className="ttk-section-kicker">WHO SHOULD ATTEND?</span>
              <h2>If you want to use TikTok for business, this is for you.</h2>
              <p className="ttk-muted">You do not need to be an advertising expert. Come ready to learn, participate and apply what you are taught.</p>
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

        <section className="ttk-investment">
          <div className="ttk-container">
            <div className="ttk-investment-inner">
              <div>
                <span className="ttk-section-kicker">INVESTMENT</span>
                <h2>Reserve your seat before the Early Bird closes.</h2>
                <p>Early Bird is ₦10,000. The normal fee is ₦15,000.</p>
              </div>
              <div className="ttk-price-box">
                <span>EARLY BIRD</span>
                <strong>₦10,000</strong>
                <del>₦15,000</del>
                <small>Ends 29th September 2026</small>
                <button className="ttk-primary-cta" onClick={openRegistration}>
                  RESERVE MY SEAT <ArrowRight size={19} />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="ttk-final">
          <div className="ttk-final-inner">
            <span className="ttk-section-kicker ttk-kicker-light">TIKTOK ADS MASTERCLASS · VIRTUAL PLUS</span>
            <h2>Stop boosting blindly. Start advertising with a plan.</h2>
            <p>2 days. Live virtual training. Practical learning. Book. Recording. Certificate.</p>
            <button className="ttk-primary-cta ttk-primary-cta-light" onClick={openRegistration}>
              <span>RESERVE MY SEAT</span>
              <ArrowRight size={20} />
            </button>
            <div className="ttk-final-date">
              <span><CalendarDays size={17} /> Friday 2nd – Saturday 3rd October 2026</span>
              <span><Laptop size={17} /> 100% Virtual</span>
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
        <button onClick={openRegistration}><Zap size={19} /> Reserve My Seat</button>
      </div>
    </div>
  );
}
