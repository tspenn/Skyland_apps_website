import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Skyland Apps — Intuitive apps from Skyland Reach" },
      {
        name: "description",
        content:
          "Meet Skyland Apps: FRIDAY Canvas, LnkLokr, TOC, My Support Agent, Go Shop, Go News, and more. Private, intuitive tools built to keep things simple.",
      },
    ],
  }),
  component: Index,
});

type App = {
  to: string;
  name: string;
  tag: string;
  status: "Available" | "Beta" | "In Development";
  blurb: string;
  external?: string;
};

const apps: App[] = [
  {
    to: "/friday-canvas",
    name: "FRIDAY Canvas",
    tag: "fridaycanvas.com",
    status: "Beta",
    blurb:
      "Your private AI workspace for projects and thoughts. Warm where Notion is cold, simple where it is complex.",
    external: "https://www.fridaycanvas.com/",
  },
  {
    to: "/desk",
    name: "FRIDAY Desk",
    tag: "Business tier of FRIDAY Canvas",
    status: "Available",
    blurb:
      "The AI-powered work desk for modern business — WorkZones, outbound SMS, and deep tab intelligence.",
  },
  {
    to: "/lnklokr",
    name: "LnkLokr",
    tag: "lnklokr.com",
    status: "Available",
    blurb:
      "Secure, intelligent link and clipboard management. Keep, Borrow, Share, or Bury — your data stays on your device.",
    external: "https://lnklokr.com/",
  },
  {
    to: "/my-support-agent-2",
    name: "My Support Agent",
    tag: "my-support-agent.com",
    status: "Available",
    blurb:
      "Turn your inbox into an organized support desk with AI-drafted replies — no plugins, no integrations.",
    external: "https://www.my-support-agent.com/",
  },
  {
    to: "/my-toc",
    name: "TOC",
    tag: "mytoc.app",
    status: "Available",
    blurb:
      "TOC is the executive command layer for leaders who need clear ownership — issue a Directive, attach what matters, assign your team, confirm it’s done.",
    external: "https://mytoc.app",
  },
  {
    to: "/mny",
    name: "My$",
    tag: "my-mny.com",
    status: "In Development",
    blurb:
      "One button, one answer. Know exactly what you can spend right now — before your next paycheck.",
    external: "https://my-mny.com/",
  },
  {
    to: "/mnybusiness",
    name: "My$ — Business",
    tag: "for small business",
    status: "In Development",
    blurb:
      "The same clarity as My$, tuned for freelancers, side hustles, and small businesses.",
  },
  {
    to: "/go-shop",
    name: "Go Shop!",
    tag: "my-go-shop.com",
    status: "Available",
    blurb:
      "Not your everyday shopping planner. A smarter way to plan your next trip.",
  },
  {
    to: "/go-news-app",
    name: "Go News",
    tag: "go-news.app",
    status: "Available",
    blurb:
      "A calm, scrollable international news app. Business, politics, sports, fashion & lifestyle.",
  },
  {
    to: "/my-secret-agent",
    name: "My Secret Agent",
    tag: "my-secret-agent.com",
    status: "In Development",
    blurb:
      "Your covert operative — watches prices, stocks, weather and websites, and texts you when things change.",
  },
  {
    to: "/gia",
    name: "GIA",
    tag: "go-i-agency.com",
    status: "In Development",
    blurb:
      "Go Intelligence Agency. Deploy operatives on the markets, competitors and signals that move your business.",
  },
];

const statusStyles: Record<App["status"], string> = {
  Available: "text-[color:var(--color-gold)] border-[color:var(--color-gold)]/40",
  Beta: "text-[color:var(--color-sky)] border-[color:var(--color-sky)]/40",
  "In Development": "text-muted-foreground border-border",
};

function Index() {
  return (
    <main>
      {/* Hero */}
      <section className="container-narrow pt-16 md:pt-24 pb-12 text-center">
        <p className="uppercase tracking-[0.3em] text-xs text-[color:var(--color-gold)] mb-4">
          Skyland Reach — Tech Division
        </p>
        <h1 className="text-5xl md:text-7xl leading-tight">
          Welcome to the frontier
          <br />
          of <span className="text-[color:var(--color-gold)]">Skyland Reach</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          We create intuitive, everyday apps that help you stay organized,
          productive, and ahead of the game — a central hub for your ideas,
          a secure vault for your links, a smarter way to plan your day.
          Simple, fast, and easy to use.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/apps"
            className="inline-flex items-center rounded-md bg-[color:var(--color-gold)] px-5 py-2.5 text-sm font-medium text-[color:var(--color-primary-foreground)] hover:no-underline hover:opacity-90 transition"
          >
            Browse all apps
          </Link>
          <Link
            to="/friday-canvas"
            className="inline-flex items-center rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:no-underline hover:border-[color:var(--color-gold)] transition"
          >
            Meet FRIDAY Canvas
          </Link>
        </div>
      </section>

      {/* Manifesto */}
      <section className="container-narrow py-10">
        <div className="rounded-xl border border-border bg-card/60 p-8 md:p-10 backdrop-blur-sm">
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
            From the versatile capabilities of{" "}
            <Link to="/friday-canvas">FRIDAY Canvas</Link>, our flagship
            productivity hub, to the sophisticated link management of{" "}
            <Link to="/lnklokr">LnkLokr</Link>, we are dedicated to building a
            cohesive ecosystem that works as hard as you do. Whether you are
            scaling a business or organizing your digital world, Skyland Reach
            provides the secure, innovative, and intuitive foundations you need
            to reach your next summit.
          </p>
        </div>
      </section>

      {/* App grid */}
      <section className="container-narrow py-12">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="text-3xl md:text-4xl text-[color:var(--color-gold)]">
            The apps
          </h2>
          <Link to="/apps" className="text-sm">
            See all →
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {apps.map((app) => (
            <Link
              key={app.to}
              to={app.to}
              className="group block rounded-xl border border-border bg-card/60 p-6 hover:border-[color:var(--color-gold)]/60 hover:no-underline transition-colors"
            >
              <div className="flex items-center justify-between gap-3 mb-2">
                <h3 className="text-xl text-foreground group-hover:text-[color:var(--color-gold)] transition-colors">
                  {app.name}
                </h3>
                <span
                  className={`text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full border ${statusStyles[app.status]}`}
                >
                  {app.status}
                </span>
              </div>
              <div className="text-xs text-muted-foreground mb-3">{app.tag}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {app.blurb}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="container-narrow py-14 text-center">
        <h2 className="text-2xl md:text-3xl mb-3">Questions?</h2>
        <p className="text-muted-foreground">
          Email{" "}
          <a href="mailto:support@skylandapps.com">support@skylandapps.com</a>{" "}
          and tell us which app you have questions about.
        </p>
      </section>
    </main>
  );
}
