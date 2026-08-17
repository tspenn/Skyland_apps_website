import { createFileRoute } from "@tanstack/react-router";
import { MarkdownPage } from "@/components/markdown-page";
import content from "@/content/my-toc.md?raw";

export const Route = createFileRoute("/my-toc")({
  head: () => ({
    meta: [
      { title: "TOC — Tactical Operations Command — Skyland Suite" },
      {
        name: "description",
        content:
          "TOC puts every major Directive for your leadership team in your hand. Command for COOs and chiefs of staff — the whole board, not a chat scroll.",
      },
      { property: "og:title", content: "TOC — Tactical Operations Command — Skyland Suite" },
      {
        property: "og:description",
        content:
          "Your complete operational command center — directives, files, and team confirmation. Issue it. Attach it. Assign it. Confirm it. Done. Tick Tock.",
      },
      { property: "og:image", content: "/toc-hero.png" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <div className="container-narrow pt-12 md:pt-16 space-y-6">
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
        <div
          className="relative w-full overflow-hidden rounded-lg border border-border/60"
          style={{ paddingTop: "56.25%" }}
        >
          <iframe
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube.com/embed/_vzB73XVNa8"
            title="Tactical Operations Command — Tick Tock"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
      <MarkdownPage content={content} />
    </>
  );
}
