import { createFileRoute } from "@tanstack/react-router";
import { MarkdownPage } from "@/components/markdown-page";
import content from "@/content/gia.md?raw";

export const Route = createFileRoute("/gia")({
  head: () => ({
    meta: [
      { title: "GIA — Go Intelligence Agency — Skyland Suite" },
      { name: "description", content: "Personal intelligence operations for investors and CEOs." },
      { property: "og:title", content: "GIA — Go Intelligence Agency — Skyland Suite" },
      { property: "og:description", content: "Personal intelligence operations for investors and CEOs." },
    ],
  }),
  component: Page,
});

function Page() {
  return <MarkdownPage content={content} />;
}
