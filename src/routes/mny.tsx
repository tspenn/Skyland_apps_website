import { createFileRoute } from "@tanstack/react-router";
import { MarkdownPage } from "@/components/markdown-page";
import content from "@/content/mny.md?raw";

export const Route = createFileRoute("/mny")({
  head: () => ({
    meta: [
      { title: "My$ — Skyland Apps" },
      { name: "description", content: "One button, one answer — know what you can actually spend right now." },
      { property: "og:title", content: "My$ — Skyland Apps" },
      { property: "og:description", content: "One button, one answer — know what you can actually spend right now." },
    ],
  }),
  component: Page,
});

function Page() {
  return <MarkdownPage content={content} />;
}
