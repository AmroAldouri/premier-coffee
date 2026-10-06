import CtaBand from "../../components/CtaBand";

export const metadata = {
  title: "Water coolers",
  description:
    "Point of use water coolers for offices, shared rooms, and cafeterias in the Greater Toronto Area and Simcoe County.",
};

const places = [
  {
    title: "Group settings",
    text: "Fresh water for everyone in a shared room.",
  },
  {
    title: "Offices",
    text: "Easy, fast access to fresh water through the day.",
  },
  {
    title: "Cafeterias",
    text: "Custom coolers with more than one dispenser for busier service.",
  },
];

export default function WaterPage() {
  return (
    <main>
      <header className="page-hero">
        <div className="wrap">
          <p className="kicker">Water coolers</p>
          <h1>Clear water, hot or cold, where you need it.</h1>
          <p className="lede">
            Point of use water coolers for offices, shared rooms, and cafeterias, installed and looked after by a local team.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="wrap split">
          <figure className="frame portrait">
            <img src="/images/water.jpg" alt="Clear water pouring into a glass" width="1600" height="2395" />
          </figure>
          <div className="prose">
            <p>
              A member of our team helps you choose a cooler for the space, then installs, services, and maintains it. Filtered water is part of the same promise as our coffee service: quality equipment, with someone local who stays involved.
            </p>
            <p>
              From a single office dispenser to a cafeteria that needs several people served at once, the recommendation starts with your facility.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap service-grid">
          {places.map((place) => (
            <article className="service-card" key={place.title}>
              <h3>{place.title}</h3>
              <p>{place.text}</p>
            </article>
          ))}
        </div>
        <div className="wrap feature-grid">
          <article className="feature">
            <h3>Competitive pricing</h3>
            <p>Low overhead and volume discounts let us pass savings from our suppliers on to you.</p>
          </article>
          <article className="feature">
            <h3>An account manager</h3>
            <p>Personal support from someone who helps you solve what comes up after the cooler is in place.</p>
          </article>
          <article className="feature">
            <h3>Local service</h3>
            <p>Delivery, installation, and technical support at your office across the Greater Toronto Area and Simcoe County.</p>
          </article>
        </div>
      </section>

      <CtaBand
        title="Want water beside the coffee?"
        text="Most accounts use both. We can plan the cooler and the brewer together so the setup feels like one service."
      />
    </main>
  );
}
