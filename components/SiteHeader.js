"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { email, nav, phones } from "../lib/site";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  return (
    <header className="header">
      <div className="topbar">
        <div className="wrap topbar-inner">
          <div className="cluster" style={{ marginTop: 0 }}>
            {phones.map((phone) => (
              <a key={phone.id} href={`tel:${phone.tel}`}>
                {phone.region} {phone.display}
              </a>
            ))}
          </div>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
      </div>
      <div className="wrap navrow">
        <Link href="/" className="brand" aria-label="Premier Coffee and Water Systems, home">
          <img src="/images/logo.png" alt="" width="194" height="194" />
          <span>
            <strong>Premier</strong>
            <small>Coffee & Water Systems Ltd.</small>
          </span>
        </Link>
        <nav className="nav-desktop" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link"
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <Link className="btn btn-solid" href="/contact">
            Request a quote
          </Link>
        </nav>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      <nav id="mobile-nav" className={open ? "nav-panel open" : "nav-panel"} aria-label="Mobile">
        {nav.map((item) => (
          <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>
            {item.label}
          </Link>
        ))}
        <div className="panel-phones">
          {phones.map((phone) => (
            <a key={phone.id} href={`tel:${phone.tel}`}>
              {phone.region} {phone.display}
            </a>
          ))}
          <a href={`mailto:${email}`}>{email}</a>
        </div>
      </nav>
    </header>
  );
}
