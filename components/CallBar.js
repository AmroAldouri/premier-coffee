import { phones } from "../lib/site";

export default function CallBar() {
  return (
    <div className="callbar">
      {phones.map((phone) => (
        <a key={phone.id} href={`tel:${phone.tel}`} aria-label={`Call ${phone.region} at ${phone.display}`}>
          {phone.id === "toronto" ? "Call Toronto" : "Call Simcoe"}
        </a>
      ))}
    </div>
  );
}
