import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleStop,
  Play,
  Search,
  Sparkles,
  Video,
  X,
  MapPin,
  BriefcaseBusiness,
  CalendarDays,
  ArrowRight,
  SlidersHorizontal,
  Building2,
  Plus,
  UsersRound,
  Eye,
  Pencil,
  Globe2,
  Upload,
  MessageCircle,

} from "lucide-react";
import "./styles.css";
import { supabase } from "./lib/supabase";
import AdminPage from "./AdminPage";

const demoSkills = ["Digital Marketing", "Content", "Strategy"];

const onboardingSteps = [
  { key: "about", label: "About you" },
  { key: "role", label: "What you do" },
  { key: "skills", label: "Skills" },
  { key: "experience", label: "Experience" },
  { key: "education", label: "Education" },
  { key: "work", label: "Your work" },
  { key: "proof", label: "Your Proof" },
  { key: "preview", label: "Preview" },
];

const suggestedRoles = [
  "Digital Marketing Strategist",
  "Social Media Manager",
  "Content Creator",
  "Growth Marketer",
  "Copywriter",
  "Brand Strategist",
  "Product Designer",
  "Video Editor",
  "Web Developer",
];

function Button({ children, className = "", ...props }) {
  return (
    <button className={`button ${className}`} {...props}>
      {children}
    </button>
  );
}

function ProofCard() {
  return (
    <div className="proof-card" aria-label="Sample PROOF profile">
      <div className="proof-card__top">
        <span className="eyebrow eyebrow--dark">EXAMPLE PROOF</span>
        <span className="status-pill"><span className="status-dot" /> Open to work</span>
      </div>

      <div className="proof-card__person">
        <div className="avatar" aria-hidden="true">
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
        <div className="video-preview__person" aria-hidden="true">
          <div className="video-preview__head" />
          <div className="video-preview__torso" />
        </div>
        <div className="video-preview__overlay">
          <button className="play-button" aria-label="Play example Proof video">
            <Play size={16} fill="currentColor" />
          </button>
          <span>60 sec Proof</span>
        </div>
      </div>

      <div className="proof-card__skills">
        {demoSkills.map((skill) => <span key={skill}>{skill}</span>)}
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

function LandingPage({ onStart, onHire }) {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="site-shell">
      <header className="nav">
        <a className="brand" href="#" aria-label="PROOF home">PROOF<span>.</span></a>
        <nav className="nav__links" aria-label="Primary">
          <button onClick={() => scrollTo("how")}>How it works</button>
          <button onClick={() => scrollTo("talent")}>For talent</button>
          <button onClick={() => scrollTo("employers")}>For employers</button>
          <button onClick={() => navigate("/jobs")}>Jobs</button>
          <button onClick={() => navigate("/founding-100")}>Founding 100</button>
        </nav>
        <div className="nav__actions">
          <button className="button button--ghost" onClick={onStart}>Sign in</button>
          <button className="button button--dark" onClick={onStart}>Build my Proof</button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero__copy">
            <div className="hero__kicker"><Sparkles size={15} /> Skills should speak for themselves.</div>
            <h1>DON'T JUST<br /><span>TELL THEM.</span><br />SHOW THEM.</h1>
            <p className="hero__lead">Your CV tells employers where you've been. Your Proof shows them what you can do.</p>
            <div className="hero__buttons">
              <Button className="button--lime button--large" onClick={onStart}>Build my Proof <ArrowUpRight size={18} /></Button>
              <Button className="button--outline button--large" onClick={onHire}>I'm hiring talent</Button>
            </div>
            <div className="hero__trust">
              <div className="avatar-stack" aria-hidden="true"><span>AO</span><span>TM</span><span>KA</span><span>+</span></div>
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
            <p>Communication. Creativity. Thinking. Practical ability. The work you have actually done. PROOF puts those signals in one place.</p>
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
                <div className="step__body"><h3>{title}</h3><p>{text}</p></div>
                <ArrowUpRight className="step__arrow" size={20} />
              </article>
            ))}
          </div>
        </section>

        <section id="talent" className="split-section section">
          <div className="split-copy">
            <span className="eyebrow">FOR TALENT</span>
            <h2>Your experience is bigger than your CV.</h2>
            <p>Put your skills, work, results and personality in one shareable profile. Make it easier for the right opportunities to understand you.</p>
            <button className="text-link" onClick={onStart}>Build my Proof <ArrowUpRight size={18} /></button>
          </div>
          <div className="mini-profile">
            <div className="mini-profile__top"><span>YOUR PROOF</span><span className="mini-profile__live"><span className="status-dot" /> Live</span></div>
            <div className="mini-profile__content"><div className="mini-avatar">DK</div><div><strong>Daniel K.</strong><p>Brand &amp; Growth</p></div></div>
            <div className="mini-video"><Play size={18} fill="currentColor" /><span>01:00</span></div>
            <div className="mini-stats"><div><strong>08</strong><span>skills</span></div><div><strong>12</strong><span>projects</span></div><div><strong>07</strong><span>results</span></div></div>
          </div>
        </section>

        <section id="employers" className="employer-band">
          <div className="employer-band__inner">
            <div>
              <span className="eyebrow eyebrow--light">FOR EMPLOYERS</span>
              <h2>See what candidates can<br /><span>actually do.</span></h2>
              <p>Discover talent through skills, experience, work and Proof — not just a stack of CVs.</p>
              <Button className="button--lime button--large" onClick={onHire}>Find talent <ArrowUpRight size={18} /></Button>
            </div>
            <div className="employer-list">
              <div className="employer-list__head"><span>Example talent profiles</span><span>Preview</span></div>
              {[
                ["MJ", "Michael James", "Product Designer", "UI/UX • Figma"],
                ["TS", "Tolu Samuel", "Video Editor", "Content • Storytelling"],
                ["NA", "Nneka Ada", "Growth Marketer", "Growth • Paid Media"]
              ].map(([initials, name, role, skillsText]) => (
                <div className="talent-row" key={name}>
                  <div className="row-avatar">{initials}</div>
                  <div className="talent-row__meta"><strong>{name}</strong><span>{role}</span></div>
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
            <div><span className="eyebrow">THE PROOF PROMISE</span><h2>Show the person.<br />Show the work.<br /><em>Show the possibility.</em></h2></div>
          </div>
        </section>

        <section id="cta" className="cta section">
          <div className="cta__inner">
            <span className="eyebrow">START HERE</span>
            <h2>What can you do?</h2>
            <p>Don't just put it on your CV. Prove it.</p>
            <div className="cta__buttons">
              <Button className="button--dark button--large" onClick={onStart}>Build my Proof <ArrowUpRight size={18} /></Button>
              <button className="button button--outline button--large" onClick={onHire}>I'm hiring talent</button>
              <button className="button button--ghost button--large" onClick={() => navigate("/founding-100")}>Join the Founding 100 <ArrowUpRight size={18} /></button>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div><a className="brand" href="#">PROOF<span>.</span></a><p>People. Skills. Opportunities.</p></div>
        <div className="footer__links"><a href="#talent">For talent</a><a href="#employers">For employers</a><a href="#how">How it works</a><a href="#">Privacy</a><a href="#">Terms</a></div>
        <span className="footer__copy">© 2026 PROOF — Private beta</span>
      </footer>
    </div>
  );
}

function Founding100Page({ onBack, onAuth }) {
  const [role, setRole] = useState("talent");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [focus, setFocus] = useState("");
  const [company, setCompany] = useState("");
  const [notes, setNotes] = useState("");
  const [source, setSource] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utmSource = params.get("utm_source");
    const utmCampaign = params.get("utm_campaign");
    const referrer = document.referrer;
    setSource([
      utmSource && "utm_source=" + utmSource,
      utmCampaign && "utm_campaign=" + utmCampaign,
      referrer && "referrer=" + referrer
    ].filter(Boolean).join("&"));
  }, []);

  const submit = async (event) => {
    event.preventDefault();
    if (!supabase) {
      setError("PROOF is not connected to its database yet.");
      return;
    }

    const cleanName = fullName.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanLocation = location.trim();
    const cleanFocus = focus.trim();
    const cleanCompany = company.trim();
    const cleanNotes = notes.trim();

    if (cleanName.length < 2 || cleanEmail.length < 5 || !cleanFocus || (role === "employer" && !cleanCompany)) {
      setError(role === "talent"
        ? "Add your name, email and primary area of work."
        : "Add your name, email, company and what you’re hiring for.");
      return;
    }

    setSubmitting(true);
    setError("");

    const { error: insertError } = await supabase.from("founding_100_signups").insert({
      full_name: cleanName,
      email: cleanEmail,
      role,
      location: cleanLocation || null,
      focus: cleanFocus,
      company: cleanCompany || null,
      notes: cleanNotes || null,
      source: source || null,
    });

    if (insertError) {
      setSubmitting(false);
      if (insertError.code === "23505") {
        window.localStorage.setItem("proof-beta-role", role);
        window.localStorage.setItem("proof-beta-email", cleanEmail);
        setError("That email is already on the Founding 100 list.");
        setSubmitted(true);
        return;
      }
      setError(insertError.message || "We couldn't save your spot. Please try again.");
      return;
    }

    window.localStorage.setItem("proof-beta-role", role);
    window.localStorage.setItem("proof-beta-email", cleanEmail);
    setSubmitting(false);
    setSubmitted(true);
  };

  const continueToProduct = () => {
    window.localStorage.setItem("proof-beta-role", role);
    if (email.trim()) window.localStorage.setItem("proof-beta-email", email.trim().toLowerCase());
    onAuth();
  };

  if (submitted) {
    return (
      <div className="beta-shell">
        <header className="onboarding-nav beta-nav">
          <button className="back-home" onClick={onBack}><ArrowLeft size={16} /> Back</button>
          <a className="brand" href="#" onClick={(e) => { e.preventDefault(); onBack(); }}>PROOF<span>.</span></a>
          <span className="save-state">FOUNDING 100</span>
        </header>
        <main className="beta-success-page">
          <div className="beta-success-card">
            <div className="beta-success-mark"><Check size={28} /></div>
            <span className="eyebrow">YOU’RE ON THE LIST</span>
            <h1>Welcome to the first 100.</h1>
            <p>{role === "talent"
              ? "Your place in the Founding 100 is recorded. Now build the Proof people will discover."
              : "Your place in the Founding 100 is recorded. Now set up your hiring workspace and bring your first real role into PROOF."}</p>
            <div className="beta-success-actions">
              <Button className="button--dark button--large" onClick={continueToProduct}>
                {role === "talent" ? "Build my Proof" : "Create hiring account"} <ArrowUpRight size={18} />
              </Button>
              <button className="button button--outline button--large" onClick={onBack}>Back to PROOF</button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="beta-shell">
      <header className="onboarding-nav beta-nav">
        <button className="back-home" onClick={onBack}><ArrowLeft size={16} /> Back</button>
        <a className="brand" href="#" onClick={(e) => { e.preventDefault(); onBack(); }}>PROOF<span>.</span></a>
        <span className="save-state">FOUNDING 100</span>
      </header>

      <main className="beta-page">
        <section className="beta-hero">
          <div className="beta-hero__copy">
            <span className="eyebrow">FOUNDING 100 · PRIVATE BETA</span>
            <h1>Be among the first people to put proof before paper.</h1>
            <p>We’re opening PROOF to a small first group of Nigerian talent and employers. Join early, build your profile or hiring workspace, and help shape what comes next.</p>
            <div className="beta-points">
              <div><span>01</span><strong>Build</strong><p>Create a profile built around skills, work and Proof.</p></div>
              <div><span>02</span><strong>Discover</strong><p>Get in front of people looking for what you can do.</p></div>
              <div><span>03</span><strong>Shape</strong><p>Share feedback while the product is still being shaped.</p></div>
            </div>
          </div>

          <form className="beta-form" onSubmit={submit}>
            <div className="beta-form__top">
              <span className="eyebrow">JOIN THE BETA</span>
              <h2>Save my spot.</h2>
              <p>Tell us a little about who you are so we can put you in the right starting lane.</p>
            </div>

            <div className="choice-grid beta-role-grid">
              <button type="button" className={role === "talent" ? "choice is-selected" : "choice"} onClick={() => setRole("talent")}>I’m talent <span>Show what I can do</span></button>
              <button type="button" className={role === "employer" ? "choice is-selected" : "choice"} onClick={() => setRole("employer")}>I’m hiring <span>Find people who can do it</span></button>
            </div>

            <div className="form-grid">
              <label>Full name<input required maxLength="120" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Your name" /></label>
              <label>Email<input required type="email" maxLength="254" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" /></label>
              <label>Location<input maxLength="120" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="e.g. Lagos, Nigeria" /></label>
              {role === "talent" ? (
                <label>What do you do?<input required maxLength="120" value={focus} onChange={(e) => setFocus(e.target.value)} placeholder="e.g. Digital Marketing" /></label>
              ) : (
                <label>What are you hiring for?<input required maxLength="120" value={focus} onChange={(e) => setFocus(e.target.value)} placeholder="e.g. Product Design" /></label>
              )}
              {role === "employer" && <label className="full">Company<input required maxLength="160" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="e.g. Wawo Hub" /></label>}
              <label className="full">{role === "talent" ? "Anything else we should know?" : "What kind of talent are you looking for?"}<textarea rows="4" maxLength="1200" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder={role === "talent" ? "Career switcher, self-taught, creator, specialist, etc." : "A short description of the kind of work you need help with."} /></label>
            </div>

            {error && <div className="error-banner">{error}</div>}

            <Button className="button--lime button--large beta-submit" disabled={submitting}>
              {submitting ? "Saving your spot..." : "Join the Founding 100"} <ArrowUpRight size={18} />
            </Button>
            <p className="beta-form-note">Private beta. Your details are used to contact you about PROOF and the beta experience.</p>
          </form>
        </section>
      </main>
    </div>
  );
}

function StepHeader({ stepIndex }) {
  const step = onboardingSteps[stepIndex];
  return (
    <div className="onboarding-head">
      <div>
        <span className="eyebrow">BUILD MY PROOF</span>
        <h1>{step.label}</h1>
      </div>
      <span className="onboarding-count">{String(stepIndex + 1).padStart(2, "0")} / {String(onboardingSteps.length).padStart(2, "0")}</span>
    </div>
  );
}

function ProgressBar({ stepIndex }) {
  return (
    <div className="progress-track" aria-label={`Step ${stepIndex + 1} of ${onboardingSteps.length}`}>
      {onboardingSteps.map((step, index) => (
        <span key={step.key} className={index <= stepIndex ? "progress-segment is-active" : "progress-segment"} />
      ))}
    </div>
  );
}


function AuthScreen({ onAuthenticated, onExit }) {
  const [mode, setMode] = useState("signup");
  const [name, setName] = useState("");
  const [email, setEmail] = useState(() => window.localStorage.getItem("proof-beta-email") || "");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(() => window.localStorage.getItem("proof-beta-role") || "talent");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const submit = async (event) => {
    event.preventDefault();
    setBusy(true);
    setError("");
    setMessage("");

    try {
      if (!supabase) throw new Error("Supabase is not configured. Add the environment variables from .env.example.");

      if (mode === "signup") {
        const { data, error: signUpError } = await supabase.auth.signUp({
          email,
          password,
          options: { data: { full_name: name, role } },
        });
        if (signUpError) throw signUpError;

        if (data.session) {
          await supabase.from("profiles").update({ role, name }).eq("id", data.user.id);
          onAuthenticated(data.user, role);
        } else {
          setMessage("Account created. Check your email to confirm your account, then sign in.");
          setMode("signin");
        }
      } else {
        const { data, error: signInError } = await supabase.auth.signInWithPassword({ email, password });
        if (signInError) throw signInError;
        const { data: profileData } = await supabase.from("profiles").select("role").eq("id", data.user.id).maybeSingle();
        onAuthenticated(data.user, profileData?.role || "talent");
      }
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="auth-shell">
      <header className="onboarding-nav">
        <button className="back-home" onClick={onExit}><ArrowLeft size={16} /> Back</button>
        <a className="brand" href="#" onClick={(e) => { e.preventDefault(); onExit(); }}>PROOF<span>.</span></a>
        <span className="save-state">Secure account</span>
      </header>
      <main className="auth-page">
        <div className="auth-copy">
          <span className="eyebrow">WELCOME TO PROOF</span>
          <h1>{mode === "signup" ? "Let's build your Proof." : "Welcome back."}</h1>
          <p>{mode === "signup" ? "Create your account first. Your profile will belong to you, not this browser." : "Sign in and continue building your profile."}</p>
        </div>
        <form className="auth-card" onSubmit={submit}>
          <div className="auth-tabs">
            <button type="button" className={mode === "signup" ? "auth-tab is-active" : "auth-tab"} onClick={() => setMode("signup")}>Create account</button>
            <button type="button" className={mode === "signin" ? "auth-tab is-active" : "auth-tab"} onClick={() => setMode("signin")}>Sign in</button>
          </div>

          {mode === "signup" && <>
            <label>Full name<input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" /></label>
            <div className="auth-role">
              <span className="field-label">I am</span>
              <div className="choice-grid">
                <button type="button" className={role === "talent" ? "choice is-selected" : "choice"} onClick={() => setRole("talent")}>Looking for opportunities</button>
                <button type="button" className={role === "employer" ? "choice is-selected" : "choice"} onClick={() => setRole("employer")}>Hiring talent</button>
              </div>
            </div>
          </>}

          <label>Email<input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" /></label>
          <label>Password<input required minLength={8} type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="At least 8 characters" /></label>

          {error && <div className="error-banner">{error}</div>}
          {message && <div className="soft-note"><strong>Almost there.</strong><span>{message}</span></div>}

          <Button className="button--dark button--large auth-submit" disabled={busy}>
            {busy ? "Working..." : mode === "signup" ? "Create my account" : "Sign in"} <ArrowUpRight size={17} />
          </Button>
          <p className="auth-note">By continuing, you agree to use PROOF responsibly and keep your profile information accurate.</p>
        </form>
      </main>
    </div>
  );
}


function makePublicSlug(name, userId) {
  const base = (name || "talent")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 45) || "talent";
  return base + "-" + userId.replace(/-/g, "").slice(0, 6);
}

function formatDate(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function Onboarding({ onExit, user, onPublished }) {
  const [stepIndex, setStepIndex] = useState(0);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState("");
  const [profile, setProfile] = useState({
    name: "",
    location: "",
    headline: "",
    bio: "",
    intent: "Full-time",
    role: "",
    skills: [],
    experience: [{ company: "", role: "", start: "", end: "", current: false, description: "", achievements: "" }],
    education: { institution: "", qualification: "", field: "", start: "", end: "" },
    work: [{ title: "", description: "", role: "", result: "", url: "" }],
    videoUrl: "",
    videoName: "",
  });
  const [newSkill, setNewSkill] = useState("");
  const [videoPreview, setVideoPreview] = useState("");
  const [videoBlob, setVideoBlob] = useState(null);

  useEffect(() => {
    const saved = window.localStorage.getItem("proof-draft");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setProfile((current) => ({ ...current, ...parsed }));
      } catch {
        // Ignore malformed local draft.
      }
    }
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      window.localStorage.setItem("proof-draft", JSON.stringify(profile));
    }, 250);
    return () => window.clearTimeout(timer);
  }, [profile]);

  const update = (key, value) => setProfile((current) => ({ ...current, [key]: value }));

  const addSkill = () => {
    const value = newSkill.trim();
    if (!value) return;
    if (profile.skills.length >= 8) return;
    if (profile.skills.some((skill) => skill.toLowerCase() === value.toLowerCase())) return;
    update("skills", [...profile.skills, value]);
    setNewSkill("");
  };

  const removeSkill = (skill) => update("skills", profile.skills.filter((item) => item !== skill));

  const updateExperience = (index, field, value) => {
    const next = [...profile.experience];
    next[index] = { ...next[index], [field]: value };
    setProfile((current) => ({ ...current, experience: next }));
  };

  const addExperience = () => {
    update("experience", [...profile.experience, { company: "", role: "", start: "", end: "", current: false, description: "", achievements: "" }]);
  };

  const updateWork = (index, field, value) => {
    const next = [...profile.work];
    next[index] = { ...next[index], [field]: value };
    setProfile((current) => ({ ...current, work: next }));
  };

  const addWork = () => {
    update("work", [...profile.work, { title: "", description: "", role: "", result: "", url: "" }]);
  };

  const canContinue = () => {
    if (stepIndex === 0) return profile.name.trim() && profile.headline.trim() && profile.location.trim();
    if (stepIndex === 1) return profile.role.trim();
    if (stepIndex === 2) return profile.skills.length > 0;
    return true;
  };

  const next = () => {
    if (!canContinue()) return;
    setSaving(true);
    window.setTimeout(() => {
      setSaving(false);
      setStepIndex((current) => Math.min(current + 1, onboardingSteps.length - 1));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 180);
  };

  const back = () => {
    setStepIndex((current) => Math.max(current - 1, 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const publish = async () => {
    if (!supabase || !user) return;
    setSaving(true);
    setSaveError("");

    try {
      const publicSlug = makePublicSlug(profile.name, user.id);
      let uploadedVideoUrl = profile.videoUrl || null;

      if (videoBlob) {
        const extension = videoBlob.type.includes("mp4") ? "mp4" : "webm";
        const path = user.id + "/proof-" + Date.now() + "." + extension;

        const { error: uploadError } = await supabase.storage.from("proof-videos-public").upload(path, videoBlob, {
          contentType: videoBlob.type,
          cacheControl: "3600",
          upsert: false,
        });
        if (uploadError) throw uploadError;

        const { data: publicVideo } = supabase.storage.from("proof-videos-public").getPublicUrl(path);
        uploadedVideoUrl = publicVideo.publicUrl;
      }

      const { error: profileError } = await supabase.from("profiles").upsert({
        id: user.id,
        role: "talent",
        name: profile.name,
        public_slug: publicSlug,
        location: profile.location,
        headline: profile.headline || profile.role,
        bio: profile.bio,
        intent: profile.intent,
        video_url: uploadedVideoUrl,
        video_name: profile.videoName || null,
        published: true,
      });
      if (profileError) throw profileError;

      await supabase.from("profile_skills").delete().eq("profile_id", user.id);
      if (profile.skills.length) {
        const { error } = await supabase.from("profile_skills").insert(
          profile.skills.map((skill, index) => ({ profile_id: user.id, skill, sort_order: index }))
        );
        if (error) throw error;
      }

      await supabase.from("experiences").delete().eq("profile_id", user.id);
      const experiences = profile.experience
        .filter((item) => item.company || item.role || item.description)
        .map((item, index) => ({
          profile_id: user.id,
          company: item.company,
          role: item.role,
          start_date: item.start ? item.start + "-01" : null,
          end_date: item.current || !item.end ? null : item.end + "-01",
          current: item.current,
          description: item.description,
          achievements: item.achievements,
          sort_order: index,
        }));
      if (experiences.length) {
        const { error } = await supabase.from("experiences").insert(experiences);
        if (error) throw error;
      }

      await supabase.from("education").delete().eq("profile_id", user.id);
      if (profile.education.institution || profile.education.qualification || profile.education.field) {
        const { error } = await supabase.from("education").insert({
          profile_id: user.id,
          institution: profile.education.institution,
          qualification: profile.education.qualification,
          field: profile.education.field,
          start_year: profile.education.start ? Number(profile.education.start) : null,
          end_year: profile.education.end ? Number(profile.education.end) : null,
        });
        if (error) throw error;
      }

      await supabase.from("portfolio_items").delete().eq("profile_id", user.id);
      const work = profile.work
        .filter((item) => item.title || item.description)
        .map((item, index) => ({
          profile_id: user.id,
          title: item.title,
          description: item.description,
          role: item.role,
          result: item.result,
          url: item.url || null,
          sort_order: index,
        }));
      if (work.length) {
        const { error } = await supabase.from("portfolio_items").insert(work);
        if (error) throw error;
      }

      const publishedProfile = { ...profile, publicSlug, videoUrl: uploadedVideoUrl };
      window.localStorage.removeItem("proof-draft");
      setProfile(publishedProfile);

      if (onPublished) {
        onPublished(publicSlug);
      }
    } catch (err) {
      setSaveError(err.message || "Could not publish your Proof.");
    } finally {
      setSaving(false);
    }
  };
  return (
    <div className="app-shell">
      <header className="onboarding-nav">
        <button className="back-home" onClick={onExit}><ArrowLeft size={16} /> Exit</button>
        <a className="brand" href="#" onClick={(event) => { event.preventDefault(); onExit(); }}>PROOF<span>.</span></a>
        <span className="save-state">{saving ? "Saving..." : "Saved automatically"}</span>
      </header>

      <div className="onboarding-progress"><ProgressBar stepIndex={stepIndex} /></div>

      <main className="onboarding-page">
        {stepIndex === onboardingSteps.length - 1 && profile.name.trim() ? (
          <StepHeader stepIndex={stepIndex} />
        ) : (
          <StepHeader stepIndex={stepIndex} />
        )}

        <div className="onboarding-content">
          {stepIndex === 0 && (
            <section className="onboarding-panel">
              <p className="panel-intro">Start with the basics. Keep it human. No need to sound like a CV.</p>
              <div className="form-grid">
                <label>Full name<input value={profile.name} onChange={(e) => update("name", e.target.value)} placeholder="e.g. Amara Okafor" /></label>
                <label>Location<input value={profile.location} onChange={(e) => update("location", e.target.value)} placeholder="e.g. Lagos, Nigeria" /></label>
                <label className="full">Professional headline<input value={profile.headline} onChange={(e) => update("headline", e.target.value)} placeholder="e.g. Digital Marketing Strategist" /></label>
                <label className="full">Tell people a little about you<textarea rows="5" value={profile.bio} onChange={(e) => update("bio", e.target.value)} placeholder="What do you do? What kind of work do you enjoy?" /></label>
                <div className="full">
                  <span className="field-label">What are you open to?</span>
                  <div className="choice-grid">
                    {["Full-time", "Part-time", "Freelance", "Contract", "Internship", "Creator work"].map((intent) => (
                      <button type="button" key={intent} className={profile.intent === intent ? "choice is-selected" : "choice"} onClick={() => update("intent", intent)}>{intent}{profile.intent === intent && <Check size={15} />}</button>
                    ))}
                  </div>
                </div>
              </div>
              <p className="field-hint">You can change any of this later.</p>
            </section>
          )}

          {stepIndex === 1 && (
            <section className="onboarding-panel">
              <p className="panel-intro">Don't overthink the job title. Tell us what you actually do.</p>
              <label className="full">What do you do?<input value={profile.role} onChange={(e) => update("role", e.target.value)} placeholder="e.g. I help businesses grow through digital marketing." /></label>
              <div className="suggestions">
                <span className="field-label">Or pick a role to get started</span>
                <div className="chip-grid">
                  {suggestedRoles.map((role) => (
                    <button key={role} className={profile.role === role ? "chip is-selected" : "chip"} onClick={() => update("role", role)}>{role}</button>
                  ))}
                </div>
              </div>
            </section>
          )}

          {stepIndex === 2 && (
            <section className="onboarding-panel">
              <p className="panel-intro">Choose the skills you want employers to remember first. Up to 8.</p>
              <div className="skill-entry">
                <input value={newSkill} maxLength={40} onChange={(e) => setNewSkill(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addSkill(); } }} placeholder="Add a skill" />
                <Button className="button--dark" type="button" onClick={addSkill} disabled={!newSkill.trim() || profile.skills.length >= 8}>Add</Button>
              </div>
              <div className="selected-skills">
                {profile.skills.map((skill) => <button key={skill} className="skill-pill" onClick={() => removeSkill(skill)}>{skill}<X size={13} /></button>)}
              </div>
              <div className="chip-grid suggestions-grid">
                {["Digital Marketing", "SEO", "Social Media", "Copywriting", "Brand Strategy", "Paid Media", "Graphic Design", "Video Editing", "UI/UX", "Web Development", "Sales", "Growth"].map((skill) => (
                  <button key={skill} className={profile.skills.includes(skill) ? "chip is-selected" : "chip"} onClick={() => update("skills", profile.skills.includes(skill) ? profile.skills.filter((item) => item !== skill) : profile.skills.length < 8 ? [...profile.skills, skill] : profile.skills)}>{skill}</button>
                ))}
              </div>
            </section>
          )}

          {stepIndex === 3 && (
            <section className="onboarding-panel">
              <div className="panel-intro-row">
                <p className="panel-intro">Experience can be a job, freelance project, personal project or anything that proves your ability.</p>
                <Button className="button--outline" type="button" onClick={addExperience}>+ Add experience</Button>
              </div>
              {profile.experience.map((item, index) => (
                <div className="repeat-card" key={index}>
                  <div className="repeat-card__label">EXPERIENCE {String(index + 1).padStart(2, "0")}</div>
                  <div className="form-grid">
                    <label>Company / client<input value={item.company} onChange={(e) => updateExperience(index, "company", e.target.value)} placeholder="e.g. Acme Ltd" /></label>
                    <label>Role<input value={item.role} onChange={(e) => updateExperience(index, "role", e.target.value)} placeholder="e.g. Growth Marketer" /></label>
                    <label>Start date<input type="month" value={item.start} onChange={(e) => updateExperience(index, "start", e.target.value)} /></label>
                    <label className={item.current ? "hidden-field" : ""}>End date<input type="month" value={item.end} onChange={(e) => updateExperience(index, "end", e.target.value)} disabled={item.current} /></label>
                    <label className="checkbox-row"><input type="checkbox" checked={item.current} onChange={(e) => updateExperience(index, "current", e.target.checked)} /> I currently work here</label>
                    <label className="full">What did you do?<textarea rows="4" value={item.description} onChange={(e) => updateExperience(index, "description", e.target.value)} placeholder="Describe the work in plain language." /></label>
                    <label className="full">What changed because of your work?<textarea rows="3" value={item.achievements} onChange={(e) => updateExperience(index, "achievements", e.target.value)} placeholder="e.g. Increased qualified leads by 35%." /></label>
                  </div>
                </div>
              ))}
            </section>
          )}

          {stepIndex === 4 && (
            <section className="onboarding-panel">
              <div className="skip-line"><p className="panel-intro">Education is optional. Your Proof is about what you can do.</p><span className="optional-badge">OPTIONAL</span></div>
              <div className="form-grid">
                <label>Institution<input value={profile.education.institution} onChange={(e) => update("education", { ...profile.education, institution: e.target.value })} placeholder="e.g. University / Academy" /></label>
                <label>Qualification<input value={profile.education.qualification} onChange={(e) => update("education", { ...profile.education, qualification: e.target.value })} placeholder="e.g. Diploma" /></label>
                <label>Field of study<input value={profile.education.field} onChange={(e) => update("education", { ...profile.education, field: e.target.value })} placeholder="e.g. Marketing" /></label>
                <label>Start year<input type="number" value={profile.education.start} onChange={(e) => update("education", { ...profile.education, start: e.target.value })} placeholder="2020" /></label>
                <label>End year<input type="number" value={profile.education.end} onChange={(e) => update("education", { ...profile.education, end: e.target.value })} placeholder="2024" /></label>
              </div>
              <div className="soft-note"><strong>No university degree?</strong><span>Skip this step. You don't need to manufacture a credential to build your Proof.</span></div>
            </section>
          )}

          {stepIndex === 5 && (
            <section className="onboarding-panel">
              <div className="panel-intro-row">
                <p className="panel-intro">Show employers the work. Add projects, links, outcomes and anything worth seeing.</p>
                <Button className="button--outline" type="button" onClick={addWork}>+ Add project</Button>
              </div>
              {profile.work.map((item, index) => (
                <div className="repeat-card" key={index}>
                  <div className="repeat-card__label">PROJECT {String(index + 1).padStart(2, "0")}</div>
                  <div className="form-grid">
                    <label>Project title<input value={item.title} onChange={(e) => updateWork(index, "title", e.target.value)} placeholder="e.g. Social launch campaign" /></label>
                    <label>Your role<input value={item.role} onChange={(e) => updateWork(index, "role", e.target.value)} placeholder="e.g. Strategy + Creative" /></label>
                    <label className="full">What was the project?<textarea rows="4" value={item.description} onChange={(e) => updateWork(index, "description", e.target.value)} placeholder="What did you build, solve or ship?" /></label>
                    <label className="full">Result / outcome<input value={item.result} onChange={(e) => updateWork(index, "result", e.target.value)} placeholder="e.g. 2,400 leads, 15M views, 3-week launch" /></label>
                    <label className="full">Project link<input type="url" value={item.url} onChange={(e) => updateWork(index, "url", e.target.value)} placeholder="https://..." /></label>
                  </div>
                </div>
              ))}
            </section>
          )}

          {stepIndex === 6 && (
            <ProofVideoStep
              videoPreview={videoPreview}
              setVideoPreview={setVideoPreview}
              setVideoBlob={setVideoBlob}
              videoName={profile.videoName}
              setVideoName={(value) => update("videoName", value)}
            />
          )}

          {stepIndex === 7 && (
            <section className="onboarding-panel preview-panel">
              <div className="preview-profile">
                <div className="preview-profile__top">
                  <div>
                    <span className="eyebrow">YOUR PROOF</span>
                    <h2>{profile.name || "Your name"}</h2>
                    <p>{profile.headline || profile.role || "Your professional role"}{profile.location ? ` · ${profile.location}` : ""}</p>
                  </div>
                  <span className="status-pill"><span className="status-dot" /> {profile.intent || "Open to work"}</span>
                </div>

                <div className="preview-video">
                  {videoPreview ? <video src={videoPreview} controls playsInline /> : <div className="preview-video__empty"><Video size={26} /><span>Your 60-second Proof will appear here.</span></div>}
                </div>

                <div className="preview-section"><span className="eyebrow">ABOUT</span><p>{profile.bio || "Add a short introduction so employers can understand you quickly."}</p></div>
                <div className="preview-section"><span className="eyebrow">SKILLS</span><div className="selected-skills">{profile.skills.length ? profile.skills.map((skill) => <span className="skill-pill static" key={skill}>{skill}</span>) : <span className="empty-note">Add your top skills.</span>}</div></div>

                <div className="preview-section">
                  <span className="eyebrow">EXPERIENCE</span>
                  {profile.experience.filter((item) => item.company || item.role || item.description).map((item, index) => (
                    <div className="preview-item" key={index}><strong>{item.role || "Role"}</strong><span>{item.company || "Company"} {item.current ? "· Current" : ""}</span><p>{item.achievements || item.description}</p></div>
                  ))}
                </div>

                <div className="preview-section">
                  <span className="eyebrow">WORK</span>
                  {profile.work.filter((item) => item.title || item.description).map((item, index) => (
                    <div className="preview-item" key={index}><strong>{item.title || "Project"}</strong><span>{item.role || "Your role"}</span><p>{item.result || item.description}</p></div>
                  ))}
                </div>
              </div>
              {saveError && <div className="error-banner">{saveError}</div>}
              <div className="publish-box">
                <span className="eyebrow">READY?</span>
                <h3>This is what an employer will see.</h3>
                <p>You can keep editing after you publish.</p>
                <Button className="button--lime button--large" type="button" onClick={publish}>Publish my Proof <ArrowUpRight size={18} /></Button>
              </div>
            </section>
          )}
        </div>

        {stepIndex < 7 && (
          <div className="onboarding-actions">
            <button className="button button--ghost" onClick={back} disabled={stepIndex === 0}><ChevronLeft size={17} /> Back</button>
            <div className="action-note">{stepIndex < 3 && <span>Required fields are marked by the step.</span>}</div>
            <Button className="button--dark button--large" onClick={next} disabled={!canContinue() || saving}>Continue <ChevronRight size={17} /></Button>
          </div>
        )}
        {stepIndex === 7 && <div className="onboarding-actions"><button className="button button--ghost" onClick={back}><ChevronLeft size={17} /> Back</button><span className="action-note">Your draft stays saved on this device.</span></div>}
      </main>
    </div>
  );
}

function ProofVideoStep({ videoPreview, setVideoPreview, setVideoBlob, videoName, setVideoName }) {
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const recorderRef = useRef(null);
  const chunksRef = useRef([]);
  const [mode, setMode] = useState("idle");
  const [seconds, setSeconds] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    return () => {
      streamRef.current?.getTracks().forEach((track) => track.stop());
      if (videoPreview?.startsWith("blob:")) URL.revokeObjectURL(videoPreview);
    };
  }, [videoPreview]);

  useEffect(() => {
    if (mode !== "recording") return;
    const interval = window.setInterval(() => {
      setSeconds((value) => {
        if (value >= 59) {
          stopRecording();
          return 60;
        }
        return value + 1;
      });
    }, 1000);
    return () => window.clearInterval(interval);
  }, [mode]);

  const startRecording = async () => {
    setError("");
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      streamRef.current = stream;
      if (videoRef.current) videoRef.current.srcObject = stream;
      chunksRef.current = [];
      const mimeType = MediaRecorder.isTypeSupported("video/webm;codecs=vp9,opus") ? "video/webm;codecs=vp9,opus" : "video/webm";
      const recorder = new MediaRecorder(stream, { mimeType });
      recorderRef.current = recorder;
      recorder.ondataavailable = (event) => { if (event.data.size) chunksRef.current.push(event.data); };
      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: mimeType });
        const url = URL.createObjectURL(blob);
        setVideoPreview((previous) => { if (previous?.startsWith("blob:")) URL.revokeObjectURL(previous); return url; });
        setVideoBlob(blob);
        setVideoName("proof-video.webm");
        streamRef.current?.getTracks().forEach((track) => track.stop());
        streamRef.current = null;
        setMode("preview");
      };
      recorder.start();
      setSeconds(0);
      setMode("recording");
    } catch {
      setError("Camera access was blocked or unavailable. You can still upload a video.");
    }
  };

  const stopRecording = () => {
    if (recorderRef.current?.state === "recording") recorderRef.current.stop();
  };

  const uploadVideo = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("video/")) {
      setError("Please choose a video file.");
      return;
    }
    if (file.size > 100 * 1024 * 1024) {
      setError("For this prototype, keep the video under 100MB.");
      return;
    }
    setError("");
    setVideoPreview(URL.createObjectURL(file));
    setVideoBlob(file);
    setVideoName(file.name);
    setMode("preview");
  };

  return (
    <section className="onboarding-panel video-step">
      <p className="panel-intro"><strong>You have 60 seconds.</strong> Tell us who you are, what you do and why someone should work with you.</p>
      <div className="video-stage">
        {mode === "idle" && <div className="video-stage__idle"><Video size={34} /><h3>Show them who you are.</h3><p>Record naturally. No AI avatar. No script required.</p></div>}
        {mode === "recording" && <video ref={videoRef} autoPlay muted playsInline className="camera-feed" />}
        {mode === "preview" && videoPreview && <video src={videoPreview} controls playsInline className="camera-feed" />}
        <div className="video-timer">{String(seconds).padStart(2, "0")} / 60</div>
      </div>
      {error && <div className="error-banner">{error}</div>}
      <div className="video-actions">
        {mode === "idle" && <Button className="button--lime button--large" type="button" onClick={startRecording}><Video size={18} /> Record my Proof</Button>}
        {mode === "recording" && <Button className="button--dark button--large" type="button" onClick={stopRecording}><CircleStop size={18} /> Stop recording</Button>}
        {mode === "preview" && <Button className="button--outline button--large" type="button" onClick={startRecording}>Retake</Button>}
        <label className="button button--ghost button--large upload-button">Upload a video<input type="file" accept="video/*" onChange={uploadVideo} /></label>
      </div>
      {videoName && <p className="video-file-name">Selected: <strong>{videoName}</strong></p>}
    </section>
  );
}



function formatNGN(min, max) {
  if (min == null && max == null) return "Salary not listed";
  const format = (value) => "₦" + new Intl.NumberFormat("en-NG", { maximumFractionDigits: 0 }).format(value);
  if (min != null && max != null) return `${format(min)} – ${format(max)}`;
  return min != null ? `${format(min)}+` : `Up to ${format(max)}`;
}

function navigate(path) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function JobCard({ job, onOpen }) {
  return (
    <button type="button" className="job-card" onClick={() => onOpen(job.id)}>
      <div className="job-card__top">
        <span className="job-badge">{job.is_demo ? "Demo opportunity" : "Opportunity"}</span>
        <span className="job-card__date">{new Date(job.created_at).toLocaleDateString("en-NG", { day: "numeric", month: "short" })}</span>
      </div>
      <div className="job-card__identity">
        <div className="company-mark">{job.companies?.logo_url ? <img src={job.companies.logo_url} alt="" /> : (job.companies?.name || "P").slice(0, 1).toUpperCase()}</div>
        <div>
          <span className="job-company">{job.companies?.name || "Company"}</span>
          <h2>{job.title}</h2>
        </div>
      </div>
      <p className="job-card__description">{job.description}</p>
      <div className="job-meta-row">
        <span><MapPin size={14} /> {job.location || "Location flexible"}</span>
        <span><BriefcaseBusiness size={14} /> {job.employment_type || "Role"}</span>
        <span>{formatNGN(job.salary_min, job.salary_max)}</span>
      </div>
      <div className="job-card__skills">
        {(job.skills || []).slice(0, 4).map((skill) => <span key={skill}>{skill}</span>)}
      </div>
      <div className="job-card__footer"><span>View opportunity</span><ArrowUpRight size={17} /></div>
    </button>
  );
}

function JobsHeader({ onBack, onApplications, onEmployer, user, userRole }) {
  return (
    <header className="jobs-nav">
      <a className="brand" href="#" onClick={(e) => { e.preventDefault(); onBack(); }}>PROOF<span>.</span></a>
      <nav className="jobs-nav__links">
        <button className="jobs-nav__active" onClick={() => navigate("/jobs")}>Jobs</button>
        {user && (userRole === "employer" ? <button onClick={onEmployer}>Employer dashboard</button> : <button onClick={onApplications}>My applications</button>)}
        <button onClick={() => navigate("/#how")}>How it works</button>
      </nav>
      <div className="jobs-nav__actions">
        {user ? <><UnreadMessages user={user} onOpen={() => navigate("/messages")} />{userRole === "employer" ? <Button className="button--outline" onClick={onEmployer}>Employer dashboard</Button> : <Button className="button--outline" onClick={onApplications}>Applications</Button>}</> : <Button className="button--dark" onClick={() => window.dispatchEvent(new CustomEvent("proof-auth"))}>Build my Proof</Button>}
      </div>
    </header>
  );
}

function JobsPage({ user, userRole, onBack, onAuth, onApplications, onEmployer }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [workType, setWorkType] = useState("All");
  const [employment, setEmployment] = useState("All");

  useEffect(() => {
    let cancelled = false;
    async function loadJobs() {
      if (!supabase) {
        setError("PROOF is not connected to its database yet.");
        setLoading(false);
        return;
      }
      const { data, error: queryError } = await supabase
        .from("jobs")
        .select("*, companies(name, logo_url, industry)")
        .eq("published", true)
        .order("created_at", { ascending: false });
      if (cancelled) return;
      if (queryError) setError(queryError.message || "Could not load jobs.");
      else setJobs(data || []);
      setLoading(false);
    }
    loadJobs();
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    const listener = () => onAuth();
    window.addEventListener("proof-auth", listener);
    return () => window.removeEventListener("proof-auth", listener);
  }, [onAuth]);

  const filteredJobs = jobs.filter((job) => {
    const q = search.trim().toLowerCase();
    const searchable = [
      job.title,
      job.description,
      job.location,
      job.companies?.name,
      job.companies?.industry,
      ...(job.skills || []),
    ].filter(Boolean).join(" ").toLowerCase();

    return (!q || searchable.includes(q))
      && (workType === "All" || job.work_type === workType)
      && (employment === "All" || job.employment_type === employment);
  });

  return (
    <div className="jobs-shell">
      <JobsHeader user={user} userRole={userRole} onBack={onBack} onApplications={onApplications} onEmployer={onEmployer} />
      <main className="jobs-page">
        <section className="jobs-hero">
          <div>
            <span className="eyebrow">OPPORTUNITIES</span>
            <h1>Find work worth<br /><em>showing up for.</em></h1>
            <p>Discover roles where your skills, work and Proof can tell the story before the first interview.</p>
          </div>
          <div className="jobs-hero__note">
            <span className="jobs-hero__dot" />
            {jobs.length ? `${jobs.length} opportunities live` : "New opportunities are on the way"}
          </div>
        </section>

        <section className="jobs-toolbar">
          <label className="jobs-search">
            <Search size={18} />
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search roles, skills or companies" />
          </label>
          <div className="jobs-filter">
            <SlidersHorizontal size={16} />
            <select value={workType} onChange={(e) => setWorkType(e.target.value)}>
              <option>All</option>
              <option>Remote</option>
              <option>Hybrid</option>
              <option>On-site</option>
            </select>
          </div>
          <div className="jobs-filter">
            <BriefcaseBusiness size={16} />
            <select value={employment} onChange={(e) => setEmployment(e.target.value)}>
              <option>All</option>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Contract</option>
              <option>Freelance</option>
              <option>Internship</option>
            </select>
          </div>
        </section>

        {loading && <div className="jobs-state">Loading opportunities…</div>}
        {error && <div className="error-banner jobs-error">{error}</div>}
        {!loading && !error && (
          <section className="jobs-grid">
            {filteredJobs.map((job) => <JobCard key={job.id} job={job} onOpen={(id) => navigate("/jobs/" + id)} />)}
          </section>
        )}

        {!loading && !error && filteredJobs.length === 0 && (
          <div className="jobs-empty">
            <span className="eyebrow">NO MATCHES</span>
            <h2>Nothing fits those filters yet.</h2>
            <p>Try a different role, skill or work arrangement.</p>
          </div>
        )}
      </main>
    </div>
  );
}

function JobDetails({ jobId, user, userRole, onBack, onAuth, onApplications, onEmployer }) {
  const [job, setJob] = useState(null);
  const [application, setApplication] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [applying, setApplying] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      if (!supabase) return;
      const { data, error: jobError } = await supabase
        .from("jobs")
        .select("*, companies(name, logo_url, industry, location, description)")
        .eq("id", jobId)
        .eq("published", true)
        .maybeSingle();
      if (jobError) {
        if (!cancelled) { setError(jobError.message); setLoading(false); }
        return;
      }
      if (!data) {
        if (!cancelled) { setError("This opportunity is no longer available."); setLoading(false); }
        return;
      }
      let existing = null;
      if (user) {
        const result = await supabase
          .from("applications")
          .select("*")
          .eq("job_id", jobId)
          .eq("talent_id", user.id)
          .maybeSingle();
        existing = result.data || null;
      }
      if (!cancelled) {
        setJob(data);
        setApplication(existing);
        setLoading(false);
      }
    }
    load();
    return () => { cancelled = true; };
  }, [jobId, user]);

  const apply = async () => {
    if (!user) { onAuth(); return; }
    if (!supabase) return;
    setApplying(true);
    setError("");
    const { data, error: applyError } = await supabase.from("applications").insert({
      job_id: jobId,
      talent_id: user.id,
      status: "applied",
      message: message.trim() || null,
    }).select("*").single();

    if (applyError) {
      setError(applyError.code === "23505" ? "You've already applied for this opportunity." : applyError.message);
    } else {
      setApplication(data);
      setSuccess(true);
    }
    setApplying(false);
  };

  if (loading) return <div className="jobs-state">Loading opportunity…</div>;
  if (error && !job) return <div className="public-error"><a className="brand" href="#" onClick={(e) => { e.preventDefault(); onBack(); }}>PROOF<span>.</span></a><div><span className="eyebrow">OPPORTUNITY</span><h1>{error}</h1><Button className="button--dark button--large" onClick={onBack}>Back to jobs</Button></div></div>;

  return (
    <div className="jobs-shell">
      <header className="jobs-nav">
        <button className="jobs-back" onClick={onBack}><ArrowLeft size={16} /> All jobs</button>
        <a className="brand" href="#" onClick={(e) => { e.preventDefault(); onBack(); }}>PROOF<span>.</span></a>
        <div>{user ? (userRole === "employer" ? <Button className="button--outline" onClick={onEmployer}>Employer dashboard</Button> : <Button className="button--outline" onClick={onApplications}>My applications</Button>) : <Button className="button--dark" onClick={onAuth}>Build my Proof</Button>}</div>
      </header>

      <main className="job-details-page">
        <div className="job-details__main">
          <div className="job-company-head">
            <div className="company-mark company-mark--large">{job.companies?.logo_url ? <img src={job.companies.logo_url} alt="" /> : (job.companies?.name || "P").slice(0, 1).toUpperCase()}</div>
            <div><span>{job.companies?.name || "Company"}{job.is_demo ? " · Demo opportunity" : ""}</span><p>{job.companies?.industry || job.industry || "Company"}</p></div>
          </div>

          <h1>{job.title}</h1>
          <div className="job-detail-meta">
            <span><MapPin size={15} /> {job.location || "Flexible location"}</span>
            <span><BriefcaseBusiness size={15} /> {job.employment_type || "Role"}</span>
            <span>{job.work_type || "Work arrangement"}</span>
          </div>

          <div className="job-detail-section"><span className="eyebrow">ABOUT THE ROLE</span><p>{job.description}</p></div>

          {job.responsibilities && <div className="job-detail-section"><span className="eyebrow">RESPONSIBILITIES</span><p className="job-detail-pre">{job.responsibilities}</p></div>}

          {job.requirements && <div className="job-detail-section"><span className="eyebrow">REQUIREMENTS</span><p className="job-detail-pre">{job.requirements}</p></div>}

          <div className="job-detail-section"><span className="eyebrow">SKILLS</span><div className="selected-skills">{(job.skills || []).map((skill) => <span className="skill-pill static" key={skill}>{skill}</span>)}</div></div>

          {job.companies?.description && <div className="job-detail-section"><span className="eyebrow">ABOUT THE COMPANY</span><p>{job.companies.description}</p></div>}
        </div>

        <aside className="job-details__side">
          <div className="apply-card">
            <span className="eyebrow">COMPENSATION</span>
            <h2>{formatNGN(job.salary_min, job.salary_max)}</h2>
            <div className="apply-card__facts">
              <span><CalendarDays size={15} /> {job.experience_level || "Experience flexible"}</span>
              <span><BriefcaseBusiness size={15} /> {job.employment_type || "Employment type"}</span>
            </div>

            {success ? (
              <div className="apply-success">
                <Check size={20} />
                <strong>Application sent.</strong>
                <span>Your Proof has been sent for this opportunity.</span>
                <Button className="button--dark" onClick={onApplications}>View my applications <ArrowRight size={15} /></Button>
              </div>
            ) : application ? (
              <div className="apply-success">
                <Check size={20} />
                <strong>Already applied.</strong>
                <span>Status: {application.status}</span>
                <div className="apply-success__actions"><Button className="button--outline" onClick={() => navigate("/messages?application=" + jobId)}>Message employer <MessageCircle size={14} /></Button><Button className="button--outline" onClick={onApplications}>View my applications</Button></div>
              </div>
            ) : userRole === "employer" ? (
              <div className="apply-success">
                <Building2 size={20} />
                <strong>Employer account</strong>
                <span>Employer accounts can post and manage roles, but cannot apply as candidates.</span>
                <Button className="button--dark" onClick={onEmployer}>Open employer workspace <ArrowRight size={15} /></Button>
              </div>
            ) : (
              <>
                <textarea className="apply-message" rows="5" maxLength="1500" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Optional: add a short message to the employer." />
                {error && <div className="error-banner">{error}</div>}
                <Button className="button--lime button--large apply-button" onClick={apply} disabled={applying}>
                  {user ? (applying ? "Sending..." : "Apply with my Proof") : "Create my Proof to apply"} <ArrowUpRight size={18} />
                </Button>
                <p className="apply-note">Your profile, Proof video, skills and work are attached automatically.</p>
              </>
            )}
          </div>
        </aside>
      </main>
    </div>
  );
}

function ApplicationsPage({ user, onBack, onJobs, onAuth }) {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;
    async function load() {
      if (!user || !supabase) { setLoading(false); return; }
      const { data, error: queryError } = await supabase
        .from("applications")
        .select("*, jobs(id, title, location, work_type, employment_type, salary_min, salary_max, companies(name, industry))")
        .eq("talent_id", user.id)
        .order("created_at", { ascending: false });
      if (cancelled) return;
      if (queryError) setError(queryError.message || "Could not load your applications.");
      else setApplications(data || []);
      setLoading(false);
    }
    load();
    return () => { cancelled = true; };
  }, [user]);

  if (!user) {
    onAuth();
    return null;
  }

  return (
    <div className="jobs-shell">
      <header className="jobs-nav">
        <a className="brand" href="#" onClick={(e) => { e.preventDefault(); onBack(); }}>PROOF<span>.</span></a>
        <nav className="jobs-nav__links">
          <button onClick={onJobs}>Jobs</button>
          <button className="jobs-nav__active">My applications</button>
        </nav>
        <div className="jobs-nav__right"><UnreadMessages user={user} onOpen={() => navigate("/messages")} /><Button className="button--dark" onClick={onJobs}>Find opportunities</Button></div>
      </header>

      <main className="applications-page">
        <div className="applications-head"><div><span className="eyebrow">YOUR PROGRESS</span><h1>My applications.</h1><p>Keep track of every opportunity you’ve put your Proof against.</p></div><div className="applications-count">{applications.length}<span>applications</span></div></div>

        {loading && <div className="jobs-state">Loading your applications…</div>}
        {error && <div className="error-banner jobs-error">{error}</div>}

        {!loading && !error && applications.length === 0 && (
          <div className="applications-empty">
            <span className="eyebrow">NOTHING HERE YET</span>
            <h2>Your next opportunity starts with your Proof.</h2>
            <p>Browse live roles and apply without rebuilding a CV every time.</p>
            <Button className="button--lime button--large" onClick={onJobs}>Find opportunities <ArrowUpRight size={18} /></Button>
          </div>
        )}

        {!loading && !error && applications.length > 0 && (
          <div className="applications-list">
            {applications.map((application) => (
              <article key={application.id} className="application-row">
                <button type="button" className="application-row__main" onClick={() => navigate("/jobs/" + application.jobs.id)}>
                  <div className="application-company">{(application.jobs?.companies?.name || "P").slice(0, 1).toUpperCase()}</div>
                  <div className="application-meta">
                    <strong>{application.jobs?.title}</strong>
                    <span>{application.jobs?.companies?.name || "Company"} · {application.jobs?.location || "Flexible"}</span>
                  </div>
                  <span className={"application-status application-status--" + application.status}>{application.status}</span>
                  <div className="application-date">{new Date(application.created_at).toLocaleDateString("en-NG", { day: "numeric", month: "short", year: "numeric" })}</div>
                  <ArrowUpRight size={17} />
                </button>
                <button type="button" className="application-row__message" onClick={async () => { try { await getOrCreateConversation(user.id, application.id); navigate("/messages?application=" + application.id); } catch (err) { setError(err.message || "Could not open messages."); } }}><MessageCircle size={15} /> Message</button>
              </article>
            ))}         </div>
        )}
      </main>
    </div>
  );
}



async function getOrCreateConversation(userId, applicationId) {
  if (!supabase || !userId || !applicationId) throw new Error("Missing conversation details.");

  const existingResult = await supabase.from("conversations").select("*").eq("application_id", applicationId).maybeSingle();
  if (existingResult.error) throw existingResult.error;
  if (existingResult.data) return existingResult.data;

  const applicationResult = await supabase
    .from("applications")
    .select("id, talent_id, jobs(company_id, companies(owner_id))")
    .eq("id", applicationId)
    .maybeSingle();

  if (applicationResult.error) throw applicationResult.error;
  const application = applicationResult.data;
  const employerId = application?.jobs?.companies?.owner_id;
  const talentId = application?.talent_id;

  if (!application || !employerId || !talentId) throw new Error("This application cannot open a conversation yet.");
  if (userId !== employerId && userId !== talentId) throw new Error("You are not a participant in this conversation.");

  const insertResult = await supabase.from("conversations").insert({
    application_id: applicationId,
    employer_id: employerId,
    talent_id: talentId,
  }).select("*").single();

  if (insertResult.error?.code === "23505") {
    const retry = await supabase.from("conversations").select("*").eq("application_id", applicationId).single();
    if (retry.error) throw retry.error;
    return retry.data;
  }
  if (insertResult.error) throw insertResult.error;
  return insertResult.data;
}

function UnreadMessages({ user, onOpen }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!supabase || !user) {
      setCount(0);
      return;
    }
    let active = true;
    const load = async () => {
      const { count: unreadCount } = await supabase
        .from("messages")
        .select("id", { count: "exact", head: true })
        .neq("sender_id", user.id)
        .is("read_at", null);
      if (active) setCount(unreadCount || 0);
    };
    load();

    const channel = supabase
      .channel("proof-unread-" + user.id)
      .on("postgres_changes", { event: "*", schema: "public", table: "messages" }, load)
      .subscribe();

    return () => {
      active = false;
      supabase.removeChannel(channel);
    };
  }, [user]);

  return (
    <button className="messages-nav-button" onClick={onOpen}>
      <span>Messages</span>
      {count > 0 && <strong>{count > 9 ? "9+" : count}</strong>}
    </button>
  );
}

function MessagesPage({ user, userRole, onBack, onEmployer, onJobs }) {
  const [conversations, setConversations] = useState([]);
  const [profiles, setProfiles] = useState({});
  const [activeId, setActiveId] = useState("");
  const [messages, setMessages] = useState([]);
  const [draft, setDraft] = useState("");
  const [loading, setLoading] = useState(true);
  const [messageLoading, setMessageLoading] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const applicationParam = new URLSearchParams(window.location.search).get("application");

  const loadConversations = async (preferredId = "") => {
    if (!supabase || !user) return;

    const result = await supabase
      .from("conversations")
      .select("*, applications(id, job_id, talent_id, jobs(id, title, location, companies(name, logo_url, industry)))")
      .order("updated_at", { ascending: false });

    if (result.error) {
      setError(result.error.message || "Could not load your conversations.");
      setLoading(false);
      return;
    }

    const rows = result.data || [];
    const talentIds = [...new Set(rows.map((row) => row.talent_id).filter(Boolean))];
    let profileRows = [];

    if (talentIds.length) {
      const profileResult = await supabase
        .from("profiles")
        .select("id, name, headline, location, public_slug, published")
        .in("id", talentIds);
      if (profileResult.error) {
        setError(profileResult.error.message || "Could not load conversation participants.");
        setLoading(false);
        return;
      }
      profileRows = profileResult.data || [];
    }

    const profileMap = {};
    profileRows.forEach((profile) => { profileMap[profile.id] = profile; });

    if (applicationParam) {
      const target = rows.find((row) => row.application_id === applicationParam);
      if (target) setActiveId(target.id);
    } else if (preferredId && rows.some((row) => row.id === preferredId)) {
      setActiveId(preferredId);
    } else if (!activeId && rows[0]) {
      setActiveId(rows[0].id);
    } else if (activeId && !rows.some((row) => row.id === activeId)) {
      setActiveId(rows[0]?.id || "");
    }

    setConversations(rows);
    setProfiles(profileMap);
    setLoading(false);
  };

  const loadMessages = async (conversationId) => {
    if (!supabase || !conversationId || !user) {
      setMessages([]);
      return;
    }

    setMessageLoading(true);
    const result = await supabase
      .from("messages")
      .select("*")
      .eq("conversation_id", conversationId)
      .order("created_at", { ascending: true });

    if (result.error) {
      setError(result.error.message || "Could not load messages.");
      setMessageLoading(false);
      return;
    }

    const nextMessages = result.data || [];
    const unreadIds = nextMessages
      .filter((message) => message.sender_id !== user.id && !message.read_at)
      .map((message) => message.id);

    if (unreadIds.length) {
      await supabase.from("messages").update({ read_at: new Date().toISOString() }).in("id", unreadIds);
    }

    const readNow = new Date().toISOString();
    setMessages(nextMessages.map((message) => unreadIds.includes(message.id) ? { ...message, read_at: readNow } : message));
    setMessageLoading(false);
  };

  useEffect(() => {
    let cancelled = false;
    async function boot() {
      if (applicationParam && user) {
        try {
          const conversation = await getOrCreateConversation(user.id, applicationParam);
          if (!cancelled) setActiveId(conversation.id);
        } catch (err) {
          if (!cancelled) setError(err.message || "Could not open this conversation.");
        }
      }
      await loadConversations();
    }
    boot();
    return () => { cancelled = true; };
  }, [user, applicationParam]);

  useEffect(() => { loadMessages(activeId); }, [activeId]);

  useEffect(() => {
    if (!supabase || !user || !activeId) return undefined;
    const channel = supabase
      .channel("proof-conversation-" + activeId)
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "messages", filter: "conversation_id=eq." + activeId }, async () => {
        await loadMessages(activeId);
        await loadConversations(activeId);
      })
      .subscribe();

    return () => supabase.removeChannel(channel);
  }, [activeId, user?.id]);

  const openConversation = (conversation) => {
    setActiveId(conversation.id);
    navigate("/messages?application=" + conversation.application_id);
  };

  const sendMessage = async (event) => {
    event.preventDefault();
    const body = draft.trim();
    if (!body || !activeId || !supabase || !user) return;

    setSending(true);
    setError("");

    const result = await supabase.from("messages").insert({
      conversation_id: activeId,
      sender_id: user.id,
      body,
    }).select("*").single();

    if (result.error) {
      setError(result.error.message || "Could not send your message.");
    } else {
      setDraft("");
      await supabase.from("conversations").update({ updated_at: new Date().toISOString() }).eq("id", activeId);
      setMessages((current) => current.some((message) => message.id === result.data.id) ? current : [...current, result.data]);
      await loadConversations(activeId);
    }
    setSending(false);
  };

  const activeConversation = conversations.find((conversation) => conversation.id === activeId) || null;
  const otherTalent = activeConversation ? profiles[activeConversation.talent_id] : null;
  const otherName = userRole === "employer"
    ? (otherTalent?.name || "Candidate")
    : (activeConversation?.applications?.jobs?.companies?.name || "Employer");
  const otherHeadline = userRole === "employer"
    ? (otherTalent?.headline || "PROOF candidate")
    : (activeConversation?.applications?.jobs?.title || "Application conversation");

  return (
    <div className="jobs-shell">
      <header className="jobs-nav">
        <button className="jobs-back" onClick={onBack}><ArrowLeft size={16} /> Back</button>
        <a className="brand" href="#" onClick={(e) => { e.preventDefault(); onBack(); }}>PROOF<span>.</span></a>
        <div className="jobs-nav__right">
          {userRole === "employer"
            ? <Button className="button--outline" onClick={onEmployer}>Employer dashboard</Button>
            : <Button className="button--outline" onClick={onJobs}>Find opportunities</Button>}
        </div>
      </header>

      <main className="messages-page">
        <section className="messages-head">
          <div><span className="eyebrow">YOUR INBOX</span><h1>Talk to people.<br /><em>Move things forward.</em></h1><p>Every conversation on PROOF is attached to a real application.</p></div>
          <div className="messages-head__note"><span className="jobs-hero__dot" /> Secure application conversations</div>
        </section>

        {error && <div className="error-banner messages-error">{error}</div>}

        {loading ? <div className="jobs-state">Loading your inbox…</div> : (
          <div className="messages-layout">
            <aside className="conversation-list">
              {conversations.length === 0 ? (
                <div className="messages-empty-small"><span className="eyebrow">NO CONVERSATIONS</span><strong>Your messages will appear here.</strong><p>Apply for a role or contact a candidate from an application.</p></div>
              ) : conversations.map((conversation) => {
                const profile = profiles[conversation.talent_id];
                const conversationName = userRole === "employer" ? (profile?.name || "Candidate") : (conversation.applications?.jobs?.companies?.name || "Employer");
                const conversationRole = userRole === "employer" ? (profile?.headline || "PROOF candidate") : (conversation.applications?.jobs?.title || "Application");
                return (
                  <button type="button" key={conversation.id} className={"conversation-row" + (conversation.id === activeId ? " is-active" : "")} onClick={() => openConversation(conversation)}>
                    <div className="conversation-avatar">{conversationName.split(" ").map((part) => part[0]).slice(0, 2).join("").toUpperCase()}</div>
                    <div className="conversation-meta"><strong>{conversationName}</strong><span>{conversationRole}</span><small>{conversation.applications?.jobs?.title || "Application"}</small></div>
                    <ChevronRight size={16} />
                  </button>
                );
              })}
            </aside>

            <section className="messages-panel">
              {!activeConversation ? (
                <div className="messages-panel__empty"><MessageCircle size={28} /><strong>Select a conversation.</strong><span>Choose an application conversation to see the thread.</span></div>
              ) : (
                <>
                  <div className="messages-panel__head">
                    <div className="conversation-avatar conversation-avatar--large">{otherName.split(" ").map((part) => part[0]).slice(0, 2).join("").toUpperCase()}</div>
                    <div><strong>{otherName}</strong><span>{otherHeadline}</span><small>{activeConversation.applications?.jobs?.title || "Application"}</small></div>
                  </div>
                  <div className="message-thread">
                    {messageLoading ? <div className="jobs-state">Loading thread…</div> : messages.length === 0 ? (
                      <div className="message-thread__empty"><span className="eyebrow">START HERE</span><strong>Send the first message.</strong><p>Keep it specific to the role and application.</p></div>
                    ) : messages.map((message) => (
                      <div key={message.id} className={"message-bubble-row" + (message.sender_id === user.id ? " is-mine" : "")}>
                        <div className={"message-bubble" + (message.sender_id === user.id ? " is-mine" : "")}>
                          <p>{message.body}</p>
                          <small>{new Date(message.created_at).toLocaleString("en-NG", { day: "numeric", month: "short", hour: "numeric", minute: "2-digit" })}</small>
                        </div>
                      </div>
                    ))}
                  </div>
                  <form className="message-compose" onSubmit={sendMessage}>
                    <textarea value={draft} onChange={(e) => setDraft(e.target.value)} rows="3" maxLength="2000" placeholder={"Message " + otherName + " about this application…"} />
                    <div><span>Keep conversations professional and role-specific.</span><Button className="button--dark button--large" disabled={sending || !draft.trim()}>{sending ? "Sending..." : "Send message"} <ArrowUpRight size={17} /></Button></div>
                  </form>
                </>
              )}
            </section>
          </div>
        )}
      </main>
    </div>
  );
}

function EmployerHeader({ onBack, onDashboard, onJobs, user }) {
  return (
    <header className="employer-nav">
      <a className="brand" href="#" onClick={(e) => { e.preventDefault(); onBack(); }}>PROOF<span>.</span></a>
      <nav className="employer-nav__links" aria-label="Employer navigation">
        <button className="employer-nav__active" onClick={onDashboard}>Dashboard</button>
        <button onClick={onJobs}>Jobs</button>
      </nav>
      <div className="employer-nav__actions">
        <UnreadMessages user={user} onOpen={() => navigate("/messages")} />
        <Button className="button--dark" onClick={() => navigate("/employer/jobs/new")}>Post a job <Plus size={16} /></Button>
      </div>
    </header>
  );
}

function EmployerOnboarding({ user, onBack, onComplete }) {
  const [company, setCompany] = useState({
    name: "",
    industry: "",
    website: "",
    location: "",
    size: "",
    description: "",
    logo_url: "",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [logoName, setLogoName] = useState("");

  useEffect(() => {
    let cancelled = false;
    async function load() {
      if (!supabase || !user) { setLoading(false); return; }
      const { data, error: queryError } = await supabase
        .from("companies")
        .select("*")
        .eq("owner_id", user.id)
        .eq("is_demo", false)
        .order("created_at", { ascending: true })
        .limit(1)
        .maybeSingle();

      if (cancelled) return;
      if (queryError) setError(queryError.message || "Could not load your company profile.");
      if (data) {
        setCompany({
          name: data.name || "",
          industry: data.industry || "",
          website: data.website || "",
          location: data.location || "",
          size: data.size || "",
          description: data.description || "",
          logo_url: data.logo_url || "",
        });
      }
      setLoading(false);
    }
    load();
    return () => { cancelled = true; };
  }, [user]);

  const update = (key, value) => setCompany((current) => ({ ...current, [key]: value }));

  const uploadLogo = async (file) => {
    if (!file || !supabase || !user) return;
    setError("");
    const allowed = ["image/png", "image/jpeg", "image/webp"];
    if (!allowed.includes(file.type)) {
      setError("Please choose a PNG, JPG or WebP logo.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setError("Logo must be 5MB or smaller.");
      return;
    }

    try {
      const extension = file.type.split("/")[1].replace("jpeg", "jpg");
      const path = user.id + "/company-" + Date.now() + "." + extension;
      const { error: uploadError } = await supabase.storage.from("avatars").upload(path, file, {
        contentType: file.type,
        cacheControl: "3600",
        upsert: false,
      });
      if (uploadError) throw uploadError;
      const { data } = supabase.storage.from("avatars").getPublicUrl(path);
      update("logo_url", data.publicUrl);
      setLogoName(file.name);
    } catch (err) {
      setError(err.message || "Could not upload the logo.");
    }
  };

  const save = async (event) => {
    event.preventDefault();
    if (!supabase || !user) return;
    if (!company.name.trim() || !company.industry.trim() || !company.location.trim()) {
      setError("Company name, industry and location are required.");
      return;
    }

    setSaving(true);
    setError("");
    try {
      const payload = {
        owner_id: user.id,
        name: company.name.trim(),
        industry: company.industry.trim(),
        website: company.website.trim() || null,
        location: company.location.trim(),
        size: company.size.trim() || null,
        description: company.description.trim(),
        logo_url: company.logo_url || null,
        is_demo: false,
      };

      const { data: existing } = await supabase
        .from("companies")
        .select("id")
        .eq("owner_id", user.id)
        .eq("is_demo", false)
        .order("created_at", { ascending: true })
        .limit(1)
        .maybeSingle();

      const result = existing?.id
        ? await supabase.from("companies").update(payload).eq("id", existing.id).select("*").single()
        : await supabase.from("companies").insert(payload).select("*").single();

      if (result.error) throw result.error;
      onComplete(result.data);
    } catch (err) {
      setError(err.message || "Could not save your company profile.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="jobs-state">Loading your company setup…</div>;

  return (
    <div className="jobs-shell">
      <header className="jobs-nav">
        <button className="jobs-back" onClick={onBack}><ArrowLeft size={16} /> Back</button>
        <a className="brand" href="#" onClick={(e) => { e.preventDefault(); onBack(); }}>PROOF<span>.</span></a>
        <span className="jobs-nav__label">EMPLOYER SETUP</span>
      </header>

      <main className="employer-form-page">
        <div className="employer-form-intro">
          <span className="eyebrow">YOUR COMPANY</span>
          <h1>Give talent a reason to understand your company.</h1>
          <p>This becomes the company identity candidates see beside every role you publish on PROOF.</p>
        </div>

        <form className="employer-form-card" onSubmit={save}>
          <div className="employer-logo-row">
            <div className="employer-logo-preview">
              {company.logo_url ? <img src={company.logo_url} alt="" /> : <Building2 size={22} />}
            </div>
            <div>
              <strong>Company logo</strong>
              <span>{logoName || "Optional · PNG, JPG or WebP · max 5MB"}</span>
            </div>
            <label className="button button--outline button--small">
              <Upload size={14} /> Upload
              <input className="hidden-file" type="file" accept="image/png,image/jpeg,image/webp" onChange={(e) => uploadLogo(e.target.files?.[0])} />
            </label>
          </div>

          <div className="form-grid">
            <label>Company name<input required value={company.name} onChange={(e) => update("name", e.target.value)} placeholder="e.g. Wawo Hub" /></label>
            <label>Industry<input required value={company.industry} onChange={(e) => update("industry", e.target.value)} placeholder="e.g. Marketing & Advertising" /></label>
            <label>Website<input type="url" value={company.website} onChange={(e) => update("website", e.target.value)} placeholder="https://yourcompany.com" /></label>
            <label>Location<input required value={company.location} onChange={(e) => update("location", e.target.value)} placeholder="Lagos, Nigeria" /></label>
            <label>Company size
              <select value={company.size} onChange={(e) => update("size", e.target.value)}>
                <option value="">Select size</option>
                <option>1–10</option>
                <option>11–50</option>
                <option>51–200</option>
                <option>201–500</option>
                <option>500+</option>
              </select>
            </label>
            <label className="full">About the company<textarea rows="6" value={company.description} onChange={(e) => update("description", e.target.value)} placeholder="What does your company do? What should a great candidate know?"></textarea></label>
          </div>

          {error && <div className="error-banner">{error}</div>}
          <div className="employer-form-actions">
            <p>Keep it clear. Candidates should understand who they are applying to.</p>
            <Button className="button--lime button--large" disabled={saving}>{saving ? "Saving..." : "Save company profile"} <ArrowUpRight size={18} /></Button>
          </div>
        </form>
      </main>
    </div>
  );
}

function EmployerDashboard({ user, onBack, onJobs }) {
  const [company, setCompany] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = async () => {
    if (!supabase || !user) { setLoading(false); return; }
    setLoading(true);
    const companyResult = await supabase
      .from("companies")
      .select("*")
      .eq("owner_id", user.id)
      .eq("is_demo", false)
      .order("created_at", { ascending: true })
      .limit(1)
      .maybeSingle();

    if (companyResult.error) {
      setError(companyResult.error.message || "Could not load your company.");
      setLoading(false);
      return;
    }

    if (!companyResult.data) {
      setLoading(false);
      return;
    }

    const companyData = companyResult.data;
    const jobsResult = await supabase
      .from("jobs")
      .select("*")
      .eq("company_id", companyData.id)
      .order("created_at", { ascending: false });

    if (jobsResult.error) {
      setError(jobsResult.error.message || "Could not load your jobs.");
      setLoading(false);
      return;
    }

    const jobsData = jobsResult.data || [];
    const jobIds = jobsData.map((job) => job.id);
    let applicationsData = [];
    if (jobIds.length) {
      const result = await supabase
        .from("applications")
        .select("id, job_id, status")
        .in("job_id", jobIds);
      if (result.error) {
        setError(result.error.message || "Could not load your applicants.");
        setLoading(false);
        return;
      }
      applicationsData = result.data || [];
    }

    setCompany(companyData);
    setJobs(jobsData);
    setApplications(applicationsData);
    setLoading(false);
  };

  useEffect(() => { load(); }, [user]);

  const published = jobs.filter((job) => job.published);
  const shortlisted = applications.filter((app) => app.status === "shortlisted");
  const interviews = applications.filter((app) => app.status === "interview");

  if (loading) return <div className="jobs-state">Loading your employer dashboard…</div>;

  if (!company) {
    return (
      <EmployerOnboarding user={user} onBack={onBack} onComplete={() => load()} />
    );
  }

  return (
    <div className="jobs-shell">
      <EmployerHeader onBack={onBack} onDashboard={() => navigate("/employer")} onJobs={onJobs} user={user} />

      <main className="employer-page">
        <section className="employer-hero">
          <div>
            <span className="eyebrow">EMPLOYER DASHBOARD</span>
            <div className="employer-company-line">
              <div className="employer-company-mark">
                {company.logo_url ? <img src={company.logo_url} alt="" /> : <Building2 size={22} />}
              </div>
              <div>
                <h1>{company.name}</h1>
                <p>{company.industry} <span>·</span> {company.location}</p>
              </div>
            </div>
            <p className="employer-hero__copy">Post roles, review applicants and see candidates through the evidence that matters.</p>
          </div>
          <div className="employer-hero__actions">
            <Button className="button--lime button--large" onClick={() => navigate("/employer/jobs/new")}>Post a job <Plus size={18} /></Button>
            <button className="text-link" onClick={() => navigate("/employer/onboarding")}>Edit company <Pencil size={15} /></button>
          </div>
        </section>

        <section className="employer-stats">
          <div className="employer-stat"><span>ACTIVE JOBS</span><strong>{published.length}</strong><small>published roles</small></div>
          <div className="employer-stat"><span>APPLICANTS</span><strong>{applications.length}</strong><small>across your roles</small></div>
          <div className="employer-stat"><span>SHORTLISTED</span><strong>{shortlisted.length}</strong><small>ready for review</small></div>
          <div className="employer-stat"><span>INTERVIEWS</span><strong>{interviews.length}</strong><small>currently in process</small></div>
        </section>

        <section className="employer-section-head">
          <div><span className="eyebrow">YOUR ROLES</span><h2>Jobs that are live.</h2></div>
          <button className="text-link" onClick={onJobs}>Manage all jobs <ArrowRight size={16} /></button>
        </section>

        {jobs.length === 0 ? (
          <div className="employer-empty">
            <div><span className="eyebrow">FIRST ROLE</span><h2>Your first opportunity starts here.</h2><p>Publish a role and let candidates apply with the Proof they have already built.</p></div>
            <Button className="button--dark button--large" onClick={() => navigate("/employer/jobs/new")}>Post your first job <Plus size={18} /></Button>
          </div>
        ) : (
          <div className="employer-jobs-grid">
            {jobs.slice(0, 6).map((job) => {
              const applicantCount = applications.filter((app) => app.job_id === job.id).length;
              return (
                <article className="employer-job-card" key={job.id}>
                  <div className="employer-job-card__top">
                    <span className={job.published ? "employer-published" : "employer-draft"}>{job.published ? "Published" : "Draft"}</span>
                    <span>{applicantCount} applicants</span>
                  </div>
                  <h3>{job.title}</h3>
                  <p>{job.location || "Flexible location"} <span>·</span> {job.work_type || "Work arrangement"}</p>
                  <div className="employer-job-card__footer">
                    <button className="text-link" onClick={() => navigate("/employer/jobs/" + job.id + "/applicants")}>Review applicants <ArrowUpRight size={15} /></button>
                    <button className="icon-button" title="Edit job" aria-label="Edit job" onClick={() => navigate("/employer/jobs/new?edit=" + job.id)}><Pencil size={15} /></button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}

function EmployerJobsPage({ user, onBack }) {
  const [company, setCompany] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = async () => {
    if (!supabase || !user) { setLoading(false); return; }
    const companyResult = await supabase
      .from("companies")
      .select("*")
      .eq("owner_id", user.id)
      .eq("is_demo", false)
      .order("created_at", { ascending: true })
      .limit(1)
      .maybeSingle();
    if (companyResult.error) {
      setError(companyResult.error.message);
      setLoading(false);
      return;
    }
    setCompany(companyResult.data || null);
    if (!companyResult.data) { setLoading(false); return; }

    const jobsResult = await supabase
      .from("jobs")
      .select("*")
      .eq("company_id", companyResult.data.id)
      .order("created_at", { ascending: false });
    if (jobsResult.error) {
      setError(jobsResult.error.message);
      setLoading(false);
      return;
    }

    const jobIds = (jobsResult.data || []).map((job) => job.id);
    let apps = [];
    if (jobIds.length) {
      const appResult = await supabase.from("applications").select("id, job_id, status").in("job_id", jobIds);
      if (appResult.error) {
        setError(appResult.error.message);
        setLoading(false);
        return;
      }
      apps = appResult.data || [];
    }

    setJobs(jobsResult.data || []);
    setApplications(apps);
    setLoading(false);
  };

  useEffect(() => { load(); }, [user]);

  const togglePublished = async (job) => {
    if (!supabase) return;
    const nextPublished = !job.published;
    setError("");
    const { error: updateError } = await supabase
      .from("jobs")
      .update({ published: nextPublished })
      .eq("id", job.id);
    if (updateError) {
      setError(updateError.message);
      return;
    }
    setJobs((current) => current.map((item) => item.id === job.id ? { ...item, published: nextPublished } : item));
  };

  if (loading) return <div className="jobs-state">Loading your jobs…</div>;

  if (!company) return <EmployerOnboarding user={user} onBack={onBack} onComplete={() => load()} />;

  return (
    <div className="jobs-shell">
      <EmployerHeader onBack={onBack} onDashboard={() => navigate("/employer")} onJobs={() => navigate("/employer/jobs")} user={user} />
      <main className="employer-page">
        <section className="employer-section-head employer-section-head--first">
          <div><span className="eyebrow">YOUR JOBS</span><h1>Manage every role.</h1><p>Publish, pause and review the opportunities your company has put on PROOF.</p></div>
          <Button className="button--lime button--large" onClick={() => navigate("/employer/jobs/new")}>Post a job <Plus size={18} /></Button>
        </section>

        {error && <div className="error-banner">{error}</div>}

        {jobs.length === 0 ? (
          <div className="employer-empty"><div><span className="eyebrow">NO ROLES YET</span><h2>Put your first opportunity in front of skilled people.</h2><p>You can keep a role as a draft or publish it immediately.</p></div><Button className="button--dark button--large" onClick={() => navigate("/employer/jobs/new")}>Post your first job <Plus size={18} /></Button></div>
        ) : (
          <div className="employer-role-list">
            {jobs.map((job) => {
              const count = applications.filter((app) => app.job_id === job.id).length;
              return (
                <article className="employer-role-row" key={job.id}>
                  <div className="employer-role-row__identity">
                    <span className={job.published ? "employer-published" : "employer-draft"}>{job.published ? "Published" : "Draft"}</span>
                    <div><h2>{job.title}</h2><p>{job.location || "Flexible"} <span>·</span> {job.work_type || "Flexible"} <span>·</span> {job.employment_type || "Role"}</p></div>
                  </div>
                  <div className="employer-role-row__count"><strong>{count}</strong><span>applicants</span></div>
                  <div className="employer-role-row__actions">
                    <button className="button button--outline button--small" onClick={() => navigate("/employer/jobs/" + job.id + "/applicants")}><UsersRound size={14} /> Applicants</button>
                    <button className="button button--ghost button--small" onClick={() => togglePublished(job)}>{job.published ? "Pause role" : "Publish role"}</button>
                    <button className="icon-button" title="Edit job" aria-label="Edit job" onClick={() => navigate("/employer/jobs/new?edit=" + job.id)}><Pencil size={15} /></button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}

function EmployerJobForm({ user, onBack }) {
  const [company, setCompany] = useState(null);
  const [job, setJob] = useState({
    title: "",
    description: "",
    responsibilities: "",
    requirements: "",
    skillsText: "",
    salaryMin: "",
    salaryMax: "",
    location: "",
    workType: "On-site",
    employmentType: "Full-time",
    experienceLevel: "Mid-level",
    industry: "",
    published: true,
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [savedAs, setSavedAs] = useState("");

  const editId = new URLSearchParams(window.location.search).get("edit");

  useEffect(() => {
    let cancelled = false;
    async function load() {
      if (!supabase || !user) { setLoading(false); return; }
      const companyResult = await supabase
        .from("companies")
        .select("*")
        .eq("owner_id", user.id)
        .eq("is_demo", false)
        .order("created_at", { ascending: true })
        .limit(1)
        .maybeSingle();

      if (cancelled) return;
      if (companyResult.error) {
        setError(companyResult.error.message);
        setLoading(false);
        return;
      }

      if (!companyResult.data) {
        setLoading(false);
        return;
      }

      setCompany(companyResult.data);
      setJob((current) => ({
        ...current,
        location: current.location || companyResult.data.location || "",
        industry: current.industry || companyResult.data.industry || "",
      }));

      if (editId) {
        const jobResult = await supabase
          .from("jobs")
          .select("*")
          .eq("id", editId)
          .eq("company_id", companyResult.data.id)
          .maybeSingle();
        if (cancelled) return;
        if (jobResult.error) setError(jobResult.error.message);
        if (jobResult.data) {
          const data = jobResult.data;
          setJob({
            title: data.title || "",
            description: data.description || "",
            responsibilities: data.responsibilities || "",
            requirements: data.requirements || "",
            skillsText: (data.skills || []).join(", "),
            salaryMin: data.salary_min ?? "",
            salaryMax: data.salary_max ?? "",
            location: data.location || companyResult.data.location || "",
            workType: data.work_type || "On-site",
            employmentType: data.employment_type || "Full-time",
            experienceLevel: data.experience_level || "Mid-level",
            industry: data.industry || companyResult.data.industry || "",
            published: Boolean(data.published),
          });
        }
      }
      setLoading(false);
    }
    load();
    return () => { cancelled = true; };
  }, [user, editId]);

  const update = (key, value) => setJob((current) => ({ ...current, [key]: value }));

  const save = async (event) => {
    event.preventDefault();
    if (!supabase || !company) return;
    if (!job.title.trim() || !job.description.trim()) {
      setError("Job title and role description are required.");
      return;
    }

    setSaving(true);
    setSavedAs("");
    setError("");

    const skills = job.skillsText.split(",").map((item) => item.trim()).filter(Boolean).slice(0, 12);
    const payload = {
      company_id: company.id,
      title: job.title.trim(),
      description: job.description.trim(),
      responsibilities: job.responsibilities.trim(),
      requirements: job.requirements.trim(),
      skills,
      salary_min: job.salaryMin === "" ? null : Number(job.salaryMin),
      salary_max: job.salaryMax === "" ? null : Number(job.salaryMax),
      currency: "NGN",
      location: job.location.trim() || null,
      work_type: job.workType,
      employment_type: job.employmentType,
      experience_level: job.experienceLevel,
      industry: job.industry.trim() || company.industry || null,
      published: Boolean(job.published),
      is_demo: false,
    };

    try {
      let result;
      if (editId) {
        result = await supabase.from("jobs").update(payload).eq("id", editId).eq("company_id", company.id).select("*").single();
      } else {
        result = await supabase.from("jobs").insert(payload).select("*").single();
      }
      if (result.error) throw result.error;
      setSavedAs(payload.published ? "published" : "draft");
      window.setTimeout(() => navigate("/employer/jobs"), 350);
    } catch (err) {
      setError(err.message || "Could not save this job.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="jobs-state">Loading job editor…</div>;

  if (!company) return <EmployerOnboarding user={user} onBack={onBack} onComplete={() => navigate("/employer/jobs/new")} />;

  return (
    <div className="jobs-shell">
      <header className="jobs-nav">
        <button className="jobs-back" onClick={() => navigate("/employer/jobs")}><ArrowLeft size={16} /> Your jobs</button>
        <a className="brand" href="#" onClick={(e) => { e.preventDefault(); onBack(); }}>PROOF<span>.</span></a>
        <span className="jobs-nav__label">{editId ? "EDIT ROLE" : "NEW ROLE"}</span>
      </header>

      <main className="employer-form-page employer-form-page--job">
        <div className="employer-form-intro">
          <span className="eyebrow">{editId ? "EDIT ROLE" : "POST A JOB"}</span>
          <h1>{editId ? "Make the opportunity clear." : "Give great people a role worth proving themselves for."}</h1>
          <p>Keep the brief specific. Strong candidates should understand the problem, the work and what you expect before they apply.</p>
        </div>

        <form className="employer-form-card" onSubmit={save}>
          <div className="form-grid">
            <label className="full">Job title<input required value={job.title} onChange={(e) => update("title", e.target.value)} placeholder="e.g. Growth Marketing Lead" /></label>
            <label className="full">About the role<textarea required rows="7" value={job.description} onChange={(e) => update("description", e.target.value)} placeholder="What will this person own? What problem are they being hired to solve?"></textarea></label>
            <label>Responsibilities<textarea rows="7" value={job.responsibilities} onChange={(e) => update("responsibilities", e.target.value)} placeholder={"Own weekly campaigns\nWork with the creative team\nReport growth metrics"}></textarea></label>
            <label>Requirements<textarea rows="7" value={job.requirements} onChange={(e) => update("requirements", e.target.value)} placeholder={"3+ years experience\nStrong communication\nComfort with data"}></textarea></label>
            <label className="full">Skills <span className="field-hint">Comma-separated · up to 12</span><input value={job.skillsText} onChange={(e) => update("skillsText", e.target.value)} placeholder="Digital Marketing, Strategy, Analytics, Content" /></label>
            <label>Salary minimum (₦)<input inputMode="numeric" type="number" min="0" value={job.salaryMin} onChange={(e) => update("salaryMin", e.target.value)} placeholder="250000" /></label>
            <label>Salary maximum (₦)<input inputMode="numeric" type="number" min="0" value={job.salaryMax} onChange={(e) => update("salaryMax", e.target.value)} placeholder="450000" /></label>
            <label>Location<input value={job.location} onChange={(e) => update("location", e.target.value)} placeholder="Lagos, Nigeria" /></label>
            <label>Industry<input value={job.industry} onChange={(e) => update("industry", e.target.value)} placeholder="Marketing & Advertising" /></label>
            <label>Work arrangement
              <select value={job.workType} onChange={(e) => update("workType", e.target.value)}>
                <option>On-site</option><option>Hybrid</option><option>Remote</option>
              </select>
            </label>
            <label>Employment type
              <select value={job.employmentType} onChange={(e) => update("employmentType", e.target.value)}>
                <option>Full-time</option><option>Part-time</option><option>Contract</option><option>Freelance</option><option>Internship</option>
              </select>
            </label>
            <label>Experience level
              <select value={job.experienceLevel} onChange={(e) => update("experienceLevel", e.target.value)}>
                <option>Entry-level</option><option>Mid-level</option><option>Senior</option><option>Lead</option><option>Executive</option>
              </select>
            </label>
          </div>

          <div className="publish-toggle">
            <div>
              <strong>Publish this role now</strong>
              <span>{job.published ? "Candidates can discover and apply immediately." : "Save this as a draft and publish it later."}</span>
            </div>
            <button type="button" className={job.published ? "toggle is-on" : "toggle"} aria-pressed={job.published} onClick={() => update("published", !job.published)}>
              <span />
            </button>
          </div>

          {savedAs && <div className="soft-note"><strong>{savedAs === "published" ? "Role published." : "Draft saved."}</strong><span>Taking you back to your jobs.</span></div>}
          {error && <div className="error-banner">{error}</div>}

          <div className="employer-form-actions">
            <p>{company.name} · {company.location}</p>
            <Button className="button--lime button--large" disabled={saving}>{saving ? "Saving..." : editId ? "Save changes" : job.published ? "Publish job" : "Save draft"} <ArrowUpRight size={18} /></Button>
          </div>
        </form>
      </main>
    </div>
  );
}

function EmployerApplicants({ user, jobId, onBack, onDashboard }) {
  const [job, setJob] = useState(null);
  const [applications, setApplications] = useState([]);
  const [candidates, setCandidates] = useState({});
  const [skillsByCandidate, setSkillsByCandidate] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = async () => {
    if (!supabase || !user) { setLoading(false); return; }
    const jobResult = await supabase
      .from("jobs")
      .select("*, companies(id, name, logo_url, industry, location)")
      .eq("id", jobId)
      .maybeSingle();
    if (jobResult.error) {
      setError(jobResult.error.message);
      setLoading(false);
      return;
    }
    if (!jobResult.data) {
      setError("This role could not be found.");
      setLoading(false);
      return;
    }

    const appResult = await supabase
      .from("applications")
      .select("*")
      .eq("job_id", jobId)
      .order("created_at", { ascending: false });
    if (appResult.error) {
      setError(appResult.error.message);
      setLoading(false);
      return;
    }

    const apps = appResult.data || [];
    const talentIds = [...new Set(apps.map((app) => app.talent_id))];
    let profileData = [];
    let skillData = [];
    if (talentIds.length) {
      const profileResult = await supabase
        .from("profiles")
        .select("id, name, headline, location, public_slug, video_url, published")
        .in("id", talentIds);
      if (profileResult.error) {
        setError(profileResult.error.message);
        setLoading(false);
        return;
      }
      profileData = profileResult.data || [];

      const skillResult = await supabase
        .from("profile_skills")
        .select("profile_id, skill, sort_order")
        .in("profile_id", talentIds)
        .order("sort_order", { ascending: true });
      if (skillResult.error) {
        setError(skillResult.error.message);
        setLoading(false);
        return;
      }
      skillData = skillResult.data || [];
    }

    const candidateMap = {};
    profileData.forEach((profile) => { candidateMap[profile.id] = profile; });
    const skillMap = {};
    skillData.forEach((item) => {
      if (!skillMap[item.profile_id]) skillMap[item.profile_id] = [];
      skillMap[item.profile_id].push(item.skill);
    });

    setJob(jobResult.data);
    setApplications(apps);
    setCandidates(candidateMap);
    setSkillsByCandidate(skillMap);
    setLoading(false);
  };

  useEffect(() => { load(); }, [user, jobId]);

  const updateStatus = async (applicationId, status) => {
    if (!supabase) return;
    const { error: updateError } = await supabase
      .from("applications")
      .update({ status })
      .eq("id", applicationId);
    if (updateError) {
      setError(updateError.message);
      return;
    }
    setApplications((current) => current.map((item) => item.id === applicationId ? { ...item, status } : item));
  };

  if (loading) return <div className="jobs-state">Loading applicants…</div>;
  if (error && !job) return <div className="public-error"><a className="brand" href="#" onClick={(e) => { e.preventDefault(); onDashboard(); }}>PROOF<span>.</span></a><div><span className="eyebrow">APPLICANTS</span><h1>{error}</h1><Button className="button--dark button--large" onClick={onDashboard}>Back to dashboard</Button></div></div>;

  const shortlisted = applications.filter((app) => app.status === "shortlisted").length;
  const interviews = applications.filter((app) => app.status === "interview").length;

  return (
    <div className="jobs-shell">
      <header className="jobs-nav">
        <button className="jobs-back" onClick={onBack}><ArrowLeft size={16} /> Back to jobs</button>
        <a className="brand" href="#" onClick={(e) => { e.preventDefault(); onDashboard(); }}>PROOF<span>.</span></a>
        <span className="jobs-nav__label">{job.companies?.name || "COMPANY"}</span>
      </header>

      <main className="employer-page employer-applicants-page">
        <section className="employer-applicants-head">
          <div>
            <span className="eyebrow">APPLICANTS</span>
            <h1>{job.title}</h1>
            <p>{job.companies?.name || "Your company"} <span>·</span> {job.location || "Flexible"} <span>·</span> {applications.length} applicants</p>
          </div>
          <div className="applicant-summary">
            <div><strong>{shortlisted}</strong><span>shortlisted</span></div>
            <div><strong>{interviews}</strong><span>interviews</span></div>
          </div>
        </section>

        {applications.length === 0 ? (
          <div className="employer-empty">
            <div><span className="eyebrow">NO APPLICANTS YET</span><h2>The role is live. Now let the Proof come in.</h2><p>Share the opportunity to bring the right people into the pipeline.</p></div>
            <Button className="button--dark button--large" onClick={() => navigate("/jobs/" + job.id)}>View public job <Eye size={18} /></Button>
          </div>
        ) : (
          <div className="applicant-list">
            {applications.map((application) => {
              const candidate = candidates[application.talent_id];
              const skills = skillsByCandidate[application.talent_id] || [];
              return (
                <article className="applicant-card" key={application.id}>
                  <div className="applicant-card__visual">
                    {candidate?.video_url ? <video src={candidate.video_url} controls playsInline preload="metadata" /> : <div className="applicant-video-empty"><Video size={24} /><span>No Proof video</span></div>}
                  </div>
                  <div className="applicant-card__body">
                    <div className="applicant-card__top">
                      <div>
                        <span className="eyebrow">PROOF CANDIDATE</span>
                        <h2>{candidate?.name || "Candidate"}</h2>
                        <p>{candidate?.headline || "Profile not available"} {candidate?.location ? <><span>·</span> {candidate.location}</> : null}</p>
                      </div>
                      <span className={"application-status application-status--" + application.status}>{application.status}</span>
                    </div>

                    <div className="selected-skills applicant-skills">
                      {skills.length ? skills.slice(0, 7).map((skill) => <span className="skill-pill static" key={skill}>{skill}</span>) : <span className="empty-note">No skills listed.</span>}
                    </div>

                    {application.message && <div className="applicant-message"><span className="eyebrow">CANDIDATE NOTE</span><p>{application.message}</p></div>}

                    <div className="applicant-card__actions">
                      {candidate?.public_slug && candidate.published ? (
                        <button className="button button--outline button--small" onClick={() => navigate("/p/" + candidate.public_slug)}>View full Proof <ArrowUpRight size={14} /></button>
                      ) : <span className="applicant-private-note">Candidate Proof is not published.</span>}
                      <button className="button button--outline button--small" onClick={async () => { try { await getOrCreateConversation(user.id, application.id); navigate("/messages?application=" + application.id); } catch (err) { setError(err.message || "Could not open messages."); } }}>Message candidate <MessageCircle size={14} /></button>
                      <label className="applicant-status-select">Move to
                        <select value={application.status} onChange={(e) => updateStatus(application.id, e.target.value)}>
                          <option value="applied">Applied</option>
                          <option value="viewed">Viewed</option>
                          <option value="shortlisted">Shortlisted</option>
                          <option value="interview">Interview</option>
                          <option value="offer">Offer</option>
                          <option value="hired">Hired</option>
                          <option value="rejected">Rejected</option>
                        </select>
                      </label>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}

function PublicProfile({ slug, onBack }) {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [education, setEducation] = useState(null);
  const [work, setWork] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      if (!supabase) {
        setError("PROOF is not connected to its database yet.");
        setLoading(false);
        return;
      }

      try {
        const { data: baseProfile, error: profileError } = await supabase
          .from("profiles")
          .select("*")
          .eq("public_slug", slug)
          .eq("published", true)
          .maybeSingle();

        if (profileError) throw profileError;
        if (!baseProfile) {
          setError("We couldn't find this Proof.");
          setLoading(false);
          return;
        }

        const [skillsResult, experiencesResult, educationResult, workResult] = await Promise.all([
          supabase.from("profile_skills").select("skill, sort_order").eq("profile_id", baseProfile.id).order("sort_order"),
          supabase.from("experiences").select("*").eq("profile_id", baseProfile.id).order("sort_order"),
          supabase.from("education").select("*").eq("profile_id", baseProfile.id).limit(1).maybeSingle(),
          supabase.from("portfolio_items").select("*").eq("profile_id", baseProfile.id).order("sort_order"),
        ]);

        if (skillsResult.error) throw skillsResult.error;
        if (experiencesResult.error) throw experiencesResult.error;
        if (educationResult.error) throw educationResult.error;
        if (workResult.error) throw workResult.error;

        if (!cancelled) {
          setProfile(baseProfile);
          setSkills((skillsResult.data || []).map((item) => item.skill));
          setExperiences(experiencesResult.data || []);
          setEducation(educationResult.data || null);
          setWork(workResult.data || []);
          setLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message || "Something went wrong.");
          setLoading(false);
        }
      }
    }

    load();
    return () => { cancelled = true; };
  }, [slug]);

  const share = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title: (profile?.name || "PROOF") + " on PROOF", text: "Check out my PROOF profile.", url });
      } else {
        await navigator.clipboard.writeText(url);
        window.alert("Proof link copied.");
      }
    } catch {
      // User dismissed native sharing or clipboard is unavailable.
    }
  };

  if (loading) return <div className="public-loading">Loading Proof…</div>;

  if (error) {
    return (
      <div className="public-error">
        <a className="brand" href="#" onClick={(e) => { e.preventDefault(); onBack(); }}>PROOF<span>.</span></a>
        <div>
          <span className="eyebrow">PROOF NOT FOUND</span>
          <h1>{error}</h1>
          <Button className="button--dark button--large" onClick={onBack}>Back to PROOF <ArrowUpRight size={18} /></Button>
        </div>
      </div>
    );
  }

  return (
    <div className="public-shell">
      <header className="public-nav">
        <a className="brand" href="#" onClick={(e) => { e.preventDefault(); onBack(); }}>PROOF<span>.</span></a>
        <Button className="button--dark" onClick={share}>Share my Proof <ArrowUpRight size={16} /></Button>
      </header>

      <main className="public-page">
        <section className="public-hero">
          <div className="public-hero__meta">
            <span className="status-pill"><span className="status-dot" /> {profile.intent || "Open to opportunities"}</span>
            <span className="public-label">PROOF PROFILE</span>
          </div>

          <div className="public-identity">
            <div className="public-avatar">{(profile.name || "P").split(" ").map((p) => p[0]).slice(0, 2).join("").toUpperCase()}</div>
            <div>
              <h1>{profile.name || "Your name"}</h1>
              <p>{profile.headline || "Professional"} {profile.location ? <><span>·</span> {profile.location}</> : null}</p>
            </div>
          </div>

          <div className="public-main-grid">
            <div>
              <div className="public-video">
                {profile.video_url ? <video src={profile.video_url} controls playsInline preload="metadata" /> : <div className="public-video__empty"><Video size={30} /><span>No Proof video added yet.</span></div>}
              </div>
            </div>

            <aside className="public-side">
              <div className="public-section">
                <span className="eyebrow">ABOUT</span>
                <p>{profile.bio || "This person hasn't added an introduction yet."}</p>
              </div>

              <div className="public-section">
                <span className="eyebrow">SKILLS</span>
                <div className="selected-skills">
                  {skills.length ? skills.map((skill) => <span className="skill-pill static" key={skill}>{skill}</span>) : <span className="empty-note">No skills listed yet.</span>}
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="public-content">
          <div className="public-content__section">
            <span className="eyebrow">EXPERIENCE</span>
            {experiences.length ? experiences.map((item) => (
              <article className="public-item" key={item.id}>
                <div className="public-item__year">{item.start_date ? formatDate(item.start_date) : ""}{item.current ? " — Present" : item.end_date ? " — " + formatDate(item.end_date) : ""}</div>
                <div>
                  <h2>{item.role || "Role"}</h2>
                  <span>{item.company || "Independent"} </span>
                  {item.description && <p>{item.description}</p>}
                  {item.achievements && <strong className="public-result">{item.achievements}</strong>}
                </div>
              </article>
            )) : <p className="empty-copy">Experience will appear here.</p>}
          </div>

          <div className="public-content__section">
            <span className="eyebrow">WORK</span>
            {work.length ? (
              <div className="public-work-grid">
                {work.map((item) => (
                  <article className="public-work-card" key={item.id}>
                    <span className="work-label">PROJECT</span>
                    <h2>{item.title || "Project"}</h2>
                    {item.role && <p className="work-role">{item.role}</p>}
                    {item.description && <p>{item.description}</p>}
                    {item.result && <strong>{item.result}</strong>}
                    {item.url && <a href={item.url} target="_blank" rel="noreferrer">View project <ArrowUpRight size={15} /></a>}
                  </article>
                ))}
              </div>
            ) : <p className="empty-copy">Projects will appear here.</p>}
          </div>

          {education && (
            <div className="public-content__section">
              <span className="eyebrow">EDUCATION</span>
              <article className="public-item">
                <div className="public-item__year">{education.start_year || ""}{education.end_year ? " — " + education.end_year : ""}</div>
                <div><h2>{education.qualification || "Education"}</h2><span>{education.institution}</span>{education.field && <p>{education.field}</p>}</div>
              </article>
            </div>
          )}
        </section>

        <section className="public-bottom-cta">
          <span className="eyebrow">THIS IS THEIR PROOF</span>
          <h2>See the person.<br />See the work.</h2>
          <Button className="button--lime button--large" onClick={share}>Share this Proof <ArrowUpRight size={18} /></Button>
        </section>
      </main>

      <footer className="public-footer">
        <a className="brand" href="#" onClick={(e) => { e.preventDefault(); onBack(); }}>PROOF<span>.</span></a>
        <span>People. Skills. Opportunities.</span>
      </footer>
    </div>
  );
}

class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  componentDidCatch(error) {
    console.error("PROOF app error:", error);
  }
  render() {
    if (this.state.error) {
      return (
        <div className="public-error">
          <div>
            <span className="eyebrow">PROOF</span>
            <h1>Something went wrong.</h1>
            <p style={{ maxWidth: "560px", margin: "0 auto 24px", color: "#777872", lineHeight: 1.6 }}>
              The app hit an unexpected browser error. Refresh the page to try again.
            </p>
            <Button className="button--dark button--large" onClick={() => window.location.reload()}>
              Refresh PROOF <ArrowUpRight size={18} />
            </Button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  const getRoute = () => {
    const path = window.location.pathname;
    const publicMatch = path.match(/^\/p\/([^/]+)/);
    const jobMatch = path.match(/^\/jobs\/([^/]+)/);
    if (publicMatch) return { type: "public", slug: publicMatch[1] };
    if (jobMatch) return { type: "job", id: jobMatch[1] };
    if (path === "/jobs") return { type: "jobs" };
    if (path === "/build") return { type: "build" };
    const employerApplicantsMatch = path.match(/^\/employer\/jobs\/([^/]+)\/applicants$/);
    const employerNewJobPath = path === "/employer/jobs/new";
    if (employerApplicantsMatch) return { type: "employerApplicants", id: employerApplicantsMatch[1] };
    if (employerNewJobPath) return { type: "employerJobForm" };
    if (path === "/employer/onboarding") return { type: "employerOnboarding" };
    if (path === "/employer/jobs") return { type: "employerJobs" };
    if (path === "/employer") return { type: "employer" };
    if (path === "/messages") return { type: "messages" };
    if (path === "/founding-100") return { type: "founding100" };
    if (path === "/admin") return { type: "admin" };
    if (path === "/candidate/applications") return { type: "applications" };
    if (new URLSearchParams(window.location.search).get("auth") === "1") return { type: "auth" };
    return { type: "landing" };
  };

  const [route, setRoute] = useState(getRoute);
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [checkingSession, setCheckingSession] = useState(true);

  useEffect(() => {
    const onPopState = () => setRoute(getRoute());
    window.addEventListener("popstate", onPopState);

    let listener = null;
    let cancelled = false;

    async function boot() {
      try {
        if (!supabase) return;

        const { data, error } = await Promise.race([
          supabase.auth.getSession(),
          new Promise((resolve) => window.setTimeout(() => resolve({ data: { session: null }, error: new Error("Supabase session check timed out.") }), 6000)),
        ]);

        if (cancelled) return;
        if (error) console.warn("PROOF session bootstrap:", error.message);

        const sessionUser = data?.session?.user ?? null;
        setUser(sessionUser);

        if (sessionUser) {
          const { data: profileData, error: profileError } = await supabase
            .from("profiles")
            .select("role")
            .eq("id", sessionUser.id)
            .maybeSingle();

          if (profileError) console.warn("PROOF profile bootstrap:", profileError.message);
          setUserRole(profileData?.role || "talent");
        } else {
          setUserRole(null);
        }
      } catch (error) {
        console.warn("PROOF startup fallback:", error);
        if (!cancelled) {
          setUser(null);
          setUserRole(null);
        }
      } finally {
        if (!cancelled) setCheckingSession(false);
      }
    }

    if (!supabase) {
      setCheckingSession(false);
    } else {
      boot();
      try {
        const subscription = supabase.auth.onAuthStateChange((_event, session) => {
          const nextUser = session?.user ?? null;
          setUser(nextUser);
          if (!nextUser) {
            setUserRole(null);
            return;
          }
          window.setTimeout(async () => {
            try {
              const { data: profileData } = await supabase.from("profiles").select("role").eq("id", nextUser.id).maybeSingle();
              if (!cancelled) setUserRole(profileData?.role || "talent");
            } catch (error) {
              console.warn("PROOF auth-state profile lookup:", error);
            }
          }, 0);
        });
        listener = subscription.data?.subscription ? subscription : null;
      } catch (error) {
        console.warn("PROOF auth listener:", error);
      }
    }

    return () => {
      cancelled = true;
      listener?.data?.subscription?.unsubscribe?.();
      window.removeEventListener("popstate", onPopState);
    };
  }, []);

  const goLanding = () => navigate("/");
  const goAuth = () => navigate("/?auth=1");
  const goJobs = () => navigate("/jobs");
  const goApplications = () => navigate("/candidate/applications");
  const goEmployer = () => navigate("/employer");
  const goEmployerJobs = () => navigate("/employer/jobs");

  if (checkingSession) return <div className="loading-screen">Loading PROOF…</div>;

  if (route.type === "public") {
    return <PublicProfile slug={route.slug} onBack={goLanding} />;
  }

  if (route.type === "founding100") {
    return <Founding100Page onBack={goLanding} onAuth={goAuth} />;
  }

  if (route.type === "admin") {
    if (!user) {
      goAuth();
      return null;
    }
    if (userRole !== "admin") {
      return (
        <div className="public-error">
          <a className="brand" href="#" onClick={(e) => { e.preventDefault(); goLanding(); }}>PROOF<span>.</span></a>
          <div>
            <span className="eyebrow">PRIVATE AREA</span>
            <h1>Admin access only.</h1>
            <p style={{ maxWidth: "520px", margin: "0 auto 24px", color: "#777872", lineHeight: 1.6 }}>
              This is the private beta command center. Your current account does not have admin access.
            </p>
            <div style={{ display: "flex", gap: "9px", justifyContent: "center", flexWrap: "wrap" }}>
              <Button className="button--dark button--large" onClick={goLanding}>Back to PROOF <ArrowUpRight size={18} /></Button>
              <Button className="button--outline button--large" onClick={async () => { await supabase?.auth.signOut(); goAuth(); }}>Sign out</Button>
            </div>
          </div>
        </div>
      );
    }
    return <AdminPage user={user} onBack={goLanding} onSignOut={async () => { await supabase?.auth.signOut(); goLanding(); }} />;
  }


  if (route.type === "auth") {
    return <AuthScreen onExit={goLanding} onAuthenticated={(authenticatedUser, authenticatedRole) => {
      setUser(authenticatedUser);
      setUserRole(authenticatedRole || "talent");
      navigate(authenticatedRole === "employer" ? "/employer" : "/build");
    }} />;
  }

  if (route.type === "build") {
    if (!user) {
      goAuth();
      return null;
    }
    return <Onboarding user={user} onExit={goLanding} onPublished={(slug) => navigate("/p/" + slug)} />;
  }

  if (route.type === "jobs") {
    return <JobsPage user={user} userRole={userRole} onBack={goLanding} onAuth={goAuth} onApplications={goApplications} onEmployer={goEmployer} />;
  }

  if (route.type === "job") {
    return <JobDetails jobId={route.id} user={user} userRole={userRole} onBack={goJobs} onAuth={goAuth} onApplications={goApplications} onEmployer={goEmployer} />;
  }

  if (route.type === "messages") {
    if (!user) { goAuth(); return null; }
    return <MessagesPage user={user} userRole={userRole} onBack={goLanding} onEmployer={goEmployer} onJobs={goJobs} />;
  }

  if (route.type === "applications") {
    if (!user) {
      goAuth();
      return null;
    }
    if (userRole === "employer") return <EmployerDashboard user={user} onBack={goLanding} onJobs={goEmployerJobs} />;
    return <ApplicationsPage user={user} onBack={goLanding} onJobs={goJobs} onAuth={goAuth} />;
  }

  if (route.type === "employerOnboarding" || route.type === "employer" || route.type === "employerJobs" || route.type === "employerJobForm" || route.type === "employerApplicants") {
    if (!user) { goAuth(); return null; }
    if (userRole !== "employer") {
      return <div className="public-error"><a className="brand" href="#" onClick={(e) => { e.preventDefault(); goLanding(); }}>PROOF<span>.</span></a><div><span className="eyebrow">EMPLOYER AREA</span><h1>This space is for hiring accounts.</h1><p style={{maxWidth: "520px", margin: "0 auto 24px", color: "#777872", lineHeight: 1.6}}>Your current account is set up for talent. Sign out and create an employer account to post roles and review applicants.</p><div style={{display:"flex", gap:"9px", justifyContent:"center", flexWrap:"wrap"}}><Button className="button--dark button--large" onClick={goLanding}>Back to PROOF <ArrowUpRight size={18} /></Button><Button className="button--outline button--large" onClick={async () => { await supabase?.auth.signOut(); goAuth(); }}>Sign out</Button></div></div></div>;
    }
    if (route.type === "employerOnboarding") return <EmployerOnboarding user={user} onBack={goEmployer} onComplete={() => navigate("/employer")} />;
    if (route.type === "employer") return <EmployerDashboard user={user} onBack={goLanding} onJobs={goEmployerJobs} />;
    if (route.type === "employerJobs") return <EmployerJobsPage user={user} onBack={goLanding} />;
    if (route.type === "employerJobForm") return <EmployerJobForm user={user} onBack={goEmployerJobs} />;
    return <EmployerApplicants user={user} jobId={route.id} onBack={goEmployerJobs} onDashboard={goEmployer} />;
  }


  return <LandingPage onStart={() => user ? navigate("/build") : goAuth()} onHire={() => user && userRole === "employer" ? goEmployer() : goAuth()} />;
}

createRoot(document.getElementById("root")).render(<AppErrorBoundary><App /></AppErrorBoundary>);
