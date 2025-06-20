import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { links } from "@/lib/nav-links";

export function Navbar() {
  return (
    <>
      <FloatingDock
        mobileClassName="fixed bottom-8 right-8"
        desktopClassName="fixed bottom-8 left-1/2 -translate-x-1/2"
        items={links}
      />
    </>
  );
}
