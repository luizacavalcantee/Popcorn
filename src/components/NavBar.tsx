import Logo from "./Logo";
import type { ReactNode } from "react";

export default function NavBar({ children }: { children: ReactNode }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}