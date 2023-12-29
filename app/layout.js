import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="p-2 bg-white">{children}</body>
    </html>
  );
}
