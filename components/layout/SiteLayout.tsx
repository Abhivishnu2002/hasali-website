"use client";

import LoadingScreen from "./LoadingScreen";
import SiteNav from "./SiteNav";
import SiteFooter from "./SiteFooter";
import WhatsAppFAB from "./WhatsAppFAB";
import { BookingModalProvider } from "@/components/ui/BookingModalContext";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BookingModalProvider>
      <LoadingScreen />
      <SiteNav />
      <main>{children}</main>
      <SiteFooter />
      <WhatsAppFAB />
    </BookingModalProvider>
  );
}
