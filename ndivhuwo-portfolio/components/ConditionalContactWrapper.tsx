"use client";

import { usePathname } from "next/navigation";
import { Separator } from "@radix-ui/react-separator";
import ContactSection from "@/components/ContactSection";

export default function ConditionalContactWrapper() {
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";

  if (isContactPage) return null;

  return (
    <>
      <Separator className="mb-12 relative z-10" />
      <ContactSection />
    </>
  );
}
