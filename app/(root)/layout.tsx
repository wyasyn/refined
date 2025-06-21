import ModeToggle from "@/components/modetoggle";
import { Navbar } from "@/components/nav-bar";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <ModeToggle />
    </>
  );
}
