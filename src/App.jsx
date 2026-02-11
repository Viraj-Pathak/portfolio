// src/App.jsx

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const NAME = "Viraj Hemangkumar Pathak";
const ROLE = "AI/ML Engineer";
const LOCATION = "Dallas, Texas";

const LINKEDIN_URL = "https://www.linkedin.com/in/viraj-pathak-3a19551b8/";
const GITHUB_URL = "https://github.com/Viraj-Pathak";
const EMAIL = "viraj.pathak1022@gmail.com";

const RESUME_URL = `${import.meta.env.BASE_URL}resume.pdf`;
const PROFILE_IMG_URL = `${import.meta.env.BASE_URL}profile.jpeg`; // <-- JPEG in public/

function Section({ id, title, subtitle, children }) {
  return (
    <motion.section
      id={id}
      className="section"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="section-title">{title}</h2>
      {subtitle ? (
        <p className="muted" style={{ marginTop: 0 }}>
          {subtitle}
        </p>
      ) : null}
      <div style={{ marginTop: 14 }}>{children}</div>
    </motion.section>
  );
}

function ScrollLink({ to, children }) {
  return (
    <a
      href={to}
      onClick={(e) => {
        e.preventDefault();
        const el = document.querySelector(to);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      }}
    >
      {children}
    </a>
  );
}

export default function App() {
  const projects = useMemo(
    () => [
      {
        title: "Enterprise AI Reliability Intelligence Platform",
        role: "Machine Learning & Backend Developer",
        tech: ["Python", "FastAPI", "Scikit-learn", "REST APIs", "Cloud Monitoring"],
        github: "https://github.com/Viraj-Pathak/enterprise-ai-reliability-platform",
        bullets: [
          "Designed and deployed a predictive analytics platform for proactive infrastructure failure prediction and anomaly detection.",
          "Built scalable REST APIs for real-time ML inference pipelines integrated with backend systems.",
          "Improved operational decision-making using predictive workflows and automated incident risk scoring.",
        ],
      },
      {
        title: "AI Resume Screening System",
        role: "Full Stack ML Engineer",
        tech: ["Python", "Flask", "NLP", "Transformers", "Scikit-learn", "Backend APIs"],
        github: "https://github.com/Viraj-Pathak/ai_resume_screening",
        bullets: [
          "Developed an automated recruitment solution using NLP and transformer-based models for resume evaluation.",
          "Implemented parsing and semantic scoring pipelines to match candidates with job requirements.",
          "Reduced manual screening workload through AI-driven candidate ranking automation.",
        ],
      },
      {
        title: "Cloud Failure Predictor",
        role: "Machine Learning Developer",
        tech: ["Python", "Predictive Modeling", "Data Analysis"],
        github: "https://github.com/Viraj-Pathak/cloud-failure-predictor",
        bullets: [
          "Built a predictive solution for cloud failure risk estimation using supervised ML algorithms.",
          "Enabled proactive mitigation via risk scoring and failure classification.",
          "Integrated predictive outputs into operational dashboards for monitoring teams.",
        ],
      },
      {
        title: "Face and Hand Landmark Detection System",
        role: "Computer Vision Developer",
        tech: ["Python", "Computer Vision", "Image Processing"],
        github: "https://github.com/Viraj-Pathak/Face-Hand-Landmark-AI-Project",
        bullets: [
          "Implemented a real-time landmark detection system to map facial and hand movements.",
          "Used AI-based feature extraction for accurate landmark tracking.",
          "Applied the system to gesture recognition and interactive applications.",
        ],
      },
      {
        title: "Hotel Management System",
        role: "Full Stack Developer",
        tech: ["Python", "Backend Development", "Database Integration"],
        github: "https://github.com/Viraj-Pathak/Hotel-Management-System",
        bullets: [
          "Developed a hotel management platform supporting reservations, room allocation, and customer records.",
          "Implemented backend business logic and database operations for booking workflows.",
          "Improved operational efficiency through centralized management dashboards.",
        ],
      },
      {
        title: "Gold Price Prediction Model",
        role: "Data Scientist",
        tech: ["Python", "Pandas", "NumPy", "Machine Learning", "Time Series"],
        github: "https://github.com/Viraj-Pathak/Gold-Price-Predictions-",
        bullets: [
          "Built a time-series forecasting model to predict gold price trends using historical data.",
          "Performed preprocessing, feature engineering, and regression modeling for improved accuracy.",
          "Generated insights through visualization and exploratory data analysis.",
        ],
      },
    ],
    []
  );

  const publication = useMemo(
    () => ({
      title: "Heart Disease Prediction Using Machine Learning",
      venue: "International Journal of All Research Education and Scientific Methods",
      date: "July 2022",
      bullets: [
        "Proposed a healthcare analytics solution using ML algorithms for early detection of heart disease risks.",
        "Improved predictive performance through feature engineering and clinical data analysis.",
      ],
    }),
    []
  );

  const skillGroups = useMemo(
    () => [
      { label: "Languages", items: ["Python", "SQL", "Scala", "Bash"] },
      { label: "ML", items: ["Random Forest", "XGBoost", "LightGBM", "SVM", "KNN", "Regression"] },
      { label: "Deep Learning", items: ["TensorFlow", "Keras", "PyTorch"] },
      { label: "NLP and GenAI", items: ["Transformers", "BERT", "Hugging Face", "spaCy", "NLTK"] },
      { label: "Data and Big Data", items: ["Pandas", "NumPy", "PySpark", "Apache Spark", "Kafka", "Hadoop"] },
      {
        label: "Cloud and MLOps",
        items: ["AWS (S3, EC2, SageMaker, Lambda, Glue)", "MLflow", "Kubeflow", "Drift Detection", "CI/CD"],
      },
      {
        label: "Databases and DevOps",
        items: ["PostgreSQL", "MySQL", "MongoDB", "Snowflake", "Docker", "Kubernetes", "GitHub Actions", "Jenkins"],
      },
    ],
    []
  );

  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState({ state: "idle", text: "" });

  function onChange(e) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  async function onSubmit(e) {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ state: "error", text: "Please fill name, email, and message." });
      return;
    }

    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

    try {
      setStatus({ state: "loading", text: "Sending..." });

      if (endpoint) {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(form),
        });
        if (!res.ok) throw new Error("submit failed");

        setStatus({ state: "success", text: "Sent. I will get back to you soon." });
        setForm({ name: "", email: "", company: "", message: "" });
        return;
      }

      const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\n\nMessage:\n${form.message}`
      );
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
      setStatus({ state: "success", text: "Opening your email client..." });
    } catch {
      setStatus({ state: "error", text: "Could not send. Try again." });
    }
  }

  return (
    <div className="page">
      <header className="nav">
        <div className="nav-inner">
          <div className="brand" aria-label="Brand">
            <span className="brand-dot" />
          </div>

          <nav className="nav-links">
            <ScrollLink to="#about">About</ScrollLink>
            <ScrollLink to="#experience">Experience</ScrollLink>
            <ScrollLink to="#projects">Projects</ScrollLink>
            <ScrollLink to="#skills">Skills</ScrollLink>
            <ScrollLink to="#publications">Publications</ScrollLink>
            <ScrollLink to="#contact">Contact</ScrollLink>
          </nav>
        </div>
      </header>

      <main className="container">
        <section className="hero">
          <motion.div
            className="hero-left"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="kicker">Production ML • Healthcare and Insurance • MLOps</div>

            <h1 className="hero-title">
              Hi, I am <span>{NAME}</span>
              <br />
              {ROLE} based in {LOCATION}
            </h1>

            <p className="hero-subtitle">
              I build production-grade ML systems end to end, from data pipelines and evaluation to deployment, monitoring, and
              iteration. I focus on measurable outcomes, reliability, and clean engineering that helps teams ship confidently.
            </p>

            <div className="hero-sub">
              <span className="pill">{LOCATION}</span>
              <span className="pill">End-to-end ML</span>
              <span className="pill">MLOps</span>
              <span className="pill">NLP</span>
              <span className="pill">AWS</span>
              <span className="pill">Python</span>
              <span className="pill">SQL</span>
            </div>

            <div className="actions">
              <Button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
                View Projects
              </Button>

              <Button variant="outline" onClick={() => window.open(RESUME_URL, "_blank", "noopener,noreferrer")}>
                Resume
              </Button>

              <Button variant="outline" onClick={() => window.open(LINKEDIN_URL, "_blank", "noopener,noreferrer")}>
                LinkedIn
              </Button>

              <Button variant="outline" onClick={() => window.open(GITHUB_URL, "_blank", "noopener,noreferrer")}>
                GitHub
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="hero-right"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            <div className="avatar-wrap" aria-label="Profile">
              <img className="avatar" src={PROFILE_IMG_URL} alt={`${NAME} profile`} />
            </div>
          </motion.div>
        </section>

        <Section id="about" title="About" subtitle="What I build and how I think about production ML.">
          <Card>
            <CardContent>
              <p className="muted" style={{ marginTop: 0 }}>
                I am an AI/ML Engineer focused on building production-grade machine learning systems end to end. I have delivered
                measurable impact in healthcare analytics by improving predictive accuracy, reducing data processing time, and
                operationalizing real-time inference. I care about reliability, reproducibility, monitoring, and clean interfaces so
                models can ship and stay healthy in production.
              </p>

              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
                <Badge variant="outline">Accuracy +29%</Badge>
                <Badge variant="outline">2.5M+ members supported</Badge>
                <Badge variant="outline">Cost savings $6.8M annually</Badge>
                <Badge variant="outline">99.7% uptime</Badge>
              </div>
            </CardContent>
          </Card>
        </Section>

        <Section id="experience" title="Experience" subtitle="Highlights from roles in healthcare ML and analytics.">
          <div className="grid-2">
            <Card>
              <CardContent>
                <div style={{ fontWeight: 950, fontSize: 16 }}>AI/ML Engineer</div>
                <div className="muted" style={{ marginTop: 6 }}>Humana • USA</div>
                <div className="muted" style={{ marginTop: 4 }}>July 2025 – Present</div>
                <ul className="muted" style={{ margin: "12px 0 0 18px" }}>
                  <li>Improved predictive accuracy by 29% and enabled proactive interventions for 2.5M+ members.</li>
                  <li>Reduced data processing time by 41% using PySpark, SQL, and AWS Glue for claims and EHR data.</li>
                  <li>Increased model recall by 22% through advanced feature engineering and temporal aggregation.</li>
                  <li>Contributed to $6.8M annual cost savings via cost prediction and utilization forecasting models.</li>
                  <li>Operationalized models with AWS SageMaker, Docker, and REST APIs with 99.7% uptime.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <div style={{ fontWeight: 950, fontSize: 16 }}>Machine Learning Engineer</div>
                <div className="muted" style={{ marginTop: 6 }}>CitiusTech • India</div>
                <div className="muted" style={{ marginTop: 4 }}>July 2021 – Nov 2023</div>
                <ul className="muted" style={{ margin: "12px 0 0 18px" }}>
                  <li>Improved model accuracy by 26% across healthcare analytics use cases using Python and Spark MLlib.</li>
                  <li>Built ETL pipelines for multi-terabyte datasets, reducing data latency by 35%.</li>
                  <li>Improved generalization by reducing overfitting by 21% using validation and dimensionality reduction.</li>
                  <li>Deployed scalable inference using Docker and Kubernetes, reducing infrastructure cost by 24%.</li>
                  <li>Delivered under strict SLAs with 98% on-time delivery across multiple programs.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </Section>

        <Section id="projects" title="Projects" subtitle="Selected projects with GitHub links.">
          <div className="grid-2">
            {projects.map((p) => (
              <motion.div key={p.title} whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 260, damping: 18 }}>
                <Card>
                  <CardContent>
                    <div style={{ fontWeight: 950, fontSize: 16 }}>{p.title}</div>
                    <div className="muted" style={{ marginTop: 6, fontWeight: 750 }}>{p.role}</div>

                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10 }}>
                      {p.tech.map((t) => (
                        <Badge key={t} variant="outline">
                          {t}
                        </Badge>
                      ))}
                    </div>

                    <ul className="muted" style={{ margin: "12px 0 0 18px" }}>
                      {p.bullets.map((b, idx) => (
                        <li key={idx}>{b}</li>
                      ))}
                    </ul>

                    <div className="project-links">
                      <Button variant="outline" onClick={() => window.open(p.github, "_blank")}>
                        GitHub
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills" subtitle="Tools and technologies used across ML systems and deployments.">
          <div className="grid-2">
            {skillGroups.map((g) => (
              <Card key={g.label}>
                <CardContent>
                  <div style={{ fontWeight: 900, marginBottom: 10 }}>{g.label}</div>
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                    {g.items.map((s) => (
                      <Badge key={s} variant="outline">
                        {s}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="publications" title="Publications" subtitle="Research and writing.">
          <Card>
            <CardContent>
              <div style={{ fontWeight: 950, fontSize: 16 }}>{publication.title}</div>
              <div className="muted" style={{ marginTop: 6 }}>
                {publication.venue} • {publication.date}
              </div>
              <ul className="muted" style={{ margin: "12px 0 0 18px" }}>
                {publication.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </Section>

        <Section id="contact" title="Contact" subtitle="Send a message or reach out directly.">
          <Card>
            <CardContent>
              <p className="muted" style={{ marginTop: 0 }}>Fill out the form and I will get back to you.</p>

              <form className="form" onSubmit={onSubmit}>
                <div className="form-row">
                  <Input name="name" placeholder="Your name" value={form.name} onChange={onChange} />
                  <Input name="email" type="email" placeholder="Email address" value={form.email} onChange={onChange} />
                </div>

                <Input name="company" placeholder="Company (optional)" value={form.company} onChange={onChange} />

                <textarea className="input-ui" name="message" placeholder="Message" value={form.message} onChange={onChange} />

                <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
                  <Button type="submit">Send Message</Button>
                  <span className="helper">{status.state === "loading" ? "Sending..." : status.text}</span>
                </div>

                <div className="helper" style={{ marginTop: 8 }}>
                  Or email me directly:{" "}
                  <a href={`mailto:${EMAIL}`} style={{ textDecoration: "underline" }}>
                    {EMAIL}
                  </a>
                </div>
              </form>
            </CardContent>
          </Card>
        </Section>

        <footer className="footer">
          <div>© {new Date().getFullYear()} {NAME}. All rights reserved.</div>
        </footer>
      </main>
    </div>
  );
}
