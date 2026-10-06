import { hours, phones } from "../lib/site";

export default function Regions() {
  return (
    <div className="region-grid">
      {phones.map((phone) => (
        <article className="region" key={phone.id}>
          <p className="kicker light">{phone.place}</p>
          <h2>{phone.region}</h2>
          <a className="phone" href={`tel:${phone.tel}`}>
            {phone.display}
          </a>
          <p className="fine">Working hours are {hours}</p>
          <p className="fine">Ask us about 24/7 service and repair.</p>
        </article>
      ))}
    </div>
  );
}
