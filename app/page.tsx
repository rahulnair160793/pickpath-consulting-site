"use client";

import { useState, useEffect } from "react";

// ─── Reusable micro-components ────────────────────────────────────────────────

function Badge({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border ${
        dark
          ? "bg-[#1a1a1a] text-white border-[#1a1a1a]"
          : "bg-white text-[#555] border-[#ddd]"
      }`}
    >
      {children}
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-widest text-[#999] mb-4">
      {children}
    </p>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#f9f8f5] text-[#1a1a1a] font-sans antialiased">

      {/* ════════════════════════════════════════════════════════════════
          NAV
      ════════════════════════════════════════════════════════════════ */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-xl font-black tracking-tight">PickPath</span>
            <span className="text-[10px] font-black bg-[#1a1a1a] text-white px-2 py-0.5 rounded-md uppercase tracking-widest">
              AI WMS
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#555]">
            <a href="#how-it-works" className="hover:text-[#1a1a1a] transition-colors">How It Works</a>
            <a href="#ai-features" className="hover:text-[#1a1a1a] transition-colors">AI Features</a>
            <a href="#wms" className="hover:text-[#1a1a1a] transition-colors">WMS Suite</a>
            <a href="#consulting" className="hover:text-[#1a1a1a] transition-colors">Consulting</a>
            <a href="#pricing" className="hover:text-[#1a1a1a] transition-colors">Pricing</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 bg-[#1a1a1a] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#333] transition-colors"
            >
              Book a Demo
            </a>
            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-[#eee] transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-5 space-y-1.5">
                <span className={`block h-0.5 bg-[#1a1a1a] transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block h-0.5 bg-[#1a1a1a] transition-all ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 bg-[#1a1a1a] transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-[#eee] px-6 py-4 space-y-3">
            {["How It Works", "AI Features", "WMS Suite", "Consulting", "Pricing"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                className="block text-sm font-medium text-[#555] py-2 hover:text-[#1a1a1a]"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="block bg-[#1a1a1a] text-white text-sm font-semibold px-5 py-3 rounded-full text-center mt-2"
              onClick={() => setMenuOpen(false)}
            >
              Book a Demo
            </a>
          </div>
        )}
      </header>

      {/* ════════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════════ */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-5xl">

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              <Badge dark>✦ AI-Powered</Badge>
              <Badge>Scanner-First</Badge>
              <Badge>Offline-Capable</Badge>
              <Badge>iOS &amp; Android</Badge>
            </div>

            {/* H1 — rich with SEO keywords naturally woven in */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight mb-8">
              The{" "}
              <span className="relative inline-block">
                <span className="relative z-10">AI warehouse</span>
                <span
                  className="absolute bottom-1 left-0 right-0 h-4 bg-[#f0e68c] -z-0 -skew-x-2"
                  aria-hidden="true"
                />
              </span>
              <br />
              management{" "}
              <span className="text-[#777] italic font-black">system</span>
              <br />
              that works as hard{" "}
              <span className="text-[#777] italic font-black">as you do.</span>
            </h1>

            <p className="text-xl md:text-2xl text-[#555] max-w-3xl leading-relaxed mb-10">
              PickPath is a <strong className="text-[#1a1a1a] font-semibold">cloud-based, AI-powered WMS</strong> for
              growing warehouses. It routes your picks intelligently, predicts stock issues before
              they happen, catches anomalies in real time, and answers your team&apos;s questions in
              plain English — all from a scanner in their hand.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#1a1a1a] text-white text-base font-bold px-8 py-4 rounded-full hover:bg-[#333] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Book a Free Demo →
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#1a1a1a] text-base font-semibold px-8 py-4 rounded-full border border-[#ddd] hover:border-[#1a1a1a] transition-all"
              >
                See How It Works
              </a>
            </div>

            {/* Social proof strip */}
            <div className="mt-16 flex flex-wrap gap-x-10 gap-y-4 text-sm text-[#888]">
              {[
                "✓  No IT team required",
                "✓  Live in days, not months",
                "✓  Works with any barcode scanner",
                "✓  Built for 1–50 warehouse staff",
              ].map((item) => (
                <span key={item} className="font-medium">{item}</span>
              ))}
            </div>
          </div>

          {/* Hero feature cards */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "🧠", title: "Predictive Analytics", desc: "Know what's running low before it runs out" },
              { icon: "🗺️", title: "Smart Pick Routing", desc: "AI-optimised paths cut travel time by up to 40%" },
              { icon: "🔍", title: "Anomaly Detection", desc: "Catches stock errors the moment they happen" },
              { icon: "💬", title: "AI Assistant", desc: "Ask your warehouse anything in plain English" },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white border border-[#eee] rounded-2xl p-6 hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <div className="text-3xl mb-3">{card.icon}</div>
                <h3 className="font-bold text-sm mb-1">{card.title}</h3>
                <p className="text-xs text-[#888] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          HOW IT WORKS
      ════════════════════════════════════════════════════════════════ */}
      <section id="how-it-works" className="py-24 bg-white border-y border-[#eee]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            From setup to scanning<br />in under a week.
          </h2>
          <p className="text-lg text-[#555] max-w-2xl mb-16">
            PickPath is designed to be fast to set up and instantly intuitive — no training
            courses, no consultants required just to get started.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Connect your data",
                desc: "Import your items, bins, and open orders. PickPath syncs with your backend or works standalone from day one.",
              },
              {
                step: "02",
                title: "Download the app",
                desc: "Your team downloads PickPath on iOS or Android, logs in, and is ready to scan. No hardware to buy.",
              },
              {
                step: "03",
                title: "AI learns your warehouse",
                desc: "From the first transaction, the AI engine starts building routing models, stock patterns, and anomaly baselines.",
              },
              {
                step: "04",
                title: "Work smarter every shift",
                desc: "Pick routes get faster. Stockouts get flagged before they happen. Issues surface before customers are affected.",
              },
            ].map((s) => (
              <div key={s.step} className="relative">
                <div className="text-6xl font-black text-[#eee] mb-4 leading-none">{s.step}</div>
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-[#666] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          AI FEATURES (the 4 pillars) — SEO-rich section
      ════════════════════════════════════════════════════════════════ */}
      <section id="ai-features" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>✦ AI Engine — Powered by Claude</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Four AI features.<br />Zero extra cost.
          </h2>
          <p className="text-lg text-[#555] max-w-2xl mb-16">
            Every PickPath plan includes all four AI capabilities — not as optional bolt-ons,
            but as the engine that runs every workflow.
          </p>

          {/* Pillar 1 — Predictive Analytics */}
          <div className="mb-8 grid md:grid-cols-2 gap-6 items-stretch">
            <div className="bg-[#1a1a1a] text-white rounded-3xl p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">🧠</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#888]">Pillar 01</span>
                </div>
                <h3 className="text-3xl font-black mb-4">Predictive Analytics</h3>
                <p className="text-[#aaa] leading-relaxed mb-6">
                  PickPath analyses your live inventory data to forecast stockouts, putaway backlogs,
                  and picking delays — surfacing actions before disruption hits your operations or
                  your customers.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Stockout forecasting", "Demand trend analysis", "Capacity alerts", "Reorder suggestions"].map((t) => (
                  <span key={t} className="text-xs border border-[#444] text-[#aaa] px-3 py-1 rounded-full">{t}</span>
                ))}
              </div>
            </div>

            {/* Pillar 2 — Smart Pick Routing */}
            <div className="bg-[#f0ece3] rounded-3xl p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">🗺️</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#999]">Pillar 02</span>
                </div>
                <h3 className="text-3xl font-black mb-4">Smart Pick Routing</h3>
                <p className="text-[#555] leading-relaxed mb-6">
                  Every pick task is automatically sequenced by zone, aisle, and bay using a
                  greedy serpentine algorithm. The moment a task opens, lines are already sorted
                  — no setup, no configuration, no manual effort.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Zone optimisation", "Aisle sequencing", "Travel time reduction", "Multi-order batching"].map((t) => (
                  <span key={t} className="text-xs border border-[#ccc] text-[#666] px-3 py-1 rounded-full">{t}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            {/* Pillar 3 — Anomaly Detection */}
            <div className="bg-[#f0ece3] rounded-3xl p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">🔍</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#999]">Pillar 03</span>
                </div>
                <h3 className="text-3xl font-black mb-4">Anomaly Detection</h3>
                <p className="text-[#555] leading-relaxed mb-6">
                  PickPath continuously monitors your warehouse for over-allocations, quantity
                  mismatches, wrong-bin putaways, and expiry risks — raising prioritised alerts
                  the moment something is off, before it reaches your customers.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Over-allocation alerts", "Expiry monitoring", "Quantity variance", "Wrong-bin detection"].map((t) => (
                  <span key={t} className="text-xs border border-[#ccc] text-[#666] px-3 py-1 rounded-full">{t}</span>
                ))}
              </div>
            </div>

            {/* Pillar 4 — NL Assistant */}
            <div className="bg-[#1a1a1a] text-white rounded-3xl p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">💬</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#888]">Pillar 04</span>
                </div>
                <h3 className="text-3xl font-black mb-4">Natural Language Assistant</h3>
                <p className="text-[#aaa] leading-relaxed mb-6">
                  Ask your warehouse anything in plain English, directly from the app.
                  &ldquo;Which items are low on stock?&rdquo; &ldquo;Fastest route for order 1234?&rdquo;
                  &ldquo;Best bin for this SKU?&rdquo; The AI answers from your live data — even
                  without an internet connection.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Plain-English queries", "Instant answers", "Works offline", "Powered by Claude"].map((t) => (
                  <span key={t} className="text-xs border border-[#444] text-[#aaa] px-3 py-1 rounded-full">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          WMS SUITE
      ════════════════════════════════════════════════════════════════ */}
      <section id="wms" className="py-24 bg-white border-y border-[#eee] px-6">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>WMS Suite</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Every operation. One system.
          </h2>
          <p className="text-lg text-[#555] max-w-2xl mb-16">
            PickPath covers the full warehouse workflow — from goods arriving at the dock
            to orders leaving dispatch — in a single scanner-ready app.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: "📥",
                title: "Receiving & Receipting",
                desc: "Scan against purchase orders. Capture batch numbers, expiry dates, and serials. FEFO-compliant from day one.",
                highlight: false,
              },
              {
                icon: "📦",
                title: "AI-Guided Putaway",
                desc: "The AI suggests the best bin for every item based on zone rules, existing stock, and item history.",
                highlight: true,
              },
              {
                icon: "🗺️",
                title: "Smart Picking",
                desc: "AI-optimised pick sequences reduce floor travel. Supports single-order, batch, and wave picking.",
                highlight: false,
              },
              {
                icon: "📋",
                title: "Packing & Dispatch",
                desc: "Verify picks against orders, capture carton weights and dimensions, and generate dispatch records automatically.",
                highlight: false,
              },
              {
                icon: "🔄",
                title: "Stocktake & Cycle Count",
                desc: "Continuous or full stocktakes with live variance reports and AI-powered discrepancy investigation.",
                highlight: false,
              },
              {
                icon: "📊",
                title: "Live Inventory Dashboard",
                desc: "Bin-level visibility of on-hand, allocated, available, and in-transit stock across all locations.",
                highlight: false,
              },
              {
                icon: "📱",
                title: "Mobile Scanner Apps",
                desc: "Native iOS and Android apps built for barcode scanners. Works on phones, tablets, and dedicated scanners.",
                highlight: false,
              },
              {
                icon: "🌐",
                title: "Web Admin Portal",
                desc: "Full management dashboard for supervisors — orders, inventory, reports, and AI insights in a browser.",
                highlight: false,
              },
              {
                icon: "🔌",
                title: "Offline Mode",
                desc: "All operations continue without internet. Data syncs automatically when connectivity is restored.",
                highlight: true,
              },
            ].map((f) => (
              <div
                key={f.title}
                className={`rounded-2xl p-7 border transition-all hover:-translate-y-1 hover:shadow-md ${
                  f.highlight
                    ? "bg-[#1a1a1a] text-white border-[#1a1a1a]"
                    : "bg-[#f9f8f5] border-[#eee]"
                }`}
              >
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className={`font-bold text-base mb-2 ${f.highlight ? "text-white" : ""}`}>{f.title}</h3>
                <p className={`text-sm leading-relaxed ${f.highlight ? "text-[#aaa]" : "text-[#666]"}`}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          BEFORE / AFTER
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>The difference</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-16">
            What your warehouse looks like<br />before and after PickPath.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Before */}
            <div className="bg-[#fff5f5] border border-[#fdd] rounded-3xl p-8">
              <h3 className="font-black text-xl mb-6 text-[#c00]">❌ Before PickPath</h3>
              <ul className="space-y-4">
                {[
                  "Picking from paper lists — pickers zigzag the warehouse",
                  "Stockouts discovered only when an order fails",
                  "Wrong items shipped due to undetected mismatches",
                  "Stocktake is a full shutdown every quarter",
                  "New staff take weeks to learn the layout",
                  "Supervisors spend hours chasing inventory questions",
                  "No visibility into what caused a picking error",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-[#555]">
                    <span className="text-[#f99] mt-0.5 flex-shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="bg-[#f0fff4] border border-[#c3e6c3] rounded-3xl p-8">
              <h3 className="font-black text-xl mb-6 text-[#1a7a3a]">✅ After PickPath</h3>
              <ul className="space-y-4">
                {[
                  "AI-optimised routes guide every pick — zero wasted steps",
                  "Predictive alerts flag low stock 2–3 days before impact",
                  "Anomaly detection catches mismatches before dispatch",
                  "Continuous cycle counts — no more full shutdowns",
                  "AI assistant answers any question in seconds",
                  "Supervisors get insight dashboards, not inbox chaos",
                  "Full audit trail — every scan, every decision, logged",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-[#333]">
                    <span className="text-[#5a5] mt-0.5 flex-shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          CONSULTING
      ════════════════════════════════════════════════════════════════ */}
      <section id="consulting" className="py-24 bg-white border-y border-[#eee] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#1a1a1a] text-white rounded-3xl p-10 md:p-16">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <SectionLabel>Consulting Services</SectionLabel>
                <h2 className="text-4xl font-black tracking-tight mb-5">
                  Need the process right<br />before the software?
                </h2>
                <p className="text-[#bbb] leading-relaxed mb-4">
                  Software alone doesn&apos;t fix a broken process. PickPath&apos;s consulting team
                  helps you design the workflows, SOPs, and bin structures that the WMS will
                  execute — so you&apos;re automating the right things from day one.
                </p>
                <p className="text-[#bbb] leading-relaxed mb-8">
                  Whether you&apos;re setting up for the first time or overhauling a warehouse
                  that&apos;s outgrown its current system, we&apos;ll build the foundation and
                  then run the software on top of it.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-white text-[#1a1a1a] font-bold px-7 py-3.5 rounded-full hover:bg-[#f0f0f0] transition-colors"
                >
                  Talk to a Consultant →
                </a>
              </div>
              <div className="space-y-3">
                {[
                  { icon: "📐", title: "Receiving & putaway process design" },
                  { icon: "🗺️", title: "Pick and pack workflow improvement" },
                  { icon: "📍", title: "Bin location and barcode setup" },
                  { icon: "🔢", title: "Stocktake process structure" },
                  { icon: "📄", title: "Warehouse SOP creation" },
                  { icon: "🔎", title: "Operational reviews and gap analysis" },
                ].map((s) => (
                  <div
                    key={s.title}
                    className="flex items-center gap-4 bg-white/10 hover:bg-white/15 transition-colors rounded-2xl px-5 py-4"
                  >
                    <span className="text-xl">{s.icon}</span>
                    <span className="text-sm text-[#ddd] font-medium">{s.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          PRICING
      ════════════════════════════════════════════════════════════════ */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>Pricing</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
              All four AI features.<br />Every plan. No exceptions.
            </h2>
            <p className="text-lg text-[#555] max-w-xl mx-auto">
              No bolt-ons. No &ldquo;AI tier.&rdquo; Predictive analytics, smart routing, anomaly
              detection, and the assistant come standard.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "$149",
                period: "/month",
                tagline: "For teams replacing spreadsheets",
                features: ["Up to 3 users", "5,000 SKUs", "All 4 AI features", "iOS & Android apps", "Email support", "1 warehouse"],
                cta: "Get Started",
                highlight: false,
              },
              {
                name: "Growth",
                price: "$349",
                period: "/month",
                tagline: "For warehouses scaling fast",
                features: ["Up to 15 users", "Unlimited SKUs", "All 4 AI features", "Multi-warehouse", "Priority support", "API & integrations", "Custom bin rules"],
                cta: "Most Popular",
                highlight: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "",
                tagline: "For complex or large operations",
                features: ["Unlimited users", "Unlimited SKUs", "All 4 AI features", "Dedicated onboarding", "SLA guarantee", "On-premise option", "Custom integrations"],
                cta: "Contact Us",
                highlight: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`rounded-3xl p-8 border flex flex-col ${
                  plan.highlight
                    ? "bg-[#1a1a1a] text-white border-[#1a1a1a] scale-[1.02] shadow-2xl"
                    : "bg-white border-[#eee]"
                }`}
              >
                <div>
                  <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${plan.highlight ? "text-[#888]" : "text-[#999]"}`}>
                    {plan.name}
                  </p>
                  <div className="flex items-end gap-1 mb-1">
                    <span className="text-4xl font-black">{plan.price}</span>
                    {plan.period && <span className={`text-sm mb-1.5 ${plan.highlight ? "text-[#888]" : "text-[#aaa]"}`}>{plan.period}</span>}
                  </div>
                  <p className={`text-sm mb-7 ${plan.highlight ? "text-[#888]" : "text-[#999]"}`}>{plan.tagline}</p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className={`text-sm flex items-start gap-2.5 ${plan.highlight ? "text-[#ccc]" : "text-[#555]"}`}>
                        <span className={`flex-shrink-0 mt-0.5 ${plan.highlight ? "text-[#666]" : "text-[#bbb]"}`}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="#contact"
                  className={`mt-auto block text-center font-bold py-3.5 rounded-full transition-all hover:scale-[1.02] ${
                    plan.highlight
                      ? "bg-white text-[#1a1a1a] hover:bg-[#eee]"
                      : "bg-[#1a1a1a] text-white hover:bg-[#333]"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          FAQ — Boosts SEO with long-tail keywords
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white border-y border-[#eee] px-6">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="text-4xl font-black tracking-tight mb-12">Common questions.</h2>
          <div className="space-y-6">
            {[
              {
                q: "What makes PickPath different from other warehouse management systems?",
                a: "Most WMS products add AI as an expensive optional module. PickPath is built AI-first — predictive analytics, smart pick routing, anomaly detection, and a natural language assistant are embedded in every workflow, included in every plan.",
              },
              {
                q: "How does the AI pick routing work?",
                a: "When a pick task is opened, PickPath's routing engine sorts the pick lines by warehouse zone, then aisle, then bay — using a serpentine (zigzag) algorithm that eliminates backtracking. This happens automatically with no configuration needed.",
              },
              {
                q: "Can staff use PickPath without warehouse management experience?",
                a: "Yes. The scanner app is designed to guide staff step by step. The AI assistant can answer any question — 'where does this go?', 'what's the next pick?' — in plain English, making onboarding dramatically faster.",
              },
              {
                q: "Does PickPath work offline?",
                a: "Yes. PickPath is built offline-first. All picking, receiving, and putaway operations continue without internet. When connectivity returns, data syncs automatically.",
              },
              {
                q: "How long does it take to get started?",
                a: "Most warehouses are live within 2–5 business days. We help you import your items, set up your bin structure, and configure your workflows. Consulting support is available if you need process design help first.",
              },
              {
                q: "Is PickPath suitable for my size of warehouse?",
                a: "PickPath is purpose-built for small to mid-size warehouses — ecommerce brands, wholesalers, distributors, 3PLs, and retailers — with 1 to 50 staff. If you've outgrown spreadsheets but don't need an enterprise ERP, PickPath is built for you.",
              },
            ].map((faq) => (
              <details key={faq.q} className="group border border-[#eee] rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-7 py-5 cursor-pointer font-semibold text-[#1a1a1a] hover:bg-[#fafafa] list-none transition-colors">
                  {faq.q}
                  <span className="flex-shrink-0 text-[#aaa] group-open:rotate-45 transition-transform text-xl font-light">+</span>
                </summary>
                <div className="px-7 pb-6 text-sm text-[#555] leading-relaxed border-t border-[#eee] pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          CONTACT / CTA
      ════════════════════════════════════════════════════════════════ */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left */}
            <div>
              <SectionLabel>Book a Demo</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5">
                See PickPath in your<br />warehouse in 30 minutes.
              </h2>
              <p className="text-[#555] leading-relaxed mb-8">
                Book a free demo and we&apos;ll walk through your current setup, show you exactly
                how PickPath would work for your operation, and answer every question your team has.
              </p>
              <div className="space-y-4 text-sm">
                {[
                  "✓  30-minute live walkthrough",
                  "✓  We map it to your actual workflows",
                  "✓  No sales pressure — just a real conversation",
                  "✓  We reply within one business day",
                ].map((item) => (
                  <p key={item} className="text-[#555] font-medium">{item}</p>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div className="bg-white border border-[#eee] rounded-3xl p-8 shadow-sm">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-2xl font-black mb-2">You&apos;re on the list.</h3>
                  <p className="text-[#555] text-sm">We&apos;ll be in touch within one business day to book your demo.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-[#999] mb-2">Name *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="w-full border border-[#ddd] rounded-xl px-4 py-3 text-sm bg-[#fafafa] focus:outline-none focus:border-[#1a1a1a] focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-[#999] mb-2">Company</label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Company name"
                        className="w-full border border-[#ddd] rounded-xl px-4 py-3 text-sm bg-[#fafafa] focus:outline-none focus:border-[#1a1a1a] focus:bg-white transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-[#999] mb-2">Work Email *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="w-full border border-[#ddd] rounded-xl px-4 py-3 text-sm bg-[#fafafa] focus:outline-none focus:border-[#1a1a1a] focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-[#999] mb-2">Tell us about your warehouse</label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Size of warehouse, current system, biggest challenge..."
                      className="w-full border border-[#ddd] rounded-xl px-4 py-3 text-sm bg-[#fafafa] focus:outline-none focus:border-[#1a1a1a] focus:bg-white transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#1a1a1a] text-white font-bold py-4 rounded-full hover:bg-[#333] transition-all hover:scale-[1.01] active:scale-[0.99] text-base"
                  >
                    Book My Free Demo →
                  </button>
                  <p className="text-xs text-center text-[#bbb]">
                    No spam. We only use your email to respond to this request.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          FOOTER
      ════════════════════════════════════════════════════════════════ */}
      <footer className="bg-[#1a1a1a] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl font-black">PickPath</span>
                <span className="text-[10px] font-black bg-white text-[#1a1a1a] px-2 py-0.5 rounded-md uppercase tracking-widest">
                  AI WMS
                </span>
              </div>
              <p className="text-[#888] text-sm leading-relaxed max-w-xs mb-6">
                The AI-powered warehouse management system for small and growing businesses.
                Scanner-first. Offline-capable. Built to make your team faster and your
                operation smarter.
              </p>
              <a
                href="mailto:rahulnair160793@gmail.com"
                className="text-sm text-[#888] hover:text-white transition-colors"
              >
                rahulnair160793@gmail.com
              </a>
            </div>

            {/* Product */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#555] mb-4">Product</p>
              <ul className="space-y-2.5 text-sm">
                {[
                  ["How It Works", "#how-it-works"],
                  ["AI Features", "#ai-features"],
                  ["WMS Suite", "#wms"],
                  ["Pricing", "#pricing"],
                  ["Book a Demo", "#contact"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="text-[#888] hover:text-white transition-colors">{label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#555] mb-4">Solutions</p>
              <ul className="space-y-2.5 text-sm">
                {[
                  "Ecommerce Warehouses",
                  "Wholesale & Distribution",
                  "3PL Providers",
                  "Retail Back-of-house",
                  "Manufacturing Stores",
                ].map((item) => (
                  <li key={item} className="text-[#888] text-sm">{item}</li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#555] mb-4">Company</p>
              <ul className="space-y-2.5 text-sm">
                {[
                  ["Consulting", "#consulting"],
                  ["Contact", "#contact"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="text-[#888] hover:text-white transition-colors">{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-[#333] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#555]">
            <p>© {new Date().getFullYear()} PickPath. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <span>AI engine powered by <span className="text-[#777]">Anthropic Claude</span></span>
              <span>·</span>
              <span>Warehouse Management System</span>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
