import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import CallBar from "../components/CallBar";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { company, email } from "../lib/site";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-display",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata = {
  title: {
    default: company,
    template: `%s | ${company}`,
  },
  description:
    "Commercial coffee brewers, espresso machines, grinders, and point of use water coolers for offices in the Greater Toronto Area and Simcoe County.",
  applicationName: company,
};

export const viewport = {
  themeColor: "#6f2430",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: company,
  email,
  telephone: "+14169091915",
  areaServed: ["Greater Toronto Area", "Simcoe County"],
  url: "https://premier-coffee.ca/",
  description:
    "Office coffee brewers, espresso machines, grinders, and point of use water coolers, with delivery, installation, and local support.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-CA" className={`${plusJakarta.variable} ${outfit.variable}`}>
      <body>
        <a className="skip" href="#content">
          Skip to content
        </a>
        <SiteHeader />
        <div id="content">{children}</div>
        <SiteFooter />
        <CallBar />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
