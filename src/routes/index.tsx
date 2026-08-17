import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Skyland Suite — Tools that make life simple from Skyland Reach" },
      {
        name: "description",
        content:
          "Skyland Suite: zero-install tools that make life simple while doing the heavy lifting—FRIDAY Canvas, Desk, TOC, LnkLokr, My Support Agent, and more.",
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
  image?: string;
  external?: string;
};

const apps: App[] = [
  {
    to: "/friday-canvas",
    name: "FRIDAY Canvas",
    tag: "fridaycanvas.com",
    status: "Beta",
    blurb:
      "One workspace for thoughts, projects, and workload. Browser-native — for people with too many tabs and too many thoughts.",
    image: "/friday-canvas-hero.png",
    external: "https://www.fridaycanvas.com/",
  },
  {
    to: "/desk",
    name: "FRIDAY Desk",
    tag: "Business tier of FRIDAY Canvas",
    status: "Available",
    blurb:
      "The AI-powered work desk for modern business — WorkZones, outbound SMS, and deep tab intelligence.",
    image: "/friday-desk-hero.png",
  },
  {
    to: "/lnklokr",
    name: "LnkLokr",
    tag: "lnklokr.com",
    status: "Available",
    blurb:
      "Secure, intelligent link and clipboard management. Keep, Borrow, Share, or Bury — your data stays on your device.",
    image: "/lnklokr-hero.png",
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
      "A web-based shopping companion — private, secure, and it will not bloat the device. Lists, recipes, trip planning, stock tracking, projects, and a budget — remembered, reusable, ready for the next store run.",
    image: "/go-shop-hero.png",
    external: "https://www.my-go-shop.com/",
  },
  {
    to: "/go-news-app",
    name: "Go News",
    tag: "go-news.app",
    status: "Available",
    blurb:
      "Keeping tabs on all the things that matter. A web-based news companion — light, fast, and ready on all your devices. World, Africa, faith, geopolitics, sports, fashion, lifestyle, and tech. No store. No bloat.",
    image: "/go-news-hero.png",
    external: "https://go-news.app/",
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
      <div className="container-narrow pt-8 md:pt-12 pb-2">
        <img
          src="/skyland-header-sun.png"
          alt=""
          className="mx-auto w-1/2 h-auto block"
        />
      </div>
      {/* Hero */}
      <section className="container-narrow pt-6 md:pt-8 pb-12 text-center">
        <p className="uppercase tracking-[0.3em] text-xs text-[color:var(--color-gold)] mb-4">
          Skyland Reach — Tech Division
        </p>
        <h1 className="text-5xl md:text-7xl leading-tight">
          Welcome to{" "}
          <span className="text-[color:var(--color-gold)]">Skyland Suite</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Zero-install tools that make life simple while doing the heavy
          lifting—for your day, your work, and teams built to move fast. A
          hub for your ideas, a vault for your links, and a smarter way to
          operate. Browser-native, simple, and light on your devices.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/apps"
            className="inline-flex items-center rounded-md bg-[color:var(--color-gold)] px-5 py-2.5 text-sm font-medium text-[color:var(--color-primary-foreground)] hover:no-underline hover:opacity-90 transition"
          >
            Browse the suite
          </Link>
        </div>
      </section>

      {/* Principles */}
      <section className="container-narrow py-10 space-y-6">
        <div className="rounded-xl border border-border bg-card/60 p-8 md:p-10 backdrop-blur-sm">
          <h2 className="text-2xl md:text-3xl text-[color:var(--color-gold)] mb-3">
            Digital Instruments, Not Downloads
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
            If you are feeling &quot;App-prehensive&quot;, you are not alone.
            Traditional app stores force downloads, constant update cycles, and
            background bloat onto your devices. We build lightweight,
            browser-native instruments designed for a single purpose: high-utility
            function with zero baggage.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card/60 p-8 md:p-10 backdrop-blur-sm">
          <h2 className="text-2xl md:text-3xl text-[color:var(--color-gold)] mb-3">
            Zero-Bloat &amp; Privacy-First
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
            We eliminate the weight, noise, and invasive tracking of traditional
            software. Even though these utilities live right in your browser or on
            your home screen, your data remains strictly yours. Whether it is your
            workflows, saved links, or private messages and conversations in{" "}
            <a href="https://my-lokr.com" target="_blank" rel="noopener noreferrer">
              My-lokr.com
            </a>
            , everything is safeguarded with gold-standard Supabase encryption.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card/60 p-8 md:p-10 backdrop-blur-sm">
          <h2 className="text-2xl md:text-3xl text-[color:var(--color-gold)] mb-3">
            Browser-Native Essentials
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
            Your web browser is the ultimate, friction-free operating system. Our
            utilities run smoothly across all your screens, giving you a seamless
            workspace experience anywhere you log in without locked ecosystem
            baggage.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card/60 p-8 md:p-10 backdrop-blur-sm">
          <h2 className="text-2xl md:text-3xl text-[color:var(--color-gold)] mb-3">
            Web Utility Suite
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
            From the versatile capabilities of{" "}
            <Link to="/friday-canvas">FRIDAY Canvas</Link>, our flagship
            productivity hub, to the sophisticated link management of{" "}
            <Link to="/lnklokr">LnkLokr</Link>, we provide high-reliability tools
            engineered for speed and clean focus. Whether you are scaling a
            business or streamlining your daily routine, Skyland Reach gives you
            the secure, intuitive foundation to reach your next summit.
          </p>
        </div>
      </section>

      {/* Suite grid */}
      <section className="container-narrow py-12">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="text-3xl md:text-4xl text-[color:var(--color-gold)]">
            The suite
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
              {app.image && (
                <div className="-mx-6 -mt-6 mb-4 overflow-hidden rounded-t-xl">
                  <img
                    src={app.image}
                    alt=""
                    className="w-full h-auto block"
                  />
                </div>
              )}
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
          and tell us which utility you have questions about.
        </p>
      </section>
    </main>
  );
}
