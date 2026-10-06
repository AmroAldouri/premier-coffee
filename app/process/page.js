import CtaBand from "../../components/CtaBand";

export const metadata = {
  title: "Our process",
  description:
    "A free assessment, a clear proposal, then installation, setup, and training from Premier Coffee & Water Systems Ltd.",
};

const steps = [
  {
    num: "01",
    title: "Free assessment",
    text: "Understanding your needs is the first step toward a sensible plan. We review your requirements and talk through the options, including coffee brewers, espresso machines, grinders, and water coolers.",
  },
  {
    num: "02",
    title: "Proposal review",
    text: "After you have our proposal, we meet with you and your team. We explain each item in detail, including any facility accommodations. If something is missing, we adjust the proposal until it covers your requirements.",
  },
  {
    num: "03",
    title: "Installation, setup, and training",
    text: "On an agreed date and time, our team installs the equipment, trains your staff, and makes sure everything is running to your satisfaction.",
  },
];

const order = [
  "You contact us and tell us what the workplace needs.",
  "We prepare the order with you, including machines, brands, and supplies.",
  "We process the order within 24 hours.",
  "We deliver, install, and set everything up.",
];

export default function ProcessPage() {
  return (
    <main>
      <header className="page-hero">
        <div className="wrap">
          <p className="kicker">Our process</p>
          <h1>As simple as one, two, three.</h1>
          <p className="lede">
            A free look at your needs, a proposal you can review, then installation and training on a day we agree. Orders are processed within 24 hours.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="wrap two-col" style={{ alignItems: "flex-start" }}>
          <div className="timeline">
            {steps.map((step) => (
              <article key={step.num}>
                <div className="step-num">{step.num}</div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
          <figure className="frame">
            <img src="/images/espresso.jpg" alt="Coffee being prepared for service" width="1600" height="1067" />
          </figure>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">Placing an order</p>
            <h2>What happens after you say yes.</h2>
          </div>
          <div className="step-grid">
            {order.map((text, index) => (
              <article className="step" key={text}>
                <div className="step-num">0{index + 1}</div>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Book a call today."
        text="Toronto and Simcoe County are both covered. Call either number, or send a note and we will follow up."
      />
    </main>
  );
}
