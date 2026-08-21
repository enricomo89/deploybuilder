import { Download } from "lucide-react";
import { DOWNLOAD_URL_WINDOWS } from "@/lib/download";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-16 hero-glow">
      <div className="mx-auto max-w-6xl px-5 text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">Build your next app tonight</h2>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          Free, open source, and yours to keep.
        </p>
        <a
          href={DOWNLOAD_URL_WINDOWS}
          className="mt-8 inline-flex items-center gap-3 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground glow"
        >
          <Download className="size-4" /> Download Deploy
        </a>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} Deploy. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#features" className="hover:text-foreground">Features</a>
            <a href="#pricing" className="hover:text-foreground">Pricing</a>
            <a href="#faq" className="hover:text-foreground">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
