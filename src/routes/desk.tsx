import { createFileRoute } from "@tanstack/react-router";
import { MarkdownPage } from "@/components/markdown-page";
import content from "@/content/desk.md?raw";

const description =
  "Built for leaders, managers, and growing teams who need total operational clarity. FRIDAY Desk centralizes workflows, keeps active projects visible, and aligns everyone without status-meeting bloat.";

export const Route = createFileRoute("/desk")({
  head: () => ({
    meta: [
      { title: "FRIDAY Desk — Skyland Suite" },
      { name: "description", content: description },
      { property: "og:title", content: "FRIDAY Desk — Skyland Suite" },
      { property: "og:description", content: description },
      { property: "og:image", content: "/friday-desk-hero.png" },
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
            src="/friday-desk-hero.png"
            alt="FRIDAY Desk — the AI-powered work desk for modern business"
            className="w-full h-auto block"
          />
        </div>
      </div>
      <MarkdownPage content={content} />
    </>
  );
}
