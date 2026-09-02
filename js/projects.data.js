/* ============================================================
   Reasonance Labs — content file.
   THIS is the file to edit when adding/removing projects.

   Each project:
   {
     id:          "kebab-slug",            // unique, used as DOM id
     name:        "Display Name",
     tagline:     "One clear line shown under the name",
     description: "Concise explanation of what the project does and, where relevant, its WebMCP status.",
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
    tagline: "Turn source material into LMS-ready assessments.",
    description:
      "Upload PDFs or images, generate and edit seven question types with OpenAI, Claude or Gemini, then export QTI 2.2/Word or publish to students. WebMCP: not currently enabled.",
    domain: "ai-learning",
    status: "live",
    links: {
      live: "https://teacheraide.fly.dev/",
      repo: "https://github.com/jivishov/teacheraide",
    },
    tech: ["Reflex", "Python", "QTI 2.2", "No WebMCP"],
    featured: true,
  },

  /* ---------- 02 · Chemistry & Science ---------- */
  {
    id: "lab-studio-webmcp",
    name: "Lab Studio WebMCP",
    tagline: "Teacher + agent pre-lab authoring with human approval.",
    description:
      "Build and validate a bounded 45-minute titration pre-lab, rehearse it in the student simulator, and run protocol checks. WebMCP exposes inventory, staging, rehearsal and validation tools; Apply/Discard stay teacher-only.",
    domain: "chem-sci",
    status: "live",
    links: {
      live: "https://jivishov.github.io/Lab-Studio_WebMCP/",
      repo: "https://github.com/jivishov/Lab-Studio_WebMCP",
      docs: "https://github.com/jivishov/Lab-Studio_WebMCP#webmcp-tool-surfaces",
    },
    tech: ["React", "TypeScript", "WebMCP", "Vite"],
    featured: true,
  },
  {
    id: "chemistry-case-files",
    name: "Chemistry Case Files",
    tagline: "Texas chemistry taught as evidence-driven investigations.",
    description:
      "An 11-unit Grade 10 TEKS-aligned course with interactive investigations, models, calculations, authentic Case Files and optional Honors extensions. WebMCP: not currently enabled.",
    domain: "chem-sci",
    status: "live",
    links: {
      live: "https://jivishov.github.io/chemistry-case-files/",
      repo: "https://github.com/jivishov/chemistry-case-files",
    },
    tech: ["HTML", "Alpine.js", "TEKS", "No WebMCP"],
    featured: true,
  },
  {
    id: "assaylens",
    name: "AssayLens",
    tagline: "Image-based XTT and agar assay analysis with built-in QC.",
    description:
      "Analyze XTT 96-well plate photos and agar endpoint spot assays in the browser. WebMCP can inspect and configure the XTT workflow, run analysis and focus QC. Results are exploratory image-derived measurements, not calibrated absorbance or validated MIC.",
    domain: "chem-sci",
    status: "live",
    links: {
      live: "https://jivishov.github.io/assaylens/",
      repo: "https://github.com/jivishov/assaylens",
      docs: "https://github.com/jivishov/assaylens/blob/main/docs/WEBMCP.md",
    },
    tech: ["React", "Vision", "WebMCP", "XTT"],
    featured: true,
  },
  {
    id: "virtual-laboratory",
    name: "Virtual Laboratory",
    tagline: "Browser-based science labs for pre-lab practice.",
    description:
      "A multilingual collection of interactive virtual experiments and simulations spanning spectrophotometry, genetics, gas laws, lab safety and more. Platform-level WebMCP is not currently enabled; the WebMCP Lab Studio build is listed separately.",
    domain: "chem-sci",
    status: "live",
    links: {
      live: "https://virtuallab.az/",
      repo: "https://github.com/jivishov/virtual_lab",
    },
    tech: ["HTML/CSS/JS", "Multilingual", "Pre-lab", "No WebMCP"],
    featured: true,
  },

  /* ---------- 03 · Robotics & Hardware ---------- */
  {
    id: "robostudio",
    name: "RoboStudio",
    tagline: "Design, wire and test robotics projects before hardware.",
    description:
      "Five browser workspaces cover STL assembly, robotic component design, physics, ESP32 electronics and breadboard circuits, with a Lab mode for checkpoints and evidence export. WebMCP: not currently enabled.",
    domain: "robotics",
    status: "live",
    links: {
      live: "https://jivishov.github.io/RoboStudio/",
      repo: "https://github.com/jivishov/RoboStudio",
    },
    tech: ["Vite", "Three.js", "ESP32", "No WebMCP"],
    featured: true,
  },
  {
    id: "robobuddy-ide",
    name: "RoboBuddy IDE",
    tagline: "Write robot-facing Python beside an immediate 3D simulation.",
    description:
      "A VS Code-inspired browser IDE for SO-101, OpenArm, LeKiwi, Unitree G1 and MicroDuck learning workflows. WebMCP Agent Assist exposes bounded task, workspace and simulation inspection plus run/focus tools — without source writing or hardware control.",
    domain: "robotics",
    status: "live",
    links: {
      live: "https://jivishov.github.io/RoboBuddy_IDE/",
      repo: "https://github.com/jivishov/RoboBuddy_IDE",
      docs: "https://github.com/jivishov/RoboBuddy_IDE#webmcp-agent-collaboration",
    },
    tech: ["Python", "Three.js", "Pyodide", "WebMCP"],
    featured: true,
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
