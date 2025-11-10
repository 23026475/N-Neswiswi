"use client";

import SideNav from "./SideNav";
import { usePathname } from "next/navigation";

export default function SideNavWrapper() {
  const pathname = usePathname();
  // Show only on homepage
  return pathname === "/" ? <SideNav /> : null;
}
