import { Cpu, Code2, GitBranch, Laptop, ShieldCheck, Database } from "lucide-react";

const pillars = [
  { icon: Laptop, title: "Local first", body: "Runs on your machine. Your data stays under your control." },
  { icon: Cpu, title: "Use any AI model", body: "OpenAI, Anthropic, Google, Ollama, LM Studio and more." },
  { icon: Code2, title: "Real code you own", body: "Export clean, runnable projects. No lock-in, ever." },
  { icon: GitBranch, title: "Open source", body: "Transparent by design, built together with the community." },
];

export function Features() {
  return (
    <section id="features" className="border-t border-border/60 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-2xl border border-border bg-card p-6">
              <p.icon className="size-5 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-primary">End-to-end</span>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Create apps from start to finish
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Deploy gives you deep customization with just enough structure that you never
            feel lost.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <article className="rounded-2xl border border-border bg-card p-6">
            <Database className="size-5 text-accent" />
            <h3 className="mt-4 text-lg font-semibold">Full-stack in one place</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Connect your accounts for instant database, auth and server functions.
            </p>
            <div className="mt-5 overflow-hidden rounded-xl border border-border font-mono text-xs">
              <div className="flex justify-between bg-muted px-3 py-2 text-muted-foreground">
                <span>users</span>
                <span>3 rows</span>
              </div>
              {[
                ["01", "ada@deploy.app", "admin"],
                ["02", "max@deploy.app", "user"],
                ["03", "lia@deploy.app", "user"],
              ].map((r) => (
                <div key={r[0]} className="flex justify-between border-t border-border px-3 py-2">
                  <span className="text-muted-foreground">{r[0]}</span>
                  <span>{r[1]}</span>
                  <span className="text-muted-foreground">{r[2]}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-border bg-card p-6">
            <ShieldCheck className="size-5 text-primary" />
            <h3 className="mt-4 text-lg font-semibold">Security reviews built in</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Catch critical issues early and get clear fixes before they hurt.
            </p>
            <div className="mt-5 space-y-2">
              {[
                ["SQL injection", "Fixed"],
                ["XSS vulnerability", "Fixed"],
                ["Auth misconfig", "Review"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-center justify-between rounded-lg border border-border px-3 py-2 text-xs"
                >
                  <span>{k}</span>
                  <span className={v === "Fixed" ? "text-primary" : "text-accent"}>{v}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-border bg-card p-6">
            <GitBranch className="size-5 text-accent" />
            <h3 className="mt-4 text-lg font-semibold">Ship anywhere</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Push to GitHub and your favourite host in a few clicks — or bring your own cloud.
            </p>
            <div className="mt-5 space-y-2">
              {[
                ["GitHub", "Connected"],
                ["Hosting", "Connected"],
                ["Your cloud", "BYO"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-center justify-between rounded-lg border border-border px-3 py-2 text-xs"
                >
                  <span>{k}</span>
                  <span className="text-muted-foreground">{v}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
