import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"]});

export const metadata = {
  title: "Darren Lee",
  description: "Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
