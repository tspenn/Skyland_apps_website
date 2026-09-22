import { createFileRoute } from "@tanstack/react-router";
import { MarkdownPage } from "@/components/markdown-page";
import content from "@/content/my-support-agent-2.md?raw";

const description =
  "The mail that makes the week run — sales, bookings, support. Forward the address you already have. Every message becomes a case you can see, answer, and close.";

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
            alt="My Support Agent — the mail that makes the week run"
            className="w-full h-auto block"
          />
        </div>
        <div
          className="relative mt-6 w-full overflow-hidden rounded-lg border border-border/60"
          style={{ paddingTop: "56.25%" }}
        >
          <iframe
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube.com/embed/KyttIrxPuN4"
            title="My Support Agent"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
      <MarkdownPage content={content} />
    </>
  );
}
