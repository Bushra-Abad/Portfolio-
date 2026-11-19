import type { Metadata, Viewport } from 'next';
import { Sora, DM_Sans } from 'next/font/google';
import './globals.css';
import Providers from '@/components/Providers';
import CustomCursor from '@/components/CustomCursor';
import { profile } from '@/data/portfolio';

const sora = Sora({ subsets: ['latin'], variable: '--font-sora' });
const dm = DM_Sans({ subsets: ['latin'], variable: '--font-dm' });

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.title}`,
  description: 'Web developer and AI engineer building dependable full-stack products and intelligent systems.',
  openGraph: { title: `${profile.name} | ${profile.title}`, description: 'Intelligent software, built with care.', type: 'website' },
};
export const viewport: Viewport = { themeColor: '#0b1220', width: 'device-width', initialScale: 1, viewportFit: 'cover' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${dm.variable}`}>
      <body className="bg-bg font-body text-ink antialiased">
        <CustomCursor />
        <Providers><div className="relative z-[1]">{children}</div></Providers>
      </body>
    </html>
  );
}
