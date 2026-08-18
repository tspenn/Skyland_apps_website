import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { SITE_URL } from "@/lib/seo";

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const lastmod = new Date().toISOString().slice(0, 10);
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/apps", changefreq: "weekly", priority: "0.9" },
          { path: "/friday-canvas", changefreq: "monthly", priority: "0.8" },
          { path: "/desk", changefreq: "monthly", priority: "0.8" },
          { path: "/lnklokr", changefreq: "monthly", priority: "0.8" },
          { path: "/my-support-agent-2", changefreq: "monthly", priority: "0.8" },
          { path: "/my-lokr", changefreq: "monthly", priority: "0.8" },
          { path: "/my-toc", changefreq: "monthly", priority: "0.8" },
          { path: "/mny", changefreq: "monthly", priority: "0.7" },
          { path: "/mnybusiness", changefreq: "monthly", priority: "0.7" },
          { path: "/go-shop", changefreq: "monthly", priority: "0.8" },
          { path: "/go-news-app", changefreq: "monthly", priority: "0.8" },
          { path: "/chkchk", changefreq: "monthly", priority: "0.8" },
          { path: "/my-secret-agent", changefreq: "monthly", priority: "0.6" },
          { path: "/gia", changefreq: "monthly", priority: "0.6" },
          { path: "/get-support", changefreq: "monthly", priority: "0.5" },
        ];
        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${SITE_URL}${e.path === "/" ? "/" : e.path}</loc>`,
            `    <lastmod>${lastmod}</lastmod>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
