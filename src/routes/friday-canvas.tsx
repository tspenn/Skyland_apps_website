import { createFileRoute } from "@tanstack/react-router";
import { MarkdownPage } from "@/components/markdown-page";
import content from "@/content/friday-canvas.md?raw";

export const Route = createFileRoute("/friday-canvas")({
  head: () => ({
    meta: [
      { title: "Friday Canvas — Skyland Apps" },
      { name: "description", content: "Your private AI workspace for projects and thoughts." },
      { property: "og:title", content: "Friday Canvas — Skyland Apps" },
      { property: "og:description", content: "Your private AI workspace for projects and thoughts." },
    ],
  }),
  component: Page,
});

function Page() {
  return <MarkdownPage content={content} />;
}
