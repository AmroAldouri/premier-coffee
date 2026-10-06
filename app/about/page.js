import CtaBand from "../../components/CtaBand";
import { servicePoints } from "../../lib/site";

export const metadata = {
  title: "About",
  description:
    "Premier Coffee & Water Systems Ltd. is an office coffee service for the Greater Toronto Area and Simcoe County.",
};

const supplies = [
  {
    title: "Brewers and espresso",
    text: "Commercial coffee brewers and espresso machines for offices, waiting rooms, and cafeterias.",
  },
  {
    title: "Grinders and dispensers",
    text: "Grinders, dispensers, and the small equipment that keeps service moving.",
  },
  {
    title: "Water coolers",
    text: "Point of use water coolers with hot or cold water, installed where your team needs them.",
  },
  {
    title: "Filters and servers",
    text: "Coffee pots, thermal servers, stands, racks, and water filters, chosen for your setup.",
  },
  {
    title: "Cups and dairy",
    text: "Cups, lids, milk, cream, sugar, sweeteners, stir sticks, holders, and displays.",
  },
  {
    title: "Workplace supplies",
    text: "Paper and dairy products, plus cleaning, kitchen, and office supplies.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <header className="page-hero">
        <div className="wrap">
          <p className="kicker">About us</p>
          <h1>A local partner for coffee and water.</h1>
          <p className="lede">
            Our reputation is built on quality equipment and service that businesses in the Greater Toronto Area and Simcoe County can count on.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="wrap split">
          <figure className="frame portrait">
            <img src="/images/office.jpg" alt="A bright office kitchen and lounge" width="1600" height="1068" />
          </figure>
          <div className="prose">
            <p>
              <strong>Premier Coffee & Water Systems Ltd. is an office coffee service.</strong> We provide a full range of coffee brewers, espresso machines, grinders, dispensers, accessories, and point of use water coolers.
            </p>
            <p>
              We have built that reputation on quality products and a complete approach to service. We take pride in a track record of superior quality and consistency. Our expertise comes from experience and a deep knowledge of the industries we work with.
            </p>
            <p>
              We offer innovative, customized solutions. Order the essentials for your office today. We look forward to serving you.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">What we supply</p>
            <h2>Everything around the cup, not only the machine.</h2>
          </div>
          <div className="supply-grid">
            {supplies.map((item) => (
              <article className="supply-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="promise">
        <div className="wrap">
          <div className="promise-head">
            <p className="kicker light">How we work with you</p>
            <h2>A person, a schedule, and support at your door.</h2>
          </div>
          <ul className="promise-list">
            {servicePoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Tell us about your workplace."
        text="We will recommend a setup, then install it, train your staff, and keep the supplies coming."
      />
    </main>
  );
}
