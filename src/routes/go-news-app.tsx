import { createFileRoute } from "@tanstack/react-router";
import { MarkdownPage } from "@/components/markdown-page";
import content from "@/content/go-news-app.md?raw";

const description =
  "Keeping tabs on all the things that matter. A web-based news companion — light, fast, and ready on all your devices.";

export const Route = createFileRoute("/go-news-app")({
  head: () => ({
    meta: [
      { title: "Go News — Skyland Suite" },
      { name: "description", content: description },
      { property: "og:title", content: "Go News — Skyland Suite" },
      { property: "og:description", content: description },
      { property: "og:image", content: "/go-news-hero.png" },
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
            src="/go-news-hero.png"
            alt="Go News — keeping tabs on all the things that matter"
            className="w-full h-auto block"
          />
        </div>
      </div>
      <MarkdownPage content={content} />
    </>
  );
}
