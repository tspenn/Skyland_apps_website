import { createFileRoute } from "@tanstack/react-router";
import { MarkdownPage } from "@/components/markdown-page";
import content from "@/content/go-shop.md?raw";

const description =
  "A web-based shopping companion — private, secure, and it will not bloat the device. Lists, recipes, trip planning, stock tracking, projects, and a budget."

export const Route = createFileRoute("/go-shop")({
  head: () => ({
    meta: [
      { title: "Go Shop! — Skyland Suite" },
      { name: "description", content: description },
      { property: "og:title", content: "Go Shop! — Skyland Suite" },
      { property: "og:description", content: description },
      { property: "og:image", content: "/go-shop-hero.png" },
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
            src="/go-shop-hero.png"
            alt="Go Shop! — a calm village street of shops"
            className="w-full h-auto block"
          />
        </div>
      </div>
      <MarkdownPage content={content} />
    </>
  );
}
