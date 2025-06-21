import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

export function DotBackground({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen md:min-h-[70vh] w-full  bg-background">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(var(--border)_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] "></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
