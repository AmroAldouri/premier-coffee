import { brands } from "../lib/site";

export default function BrandGrid() {
  return (
    <ul className="brand-grid">
      {brands.map((brand) => (
        <li key={brand}>{brand}</li>
      ))}
    </ul>
  );
}
