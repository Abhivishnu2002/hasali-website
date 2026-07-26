"use client";

import SiteNav from "./SiteNav";
import SiteFooter from "./SiteFooter";
import WhatsAppFAB from "./WhatsAppFAB";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteNav />
      <main>{children}</main>
      <SiteFooter />
      <WhatsAppFAB />
    </>
  );
}
