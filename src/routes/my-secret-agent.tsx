import { createFileRoute } from "@tanstack/react-router";
import { MarkdownPage } from "@/components/markdown-page";
import content from "@/content/my-secret-agent.md?raw";

const description =
  "Your covert operative for prices, stocks, and website changes.";

export const Route = createFileRoute("/my-secret-agent")({
  head: () => ({
    meta: [
      { title: "My Secret Agent — Skyland Suite" },
      { name: "description", content: description },
      { property: "og:title", content: "My Secret Agent — Skyland Suite" },
      { property: "og:description", content: description },
      { property: "og:image", content: "/my-secret-agent-hero.png" },
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
            src="/my-secret-agent-hero.png"
            alt="My Secret Agent — your covert operative"
            className="w-full h-auto block"
          />
        </div>
      </div>
      <MarkdownPage content={content} />
    </>
  );
}
