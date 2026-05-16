"use client";

import { useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Users,
    CalendarDays,
    LogOut,
    GraduationCap,
    Menu,
    X,
} from "lucide-react";

import { supabase } from "@/lib/supabase";

export default function AdminSidebar() {
    const pathname = usePathname();
    const [open, setOpen] =
        useState(false);

    const handleLogout = async () => {
        await supabase.auth.signOut();

        document.cookie =
            "admin-auth=; path=/; max-age=0";

        window.location.href =
            "/admin/login";
    };

    const navClass = (path) =>
  pathname === path
    ? "group flex items-center gap-4 rounded-2xl border border-cyan-400/10 bg-cyan-400/10 px-5 py-4 transition duration-300"
    : "group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.03] px-5 py-4 transition duration-300 hover:border-white/10 hover:bg-white/[0.06]";

    return (
        <>
            {/* MOBILE TOPBAR */}
            <div className="fixed left-0 right-0 top-0 z-40 flex items-center justify-between border-b border-white/10 bg-[#04050D]/95 px-4 py-4 backdrop-blur-xl lg:hidden">
                {/* LOGO */}
                <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-400 to-emerald-400">
                        <GraduationCap className="text-black" />
                    </div>

                    <div>
                        <h2 className="text-lg font-black text-white">
                            Workshop Admin
                        </h2>
                    </div>
                </div>

                {/* MENU BUTTON */}
                <button
                    onClick={() =>
                        setOpen(true)
                    }
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5"
                >
                    <Menu className="text-white" />
                </button>
            </div>

            {/* OVERLAY */}
            {open && (
                <div
                    onClick={() =>
                        setOpen(false)
                    }
                    className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
                />
            )}

            {/* SIDEBAR */}
            <aside
                className={`
          fixed
          left-0
          top-0
          z-50
          flex
          h-screen
          w-72
          flex-col
          border-r
          border-white/10
          bg-[#04050D]/95
          backdrop-blur-2xl
          transition-transform
          duration-300

          ${open
                        ? "translate-x-0"
                        : "-translate-x-full"
                    }

          lg:translate-x-0
        `}
            >
                {/* TOP */}
                <div className="border-b border-white/10 p-6">
                    <div className="flex items-center justify-between">
                        {/* LOGO */}
                        <div className="flex items-center gap-4">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-400 to-emerald-400 shadow-[0_0_40px_rgba(45,212,191,0.35)]">
                                <GraduationCap
                                    size={28}
                                    className="text-black"
                                />
                            </div>

                            <div>
                                <h2 className="text-xl font-black text-white lg:text-2xl">
                                    Workshop Admin
                                </h2>

                                <p className="text-sm text-zinc-400">
                                    Admin Dashboard
                                </p>
                            </div>
                        </div>

                        {/* CLOSE */}
                        <button
                            onClick={() =>
                                setOpen(false)
                            }
                            className="lg:hidden"
                        >
                            <X className="text-white" />
                        </button>
                    </div>
                </div>

                {/* NAVIGATION */}
                <nav className="flex-1 space-y-3 overflow-y-auto p-5">
                    <Link
                        href="/admin/dashboard"
                        onClick={() =>
                            setOpen(false)
                        }
className={navClass("/admin/dashboard")}                    >
                        <LayoutDashboard className="text-cyan-400" />

                        <span className="text-base font-semibold text-white lg:text-lg">
                            Dashboard
                        </span>
                    </Link>

                    <Link
                        href="/admin/students"
                        onClick={() =>
                            setOpen(false)
                        }
className={navClass("/admin/students")}                    >
                        <Users className="text-zinc-400 group-hover:text-white" />

                        <span className="text-base font-medium text-zinc-300 group-hover:text-white lg:text-lg">
                            Students
                        </span>
                    </Link>

                    <Link
                        href="/admin/webinars"
                        onClick={() =>
                            setOpen(false)
                        }
className={navClass("/admin/webinars")}                    >
                        <CalendarDays className="text-zinc-400 group-hover:text-white" />

                        <span className="text-base font-medium text-zinc-300 group-hover:text-white lg:text-lg">
                            Webinars
                        </span>
                    </Link>
                </nav>

                {/* LOGOUT */}
                <div className="border-t border-white/10 p-5">
                    <button
                        onClick={handleLogout}
                        className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 px-5 py-4 text-base font-bold text-white shadow-[0_0_30px_rgba(239,68,68,0.25)] transition duration-300 hover:scale-[1.02] lg:text-lg"
                    >
                        <LogOut size={20} />

                        Logout
                    </button>
                </div>
            </aside>
        </>
    );
}