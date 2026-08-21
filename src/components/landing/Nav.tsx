import { Github, Menu } from "lucide-react";

const links = [
  { label: "Features", href: "#features" },
  { label: "Freedom", href: "#freedom" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center gap-8 px-5">
        <a href="#top" className="flex items-center gap-2.5">
          <img src="/logo.svg" alt="" aria-hidden="true" className="size-7" />
          <span className="font-display text-lg font-extrabold tracking-tight">Deploy</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[15px] font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <a
            href="#download"
            aria-label="GitHub"
            className="hidden size-9 place-items-center rounded-lg text-foreground/70 transition-colors hover:text-foreground sm:grid"
          >
            <Github className="size-[18px]" />
          </a>
          <a
            href="#pricing"
            className="hidden rounded-xl border border-primary/40 px-4 py-2 text-sm font-bold text-primary transition-colors hover:bg-primary/5 sm:block"
          >
            Deploy Pro
          </a>
          <a
            href="#download"
            className="rounded-xl bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Download
          </a>
          <button
            type="button"
            aria-label="Open menu"
            className="grid size-9 place-items-center rounded-lg border border-border text-foreground/70 md:hidden"
          >
            <Menu className="size-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
