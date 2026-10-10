import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import AppShell from "@/components/AppShell";
import { businessJsonLd } from "@/components/HomepageJsonLd";
import { JsonLd } from "@/components/JsonLd";
import { LocaleProvider } from "@/components/LocaleProvider";
import { SiteProvider } from "@/components/SiteProvider";
import { buildLiveSite, getSchoolCatalog } from "@/lib/catalog";
import { languageAlternates, localizedPath } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n/get-locale";
import type { Locale } from "@/lib/i18n/locales";
import { buildSeoDescriptions } from "@/lib/seo/descriptions";
import { site } from "@/lib/site";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const openGraphLocale: Record<Locale, string> = {
  en: "en_US",
  es: "es_US",
  pt: "pt_BR",
  ht: "ht_HT",
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const headerStore = await headers();
  const pathname = headerStore.get("x-pathname") ?? "/";
  const canonical = localizedPath(locale, pathname);

  return {
    metadataBase: new URL(site.url),
    alternates: {
      canonical,
      languages: languageAlternates(pathname),
    },
    title: {
      default: `${site.name} | Driving Lessons in Waltham, MA`,
      template: `%s | ${site.name}`,
    },
    description: site.description,
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: openGraphLocale[locale],
      url: canonical,
      images: [
        {
          url: "/images/hero.png",
          width: 1672,
          height: 941,
          alt: "Instructor coaching a student driver, beside a classroom lesson on road signs at JMC Driving School in Waltham, Massachusetts",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

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
        <JsonLd
          data={businessJsonLd(
            liveSite,
            buildSeoDescriptions(catalog).home,
            catalog,
          )}
        />
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
