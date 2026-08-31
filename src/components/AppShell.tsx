"use client";

import { usePathname } from "next/navigation";
import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";

type Props = {
  children: React.ReactNode;
};

export default function AppShell({ children }: Props) {
  const pathname = usePathname();

  const hideChrome =
    pathname === "/sign-in" || pathname === "/enroll";

  if (hideChrome) {
    return (
      <main className="flex-grow flex flex col w-full">
        {children}
      </main>
    );
  }

  return (
    <>
      <TopNavBar />
      <main className="flex-grow flex flex-col w-full">{children}</main>
      <Footer />
    </>
  );
}

