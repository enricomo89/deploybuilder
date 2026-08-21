const models = [
  ["GPT 5.4", "OpenAI"],
  ["Claude Opus 4.7", "Anthropic"],
  ["Gemini Pro 3.1", "Google"],
  ["Qwen 3.6 27B", "Local"],
];

export function Freedom() {
  return (
    <section id="freedom" className="border-t border-border/60 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-accent">Flexibility</span>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Zero lock-in, maximum freedom
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Deploy never traps you in a proprietary ecosystem — your models, your tools,
            your code.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold">Use any AI model</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Works with hosted and free models alike. Add almost any provider in seconds.
            </p>
            <div className="mt-5 space-y-2 font-mono text-xs">
              {models.map(([m, p]) => (
                <div
                  key={m}
                  className="flex items-center justify-between rounded-lg border border-border px-3 py-2.5"
                >
                  <span>{m}</span>
                  <span className="text-muted-foreground">{p}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold">Your code stays yours</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Every project is a normal repository on disk. Open it in any editor, commit
              it, or take it somewhere else — nothing is hidden.
            </p>
            <pre className="mt-5 overflow-x-auto rounded-xl border border-border bg-background p-4 font-mono text-xs text-muted-foreground">
{`~/projects/my-app
├── src/
├── package.json
└── README.md

$ git push origin main`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
