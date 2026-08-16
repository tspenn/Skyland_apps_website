import { createFileRoute } from "@tanstack/react-router";
import { MarkdownPage } from "@/components/markdown-page";
import content from "@/content/go-news-app.md?raw";

export const Route = createFileRoute("/go-news-app")({
  head: () => ({
    meta: [
      { title: "Go News — Skyland Suite" },
      { name: "description", content: "A calm, scrollable international news reader." },
      { property: "og:title", content: "Go News — Skyland Suite" },
      { property: "og:description", content: "A calm, scrollable international news reader." },
    ],
  }),
  component: Page,
});

function Page() {
  return <MarkdownPage content={content} />;
}
