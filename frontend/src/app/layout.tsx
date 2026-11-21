import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
});

// Mobile-Native Viewport Meta: Notch & Dynamic Island edge-to-edge support
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  interactiveWidget: 'resizes-content',
  themeColor: '#111318',
};

export const metadata: Metadata = {
  title: 'LNYX ARCHIVE | Josiah Maximus Suryadi',
  description:
    'Portfolio of Josiah Maximus Suryadi (LNYX) — Data Science & Backend Engineer. Undergraduate Informatics Scholar at Universitas Multimedia Nusantara.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} dark`}
    >
      <body className="bg-obsidian text-ivory antialiased selection:bg-wine selection:text-ivory">
        {children}
      </body>
    </html>
  );''
}
