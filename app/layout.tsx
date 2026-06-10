import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mélo Nail | Prothésiste ongulaire à Neyron',
  description:
    'Mélo Nail propose des prestations ongulaires créatives, soignées et élégantes à Neyron, près de Lyon : pose gel, gainage, Gel X, french et décorations.',
  keywords: [
    'Mélo Nail',
    'prothésiste ongulaire Neyron',
    'onglerie Neyron',
    'pose gel Neyron',
    'gainage Neyron',
    'Gel X Neyron',
    'french ongles Neyron',
    'près de Lyon'
  ],
  openGraph: {
    title: 'Mélo Nail | Prothésiste ongulaire à Neyron',
    description:
      'Des poses créatives, chic et soignées dans un univers doux et élégant à Neyron, près de Lyon.',
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
