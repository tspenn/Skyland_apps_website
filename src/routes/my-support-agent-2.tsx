import { createFileRoute } from "@tanstack/react-router";
import { MarkdownPage } from "@/components/markdown-page";
import content from "@/content/my-support-agent-2.md?raw";

const description =
  "Point a dedicated inbox — support, sales, or questions — into My Support Agent. Suggestions you can copy in, plus how to resolve the issue, trained on your business.";

export const Route = createFileRoute("/my-support-agent-2")({
  head: () => ({
    meta: [
      { title: "My Support Agent — Skyland Suite" },
      { name: "description", content: description },
      { property: "og:title", content: "My Support Agent — Skyland Suite" },
      { property: "og:description", content: description },
      { property: "og:image", content: "/my-support-agent-hero.png" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <div className="container-narrow pt-12 md:pt-16">
        <div className="relative w-full overflow-hidden rounded-lg border border-border/60">
          <img
            src="/my-support-agent-hero.png"
            alt="My Support Agent — your AI-powered support inbox command center"
            className="w-full h-auto block"
          />
        </div>
      </div>
      <MarkdownPage content={content} />
    </>
  );
}
