import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex Osei — Product Manager",
  description:
    "Product Manager with a technical background. Turning messy problems into scalable digital products people actually use.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
