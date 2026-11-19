/* ==========================================================================
   ROOKERY TECHNOLOGIES - SINGLE SOURCE OF TRUTH (SITE_DATA)
   Edit values here to update cards, dropdowns, and modals site-wide.
   ========================================================================== */
const SITE_DATA = {
  heroMetrics: [
    { value: "< 10 ms", label: "Automatic Failover" },
    { value: "1 Watt", label: "Circuit Load Resolution" },
    { value: "100% Local", label: "Offline Mesh Control" }
  ],

  pillars: [
    {
      id: "power-stack",
      num: "PILLAR 01",
      tabTitle: "Tri Source Generation & Storage",
      tag: "PILLAR 01 // GENERATION & FAILOVER STACK",
      title: "Unbreakable Tri Source Power Architecture",
      desc: "Traditional solar setups fail when heavy evening cooling meets cloudy weather. Rookery integrates high efficiency monocrystalline solar roofs with modular high endurance battery storage and an acoustic enclosed backup generator that engages automatically only when reserves reach a calibrated threshold.",
      metrics: [
        { label: "Failover Transfer", val: "< 10 ms" },
        { label: "Storage Architecture", val: "Chemistry Agnostic" },
        { label: "Generator Duty", val: "Auto Recharge Only" }
      ],
      bullets: [
        "Solar panels power daytime home loads while charging the storage bank at peak efficiency.",
        "Seamless automatic generator start recharges batteries rapidly during multi day storm cycles, then shuts down cleanly.",
        "Zero manual changeover switches or late night fuel emergencies."
      ]
    },
    {
      id: "architecture",
      num: "PILLAR 02",
      tabTitle: "Modular Tropical Architecture",
      tag: "PILLAR 02 // PASSIVE THERMAL ENVELOPE",
      title: "Precision Engineered Low Thermal Gain Envelope",
      desc: "Air conditioning consumes up to 65% of residential electricity in tropical climates. Rookery structures combine insulated architectural panels, cross ventilation geometry, and solar shading overhangs so indoor temperatures stay stable with minimal compressor runtime.",
      metrics: [
        { label: "Cooling Load Reduction", val: "Up to 42%" },
        { label: "Structural Rating", val: "Hurricane & Storm Grade" },
        { label: "Assembly Method", val: "Precision Modular Kit" }
      ],
      bullets: [
        "High R-value insulated wall and roof assemblies block radiative heat transfer throughout peak afternoon sun.",
        "Factory machined tolerances eliminate air leaks and accelerate on site assembly timelines.",
        "Designed for rapid deployment across urban estates and off grid plots alike."
      ]
    },
    {
      id: "orchestration",
      num: "PILLAR 03",
      tabTitle: "Local First Load Algorithm",
      tag: "PILLAR 03 // CIRCUIT LEVEL ENERGY ORCHESTRATION",
      title: "Predictive Circuit Control Without Cloud Dependency",
      desc: "Batteries drain prematurely when high draw appliances overlap silently. Every Rookery outlet and breaker channel monitors load down to 1 watt and runs local predictive scheduling so essential cooling, refrigeration, and lighting never lose reserve priority.",
      metrics: [
        { label: "Sensing Floor", val: "<= 1 Watt" },
        { label: "Relay Control", val: "Independent Top/Bottom" },
        { label: "Network Mode", val: "Local First Offline" }
      ],
      bullets: [
        "Staggers heavy inductive loads such as water heaters, pumps, and secondary HVAC zones automatically.",
        "Operates entirely on local embedded hardware without requiring active internet or smartphone apps for wall switching.",
        "Extends overnight battery autonomy and drastically cuts annual generator fuel expenditure."
      ]
    }
  ],

  corridors: [
    {
      badge: "PRIMARY HUB // WEST AFRICA",
      title: "Nigeria & West African Grid Corridor",
      desc: "Purpose built for diaspora homeowners and local estates eliminating diesel dependency, voltage surges, and multi day utility blackouts.",
      regions: [
        "Lagos State",
        "Abuja (FCT)",
        "Rivers State (Port Harcourt)",
        "Edo State (Benin City)",
        "Cross River State (Calabar)",
        "Plateau State (Jos)",
        "Sokoto State (Sokoto)"
      ]
    },
    {
      badge: "NORTH AMERICAN CORRIDOR // USA",
      title: "U.S. Tropical, Gulf & Sunbelt Markets",
      desc: "Engineered for identical high humidity cooling loads, hurricane season multi day grid outages, and peak utility time of use arbitrage.",
      regions: [
        "South Florida (Miami / Naples)",
        "Gulf Coast (Houston / Tampa / New Orleans)",
        "Hawaii & Caribbean Territories",
        "Southwest High Solar Tier (Phoenix / San Diego)"
      ]
    }
  ],

  simulatorScenarios: [
    {
      id: "morning",
      label: "Morning Sun (09:00)",
      solarKw: "6.4 kW",
      active: { loadKw: "2.1 kW", runtime: "38+ hrs", genset: "STANDBY (0%)", note: "Excess solar rapidly replenishes storage reserves while running base household cooling." },
      bypassed: { loadKw: "3.9 kW", runtime: "19 hrs", genset: "STANDBY (0%)", note: "Water heater, borehole pump, and kitchen circuits run simultaneously, slowing battery charge rate." }
    },
    {
      id: "peak-heat",
      label: "Peak Afternoon Heat (14:30)",
      solarKw: "8.2 kW",
      active: { loadKw: "3.4 kW", runtime: "32+ hrs", genset: "STANDBY (0%)", note: "Predictive compressor duty cycling keeps living zones cool while maintaining a net positive charge." },
      bypassed: { loadKw: "6.8 kW", runtime: "12 hrs", genset: "STANDBY (0%)", note: "Unthrottled secondary AC units and appliances consume nearly all solar yield before dusk." }
    },
    {
      id: "evening",
      label: "Evening Family Peak (20:00)",
      solarKw: "0.0 kW",
      active: { loadKw: "2.3 kW", runtime: "21 hrs", genset: "STANDBY (0%)", note: "Non critical thermal loads are shifted; master bedroom cooling and lighting run smoothly on battery." },
      bypassed: { loadKw: "5.4 kW", runtime: "7.5 hrs", genset: "ARMED (SOON)", note: "Heavy evening appliances drain battery reserves rapidly, forcing an early night generator start." }
    },
    {
      id: "storm",
      label: "Multi Day Rainy Storm",
      solarKw: "1.1 kW",
      active: { loadKw: "1.6 kW", runtime: "26 hrs", genset: "AUTO RECHARGE ONLY", note: "Algorithm sheds phantom loads; generator runs briefly at peak efficiency to top off storage, then shuts off." },
      bypassed: { loadKw: "4.5 kW", runtime: "5.5 hrs", genset: "CONTINUOUS RUN", note: "Without load orchestration, backup generator runs continuously at inefficient partial loads." }
    }
  ],

  residenceTiers: [
    {
      tag: "MODEL 01 // COMPACT AUTONOMY",
      name: "2 Bedroom Tropical Retreat",
      specs: "8 kW Solar Array • Modular Storage • Smart Subpanel",
      desc: "Ideal for vacation residences, executive guest houses, and compact urban plots requiring silent 24/7 power.",
      featured: false
    },
    {
      tag: "MODEL 02 // MOST POPULAR",
      name: "4 Bedroom Family Residence",
      specs: "16 kW Solar Array • Expanded Storage • Acoustic Backup Genset",
      desc: "Full family climate autonomy engineered for continuous multi zone cooling, refrigeration, and remote work reliability.",
      featured: true
    },
    {
      tag: "MODEL 03 // ESTATE & COMPOUND",
      name: "Executive Compound & Guest Wing",
      specs: "28+ kW Solar Array • Multi Bank Storage • Commercial Microgrid Core",
      desc: "High capacity multi structure microgrid built for large family compounds, diplomatic housing, and executive estates.",
      featured: false
    }
  ],

  diasporaAssurance: [
    {
      title: "Milestone Verified Escrow",
      desc: "Capital is released strictly against verified factory fabrication, shipping manifests, and on site commissioning milestones."
    },
    {
      title: "Global Telemetry Visibility",
      desc: "Monitor live solar harvest, battery state of charge, and individual circuit loads from London, Houston, Toronto, or Lagos."
    },
    {
      title: "Turnkey Single Accountability",
      desc: "One engineering partner owns structural envelope tolerances, power electronics, and commissioning—no finger pointing between contractors."
    }
  ],

  locationGroups: [
    {
      groupLabel: "Nigeria (Primary Deployment Hub)",
      options: [
        "Lagos State",
        "Abuja (FCT)",
        "Rivers State (Port Harcourt)",
        "Edo State (Benin City)",
        "Cross River State (Calabar)",
        "Plateau State (Jos)",
        "Sokoto State (Sokoto)",
        "Other Nigerian State"
      ]
    },
    {
      groupLabel: "United States (Tropical & Sunbelt Corridors)",
      options: [
        "South Florida (Miami / Fort Lauderdale / Naples)",
        "Gulf Coast (Houston / Tampa / New Orleans)",
        "Hawaii & Caribbean Territories",
        "Southwest High Solar Tier (Phoenix / San Diego)",
        "Other U.S. Sunbelt Location"
      ]
    }
  ]
};

/* ==========================================================================
   COMPONENT RENDERERS & INTERACTIVE CONTROLLERS
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  let activePillarIndex = 0;
  let activeScenarioIndex = 0;
  let algorithmActive = true;

  // 1. Render Hero Metrics
  const heroMetricsMount = document.getElementById("hero-metrics-mount");
  if (heroMetricsMount) {
    heroMetricsMount.innerHTML = SITE_DATA.heroMetrics
      .map(
        (m) => `
        <div>
          <div class="hero-metric-val">${m.value}</div>
          <div class="hero-metric-label">${m.label}</div>
        </div>`
      )
      .join("");
  }

  // 2. Render Pillar Trifecta Tabs & Stage
  const pillarTabsMount = document.getElementById("pillar-tabs-mount");
  const pillarStageMount = document.getElementById("pillar-stage-mount");

  function renderPillars() {
    if (!pillarTabsMount || !pillarStageMount) return;

    pillarTabsMount.innerHTML = SITE_DATA.pillars
      .map(
        (p, idx) => `
        <button type="button" class="pillar-tab-btn ${idx === activePillarIndex ? "active" : ""}" data-pillar-idx="${idx}" role="tab" aria-selected="${idx === activePillarIndex}">
          <span class="pillar-tab-num">${p.num}</span>
          <span class="pillar-tab-title">${p.tabTitle}</span>
        </button>`
      )
      .join("");

    const current = SITE_DATA.pillars[activePillarIndex];
    pillarStageMount.innerHTML = `
      <div class="eyebrow">${current.tag}</div>
      <h3>${current.title}</h3>
      <p class="pillar-stage-desc">${current.desc}</p>
      <div class="pillar-metrics-grid">
        ${current.metrics
          .map(
            (m) => `
          <div class="pillar-metric-box">
            <span>${m.label}</span>
            <strong>${m.val}</strong>
          </div>`
          )
          .join("")}
      </div>
      <ul class="pillar-bullets">
        ${current.bullets
          .map(
            (b) => `
          <li>
            <span class="bullet-check">&#10003;</span>
            <span>${b}</span>
          </li>`
          )
          .join("")}
      </ul>`;
  }

  if (pillarTabsMount) {
    pillarTabsMount.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-pillar-idx]");
      if (!btn) return;
      activePillarIndex = Number(btn.dataset.pillarIdx);
      renderPillars();
    });
    renderPillars();
  }

  // 3. Render Deployment Corridors
  const corridorsMount = document.getElementById("corridors-mount");
  if (corridorsMount) {
    corridorsMount.innerHTML = SITE_DATA.corridors
      .map(
        (c) => `
        <article class="corridor-card">
          <span class="corridor-badge">${c.badge}</span>
          <h3>${c.title}</h3>
          <p>${c.desc}</p>
          <div class="tag-cloud">
            ${c.regions.map((r) => `<span class="region-tag">${r}</span>`).join("")}
          </div>
        </article>`
      )
      .join("");
  }

  // 4. Render Live Energy Simulator
  const simScenariosMount = document.getElementById("sim-scenarios-mount");
  const simDashboardMount = document.getElementById("sim-dashboard-mount");
  const algoToggleBtn = document.getElementById("algo-toggle-btn");

  function renderSimulator() {
    if (!simScenariosMount || !simDashboardMount) return;

    simScenariosMount.innerHTML = SITE_DATA.simulatorScenarios
      .map(
        (s, idx) => `
        <button type="button" class="scenario-btn ${idx === activeScenarioIndex ? "active" : ""}" data-sim-idx="${idx}">
          ${s.label}
        </button>`
      )
      .join("");

    const scenario = SITE_DATA.simulatorScenarios[activeScenarioIndex];
    const mode = algorithmActive ? scenario.active : scenario.bypassed;

    simDashboardMount.innerHTML = `
      <div class="sim-stat-card">
        <div class="sim-stat-label">Solar Roof Harvest</div>
        <div class="sim-stat-val">${scenario.solarKw}</div>
      </div>
      <div class="sim-stat-card">
        <div class="sim-stat-label">Active House Load</div>
        <div class="sim-stat-val">${mode.loadKw}</div>
      </div>
      <div class="sim-stat-card">
        <div class="sim-stat-label">Projected Storage Autonomy</div>
        <div class="sim-stat-val">${mode.runtime}</div>
      </div>
      <div class="sim-stat-card">
        <div class="sim-stat-label">Backup Generator Status</div>
        <div class="sim-stat-val" style="font-size: 1.05rem;">${mode.genset}</div>
      </div>
      <div class="sim-note-banner">
        <strong>System Behavior:</strong> ${mode.note}
      </div>`;
  }

  if (simScenariosMount) {
    simScenariosMount.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-sim-idx]");
      if (!btn) return;
      activeScenarioIndex = Number(btn.dataset.simIdx);
      renderSimulator();
    });
  }

  if (algoToggleBtn) {
    algoToggleBtn.addEventListener("click", () => {
      algorithmActive = !algorithmActive;
      algoToggleBtn.className = `algo-btn ${algorithmActive ? "active" : "bypassed"}`;
      algoToggleBtn.setAttribute("aria-pressed", String(algorithmActive));
      algoToggleBtn.textContent = algorithmActive
        ? "ACTIVE (PROTECTING BATTERY)"
        : "BYPASSED (UNMANAGED LOAD)";
      renderSimulator();
    });
  }
  renderSimulator();

  // 5. Render Residence Tiers & Populate Modal Tier Dropdown
  const tiersMount = document.getElementById("tiers-mount");
  const tierSelect = document.getElementById("residence_tier");

  if (tiersMount) {
    tiersMount.innerHTML = SITE_DATA.residenceTiers
      .map(
        (t) => `
        <article class="tier-card ${t.featured ? "featured" : ""}">
          <div>
            <div class="tier-tag">${t.tag}</div>
            <h3>${t.name}</h3>
            <div class="tier-specs">${t.specs}</div>
            <p>${t.desc}</p>
          </div>
          <button type="button" class="btn ${t.featured ? "btn-primary" : "btn-outline"} btn-full" data-open-modal data-tier="${t.name}">
            Configure ${t.name.split(" ")[0]} Bedroom Model
          </button>
        </article>`
      )
      .join("");
  }

  if (tierSelect) {
    tierSelect.innerHTML = SITE_DATA.residenceTiers
      .map((t) => `<option value="${t.name}">${t.name}</option>`)
      .join("");
  }

  // 6. Render Diaspora Assurance Cards
  const assuranceMount = document.getElementById("assurance-mount");
  if (assuranceMount) {
    assuranceMount.innerHTML = SITE_DATA.diasporaAssurance
      .map(
        (a) => `
        <article class="assurance-card">
          <h3>${a.title}</h3>
          <p>${a.desc}</p>
        </article>`
      )
      .join("");
  }

  // 7. Populate Grouped Location Dropdown
  const locationSelect = document.getElementById("location");
  if (locationSelect) {
    locationSelect.innerHTML = SITE_DATA.locationGroups
      .map(
        (group) => `
        <optgroup label="${group.groupLabel}">
          ${group.options.map((opt) => `<option value="${opt}">${opt}</option>`).join("")}
        </optgroup>`
      )
      .join("");
  }

  // 8. Mobile Drawer Controls
  const mobileToggle = document.getElementById("mobile-menu-toggle");
  const mobileDrawer = document.getElementById("mobile-drawer");

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener("click", () => {
      const isHidden = mobileDrawer.hasAttribute("hidden");
      if (isHidden) {
        mobileDrawer.removeAttribute("hidden");
        mobileToggle.setAttribute("aria-expanded", "true");
      } else {
        mobileDrawer.setAttribute("hidden", "");
        mobileToggle.setAttribute("aria-expanded", "false");
      }
    });

    mobileDrawer.addEventListener("click", (e) => {
      if (e.target.matches("a, button")) {
        mobileDrawer.setAttribute("hidden", "");
        mobileToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // 9. Consultation Modal & Formspree Submission
  const modal = document.getElementById("consultation-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalDoneBtn = document.getElementById("modal-done-btn");
  const formView = document.getElementById("modal-form-view");
  const successView = document.getElementById("modal-success-view");
  const form = document.getElementById("consultation-form");
  const submitBtn = document.getElementById("submit-btn");
  const errorMsg = document.getElementById("form-error-msg");

  function openModal(preselectedTier) {
    if (!modal) return;
    if (preselectedTier && tierSelect) {
      tierSelect.value = preselectedTier;
    }
    formView.removeAttribute("hidden");
    successView.setAttribute("hidden", "");
    errorMsg.setAttribute("hidden", "");
    modal.removeAttribute("hidden");
  }

  function closeModal() {
    if (!modal) return;
    modal.setAttribute("hidden", "");
  }

  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-open-modal]");
    if (trigger) {
      openModal(trigger.dataset.tier || null);
    }
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
  if (modalDoneBtn) modalDoneBtn.addEventListener("click", closeModal);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      errorMsg.setAttribute("hidden", "");
      submitBtn.disabled = true;
      submitBtn.textContent = "Routing Request...";

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: new FormData(form),
          headers: { Accept: "application/json" }
        });

        if (response.ok) {
          form.reset();
          formView.setAttribute("hidden", "");
          successView.removeAttribute("hidden");
        } else {
          errorMsg.removeAttribute("hidden");
        }
      } catch (err) {
        errorMsg.removeAttribute("hidden");
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = "Submit Consultation Request";
      }
    });
  }
});