import { createFileRoute } from "@tanstack/react-router";
import { MarkdownPage } from "@/components/markdown-page";
import content from "@/content/go-shop.md?raw";

export const Route = createFileRoute("/go-shop")({
  head: () => ({
    meta: [
      { title: "Go Shop! — Skyland Apps" },
      { name: "description", content: "Not your everyday shopping planner." },
      { property: "og:title", content: "Go Shop! — Skyland Apps" },
      { property: "og:description", content: "Not your everyday shopping planner." },
    ],
  }),
  component: Page,
});

function Page() {
  return <MarkdownPage content={content} />;
}
