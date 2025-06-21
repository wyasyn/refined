import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { links } from "@/lib/nav-links";

export function Navbar() {
  return (
    <>
      <FloatingDock
        mobileClassName=" z-50 fixed bottom-4 right-4"
        desktopClassName="z-50 fixed bottom-8 left-1/2 -translate-x-1/2"
        items={links}
      />
    </>
  );
}
