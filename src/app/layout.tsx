import type { Metadata } from "next";
import { Inter, Cedarville_Cursive } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const cedarvilleCursive = Cedarville_Cursive({ 
  subsets: ["latin"],
  weight: "400",
  variable: "--font-cedarville-cursive",
});

export const metadata: Metadata = {
  title: "CRIG - Club Robotique de l'Institut Galilée",
  description: "Site web du Club Robotique de l'Institut Galilée",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} ${cedarvilleCursive.variable}`}>{children}</body>
    </html>
  );
}

