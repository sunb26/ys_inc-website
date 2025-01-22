import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/home/header";
import { Footer } from "@/components/home/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yachting Solutions Inc.",
  description:
    "Yachting Solutions Inc. specializes in selling fully refurbished, late-model Chris Craft sport boats and other high-end sport boats in the 20-32 ft range. Located in the Niagara region of Ontario, we bring over 35 years of expertise in the yachting industry to every vessel we restore. From fiberglass repairs and mechanical services to brightwork and upholstery, our team ensures each boat is returned to pristine condition before sale. With a legacy rooted in Niagara’s rich fiberglass boat manufacturing history, Yachting Solutions Inc. is your trusted source for quality sport boats. Explore our inventory today!",
  keywords:
    "yachting, yachting solutions, yachting solutions inc, Chris Craft sport boats, refurbished sport boats, high-end sport boats, 20-32 ft boats for sale, Niagara boat sales, Ontario luxury boats",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
