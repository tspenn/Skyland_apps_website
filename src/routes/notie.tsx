import { createFileRoute } from "@tanstack/react-router";
import { MarkdownPage } from "@/components/markdown-page";
import content from "@/content/notie.md?raw";

const description =
  "A quiet place for the writing that takes time — notes, lists, ideas, and longer work. Writing tools only. No AI assistant.";

export const Route = createFileRoute("/notie")({
  head: () => ({
    meta: [
      { title: "Notie — Skyland Suite" },
      { name: "description", content: description },
      { property: "og:title", content: "Notie — Skyland Suite" },
      { property: "og:description", content: description },
      { property: "og:image", content: "/notie-hero.png" },
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
            src="/notie-hero.png"
            alt="Notie — a quiet place for the writing that takes time"
            className="w-full h-auto block"
          />
        </div>
      </div>
      <MarkdownPage content={content} />
    </>
  );
}
