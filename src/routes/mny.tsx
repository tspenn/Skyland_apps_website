import { createFileRoute } from "@tanstack/react-router";
import { MarkdownPage } from "@/components/markdown-page";
import content from "@/content/mny.md?raw";

const description =
  "One button, one answer — know what you can actually spend right now.";

export const Route = createFileRoute("/mny")({
  head: () => ({
    meta: [
      { title: "My$ — Skyland Suite" },
      { name: "description", content: description },
      { property: "og:title", content: "My$ — Skyland Suite" },
      { property: "og:description", content: description },
      { property: "og:image", content: "/mny-hero.png" },
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
            src="/mny-hero.png"
            alt="My$ — know before you spend"
            className="w-full h-auto block"
          />
        </div>
      </div>
      <MarkdownPage content={content} />
    </>
  );
}
