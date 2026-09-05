import { createFileRoute } from "@tanstack/react-router";
import { MarkdownPage } from "@/components/markdown-page";
import content from "@/content/trvl.md?raw";

const description =
  "Your personal travel companion. Lists, recipes, trip planning, essentials tracking, journeys, and budgeting in one calm place.";

export const Route = createFileRoute("/trvl")({
  head: () => ({
    meta: [
      { title: "TRVL — Skyland Suite" },
      { name: "description", content: description },
      { property: "og:title", content: "TRVL — Skyland Suite" },
      { property: "og:description", content: description },
      { property: "og:image", content: "/trvl-hero.png" },
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
            src="/trvl-hero.png"
            alt="TRVL — your personal travel companion"
            className="w-full h-auto block"
          />
        </div>
      </div>
      <MarkdownPage content={content} />
    </>
  );
}
