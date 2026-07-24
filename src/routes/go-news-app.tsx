import { createFileRoute } from "@tanstack/react-router";
import { MarkdownPage } from "@/components/markdown-page";
import content from "@/content/go-news-app.md?raw";

export const Route = createFileRoute("/go-news-app")({
  head: () => ({
    meta: [
      { title: "Go News — Skyland Apps" },
      { name: "description", content: "A calm, scrollable international news app." },
      { property: "og:title", content: "Go News — Skyland Apps" },
      { property: "og:description", content: "A calm, scrollable international news app." },
    ],
  }),
  component: Page,
});

function Page() {
  return <MarkdownPage content={content} />;
}
