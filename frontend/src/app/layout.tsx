import "./globals.css";
import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  variable: "--font-public-sans",
});

export const metadata: Metadata = {
  title: "Mis Recetas",
  description: "Aplicación para gestionar tus recetas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* Material Icons */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>

      <body className={publicSans.className}>{children}</body>
    </html>
  );
}
