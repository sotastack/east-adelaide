"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useChrome } from "./ChromeProvider";

const NAV = [
  { href: "/divisions", label: "Divisions", cursor: "Explore" },
  { href: "/research", label: "Research", cursor: "View" },
  { href: "/projects", label: "Projects", cursor: "View" },
  { href: "/contact", label: "Contact", cursor: "Contact" },
] as const;

export function Nav() {
  const { replay } = useChrome();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth > 1100) setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <>
      <nav className="top">
        <div className="container" style={{ paddingLeft: "var(--gutter)" }}>
          <div className="row">
            <Link href="/" className="wordmark" data-link data-label="Home">
              <span className="monogram" aria-hidden="true" />
              <span>
                <span className="name">East Adelaide Capital Group</span>
                <span className="sub">Est. Victoria · Australia</span>
              </span>
            </Link>

            <ul>
              {NAV.map((i) => (
                <li key={i.href}>
                  <Link
                    href={i.href}
                    className={isActive(i.href) ? "is-active" : ""}
                    data-link
                    data-label={i.cursor}
                  >
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="nav-right">
              <button
                type="button"
                className="replay-intro"
                data-link
                data-label="Replay"
                onClick={replay}
              >
                Replay Intro
              </button>
              <div className="lang">
                <span>EN</span>
                <em>/</em>
                <span>中文</span>
              </div>
              <Link
                href="/investor"
                className="investor-link"
                data-link
                data-label="Enter"
              >
                Investors
              </Link>
            </div>

            <button
              type="button"
              className={`nav-toggle${menuOpen ? " is-open" : ""}`}
              aria-label="Menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <aside
        className={`mobile-menu${menuOpen ? " is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <ul className="mm-links">
          {NAV.map((i) => (
            <li key={i.href}>
              <Link href={i.href} onClick={() => setMenuOpen(false)}>
                {i.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mm-extras">
          <Link
            href="/investor"
            className="mm-investors"
            onClick={() => setMenuOpen(false)}
          >
            Investors <span>→</span>
          </Link>
          <div className="mm-lang">
            <span>EN</span>
            <em>/</em>
            <span>中文</span>
          </div>
          <button
            type="button"
            className="mm-replay"
            onClick={() => {
              setMenuOpen(false);
              replay();
            }}
          >
            Replay Intro
          </button>
        </div>
      </aside>
    </>
  );
}
