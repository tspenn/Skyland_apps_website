import { createFileRoute } from "@tanstack/react-router";
import { MarkdownPage } from "@/components/markdown-page";
import content from "@/content/my-secret-agent.md?raw";

export const Route = createFileRoute("/my-secret-agent")({
  head: () => ({
    meta: [
      { title: "My Secret Agent — Skyland Apps" },
      { name: "description", content: "Your covert operative for prices, stocks, and website changes." },
      { property: "og:title", content: "My Secret Agent — Skyland Apps" },
      { property: "og:description", content: "Your covert operative for prices, stocks, and website changes." },
    ],
  }),
  component: Page,
});

function Page() {
  return <MarkdownPage content={content} />;
}
