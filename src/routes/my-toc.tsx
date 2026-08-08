import { createFileRoute } from "@tanstack/react-router";
import { MarkdownPage } from "@/components/markdown-page";
import content from "@/content/my-toc.md?raw";

export const Route = createFileRoute("/my-toc")({
  head: () => ({
    meta: [
      { title: "TOC — Tactical Operations Command — Skyland Apps" },
      {
        name: "description",
        content:
          "TOC is the executive command layer for Directives — issue, assign, confirm. Get it today at MyTOC.app.",
      },
      { property: "og:title", content: "TOC — Tactical Operations Command — Skyland Apps" },
      {
        property: "og:description",
        content:
          "Your complete operational command center. Issue it. Assign it. Confirm it. Done. Tick Tock.",
      },
      { property: "og:image", content: "/toc-hero.png" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <div className="container-narrow pt-12 md:pt-16">
        <div className="relative w-full overflow-hidden rounded-lg border border-border/60 bg-black">
          <picture>
            <source media="(max-width: 767px)" srcSet="/toc-hero-mobile.png" />
            <img
              src="/toc-hero.png"
              alt="Tactical Operations Command — Tick Tock"
              className="w-full h-auto block"
            />
          </picture>
        </div>
      </div>
      <MarkdownPage content={content} />
    </>
  );
}
