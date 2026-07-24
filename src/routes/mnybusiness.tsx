import { createFileRoute } from "@tanstack/react-router";
import { MarkdownPage } from "@/components/markdown-page";
import content from "@/content/mnybusiness.md?raw";

export const Route = createFileRoute("/mnybusiness")({
  head: () => ({
    meta: [
      { title: "My$ — Business — Skyland Apps" },
      { name: "description", content: "Cash-flow clarity for freelancers, side-hustles, and small businesses." },
      { property: "og:title", content: "My$ — Business — Skyland Apps" },
      { property: "og:description", content: "Cash-flow clarity for freelancers, side-hustles, and small businesses." },
    ],
  }),
  component: Page,
});

function Page() {
  return <MarkdownPage content={content} />;
}
