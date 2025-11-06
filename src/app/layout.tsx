import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Streamify | Netflix Clone',
  description: 'A cinematic experience inspired by Netflix, built with Next.js and Tailwind CSS.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-netflix-dark`}>{children}</body>
    </html>
  );
}
