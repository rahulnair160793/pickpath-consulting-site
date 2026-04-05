export default function WarehouseConsultingWebsite() {
  const services = [
    {
      title: "Warehouse Process Health Check",
      description:
        "A practical review of your receiving, putaway, picking, packing, stocktake, and overall warehouse flow to identify what is slowing your team down.",
    },
    {
      title: "Bin Location & Barcode Setup",
      description:
        "Create a clearer location structure, barcode logic, and handling process that supports faster and more accurate day-to-day warehouse activity.",
    },
    {
      title: "SOP & Workflow Design",
      description:
        "Build easy-to-follow operating procedures for receiving, picking, packing, stock handling, and stocktake so your team works with more consistency.",
    },
    {
      title: "Warehouse Improvement Roadmap",
      description:
        "Get a practical action plan with the key gaps, recommended fixes, and next steps needed to make your warehouse more organised and scalable.",
    },
  ];

  const outcomes = [
    {
      title: "Clearer workflows",
      description: "Reduce confusion across daily warehouse tasks and team handovers.",
    },
    {
      title: "Fewer errors",
      description: "Improve receiving, picking, and stock handling accuracy.",
    },
    {
      title: "Better control",
      description: "Create processes that are easier to manage as your business grows.",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Discovery Call",
      description: "We discuss your current warehouse setup, business goals, and operational pain points.",
    },
    {
      step: "02",
      title: "Operational Review",
      description: "I assess the current flow across receiving, storage, picking, packing, stocktake, and team execution.",
    },
    {
      step: "03",
      title: "Recommendations & Next Steps",
      description: "You receive practical recommendations, a clearer operating structure, and a focused improvement roadmap.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f7f4] text-slate-900">
      <header className="sticky top-0 z-30 border-b border-black/5 bg-[#f8f7f4]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-xl font-semibold tracking-tight text-slate-900">PickPath Consulting</div>
            <div className="text-sm text-slate-500">Warehouse process consulting for growing businesses</div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a href="#services" className="transition hover:text-slate-900">Services</a>
            <a href="#about" className="transition hover:text-slate-900">About</a>
            <a href="#process" className="transition hover:text-slate-900">How It Works</a>
            <a href="#contact" className="transition hover:text-slate-900">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-14 md:grid-cols-2">
            <div>
              <div className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-sm font-medium text-amber-900 shadow-sm">
                Practical warehouse process consulting
              </div>
              <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl md:leading-[1.05]">
                Helping small businesses build more organised, accurate, and scalable warehouses
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                PickPath Consulting helps small and growing businesses improve warehouse operations through better receiving, putaway, picking, packing, stocktake, bin location setup, barcode workflows, warehouse SOP design, and day-to-day warehouse process improvement.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:opacity-95"
                >
                  Book a Discovery Call
                </a>
                <a
                  href="#services"
                  className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Explore Services
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {outcomes.map((item) => (
                  <div key={item.title} className="rounded-3xl border border-black/5 bg-white p-5 shadow-sm">
                    <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                    <div className="mt-2 text-sm leading-6 text-slate-600">{item.description}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5">
              <div className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-xl shadow-slate-900/5">
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">What We Help With</div>
                <ul className="mt-6 space-y-4 text-slate-700">
                  <li>Receiving and putaway process design</li>
                  <li>Picking and packing workflow improvement</li>
                  <li>Bin location and barcode setup</li>
                  <li>Stocktake process structure</li>
                  <li>Warehouse SOP creation</li>
                  <li>Small warehouse operational reviews</li>
                </ul>
              </div>

              <div className="rounded-[2rem] border border-black/5 bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white shadow-xl shadow-slate-900/10">
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">Built for small businesses</div>
                <p className="mt-4 text-lg leading-8 text-slate-200">
                  Ideal for ecommerce brands, wholesalers, online retailers, and growing businesses that want better warehouse structure without hiring a large enterprise consulting firm.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="border-t border-black/5 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="max-w-2xl">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Services</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                Focused support for day-to-day warehouse operations
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Start with the operational foundations that make warehouse teams more consistent, accurate, and efficient.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-[2rem] border border-black/5 bg-[#fcfcfb] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">About</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                Practical warehouse consulting shaped by real operational and WMS exposure
              </h2>
            </div>
            <div>
              <p className="text-lg leading-8 text-slate-600">
                PickPath Consulting helps small and growing businesses build clearer warehouse processes that teams can actually follow. That includes improving how stock is received, stored, picked, packed, counted, and handled across day-to-day operations.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Rather than overcomplicating operations, PickPath Consulting focuses on practical improvements that reduce confusion, improve consistency, and create a more organised warehouse environment. Based in Sydney, the focus is on practical warehouse consulting for receiving, putaway, picking, packing, bin location setup, barcode workflows, stocktake structure, and warehouse SOP design for growing businesses.
              </p>
            </div>
          </div>
        </section>

        <section id="process" className="border-t border-black/5 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="max-w-2xl">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">How it works</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                A simple and practical consulting approach
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {steps.map((item) => (
                <div key={item.step} className="rounded-[2rem] border border-black/5 bg-[#fcfcfb] p-6 shadow-sm">
                  <div className="text-sm font-semibold text-amber-700">{item.step}</div>
                  <h3 className="mt-3 text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-4xl px-6 py-20">
          <div className="rounded-[2.5rem] border border-black/5 bg-slate-900 px-8 py-12 text-white shadow-2xl shadow-slate-900/10 md:px-12">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">Contact</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Let’s improve the way your warehouse operates
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              If you are looking to improve warehouse processes, improve inventory accuracy, streamline receiving and picking workflows, and build a more structured way of working, get in touch to book a discovery call.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm text-slate-300">Email</div>
                <div className="mt-2 text-lg font-medium">rian@pickpathconsulting.com</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm text-slate-300">Location</div>
                <div className="mt-2 text-lg font-medium">Sydney, Australia</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 bg-[#f8f7f4]">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-slate-500">
          © 2026 PickPath Consulting. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
