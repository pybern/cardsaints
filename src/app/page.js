export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-16">
      <div className="w-full max-w-xl text-[1.2rem] leading-relaxed text-foreground">
        <p>
          <em>Card Saints</em> is an investment firm focused on the trading card
          market. We buy, hold, and sell cards across sports, gaming, and
          collectibles.
        </p>

        <p className="mt-8">
          We are building a network of trusted partners—dealers, collectors,
          graders, and enthusiasts—who share our long-term view on the space.
        </p>

        <p className="mt-8">
          If you have cards to sell, a collection to appraise, or want to work
          together, we&apos;d like to hear from you.
        </p>

        <p className="mt-12">
          <a
            href="mailto:hello@cardsaints.com"
            className="font-semibold underline-offset-4 hover:underline"
          >
            hello@cardsaints.com
          </a>
        </p>
      </div>
    </main>
  );
}
