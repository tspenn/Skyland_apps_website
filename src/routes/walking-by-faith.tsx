import { createFileRoute } from "@tanstack/react-router";
import { MarkdownPage } from "@/components/markdown-page";
import content from "@/content/walking-by-faith.md?raw";

const description =
  "Walking By Faith — a Bible tool made for reading and listening. Browser-native. Light on your devices.";

export const Route = createFileRoute("/walking-by-faith")({
  head: () => ({
    meta: [
      { title: "Walking By Faith — Skyland Suite" },
      { name: "description", content: description },
      { property: "og:title", content: "Walking By Faith — Skyland Suite" },
      { property: "og:description", content: description },
      { property: "og:image", content: "/walking-by-faith-hero.png" },
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
            src="/walking-by-faith-hero.png"
            alt="Walking By Faith — a Bible tool made for reading"
            className="w-full h-auto block"
          />
        </div>
      </div>
      <MarkdownPage content={content} />
    </>
  );
}
