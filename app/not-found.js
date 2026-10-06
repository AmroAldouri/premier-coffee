import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-hero">
      <div className="wrap">
        <p className="kicker">Missing page</p>
        <h1>That page is not here.</h1>
        <p className="lede">The link may be out of date. Head home, or call us and we will help.</p>
        <div className="hero-actions">
          <Link className="btn btn-solid" href="/">
            Back to home
          </Link>
          <Link className="btn btn-ghost" href="/contact">
            Contact us
          </Link>
        </div>
      </div>
    </main>
  );
}
