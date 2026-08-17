import { createFileRoute } from "@tanstack/react-router";
import { MarkdownPage } from "@/components/markdown-page";
import content from "@/content/mnybusiness.md?raw";

const description =
  "Cash-flow clarity for freelancers, side-hustles, and small businesses.";

export const Route = createFileRoute("/mnybusiness")({
  head: () => ({
    meta: [
      { title: "My$ — Business — Skyland Suite" },
      { name: "description", content: description },
      { property: "og:title", content: "My$ — Business — Skyland Suite" },
      { property: "og:description", content: description },
      { property: "og:image", content: "/mny-business-hero.png" },
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
            src="/mny-business-hero.png"
            alt="My$ — Business"
            className="w-full h-auto block"
          />
        </div>
      </div>
      <MarkdownPage content={content} />
    </>
  );
}
