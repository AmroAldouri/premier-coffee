import BrandGrid from "../../components/BrandGrid";
import CtaBand from "../../components/CtaBand";

export const metadata = {
  title: "Coffee machines",
  description:
    "Commercial coffee brewers, espresso machines, and grinders for rent or purchase in Toronto and Simcoe County.",
};

const places = [
  {
    title: "Waiting areas",
    text: "A welcome cup for guests, ready when they arrive.",
  },
  {
    title: "Offices",
    text: "Quick, easy access to premium coffee through the workday.",
  },
  {
    title: "Cafeterias",
    text: "Customized solutions for rooms that serve more people.",
  },
];

const reasons = [
  {
    title: "Competitive pricing",
    text: "Low overhead and volume discounts. Our buying power with roasters, distributors, and vendors allows us to pass the savings on to you.",
  },
  {
    title: "An account manager",
    text: "Personal support from someone who knows your account and helps when a need comes up, from supplies to service.",
  },
  {
    title: "A free trial",
    text: "Try the service before you commit. The trial period gives you time to decide with a clear head.",
  },
];

export default function CoffeePage() {
  return (
    <main>
      <header className="page-hero">
        <div className="wrap">
          <p className="kicker">Commercial coffee</p>
          <h1>Machines your office will actually use.</h1>
          <p className="lede">
            Brewers, espresso machines, and grinders for waiting areas, offices, and cafeterias. Rent or purchase, with installation, service, and supplies included in the conversation from the start.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="wrap split reverse">
          <div className="prose">
            <p>
              Premier Coffee & Water Systems Ltd. offers a complete line of coffee brewers, espresso machines, grinders, and water coolers. A member of our team recommends a setup for your facility, then installs, services, and maintains the equipment.
            </p>
            <p>
              You get customized equipment and attentive service from the first conversation, whether the room is small or the install is large.
            </p>
          </div>
          <figure className="frame">
            <img src="/images/espresso.jpg" alt="Fresh coffee being brewed into a glass server" width="1600" height="1067" />
          </figure>
        </div>
        <div className="wrap">
          <figure className="equipment">
            <img
              src="/images/machines.jpg"
              alt="Commercial brewers, a pod machine, a grinder, and a water cooler"
              width="768"
              height="446"
            />
            <figcaption>Brewers, espresso and pod machines, grinders, and water coolers.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap card-grid service-grid">
          {places.map((place) => (
            <article className="service-card" key={place.title}>
              <h3>{place.title}</h3>
              <p>{place.text}</p>
            </article>
          ))}
        </div>
        <div className="wrap feature-grid">
          {reasons.map((reason) => (
            <article className="feature" key={reason.title}>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">Coffee and tea</p>
            <h2>Brands people already know.</h2>
          </div>
          <BrandGrid />
        </div>
      </section>

      <CtaBand
        title="Not sure which machine fits?"
        text="Tell us how many people you serve and what you pour today. We will recommend a setup and price it clearly."
      />
    </main>
  );
}
