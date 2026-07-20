/* Card renderer + page behaviour. Content lives in js/projects.data.js. */
(() => {
  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );

  const LINK_LABELS = { live: "live ↗", repo: "code", docs: "docs" };

  function linkRow(links) {
    const items = Object.entries(links || {})
      .filter(([k, v]) => v && LINK_LABELS[k])
      .map(
        ([k, v]) =>
          `<a class="plink plink-${k}" href="${esc(v)}" target="_blank" rel="noopener">${LINK_LABELS[k]}</a>`
      );
    return items.length
      ? `<div class="links">${items.join("")}</div>`
      : `<div class="links"><span class="links-none">in the lab — not yet public</span></div>`;
  }

  function card(p) {
    const cls = `card reveal${p.featured ? " featured" : ""}`;
    const accent = p.accent != null ? ` style="--hue:${Number(p.accent)}"` : "";
    return `<article class="${cls}" id="${esc(p.id)}"${accent}>
      <div class="card-top">
        <span class="status s-${esc(p.status)}"><i></i>${esc(p.status)}</span>
      </div>
      <h3>${esc(p.name)}</h3>
      <p class="tagline">${esc(p.tagline)}</p>
      <p class="desc">${esc(p.description)}</p>
      <ul class="tech">${(p.tech || []).slice(0, 4).map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
      ${linkRow(p.links)}
    </article>`;
  }

  // Render each project into its domain's grid.
  document.querySelectorAll(".grid[data-domain]").forEach((grid) => {
    const domain = grid.dataset.domain;
    grid.innerHTML = PROJECTS.filter((p) => p.domain === domain).map(card).join("");
  });

  // Staggered scroll reveals.
  const revealed = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        e.target.classList.add("in");
        revealed.unobserve(e.target);
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -5% 0px" }
  );
  document.querySelectorAll(".reveal").forEach((el, i) => {
    // Stagger within each grid, not across the whole page.
    const sibs = el.parentElement
      ? [...el.parentElement.children].filter((c) => c.classList.contains("reveal"))
      : [];
    const idx = Math.max(0, sibs.indexOf(el));
    el.style.transitionDelay = `${Math.min(idx, 5) * 70}ms`;
    revealed.observe(el);
  });

  // Footer: copy email.
  const copyBtn = document.getElementById("copy-email");
  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      const email = copyBtn.dataset.email;
      try {
        await navigator.clipboard.writeText(email);
        copyBtn.classList.add("copied");
        copyBtn.textContent = "copied ✓";
        setTimeout(() => {
          copyBtn.classList.remove("copied");
          copyBtn.textContent = email;
        }, 1600);
      } catch {
        location.href = `mailto:${email}`;
      }
    });
  }

  // Colophon year.
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
