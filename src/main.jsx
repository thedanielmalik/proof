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
  Sparkles,
  Video,
  X,
} from "lucide-react";
import "./styles.css";

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
        <span className="eyebrow eyebrow--dark">PROOF PROFILE</span>
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

function LandingPage({ onStart }) {
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
              <Button className="button--outline button--large" onClick={() => scrollTo("employers")}>I'm hiring talent</Button>
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
              <Button className="button--lime button--large" onClick={() => scrollTo("cta")}>Find talent <ArrowUpRight size={18} /></Button>
            </div>
            <div className="employer-list">
              <div className="employer-list__head"><span>Talent you can understand</span><span>View all</span></div>
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
              <button className="button button--outline button--large" onClick={() => scrollTo("employers")}>I'm hiring talent</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div><a className="brand" href="#">PROOF<span>.</span></a><p>People. Skills. Opportunities.</p></div>
        <div className="footer__links"><a href="#talent">For talent</a><a href="#employers">For employers</a><a href="#how">How it works</a><a href="#">Privacy</a><a href="#">Terms</a></div>
        <span className="footer__copy">© 2026 PROOF — Demo</span>
      </footer>
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

function Onboarding({ onExit }) {
  const [stepIndex, setStepIndex] = useState(0);
  const [saving, setSaving] = useState(false);
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

  const publish = () => {
    window.localStorage.setItem("proof-published-demo", "true");
    setStepIndex(onboardingSteps.length - 1);
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

function App() {
  const [mode, setMode] = useState("landing");
  return mode === "landing"
    ? <LandingPage onStart={() => { window.scrollTo({ top: 0 }); setMode("onboarding"); }} />
    : <Onboarding onExit={() => setMode("landing")} />;
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
