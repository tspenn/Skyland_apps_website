import { createFileRoute } from "@tanstack/react-router";
import { MarkdownPage } from "@/components/markdown-page";
import content from "@/content/gia.md?raw";

const description =
  "Go Intelligence Agency — deploy operatives on the markets, competitors, and signals that move your business.";

export const Route = createFileRoute("/gia")({
  head: () => ({
    meta: [
      { title: "GIA — Go Intelligence Agency — Skyland Suite" },
      { name: "description", content: description },
      { property: "og:title", content: "GIA — Go Intelligence Agency — Skyland Suite" },
      { property: "og:description", content: description },
      { property: "og:image", content: "/gia-hero.png" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <div className="container-narrow pt-12 md:pt-16">
        <div className="relative w-full overflow-hidden rounded-lg border border-border/60">
          <img
            src="/gia-hero.png"
            alt="GIA — Go Intelligence Agency"
            className="w-full h-auto block"
          />
        </div>
      </div>
      <MarkdownPage content={content} />
    </>
  );
}
