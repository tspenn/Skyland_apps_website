import { createFileRoute } from "@tanstack/react-router";
import { MarkdownPage } from "@/components/markdown-page";
import content from "@/content/apps.md?raw";

export const Route = createFileRoute("/apps")({
  head: () => ({
    meta: [
      { title: "The Suite — Skyland Suite" },
      { name: "description", content: "The complete lineup of Skyland Suite tools from Skyland Reach." },
      { property: "og:title", content: "The Suite — Skyland Suite" },
      { property: "og:description", content: "The complete lineup of Skyland Suite tools from Skyland Reach." },
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
            src="https://www.youtube.com/embed/6PU7S_KCcyE"
            title="Stop Drowning in Inbound Chaos: One Command Center for All Your Email Support!"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
      <MarkdownPage content={content} />
    </>
  );
}
