import Link from "next/link";
import BrandGrid from "../components/BrandGrid";
import CtaBand from "../components/CtaBand";
import Regions from "../components/Regions";
import { phones, servicePoints } from "../lib/site";

const services = [
  {
    href: "/coffee",
    num: "01",
    title: "Coffee machines",
    text: "Variety, quality, and great taste. Coffee is our specialty.",
    link: "Explore coffee machines",
  },
  {
    href: "/about",
    num: "02",
    title: "Customer service",
    text: "Thoughtful service is what sets us apart. See how we look after every account.",
    link: "About our service",
  },
  {
    href: "/water",
    num: "03",
    title: "Water coolers",
    text: "Fresh, clear, and refreshing. Hot or cold water when you need it.",
    link: "Explore water coolers",
  },
];

const features = [
  {
    title: "Any size of installation",
    text: "A complete line of coffee brewers, espresso machines, grinders, and water coolers, matched to your requirements. From a small office to a large installation, we have you covered.",
  },
  {
    title: "A wide selection",
    text: "The widest range of premium coffee blends and tea brands in Ontario, plus cups, lids, milk, cream, sugar, sweeteners, stir sticks, holders, and displays.",
  },
  {
    title: "Simple upgrades",
    text: "Need a change? Brewers, espresso machines, grinders, and water coolers are available to rent or purchase, with quick and easy upgrade options.",
  },
];

const steps = [
  {
    num: "01",
    title: "Contact us",
    text: "Tell us about your workplace, how many people you serve, and what you would like to offer.",
  },
  {
    num: "02",
    title: "Place an order",
    text: "We help you choose equipment, brands, and supplies, then confirm every detail with you.",
  },
  {
    num: "03",
    title: "We process within 24 hours",
    text: "Your order moves forward within one day of the details being settled.",
  },
  {
    num: "04",
    title: "We deliver, install, and set up",
    text: "Our team brings the equipment, installs it, and leaves it ready to use.",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="kicker">Office coffee service</p>
            <h1>
              Coffee and water, <em>taken care of.</em>
            </h1>
            <p className="lede" style={{ marginTop: 18 }}>
              Premier Coffee & Water Systems Ltd. supplies commercial coffee brewers, espresso machines, grinders, dispensers, and point of use water coolers. We deliver, install, and support them for businesses across the Greater Toronto Area and Simcoe County.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-solid" href="/contact">
                Request a quote
              </Link>
              <Link className="btn btn-ghost" href="/process">
                See our process
              </Link>
            </div>
            <ul className="hero-points">
              <li>Rent or purchase</li>
              <li>Training at your office</li>
              <li>Scheduled deliveries</li>
            </ul>
          </div>
          <div className="hero-visual">
            <figure className="frame">
              <img
                src="/images/hero.jpg"
                alt="A cup of coffee with latte art in the shape of a leaf"
                width="1800"
                height="1200"
              />
            </figure>
            <div className="hero-card">
              <p className="kicker">Call today</p>
              <div className="hero-card-phones">
                {phones.map((phone) => (
                  <p key={phone.id}>
                    <strong>{phone.region}</strong>
                    <a href={`tel:${phone.tel}`}>{phone.display}</a>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 36 }}>
        <div className="wrap service-grid">
          {services.map((service) => (
            <Link className="service-card" href={service.href} key={service.href}>
              <span className="index-num">{service.num}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <span className="text-link">{service.link}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="promise">
        <div className="wrap">
          <div className="promise-head">
            <p className="kicker light">Customer service</p>
            <h2>Service that comes to your workplace.</h2>
          </div>
          <ul className="promise-list">
            {servicePoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <figure className="frame portrait">
            <img src="/images/cup.jpg" alt="Cups of coffee on a wooden table" width="1400" height="2100" />
          </figure>
          <div>
            <p className="kicker">Customized equipment</p>
            <h2>Solutions shaped to your workplace.</h2>
            <p className="lede" style={{ marginTop: 16 }}>
              We carry brewers, espresso machines, grinders, and water coolers, and we match them to the way your people work. Small rooms and large installations are both welcome.
            </p>
            <Link className="text-link" href="/coffee">
              See coffee equipment
            </Link>
          </div>
        </div>
        <div className="wrap feature-grid">
          {features.map((feature) => (
            <article className="feature" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">Our brands</p>
            <h2>Premium coffee and tea, ready for the office.</h2>
          </div>
          <BrandGrid />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 10 }}>
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">How it works</p>
            <h2>A simple path from the first call to a working setup.</h2>
          </div>
          <div className="step-grid">
            {steps.map((step) => (
              <article className="step" key={step.num}>
                <div className="step-num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Regions />

      <CtaBand
        title="Let us focus on premium coffee and water so you can focus on your business."
        text="Tell us what you need. We will help you choose the equipment, the brands, and the service plan."
      />
    </main>
  );
}
