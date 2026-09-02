import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import AppShell from "@/components/AppShell";
import { LocaleProvider } from "@/components/LocaleProvider";
import { SiteProvider } from "@/components/SiteProvider";
import { buildLiveSite, getSchoolCatalog } from "@/lib/catalog";
import { getLocale } from "@/lib/i18n/get-locale";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JMC Driving School | Driving Lessons in Waltham, MA",
  description:
    "Professional driving lessons in Waltham, Massachusetts. Certified instructors helping new drivers gain skills and confidence on the road.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const catalog = await getSchoolCatalog();
  const liveSite = buildLiveSite(catalog);

  return (
    <html
      lang={locale}
      className={`${plusJakartaSans.variable} h-full antialiased`}
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-on-background font-body-md antialiased flex flex-col min-h-screen">
        <LocaleProvider initialLocale={locale}>
          <SiteProvider site={liveSite}>
            <AppShell>{children}</AppShell>
          </SiteProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
