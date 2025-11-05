import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}

