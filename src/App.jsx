import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Mail, Github, Linkedin, ExternalLink, Download } from "lucide-react";

/* ==========================
   UPDATE THESE LINKS
========================== */
const RESUME_LINK = "/resume.pdf"; // place resume in public folder
const EMAIL = "viraj@myjobsinbox.com";
const GITHUB = "https://github.com/Viraj-Pathak";
const LINKEDIN = "https://www.linkedin.com/in/viraj-pathak-3a19551b8/";

/* ==========================
   PROJECTS
========================== */
const projectsData = [
  {
    title: "Enterprise AI Reliability Intelligence Platform",
    description:
      "Predictive analytics platform for infrastructure failure prediction and anomaly detection with real-time ML inference APIs.",
    tags: ["ML", "FastAPI", "Cloud Monitoring"],
    github:
      "https://github.com/Viraj-Pathak/enterprise-ai-reliability-platform",
  },
  {
    title: "AI Resume Screening System",
    description:
      "NLP and transformer-based recruitment system automating candidate ranking and resume intelligence.",
    tags: ["NLP", "Transformers", "Flask"],
    github:
      "https://github.com/Viraj-Pathak/ai_resume_screening",
  },
  {
    title: "Cloud Failure Predictor",
    description:
      "Supervised ML solution for proactive infrastructure risk prediction and mitigation.",
    tags: ["Machine Learning", "Prediction"],
    github:
      "https://github.com/Viraj-Pathak/cloud-failure-predictor",
  },
  {
    title: "Face & Hand Landmark Detection",
    description:
      "Real-time computer vision system for gesture and facial landmark tracking.",
    tags: ["Computer Vision", "AI"],
    github:
      "https://github.com/Viraj-Pathak/Face-Hand-Landmark-AI-Project",
  },
];

/* ==========================
   EXPERIENCE TIMELINE
========================== */
const experience = [
  {
    role: "AI/ML Engineer",
    company: "Humana, USA",
    period: "Jul 2025 – Present",
    highlights:
      "Production ML pipelines, healthcare analytics, MLOps automation, real-time inference systems.",
  },
  {
    role: "Machine Learning Engineer",
    company: "CitiusTech, India",
    period: "Jul 2021 – Nov 2023",
    highlights:
      "Healthcare ML deployment, NLP pipelines, scalable ETL and predictive analytics systems.",
  },
];

/* ==========================
   SKILLS
========================== */
const skills = [
  "Python",
  "Machine Learning",
  "Deep Learning",
  "TensorFlow",
  "PyTorch",
  "Spark & PySpark",
  "NLP & LLMs",
  "MLOps",
  "AWS / Cloud",
  "Docker & Kubernetes",
  "FastAPI",
  "Data Engineering",
  "Feature Engineering",
  "Model Deployment",
];

export default function PortfolioApp() {
  const [search, setSearch] = useState("");

  const filteredProjects = projectsData.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.join(" ").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-200 text-slate-900">
      {/* NAVBAR */}
      <nav className="sticky top-0 backdrop-blur bg-white/70 border-b z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="font-bold text-lg">Viraj Pathak</h1>
          <div className="flex gap-4 text-sm">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 py-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          AI / ML Engineer Building Production Intelligence Systems
        </motion.h2>

        <p className="max-w-2xl mx-auto text-lg text-slate-600 mb-8">
          I design scalable ML pipelines, deploy production AI systems, and
          build intelligent data platforms delivering real business impact.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Button asChild>
            <a href="#projects">View Projects</a>
          </Button>

          <Button variant="outline" asChild>
            <a href={RESUME_LINK} download>
              <Download className="w-4 h-4 mr-2" /> Resume
            </a>
          </Button>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-16">
        <h3 className="text-3xl font-semibold mb-6">About Me</h3>
        <p className="text-slate-700 leading-relaxed max-w-3xl">
          AI/ML Engineer with experience building large-scale machine
          learning systems across healthcare and enterprise analytics. My
          work spans data engineering, feature engineering, model
          development, MLOps, and cloud deployment. I focus on building
          intelligent systems that operate reliably in production.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="max-w-6xl mx-auto px-4 py-16">
        <h3 className="text-3xl font-semibold mb-8">Experience Timeline</h3>

        <div className="space-y-6">
          {experience.map((exp, i) => (
            <Card key={i} className="rounded-2xl">
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg">{exp.role}</h4>
                <p className="text-slate-600">{exp.company}</p>
                <p className="text-sm text-slate-500 mb-2">{exp.period}</p>
                <p className="text-slate-700">{exp.highlights}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-8">
          <h3 className="text-3xl font-semibold">Projects</h3>
          <Input
            placeholder="Search projects or skills..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-sm"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <Card key={idx} className="rounded-2xl shadow-sm">
              <CardContent className="p-6 flex flex-col h-full">
                <h4 className="font-semibold text-lg mb-2">
                  {project.title}
                </h4>
                <p className="text-slate-600 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, i) => (
                    <Badge key={i}>{tag}</Badge>
                  ))}
                </div>

                <div className="flex gap-3 mt-6">
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.github} target="_blank">
                      <Github className="w-4 h-4 mr-1" /> Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="max-w-6xl mx-auto px-4 py-16">
        <h3 className="text-3xl font-semibold mb-6">Skills & Technologies</h3>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill, idx) => (
            <Badge key={idx} className="px-3 py-1 text-sm">
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="max-w-6xl mx-auto px-4 py-20 text-center"
      >
        <h3 className="text-3xl font-semibold mb-4">Let's Connect</h3>
        <p className="text-slate-600 mb-8">
          Open to AI/ML Engineering, Data Engineering, and startup
          opportunities.
        </p>

        <div className="flex justify-center gap-6">
          <a href={`mailto:${EMAIL}`}>
            <Mail className="w-6 h-6" />
          </a>
          <a href={GITHUB} target="_blank">
            <Github className="w-6 h-6" />
          </a>
          <a href={LINKEDIN} target="_blank">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </section>

      <footer className="text-center py-6 text-sm text-slate-500">
        © {new Date().getFullYear()} Viraj Pathak — AI/ML Engineer
      </footer>
    </div>
  );
}
