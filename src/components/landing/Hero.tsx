import { ArrowRight, Download, Star } from "lucide-react";

const chips = ["Pantry recipe planner", "Travel memory map", "Indie shop landing page"];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden hero-glow">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-60" />
      <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-16 text-center sm:pt-28">
        <h1 className="mx-auto max-w-3xl text-4xl font-semibold leading-[1.08] sm:text-6xl">
          The open-source AI app builder{" "}
          <span className="text-gradient">on your desktop</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
          Turn ideas into working web apps without writing code. Bring your own AI models,
          keep your source, and walk away whenever you like — zero lock-in.
        </p>

        <div id="download" className="mt-9 flex flex-col items-center gap-4">
          <a
            href="#download"
            className="inline-flex items-center gap-3 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground glow transition-transform hover:-translate-y-0.5"
          >
            <Download className="size-4" />
            Download Deploy for macOS
          </a>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
            <span>1 million+ downloads</span>
            <span className="hidden h-3 w-px bg-border sm:block" />
            <a href="#download" className="underline-offset-4 hover:text-foreground hover:underline">
              More platforms
            </a>
            <span className="hidden h-3 w-px bg-border sm:block" />
            <span className="inline-flex items-center gap-1.5">
              <Star className="size-3.5 text-primary" /> 20k GitHub stars
            </span>
          </div>
        </div>

        {/* App mock */}
        <div className="mx-auto mt-16 max-w-4xl panel p-1 text-left">
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <span className="size-2.5 rounded-full bg-destructive/70" />
            <span className="size-2.5 rounded-full bg-accent/70" />
            <span className="size-2.5 rounded-full bg-primary/70" />
            <span className="ml-3 text-xs text-muted-foreground">Deploy — Manage app</span>
            <span className="ml-auto rounded-md border border-border px-2 py-0.5 text-[10px] uppercase tracking-widest text-muted-foreground">
              Pro
            </span>
          </div>
          <div className="px-6 py-10 sm:px-10">
            <h2 className="text-2xl font-semibold sm:text-3xl">What do you want to build?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Describe your idea. Deploy turns it into a running app.
            </p>
            <div className="mt-6 rounded-xl border border-border bg-card p-4">
              <p className="font-mono text-sm text-muted-foreground">
                Ask Deploy to build an ecommerce store...
              </p>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Model: Auto</span>
                <span className="inline-flex items-center gap-2 rounded-lg bg-primary px-3.5 py-2 text-xs font-semibold text-primary-foreground">
                  Build <ArrowRight className="size-3.5" />
                </span>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {chips.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground"
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
