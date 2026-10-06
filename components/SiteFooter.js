import Link from "next/link";
import { company, email, nav, phones } from "../lib/site";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <img src="/images/logo.png" alt="" width="72" height="72" />
          <h2>{company}</h2>
          <p>
            High quality commercial coffee machines and filtered water systems for businesses in the Greater Toronto Area and Simcoe County.
          </p>
        </div>
        <div>
          <p className="kicker light">Explore</p>
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="kicker light">Call</p>
          <ul>
            {phones.map((phone) => (
              <li key={phone.id}>
                <a href={`tel:${phone.tel}`}>
                  {phone.region}
                  <br />
                  {phone.display}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${email}`}>{email}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <p>© {new Date().getFullYear()} {company} All rights reserved.</p>
        <p>Some photographs are from Unsplash.</p>
      </div>
    </footer>
  );
}
