import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Clock3,
  RefreshCw,
  Search,
  UsersRound,
} from "lucide-react";
import { supabase } from "./lib/supabase";

const statusLabels = {
  applied: "Applied",
  viewed: "Viewed",
  shortlisted: "Shortlisted",
  interview: "Interview",
  offer: "Offer",
  hired: "Hired",
  rejected: "Rejected",
};

function StatCard({ label, value, detail, icon: Icon }) {
  return (
    <div className="admin-stat-card">
      <div className="admin-stat-card__top">
        <span>{label}</span>
        {Icon ? <Icon size={18} /> : null}
      </div>
      <strong>{value}</strong>
      {detail ? <small>{detail}</small> : null}
    </div>
  );
}

function FunnelStep({ label, value, note }) {
  return (
    <div className="admin-funnel-step">
      <div className="admin-funnel-step__value">{value}</div>
      <div>
        <strong>{label}</strong>
        <span>{note}</span>
      </div>
    </div>
  );
}

export default function AdminPage({ user, onBack, onSignOut }) {
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");
  const [profiles, setProfiles] = useState([]);
  const [signups, setSignups] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [tab, setTab] = useState("overview");
  const [search, setSearch] = useState("");

  const load = async ({ initial = false } = {}) => {
    if (!supabase) {
      setError("PROOF is not connected to its database.");
      setLoading(false);
      return;
    }

    if (initial) setLoading(true);
    else setRefreshing(true);
    setError("");

    try {
      const [profilesResult, signupsResult, companiesResult, jobsResult, applicationsResult] = await Promise.all([
        supabase
          .from("profiles")
          .select("id,name,role,location,headline,published,public_slug,created_at,updated_at")
          .order("created_at", { ascending: false }),
        supabase
          .from("founding_100_signups")
          .select("id,full_name,email,role,location,focus,company,notes,source,created_at")
          .order("created_at", { ascending: false }),
        supabase
          .from("companies")
          .select("id,owner_id,name,industry,location,is_demo,created_at")
          .order("created_at", { ascending: false }),
        supabase
          .from("jobs")
          .select("id,company_id,title,published,is_demo,created_at,location,work_type,employment_type")
          .order("created_at", { ascending: false }),
        supabase
          .from("applications")
          .select("id,job_id,talent_id,status,created_at,updated_at")
          .order("created_at", { ascending: false }),
      ]);

      for (const result of [profilesResult, signupsResult, companiesResult, jobsResult, applicationsResult]) {
        if (result.error) throw result.error;
      }

      setProfiles(profilesResult.data || []);
      setSignups(signupsResult.data || []);
      setCompanies(companiesResult.data || []);
      setJobs(jobsResult.data || []);
      setApplications(applicationsResult.data || []);
    } catch (err) {
      setError(err.message || "Could not load the beta command center.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    load({ initial: true });
  }, []);

  const talentCount = profiles.filter((profile) => profile.role === "talent").length;
  const employerCount = profiles.filter((profile) => profile.role === "employer").length;
  const publishedCount = profiles.filter((profile) => profile.role === "talent" && profile.published).length;
  const activeJobs = jobs.filter((job) => job.published).length;
  const viewedApplications = applications.filter((application) => application.status !== "applied").length;
  const connectedApplications = applications.filter((application) =>
    ["shortlisted", "interview", "offer", "hired"].includes(application.status)
  ).length;
  const hiredCount = applications.filter((application) => application.status === "hired").length;

  const companyById = useMemo(
    () => Object.fromEntries(companies.map((company) => [company.id, company])),
    [companies]
  );
  const profileById = useMemo(
    () => Object.fromEntries(profiles.map((profile) => [profile.id, profile])),
    [profiles]
  );
  const jobById = useMemo(
    () => Object.fromEntries(jobs.map((job) => [job.id, job])),
    [jobs]
  );

  const locations = useMemo(() => {
    const counts = new Map();
    for (const row of signups) {
      const location = row.location?.trim() || "Not provided";
      counts.set(location, (counts.get(location) || 0) + 1);
    }
    return [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 8);
  }, [signups]);

  const sources = useMemo(() => {
    const counts = new Map();
    for (const row of signups) {
      const source = row.source?.split("&")[0]?.replace("utm_source=", "") || "Direct";
      counts.set(source, (counts.get(source) || 0) + 1);
    }
    return [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 8);
  }, [signups]);

  const filteredPeople = useMemo(() => {
    const needle = search.trim().toLowerCase();
    if (!needle) return profiles;
    return profiles.filter((profile) =>
      [profile.name, profile.role, profile.location, profile.headline]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(needle)
    );
  }, [profiles, search]);

  const filteredSignups = useMemo(() => {
    const needle = search.trim().toLowerCase();
    if (!needle) return signups;
    return signups.filter((signup) =>
      [signup.full_name, signup.email, signup.role, signup.location, signup.focus, signup.company, signup.source]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(needle)
    );
  }, [signups, search]);

  if (loading) {
    return <div className="admin-loading">Loading beta command center…</div>;
  }

  if (error) {
    return (
      <div className="admin-shell admin-shell--error">
        <header className="admin-nav">
          <button className="back-home" onClick={onBack}><ArrowLeft size={16} /> Back</button>
          <a className="brand" href="#" onClick={(event) => { event.preventDefault(); onBack(); }}>PROOF<span>.</span></a>
          <button className="button button--outline button--small" onClick={() => load({ initial: true })}>Try again</button>
        </header>
        <main className="admin-empty">
          <span className="eyebrow">BETA COMMAND CENTER</span>
          <h1>We couldn’t load your beta data.</h1>
          <p>{error}</p>
        </main>
      </div>
    );
  }

  return (
    <div className="admin-shell">
      <header className="admin-nav">
        <button className="back-home" onClick={onBack}><ArrowLeft size={16} /> PROOF</button>
        <div className="admin-nav__title">
          <span className="eyebrow">PRIVATE</span>
          <strong>Beta Command Center</strong>
        </div>
        <div className="admin-nav__actions">
          <button className="button button--outline button--small" onClick={() => load()} disabled={refreshing}>
            <RefreshCw size={15} className={refreshing ? "spin" : ""} /> Refresh
          </button>
          <button className="button button--ghost button--small" onClick={onSignOut}>Sign out</button>
        </div>
      </header>

      <main className="admin-page">
        <section className="admin-hero">
          <div>
            <span className="eyebrow">FIRST 100</span>
            <h1>See what is happening inside the beta.</h1>
            <p>Use this space to watch activation, spot drop-offs and decide who needs a follow-up.</p>
          </div>
          <div className="admin-hero__badge">
            <span>Founding 100</span>
            <strong>{signups.length}</strong>
            <small>registered so far</small>
          </div>
        </section>

        <section className="admin-stats-grid">
          <StatCard label="Talent" value={talentCount} detail={publishedCount + " Proof profiles live"} icon={UsersRound} />
          <StatCard label="Employers" value={employerCount} detail={companies.filter((company) => !company.is_demo).length + " real company records"} icon={BriefcaseBusiness} />
          <StatCard label="Live jobs" value={activeJobs} detail={jobs.length + " total jobs"} icon={BriefcaseBusiness} />
          <StatCard label="Applications" value={applications.length} detail={hiredCount + " hired"} icon={Check} />
        </section>

        <section className="admin-funnel">
          <div className="admin-section-heading">
            <div>
              <span className="eyebrow">ACTIVATION</span>
              <h2>Follow the beta loop.</h2>
            </div>
            <span className="admin-muted">Current database state</span>
          </div>
          <div className="admin-funnel-grid">
            <FunnelStep label="Signed up" value={signups.length} note="Founding 100 entries" />
            <FunnelStep label="Account created" value={profiles.length} note="Profiles in PROOF" />
            <FunnelStep label="Profile published" value={publishedCount} note="Talent with a live Proof" />
            <FunnelStep label="Applied" value={applications.length ? new Set(applications.map((item) => item.talent_id)).size : 0} note="Unique talents who applied" />
            <FunnelStep label="Connected" value={connectedApplications} note="Shortlist, interview, offer or hired" />
            <FunnelStep label="Hired" value={hiredCount} note="Applications marked hired" />
          </div>
        </section>

        <section className="admin-workspace">
          <div className="admin-tabs">
            {[
              ["overview", "Overview"],
              ["signups", "Founding 100"],
              ["people", "People"],
              ["jobs", "Jobs"],
              ["applications", "Applications"],
            ].map(([key, label]) => (
              <button key={key} className={tab === key ? "admin-tab is-active" : "admin-tab"} onClick={() => { setTab(key); setSearch(""); }}>
                {label}
              </button>
            ))}
          </div>

          {(tab === "signups" || tab === "people") && (
            <div className="admin-toolbar">
              <div className="admin-search">
                <Search size={16} />
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder={tab === "people" ? "Search people..." : "Search names, email, company..."}
                />
              </div>
            </div>
          )}

          {tab === "overview" && (
            <div className="admin-overview-grid">
              <div className="admin-panel">
                <div className="admin-panel__head"><span>Top locations</span><small>{signups.length} signups</small></div>
                {locations.length ? locations.map(([location, count]) => (
                  <div className="admin-list-row" key={location}><span>{location}</span><strong>{count}</strong></div>
                )) : <p className="admin-empty-copy">No locations captured yet.</p>}
              </div>

              <div className="admin-panel">
                <div className="admin-panel__head"><span>Signup sources</span><small>UTM / referrer</small></div>
                {sources.length ? sources.map(([source, count]) => (
                  <div className="admin-list-row" key={source}><span>{source}</span><strong>{count}</strong></div>
                )) : <p className="admin-empty-copy">No source data captured yet.</p>}
              </div>

              <div className="admin-panel admin-panel--wide">
                <div className="admin-panel__head"><span>Recent Founding 100</span><button onClick={() => setTab("signups")}>View all <ArrowUpRight size={14} /></button></div>
                {signups.slice(0, 8).map((signup) => (
                  <div className="admin-signup-row" key={signup.id}>
                    <div className="admin-avatar">{(signup.full_name || "P").split(" ").map((part) => part[0]).slice(0, 2).join("").toUpperCase()}</div>
                    <div className="admin-row-main"><strong>{signup.full_name}</strong><span>{signup.role === "employer" ? signup.company || "Employer" : signup.focus || "Talent"}</span></div>
                    <div className="admin-row-meta"><span>{signup.location || "—"}</span><small>{new Date(signup.created_at).toLocaleDateString("en-NG")}</small></div>
                  </div>
                ))}
                {!signups.length && <p className="admin-empty-copy">Your first beta signup will appear here.</p>}
              </div>
            </div>
          )}

          {tab === "signups" && (
            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead><tr><th>Person</th><th>Lane</th><th>Focus</th><th>Location</th><th>Source</th><th>Joined</th></tr></thead>
                <tbody>
                  {filteredSignups.map((signup) => (
                    <tr key={signup.id}>
                      <td><strong>{signup.full_name}</strong><span>{signup.email}</span></td>
                      <td><span className="admin-pill">{signup.role}</span></td>
                      <td>{signup.role === "employer" ? signup.company || signup.focus || "—" : signup.focus || "—"}</td>
                      <td>{signup.location || "—"}</td>
                      <td>{signup.source?.split("&")[0]?.replace("utm_source=", "") || "Direct"}</td>
                      <td>{new Date(signup.created_at).toLocaleDateString("en-NG")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {!filteredSignups.length && <div className="admin-empty-copy admin-empty-copy--table">No matching beta signups.</div>}
            </div>
          )}

          {tab === "people" && (
            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead><tr><th>Person</th><th>Role</th><th>Location</th><th>Profile</th><th>Created</th></tr></thead>
                <tbody>
                  {filteredPeople.map((profile) => (
                    <tr key={profile.id}>
                      <td><strong>{profile.name || "Unnamed"}</strong><span>{profile.headline || "No headline yet"}</span></td>
                      <td><span className="admin-pill">{profile.role}</span></td>
                      <td>{profile.location || "—"}</td>
                      <td>{profile.role === "talent" ? (profile.published ? <span className="admin-live"><Check size={13} /> Live</span> : <span className="admin-warning"><Clock3 size={13} /> Draft</span>) : "Employer workspace"}</td>
                      <td>{new Date(profile.created_at).toLocaleDateString("en-NG")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {!filteredPeople.length && <div className="admin-empty-copy admin-empty-copy--table">No matching people.</div>}
            </div>
          )}

          {tab === "jobs" && (
            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead><tr><th>Role</th><th>Company</th><th>Mode</th><th>Status</th><th>Created</th></tr></thead>
                <tbody>
                  {jobs.map((job) => (
                    <tr key={job.id}>
                      <td><strong>{job.title || "Untitled role"}</strong><span>{job.employment_type || "—"}{job.work_type ? " · " + job.work_type : ""}</span></td>
                      <td>{companyById[job.company_id]?.name || "Unknown company"}</td>
                      <td>{job.location || "—"}</td>
                      <td>{job.published ? <span className="admin-live"><Check size={13} /> Published</span> : <span className="admin-warning"><Clock3 size={13} /> Draft</span>}</td>
                      <td>{new Date(job.created_at).toLocaleDateString("en-NG")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {!jobs.length && <div className="admin-empty-copy admin-empty-copy--table">No jobs yet.</div>}
            </div>
          )}

          {tab === "applications" && (
            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead><tr><th>Talent</th><th>Role</th><th>Company</th><th>Status</th><th>Applied</th></tr></thead>
                <tbody>
                  {applications.map((application) => {
                    const talent = profileById[application.talent_id];
                    const job = jobById[application.job_id];
                    const company = job ? companyById[job.company_id] : null;
                    return (
                      <tr key={application.id}>
                        <td><strong>{talent?.name || "Unknown talent"}</strong><span>{talent?.headline || "—"}</span></td>
                        <td>{job?.title || "Unknown role"}</td>
                        <td>{company?.name || "Unknown company"}</td>
                        <td><span className={"admin-status admin-status--" + application.status}>{statusLabels[application.status] || application.status}</span></td>
                        <td>{new Date(application.created_at).toLocaleDateString("en-NG")}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {!applications.length && <div className="admin-empty-copy admin-empty-copy--table">No applications yet.</div>}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
