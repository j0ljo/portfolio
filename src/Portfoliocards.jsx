import React, { useState } from "react";

// ---- Sample data — swap this out with your real projects ----
const PROJECTS = [
    {
        code: "PRJ-01",
        year: "2024",
        title: "Nightshade",
        role: "Full-stack, solo",
        blurb: "A dark-mode habit tracker with streak visualizations that actually feel rewarding, not guilt-trippy.",
        stack: ["React", "Node", "Postgres", "D3"],
        link: "#",
    },
    {
        code: "PRJ-02",
        year: "2023",
        title: "Ferrotype",
        role: "Frontend lead, team of 3",
        blurb: "A photo-restoration tool wrapping an ML model in an interface simple enough for non-technical users.",
        stack: ["Next.js", "Python", "TensorFlow"],
        link: "#",
    },
    {
        code: "PRJ-03",
        year: "2023",
        title: "Loom & Ledger",
        role: "Full-stack, solo",
        blurb: "Invoicing software for freelance textile artists, built after my sister complained about Excel for a year.",
        stack: ["Vue", "Rails", "Stripe"],
        link: "#",
    },
];

function ProjectCard({ project, index }) {
    const [hovered, setHovered] = useState(false);
    const rotations = [-2.5, 1.8, -1.2];
    const rest = rotations[index % rotations.length];

    return (
        <a
            href={project.link}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                textDecoration: "none",
                display: "block",
                position: "relative",
                width: 280,
                minHeight: 360,
                background: "#EDE7DC",
                color: "#1B1A17",
                borderRadius: 3,
                padding: "28px 24px 24px",
                boxShadow: hovered
                    ? "0 22px 40px -12px rgba(0,0,0,0.45)"
                    : "0 8px 18px -8px rgba(0,0,0,0.35)",
                transform: hovered
                    ? "rotate(0deg) translateY(-6px)"
                    : `rotate(${rest}deg) translateY(0px)`,
                transition: "transform 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s ease",
                cursor: "pointer",
                boxSizing: "border-box",
            }}
        >
            {/* Perforated top edge */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 14,
                    backgroundImage:
                        "radial-gradient(circle, #171512 2.5px, transparent 2.6px)",
                    backgroundSize: "16px 16px",
                    backgroundPosition: "8px 6px",
                    backgroundRepeat: "repeat-x",
                    opacity: 0.85,
                }}
            />

            {/* Catalog code + year */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginTop: 14,
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    letterSpacing: "0.06em",
                    color: "#7C8567",
                }}
            >
                <span>{project.code}</span>
                <span>{project.year}</span>
            </div>

            {/* Title */}
            <h3
                style={{
                    fontFamily: "'Fraunces', serif",
                    fontSize: 28,
                    fontWeight: 600,
                    lineHeight: 1.15,
                    margin: "14px 0 4px",
                    letterSpacing: "-0.01em",
                }}
            >
                {project.title}
            </h3>

            {/* Role */}
            <div
                style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11.5,
                    color: "#B5502D",
                    marginBottom: 14,
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                }}
            >
                {project.role}
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: "#1B1A17", opacity: 0.15, marginBottom: 14 }} />

            {/* Blurb */}
            <p
                style={{
                    fontFamily: "Georgia, serif",
                    fontSize: 14.5,
                    lineHeight: 1.55,
                    color: "#3a3833",
                    margin: 0,
                    minHeight: 88,
                }}
            >
                {project.blurb}
            </p>

            {/* Stamp reveal on hover */}
            <div
                style={{
                    position: "absolute",
                    bottom: 20,
                    left: 24,
                    right: 24,
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 6,
                    opacity: hovered ? 1 : 0,
                    transform: hovered ? "translateY(0) rotate(-2deg)" : "translateY(8px) rotate(-2deg)",
                    transition: "opacity 0.3s ease, transform 0.3s ease",
                }}
            >
                {project.stack.map((tech) => (
                    <span
                        key={tech}
                        style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: 10.5,
                            padding: "3px 8px",
                            border: "1.5px solid #B5502D",
                            color: "#B5502D",
                            borderRadius: 2,
                            textTransform: "uppercase",
                            letterSpacing: "0.03em",
                        }}
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </a>
    );
}

export default function PortfolioCards() {
    return (
        <div
            style={{
                minHeight: "100vh",
                background: "#171512",
                padding: "72px 32px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600&family=JetBrains+Mono:wght@400;500&display=swap');
      `}</style>

            <div style={{ marginBottom: 48, textAlign: "center" }}>
                <div
                    style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 12,
                        color: "#7C8567",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        marginBottom: 8,
                    }}
                >
                    Selected Work — Catalog
                </div>
                <h2
                    style={{
                        fontFamily: "'Fraunces', serif",
                        fontSize: 40,
                        color: "#EDE7DC",
                        margin: 0,
                        fontWeight: 600,
                    }}
                >
                    Projects on file
                </h2>
            </div>

            <div
                style={{
                    display: "flex",
                    gap: 40,
                    flexWrap: "wrap",
                    justifyContent: "center",
                    maxWidth: 1000,
                }}
            >
                {PROJECTS.map((p, i) => (
                    <ProjectCard key={p.code} project={p} index={i} />
                ))}
            </div>
        </div>
    );
}