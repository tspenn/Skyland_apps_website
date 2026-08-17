import { createFileRoute } from "@tanstack/react-router";
import { MarkdownPage } from "@/components/markdown-page";
import content from "@/content/chkchk.md?raw";

const description =
  "Assign. Track. Confirm. A work-order tracker for families, coaches, and small crews — jobs done in order, signed off by the Lead.";

export const Route = createFileRoute("/chkchk")({
  head: () => ({
    meta: [
      { title: "ChkChk — Skyland Suite" },
      { name: "description", content: description },
      { property: "og:title", content: "ChkChk — Skyland Suite" },
      { property: "og:description", content: description },
      { property: "og:image", content: "/chkchk-hero.png" },
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
            src="/chkchk-hero.png"
            alt="ChkChk — Assign. Track. Confirm."
            className="w-full h-auto block"
          />
        </div>
      </div>
      <MarkdownPage content={content} />
    </>
  );
}
