import "./globals.css";

export const metadata = {
  title: "AR Solar System",
  description: "---",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
