"use client";

import { usePathname } from "next/navigation";

// Re-keying on the pathname restarts the CSS animation on every route change,
// so pages fade and lift in instead of snapping.
export default function PageTransition({ children }) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="page-enter">
      {children}
    </div>
  );
}
