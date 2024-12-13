import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MaintenancePage from "./components/MaintenancePage";
import { getMaintenanceStatus } from "../lib/maintenance";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SOS 3 Ángeles",
  description: "Plataforma de donaciones SOS 3 Ángeles",
};

export default async function RootLayout({ children }) {
  const { is_active: isMaintenanceMode, message } =
    await getMaintenanceStatus();

  let HTML = ``;

  if (isMaintenanceMode) {
    HTML = <MaintenancePage message={message} />;
  } else {
    HTML = (
      <Providers>
        <main className="min-h-screen bg-white">
          <Navbar />
          {children}
          <Footer />
        </main>
      </Providers>
    );
  }

  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {HTML}
      </body>
    </html>
  );
}
