import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Melo Nails | Nail Artist premium',
  description:
    'Melo Nails sublime vos ongles avec des prestations haut de gamme, un nail art sur-mesure et une expérience chic.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
