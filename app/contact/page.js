import ContactForm from "../../components/ContactForm";
import { email, hours, phones } from "../../lib/site";

export const metadata = {
  title: "Contact",
  description:
    "Call Premier Coffee & Water Systems Ltd. in Toronto or Simcoe County, or send a message to info@pcws.ca.",
};

export default function ContactPage() {
  return (
    <main>
      <header className="page-hero">
        <div className="wrap">
          <p className="kicker">Contact</p>
          <h1>Start with a conversation.</h1>
          <p className="lede">
            Call either office, or send a note. We serve the Greater Toronto Area and Simcoe County, including Barrie.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="wrap contact-grid">
          <div>
            {phones.map((phone) => (
              <article className="contact-card" key={phone.id}>
                <p className="kicker">{phone.place}</p>
                <h2>{phone.region}</h2>
                <p>
                  <a href={`tel:${phone.tel}`}>{phone.display}</a>
                </p>
                <p className="lede" style={{ marginTop: 10 }}>
                  Working hours are {hours} Ask us about 24/7 service and repair.
                </p>
              </article>
            ))}
            <article className="contact-card">
              <p className="kicker">Email</p>
              <h2>Write to us</h2>
              <p>
                <a href={`mailto:${email}`}>{email}</a>
              </p>
            </article>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
