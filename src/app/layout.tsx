import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rameshbabu | Cine Actor | Official Portfolio",
  description:
    "Official portfolio of cine actor Rameshbabu featuring his biography, gallery, awards, recognition, press coverage and contact information.",
  openGraph: {
    title: "Rameshbabu | Cine Actor | Official Portfolio",
    description: "Passion. Performance. Presence. Explore the official portfolio of Rameshbabu.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        {children}
      </body>
    </html>
  );
}
