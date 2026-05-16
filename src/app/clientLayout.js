"use client";

import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";

export default function LayoutClient({ children }) {
  const pathname = usePathname();

  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <>
      {/* Background Glow */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      {!isAdminRoute && <Navbar />}

      <main className={isAdminRoute ? "" : "flex-1 pt-24"}>
        {children}
      </main>
    </>
  );
}