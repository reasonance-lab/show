/* ============================================================
   Reasonance Lab — project content.
   Edit this file when adding, removing, or updating project cards.

   Each project:
   {
     id:          "kebab-slug",            // unique, used as DOM id
     name:        "Display Name",
     tagline:     "Short description of the project's purpose",
     description: "Clear explanation of what the project does and, where relevant, its WebMCP status.",
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
    tagline: "Collaborative reasoning across multiple AI models.",
    description:
      "A multi-model reasoning platform where Claude and GPT evaluate each other's responses and iteratively refine a shared answer.",
    domain: "ai-learning",
    status: "live",
    links: { repo: "https://github.com/reasonance-lab/reasonance" },
    tech: ["Reflex", "Claude", "GPT"],
    featured: true,
  },
  {
    id: "adaptive-learning-atlas",
    name: "Adaptive Learning Atlas",
    tagline: "A local-first adaptive tutor for STEM subjects.",
    description:
      "A bring-your-own-key tutoring environment for mathematics, physics, chemistry, and biology that tracks learner progress and adapts instructional content.",
    domain: "ai-learning",
    status: "wip",
    links: {},
    tech: ["TypeScript", "Node", "SQLite"],
    featured: true,
  },
  {
    id: "teacheraide",
    name: "TeacherAide",
    tagline: "Generate, review, export, and publish assessments from source material.",
    description:
      "Teachers can upload PDFs or images, generate seven question types with OpenAI, Claude, or Gemini, review the results, and export QTI 2.2 or Word files or publish assessments to students. WebMCP is not currently enabled.",
    domain: "ai-learning",
    status: "live",
    links: {
      live: "https://teacheraide.fly.dev/",
      repo: "https://github.com/jivishov/teacheraide",
    },
    tech: ["Reflex", "Python", "QTI 2.2", "No WebMCP"],
    featured: true,
  },
  {
    id: "live-translator",
    name: "Live Translator",
    tagline: "Real-time speech translation with multiple AI providers.",
    description:
      "A browser and Windows desktop application that streams microphone or computer audio to OpenAI, Soniox, or Gemini and displays translated text in up to three target languages. A comparison mode can send the same audio to multiple providers for side-by-side evaluation. API keys stay in a local Node.js relay and are not exposed to the browser. WebMCP is not currently enabled.",
    domain: "ai-learning",
    status: "beta",
    links: {
      repo: "https://github.com/jivishov/live_translator",
    },
    tech: ["Electron", "Realtime AI", "WebSocket", "No WebMCP"],
    featured: true,
  },

  /* ---------- 02 · Chemistry & Science ---------- */
  {
    id: "lab-studio-webmcp",
    name: "Lab Studio WebMCP",
    tagline: "Agent-assisted chemistry pre-lab authoring with teacher review.",
    description:
      "A chemistry authoring and rehearsal environment for a supported titration workflow. WebMCP tools let an agent inspect inventory, stage a pre-lab, rehearse the procedure, and run protocol checks while final Apply or Discard decisions remain with the teacher.",
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
    tagline: "Interactive Texas high-school chemistry organized around investigations and applications.",
    description:
      "An 11-unit Grade 10 TEKS-aligned chemistry course with interactive investigations, models, calculations, real-world case studies, and optional Honors extensions. WebMCP is not currently enabled.",
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
    tagline: "Browser-based image analysis for XTT plates and agar spot assays.",
    description:
      "AssayLens analyzes photographs of XTT 96-well plates and agar endpoint spot assays. Its WebMCP tools can inspect and configure the XTT workflow, run the existing analysis, and focus results that need human QC. Outputs are exploratory image-derived measurements, not calibrated absorbance or validated MIC values.",
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
    tagline: "Multilingual virtual science experiments and simulations for learning and pre-lab practice.",
    description:
      "A browser-based collection of virtual experiments and simulations covering topics such as spectrophotometry, genetics, gas laws, and laboratory safety. The main platform does not currently expose WebMCP tools; the separate Lab Studio WebMCP project does.",
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
    tagline: "Browser tools for robotics design, electronics, circuits, and simulation.",
    description:
      "RoboStudio combines STL assembly, robotic component design, physics simulation, ESP32 electronics, and breadboard circuit workflows. Its Lab mode also supports structured exercises, checkpoints, and evidence export. WebMCP is not currently enabled.",
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
    tagline: "Python programming and 3D simulation for educational robotics workflows.",
    description:
      "A VS Code-inspired browser IDE for programming and inspecting SO-101, OpenArm, LeKiwi, Unitree G1, and MicroDuck learning scenarios. WebMCP Agent Assist provides bounded task, workspace, and simulation inspection plus run and focus tools; it does not write source code or control physical hardware.",
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
    tagline: "A terminal interface for coordinating multiple coding agents.",
    description:
      "An experimental terminal UI that runs two coding agents in parallel and provides a shared workflow for comparing and reviewing their output.",
    domain: "devtools",
    status: "wip",
    links: {},
    tech: ["Python", "TUI"],
    featured: true,
  },
  {
    id: "audit-pro",
    name: "Audit.Pro",
    tagline: "Repeatable AI-assisted code auditing for software repositories.",
    description:
      "A desktop prototype for running structured AI code-review passes over a repository and recording the findings for follow-up.",
    domain: "devtools",
    status: "wip",
    links: {},
    tech: ["Windows", "OpenAI Batch"],
    featured: true,
  },
];
