import Link from "next/link";
import { email } from "../lib/site";

export default function CtaBand({ title, text }) {
  return (
    <section className="cta-band">
      <div className="wrap cta-inner">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="hero-actions" style={{ marginTop: 0 }}>
          <Link className="btn btn-solid" href="/contact">
            Request a quote
          </Link>
          <a className="btn btn-ghost" href={`mailto:${email}`}>
            Email us
          </a>
        </div>
      </div>
    </section>
  );
}
