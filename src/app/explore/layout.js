import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "AR Solar System",
  description: "---",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://aframe.io/releases/1.3.0/aframe.min.js" async></script>
        <script src="https://raw.githack.com/AR-js-org/AR.js/dev/aframe/build/aframe-ar.js" async></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
