import { Link } from "@tanstack/react-router";

const navLinks: { to: string; label: string }[] = [
  { to: "/", label: "Home" },
  { to: "/apps", label: "Apps" },
  { to: "/friday-canvas", label: "FRIDAY Canvas" },
  { to: "/desk", label: "FRIDAY Desk" },
  { to: "/lnklokr", label: "LnkLokr" },
  { to: "/mny", label: "My$" },
  { to: "/my-support-agent-2", label: "Support Agent" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-border/60 backdrop-blur-sm sticky top-0 z-40 bg-background/70">
      <div className="container-narrow flex flex-wrap items-center justify-between gap-3 py-4">
        <Link to="/" className="flex items-baseline gap-2 hover:no-underline">
          <span
            style={{ fontFamily: "var(--font-serif)" }}
            className="text-2xl font-semibold text-[color:var(--color-gold)]"
          >
            Skyland
          </span>
          <span className="text-sm tracking-[0.25em] uppercase text-muted-foreground">
            Apps
          </span>
        </Link>
        <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-muted-foreground hover:text-[color:var(--color-gold)] hover:no-underline transition-colors"
              activeProps={{ className: "text-[color:var(--color-gold)]" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60">
      <div className="container-narrow py-10 flex flex-col gap-6">
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link
            to="/friday-canvas"
            className="text-muted-foreground hover:text-[color:var(--color-gold)] hover:no-underline transition-colors"
          >
            FRIDAY Canvas
          </Link>
          <Link
            to="/get-support"
            className="text-muted-foreground hover:text-[color:var(--color-gold)] hover:no-underline transition-colors"
          >
            Get Support
          </Link>
        </nav>
        <div className="text-sm text-muted-foreground flex flex-wrap items-center justify-between gap-4">
          <div>
            <div
              style={{ fontFamily: "var(--font-serif)" }}
              className="text-lg text-[color:var(--color-gold)]"
            >
              Skyland Reach — Tech Division
            </div>
            <div>© {new Date().getFullYear()} Skyland Reach LLC. All rights reserved.</div>
          </div>
          <div className="flex flex-col sm:items-end gap-1">
            <a href="mailto:support@skylandapps.com">support@skylandapps.com</a>
            <Link to="/apps">Browse all apps →</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

