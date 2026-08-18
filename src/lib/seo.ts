export const SITE_URL = "https://www.skylandapps.com";
export const SITE_NAME = "Skyland Suite";
export const ORG_NAME = "Skyland Reach LLC";

export function absoluteUrl(path = "/") {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageHead({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}) {
  const url = absoluteUrl(path);
  const ogImage = absoluteUrl(image ?? "/skyland-header-sun.png");
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:image", content: ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export const suiteProducts: {
  name: string;
  path: string;
  description: string;
  sameAs?: string;
}[] = [
  {
    name: "FRIDAY Canvas",
    path: "/friday-canvas",
    description:
      "A private workspace for thoughts, projects, and workload — with FRIDAY beside you, or off.",
    sameAs: "https://www.fridaycanvas.com/",
  },
  {
    name: "FRIDAY Desk",
    path: "/desk",
    description:
      "The business tier of FRIDAY Canvas for leaders who need operational clarity without status-meeting bloat.",
  },
  {
    name: "LnkLokr",
    path: "/lnklokr",
    description:
      "A personal content vault for links, images, and text — Keep, Borrow, Share, or Bury. Stays on your device.",
    sameAs: "https://lnklokr.com/",
  },
  {
    name: "My Support Agent",
    path: "/my-support-agent-2",
    description:
      "Suggested reply wording and how to resolve each message, trained on your business.",
    sameAs: "https://www.my-support-agent.com/",
  },
  {
    name: "My Lokr",
    path: "/my-lokr",
    description:
      "Private messaging and file exchange for families, small teams, and businesses — not everyday email.",
    sameAs: "https://my-lokr.com",
  },
  {
    name: "TOC",
    path: "/my-toc",
    description:
      "Tactical Operations Command for COOs and chiefs of staff — Directives, owners, and close, not a chat scroll.",
    sameAs: "https://mytoc.app",
  },
  {
    name: "My$",
    path: "/mny",
    description:
      "One number for what you can actually spend right now, after bills and before payday.",
    sameAs: "https://my-mny.com/",
  },
  {
    name: "MNY$",
    path: "/mnybusiness",
    description:
      "Live available-to-spend across operating accounts, division budgets, credit lines, and payroll.",
  },
  {
    name: "Go Shop!",
    path: "/go-shop",
    description:
      "A web-based shopping companion for lists, recipes, trips, stock, projects, and a budget.",
    sameAs: "https://www.my-go-shop.com/",
  },
  {
    name: "Go News",
    path: "/go-news-app",
    description:
      "A light, web-based news companion for world, faith, geopolitics, sports, lifestyle, and tech.",
    sameAs: "https://go-news.app/",
  },
  {
    name: "ChkChk",
    path: "/chkchk",
    description:
      "A work-order tracker for families, coaches, and small crews — assign, track, and confirm.",
    sameAs: "https://www.chkchk.app/",
  },
  {
    name: "My Secret Agent",
    path: "/my-secret-agent",
    description:
      "A covert watcher for prices, stocks, weather, and websites that notifies you when things change.",
  },
  {
    name: "GIA",
    path: "/gia",
    description:
      "Go Intelligence Agency — deploy operatives on the markets, competitors, and signals that move your business.",
    sameAs: "https://go-i-agency.com",
  },
];
