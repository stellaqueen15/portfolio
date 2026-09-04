import type { Metadata } from "next";
import { Baloo_2 } from "next/font/google";import "./globals.css";

const baloo = Baloo_2({
  variable: "--font-baloo-2",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brenda - Portfolio",
  description: "Développeuse web, passionnée par le développement front-end, le design et les expériences numériques.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${baloo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
