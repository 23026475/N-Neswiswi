"use client";

import SideNav from "./SideNav";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function SideNavWrapper() {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Show only on homepage AND only on mobile/tablet devices
  return pathname === "/" && isMobile ? <SideNav /> : null;
}