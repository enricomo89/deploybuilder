const plans = [
  {
    name: "Free",
    price: "$0",
    note: "Perfect for getting started and building your first apps.",
    features: [
      "Local, open-source AI app builder",
      "macOS & Windows downloads",
      "No sign-up required",
      "Bring your own API key",
      "Community support",
    ],
    cta: "Get started",
    featured: false,
  },
  {
    name: "Deploy Pro",
    price: "$20",
    note: "Unlock advanced AI modes and Pro-only features.",
    features: [
      "Everything in Free, plus...",
      "Pro modes for large codebases",
      "200 AI credits / month",
      "Full Deploy Academy access",
    ],
    cta: "Subscribe to Pro",
    featured: true,
  },
  {
    name: "Deploy Max",
    price: "$79",
    note: "For building large, complex products.",
    features: [
      "Everything in Pro, plus...",
      "900 AI credits / month",
      "Priority office hours",
      "Reload credits any time",
    ],
    cta: "Available as upgrade",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="border-t border-border/60 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-primary">Pricing</span>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Start free, scale later</h2>
        </div>

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={
                p.featured
                  ? "relative rounded-2xl border border-primary/50 bg-card p-7 glow"
                  : "rounded-2xl border border-border bg-card p-7"
              }
            >
              {p.featured && (
                <span className="absolute -top-3 left-7 rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary-foreground">
                  Recommended
                </span>
              )}
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="mt-3 text-3xl font-semibold">
                {p.price}
                <span className="text-sm font-normal text-muted-foreground">/month</span>
              </p>
              <p className="mt-3 text-sm text-muted-foreground">{p.note}</p>
              <ul className="mt-6 space-y-2.5 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2 text-muted-foreground">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#download"
                className={
                  p.featured
                    ? "mt-7 block rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
                    : "mt-7 block rounded-xl border border-border px-4 py-3 text-center text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                }
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
