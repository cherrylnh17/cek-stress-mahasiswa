import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageLoader from "../components/PageLoader";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CTSM Cherry | Website Cek Kesetresan Mahasiswa",
  description: "Aplikasi untuk self-assessment tingkat stres mahasiswa.",
  icons: {
    icon: "/logo.png", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <PageLoader>
          <Navbar />
          {children}
          <Footer />
        </PageLoader>

        <Script
          src="https://cdn.jsdelivr.net/npm/sweetalert2@11"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
