import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "CMC Renovations | Owner-Led Remodeling in Hamilton, OH",
    template: "%s | CMC Renovations",
  },
  description:
    "Expert residential remodeling in Hamilton, OH and surrounding areas. Kitchen, bathroom, basement remodeling and more. Owner-operated with 15+ years of combined experience. Free estimates.",
  keywords: ["remodeling", "renovation", "Hamilton OH", "bathroom remodel", "kitchen remodel", "basement finishing"],
  openGraph: {
    siteName: "CMC Renovations",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="grain">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
