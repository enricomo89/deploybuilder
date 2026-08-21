import { ArrowRight, Download, Star } from "lucide-react";

const chips = ["Pantry recipe planner", "Travel memory map", "Indie shop landing page"];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden hero-glow">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-70" />
      <div className="relative mx-auto max-w-6xl px-5 pt-16 pb-20 sm:pt-24">
        <h1 className="max-w-4xl text-[2.75rem] leading-[1.05] sm:text-6xl lg:text-[4.25rem]">
          The open-source AI app builder{" "}
          <span className="text-gradient">on your desktop</span>
        </h1>
        <p className="mt-7 max-w-2xl text-lg text-foreground/70">
          Turn ideas into working web apps without writing code. Bring your own AI models,
          keep your source, and walk away whenever you like — zero lock-in.
        </p>

        <div id="download" className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#download"
            className="inline-flex items-center gap-3 rounded-2xl bg-primary px-7 py-4 text-base font-bold text-primary-foreground glow transition-transform hover:-translate-y-0.5"
          >
            <Download className="size-[18px]" />
            <span>Download</span>
          </a>
          <a
            href="#download"
            className="rounded-2xl border border-border bg-card px-6 py-4 text-base font-bold text-foreground shadow-sm transition-colors hover:bg-muted"
          >
            More platforms
          </a>
        </div>

        <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          1 million+ downloads
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium">
          <span>Loved by builders worldwide</span>
          <span className="inline-flex items-center gap-2 text-foreground/80">
            <Star className="size-4 text-primary" /> 20k GitHub stars
          </span>
        </div>

        {/* App mock */}
        <div className="mt-16 panel p-1.5">
          <div className="flex items-center gap-2 px-4 py-3">
            <span className="size-3 rounded-full bg-destructive/70" />
            <span className="size-3 rounded-full bg-accent/50" />
            <span className="size-3 rounded-full bg-success/70" />
            <span className="ml-3 rounded-lg border border-border bg-card px-3 py-1 text-xs font-semibold">
              Manage app
            </span>
            <span className="ml-auto rounded-md border border-primary/30 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
              Pro
            </span>
          </div>
          <div className="rounded-2xl border border-border bg-card px-6 py-14 text-center sm:px-12">
            <h2 className="text-3xl sm:text-4xl">What do you want to build?</h2>
            <p className="mt-3 text-[15px] text-muted-foreground">
              Describe your idea. Deploy turns it into a running app.
            </p>
            <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-border bg-background p-4 text-left shadow-sm">
              <p className="text-[15px] text-muted-foreground">Build a pantry app…</p>
              <div className="mt-8 flex items-center gap-4 text-xs font-medium text-muted-foreground">
                <span>Build</span>
                <span>Model: Auto</span>
                <span className="ml-auto inline-flex items-center gap-2 rounded-xl bg-primary px-3.5 py-2 text-xs font-bold text-primary-foreground">
                  Send <ArrowRight className="size-3.5" />
                </span>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {chips.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-border px-4 py-2 text-xs font-medium text-foreground/75"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
