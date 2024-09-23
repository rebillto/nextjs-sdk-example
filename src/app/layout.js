import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LATAM Pass Subscription",
  description: "Subscribe to LATAM Pass and enjoy exclusive benefits",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://sdk.rebill.com/v3/rebill.js" // <script src="https://sdk.rebill.com/v3/rebill.js"></script>
          strategy="beforeInteractive"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
