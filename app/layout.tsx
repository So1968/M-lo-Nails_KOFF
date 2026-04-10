import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Melo Nails | Nail Artist premium à Bordeaux',
  description:
    'Melo Nails sublime vos ongles avec des prestations premium, un nail art sur-mesure et une expérience chic.',
  keywords: ['prothésiste ongulaire', 'nail artist', 'Bordeaux', 'nail art', 'pose gel'],
  openGraph: {
    title: 'Melo Nails | Nail Artist premium',
    description: 'Sublimez jusqu’au bout des ongles avec une expérience beauté chic et moderne.',
    type: 'website',
    locale: 'fr_FR'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
