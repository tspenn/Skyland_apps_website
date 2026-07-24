import { createFileRoute } from "@tanstack/react-router";
import { MarkdownPage } from "@/components/markdown-page";
import content from "@/content/desk.md?raw";

export const Route = createFileRoute("/desk")({
  head: () => ({
    meta: [
      { title: "FRIDAY Desk — Skyland Apps" },
      { name: "description", content: "The AI-powered work desk for modern business." },
      { property: "og:title", content: "FRIDAY Desk — Skyland Apps" },
      { property: "og:description", content: "The AI-powered work desk for modern business." },
    ],
  }),
  component: Page,
});

function Page() {
  return <MarkdownPage content={content} />;
}
