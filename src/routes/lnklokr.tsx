import { createFileRoute } from "@tanstack/react-router";
import { MarkdownPage } from "@/components/markdown-page";
import content from "@/content/lnklokr.md?raw";

export const Route = createFileRoute("/lnklokr")({
  head: () => ({
    meta: [
      { title: "LnkLokr — Skyland Apps" },
      { name: "description", content: "Secure, intelligent link and clipboard management." },
      { property: "og:title", content: "LnkLokr — Skyland Apps" },
      { property: "og:description", content: "Secure, intelligent link and clipboard management." },
    ],
  }),
  component: Page,
});

function Page() {
  return <MarkdownPage content={content} />;
}
