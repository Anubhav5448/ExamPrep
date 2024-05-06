import "./globals.css";
import { Inter, Grenze_Gotisch } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import { Providers } from "./providers";
import { ClerkProvider } from "@clerk/nextjs";
import DataState from "../app/Context/DataState";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const grenze = Grenze_Gotisch({
  subsets: ["latin"],
  variable: "--font-grenze",
  display: "swap",
});

export const metadata = {
  title: "Marks Buddy",
  description: "Marks Buddy is the one-stop academic solution for every students of the University.",
  keywords: " University, Academic, Next.js, Notes, PYQ, Syllabus, Marks Buddy, Marks Buddy App, Marks Buddy Website, Marks Buddy Web App, Marks Buddy Web Application, Marks Buddy Web Platform, Marks Questions,Marks PYQ, Marks website, Marks Buddy Web Portal, Marks Website",
  author: "Anubhav Yadav",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${grenze.variable} dark text-foreground  `}
    >
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />

      </Head>
      <body className={inter.className}>
        <ClerkProvider
          publishablekey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
        >
          <DataState>
            <Providers>
              {children}
              <Analytics />
            </Providers>
          </DataState>
        </ClerkProvider>
      </body>
    </html>
  );
}
