import { createFileRoute } from "@tanstack/react-router";
import { MarkdownPage } from "@/components/markdown-page";
import content from "@/content/friday-canvas.md?raw";

const description =
  "One workspace for thoughts, projects, and workload. Browser-native — for people with too many tabs and too many thoughts.";

export const Route = createFileRoute("/friday-canvas")({
  head: () => ({
    meta: [
      { title: "FRIDAY Canvas — Skyland Suite" },
      { name: "description", content: description },
      { property: "og:title", content: "FRIDAY Canvas — Skyland Suite" },
      { property: "og:description", content: description },
      { property: "og:image", content: "/friday-canvas-hero.png" },
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
            src="/friday-canvas-hero.png"
            alt="FRIDAY Canvas"
            className="w-full h-auto block"
          />
        </div>
      </div>
      <MarkdownPage content={content} />
    </>
  );
}
