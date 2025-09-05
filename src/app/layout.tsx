import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import '../styles/globals.css';
import { Providers } from '@/lib/providers';
import { MotionProvider } from '@/lib/motion-provider';
import { generateSEOMetadata, organizationSchema, websiteSchema } from '@/lib/seo';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = generateSEOMetadata({
  title: 'Professional Video Production Services',
  description: 'Award-winning video production studio creating stunning visual content for brands, events, and creative projects. Get your free consultation today.',
  canonical: '/',
  openGraph: {
    images: ['/images/og-home.jpg'],
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className="antialiased">
        <Providers>
          <MotionProvider>
            {children}
          </MotionProvider>
        </Providers>
      </body>
    </html>
  );
}