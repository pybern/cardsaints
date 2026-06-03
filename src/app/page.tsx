const focusAreas = [
  "Sports cards",
  "Gaming",
  "Collectibles",
  "Appraisals",
  "Partnerships",
];

const principles = [
  "Patient capital",
  "Trusted counterparties",
  "Long-term conviction",
];

export default function Home() {
  return (
    <main className="relative flex min-h-svh items-center justify-center overflow-hidden px-6 py-10 text-foreground sm:px-10 lg:px-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(138,91,44,0.18),transparent_32rem),radial-gradient(circle_at_bottom_right,rgba(36,28,24,0.12),transparent_28rem)]" />
      <div className="absolute left-1/2 top-10 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />

      <section className="w-full max-w-5xl rounded-[2rem] border border-border/80 bg-paper/85 p-6 shadow-[0_24px_90px_rgba(48,34,24,0.13)] backdrop-blur sm:p-10 lg:p-14">
        <header className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-full border border-foreground/15 bg-background text-sm font-semibold tracking-[0.18em] text-accent">
              CS
            </span>
            <div>
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-muted">
                Card Saints
              </p>
              <p className="font-sans text-sm text-muted">
                Trading card investment
              </p>
            </div>
          </div>

          <a
            href="mailto:hello@cardsaints.com"
            className="w-fit rounded-full border border-border bg-background px-5 py-2 font-sans text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent"
          >
            hello@cardsaints.com
          </a>
        </header>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_17rem] lg:items-end">
          <article>
            <p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.34em] text-accent">
              Private card capital
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-foreground sm:text-6xl lg:text-7xl">
              Investing in the culture of trading cards.
            </h1>

            <div className="mt-8 max-w-2xl space-y-5 text-xl leading-relaxed text-foreground/85 sm:text-2xl">
              <p>
                Card Saints buys, holds, and sells cards across sports, gaming,
                and collectible markets with a long-term view.
              </p>
              <p>
                We work with collectors, dealers, graders, and enthusiasts who
                value trust, taste, and a clear eye for opportunity.
              </p>
              <p>
                If you have cards to sell, a collection to appraise, or a
                partnership worth discussing, we would like to hear from you.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="mailto:hello@cardsaints.com"
                className="inline-flex items-center justify-center rounded-full bg-foreground px-7 py-3 font-sans text-sm font-semibold uppercase tracking-[0.18em] text-background transition hover:-translate-y-0.5 hover:bg-accent"
              >
                Start a conversation
              </a>
              <p className="font-sans text-sm text-muted">
                Buying, appraising, and partnering by introduction.
              </p>
            </div>
          </article>

          <aside className="rounded-3xl border border-border bg-background/70 p-6 font-sans">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">
              Focus
            </p>
            <ul className="mt-5 flex flex-wrap gap-2 lg:flex-col">
              {focusAreas.map((area) => (
                <li
                  key={area}
                  className="rounded-full border border-border bg-paper px-3 py-1.5 text-sm text-foreground/80"
                >
                  {area}
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-border pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">
                Approach
              </p>
              <ul className="mt-4 space-y-3 text-sm text-foreground/75">
                {principles.map((principle) => (
                  <li key={principle} className="flex items-center gap-3">
                    <span className="size-1.5 rounded-full bg-accent" />
                    {principle}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
