import { createFileRoute } from "@tanstack/react-router";
import { MarkdownPage } from "@/components/markdown-page";
import content from "@/content/my-lokr.md?raw";

const description =
  "LOKR is your own encrypted information locker. Private messaging for the people and files you actually care about — not Gmail, not Outlook, and not the open internet.";

export const Route = createFileRoute("/my-lokr")({
  head: () => ({
    meta: [
      { title: "LOKR — Skyland Suite" },
      { name: "description", content: description },
      { property: "og:title", content: "LOKR — Skyland Suite" },
      { property: "og:description", content: description },
      { property: "og:image", content: "/my-lokr-office.png" },
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
            src="/my-lokr-office.png"
            alt="LOKR — your own encrypted information locker"
            className="w-full h-auto block"
          />
        </div>
      </div>
      <MarkdownPage content={content} />
    </>
  );
}
