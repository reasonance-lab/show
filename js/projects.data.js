/* ============================================================
   Reasonance Labs — content file.
   THIS is the file to edit when adding/removing projects.

   Each project:
   {
     id:          "kebab-slug",            // unique, used as DOM id
     name:        "Display Name",
     tagline:     "One catchy line shown under the name",
     description: "One or two sentences. Keep it under ~180 chars.",
     domain:      "ai-learning" | "chem-sci" | "robotics" | "devtools",
                  // must match a <section id="..."> in index.html
     status:      "live" | "beta" | "wip" | "archived",
     links: {                              // omit or null = not rendered
       live: "https://…",                  // deployed demo
       repo: "https://github.com/…",       // source
       docs: "https://…"                   // docs / write-up
     },
     tech:     ["Chip", "Chip"],           // max ~4 shown
     accent:   null,                       // optional hue 0–360, overrides the
                                           // section hue for this card only
     featured: false                       // true = card spans 2 columns
   }
   ============================================================ */

const PROJECTS = [
  /* ---------- 01 · AI & Learning ---------- */
  {
    id: "reasonance",
    name: "Reasonance",
    tagline: "Two models argue. One truth resonates.",
    description:
      "A collaborative reasoning platform where Claude and GPT critique each other's answers and iterate until their conclusions converge.",
    domain: "ai-learning",
    status: "live",
    links: { repo: "https://github.com/reasonance-lab/reasonance" },
    tech: ["Reflex", "Claude", "GPT"],
    featured: true,
  },
  {
    id: "adaptive-learning-atlas",
    name: "Adaptive Learning Atlas",
    tagline: "A private STEM tutor that maps what you know.",
    description:
      "Local-first, bring-your-own-key tutoring environment for math, physics, chemistry and biology — it charts your knowledge and adapts every lesson.",
    domain: "ai-learning",
    status: "wip",
    links: {},
    tech: ["TypeScript", "Node", "SQLite"],
  },
  {
    id: "teacheraide",
    name: "TeacherAide",
    tagline: "Assessments that write themselves.",
    description:
      "AI assessment generator for educators — from learning objective to ready-to-print quiz in one pass.",
    domain: "ai-learning",
    status: "live",
    links: { live: "https://teacheraide.fly.dev" },
    tech: ["Reflex", "Python"],
  },

  /* ---------- 02 · Chemistry & Science ---------- */
  {
    id: "lab-studio",
    name: "Lab Studio",
    tagline: "Author interactive chemistry labs in the browser.",
    description:
      "Client-side authoring platform for building and running interactive chemistry lab experiences — no server, no install.",
    domain: "chem-sci",
    status: "beta",
    links: {},
    tech: ["React", "TypeScript", "Vite"],
    featured: true,
  },
  {
    id: "chem-simulators",
    name: "Texas Chemistry Simulators",
    tagline: "State-standard chemistry, fully interactive.",
    description:
      "A collection of interactive high-school chemistry simulators aligned to the Texas standards — gas laws, equilibrium, stoichiometry and more.",
    domain: "chem-sci",
    status: "beta",
    links: {},
    tech: ["Canvas", "JavaScript"],
  },
  {
    id: "assaylens",
    name: "AssayLens",
    tagline: "Computer vision for assay readouts.",
    description:
      "Point a camera at the plate; get structured results. Vision-assisted reading of laboratory assays.",
    domain: "chem-sci",
    status: "wip",
    links: {},
    tech: ["Vision", "JavaScript"],
  },

  /* ---------- 03 · Robotics & Hardware ---------- */
  {
    id: "robostudio",
    name: "RoboStudio",
    tagline: "CAD, circuits and simulation in one workspace.",
    description:
      "A browser workspace for robotics builds: model the mechanics, wire the electronics, simulate the result — before touching hardware.",
    domain: "robotics",
    status: "beta",
    links: {},
    tech: ["Vite", "Three.js"],
    featured: true,
  },
  {
    id: "xarm-ide",
    name: "xArm IDE",
    tagline: "Program a robotic arm straight from the browser.",
    description:
      "Web-Serial programming environment for the HiWonder xArm — write, flash and drive the arm with zero installed toolchain.",
    domain: "robotics",
    status: "beta",
    links: {},
    tech: ["Web Serial", "JavaScript"],
  },
  {
    id: "robobuddy",
    name: "RoboBuddy 3D",
    tagline: "A friendly face for classroom robotics.",
    description:
      "3D robotic-arm companion built for classrooms — approachable controls on top of real hardware.",
    domain: "robotics",
    status: "beta",
    links: {},
    tech: ["Three.js"],
  },

  /* ---------- 04 · Developer Tools ---------- */
  {
    id: "conduit",
    name: "Conduit",
    tagline: "Claude Code and Codex, side by side.",
    description:
      "A terminal UI that orchestrates two coding agents in parallel and lets them check each other's work.",
    domain: "devtools",
    status: "wip",
    links: {},
    tech: ["Python", "TUI"],
  },
  {
    id: "audit-pro",
    name: "Audit.Pro",
    tagline: "Code audits on a loop.",
    description:
      "Desktop app that runs repeatable, slow-burn AI code-audit passes over a repository and files what it finds.",
    domain: "devtools",
    status: "wip",
    links: {},
    tech: ["Windows", "OpenAI Batch"],
  },
];
