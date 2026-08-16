import { createFileRoute } from "@tanstack/react-router";
import { MarkdownPage } from "@/components/markdown-page";
import content from "@/content/my-support-agent-2.md?raw";

export const Route = createFileRoute("/my-support-agent-2")({
  head: () => ({
    meta: [
      { title: "My Support Agent — Skyland Suite" },
      { name: "description", content: "Turn your inbox into an AI-assisted support desk." },
      { property: "og:title", content: "My Support Agent — Skyland Suite" },
      { property: "og:description", content: "Turn your inbox into an AI-assisted support desk." },
    ],
  }),
  component: Page,
});

function Page() {
  return <MarkdownPage content={content} />;
}
