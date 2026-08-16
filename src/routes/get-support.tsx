import { createFileRoute } from "@tanstack/react-router";
import { MarkdownPage } from "@/components/markdown-page";
import content from "@/content/get_support.md?raw";

export const Route = createFileRoute("/get-support")({
  head: () => ({
    meta: [
      { title: "Get Support — My Support Agent — Skyland Suite" },
      { name: "description", content: "Get help and reach the Skyland Suite support team." },
      { property: "og:title", content: "Get Support — My Support Agent — Skyland Suite" },
      { property: "og:description", content: "Get help and reach the Skyland Suite support team." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <div className="container-narrow pt-12 md:pt-16">
        <div className="relative w-full overflow-hidden rounded-lg border border-border/60" style={{ paddingTop: "56.25%" }}>
          <iframe
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube.com/embed/KyttIrxPuN4"
            title="My Support Agent — Get Support"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
      <MarkdownPage content={content} />
    </>
  );
}
