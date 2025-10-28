"use client";

import SideNav from "@/components/SideNav";
import { usePathname } from "next/navigation";

export default function SideNavWrapper() {
  const pathname = usePathname();
  return pathname === "/" ? <SideNav /> : null;
}
