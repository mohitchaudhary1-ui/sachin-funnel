"use client";

import Link from "next/link";
import {
  Instagram,
  Linkedin,
} from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-black py-10">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        {/* GOLD GLOW */}
        <div className="absolute left-[-10%] top-0 h-[300px] w-[300px] rounded-full bg-[#D4AF37]/10 blur-3xl" />

        <div className="absolute right-[-10%] top-0 h-[300px] w-[300px] rounded-full bg-[#FFD700]/10 blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 lg:flex-row lg:px-10">
        {/* LEFT */}
        <div className="flex items-center gap-4">
          {/* LOGO */}
          <div className="overflow-hidden rounded-2xl border border-[#D4AF37]/10">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop"
              alt="logo"
              className="h-16 w-16 object-cover"
            />
          </div>

          {/* BRAND */}
          <div>
            <h2 className="text-3xl font-black tracking-tight text-white">
              Humgence
            </h2>

            <p className="mt-1 text-zinc-500">
              AI + Marketing Systems
            </p>
          </div>
        </div>

        {/* CENTER */}
        <div className="text-center">
          {/* COPYRIGHT */}
          <p className="text-lg text-zinc-300">
            Business Legal Name — Humgence Media
          </p>

          <p className="mt-2 text-zinc-500">
            © 2026 Humgence. All rights reserved.
          </p>

          {/* LINKS */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-500">
            <Link
              href="/privacy-policy"
              className="transition duration-300 hover:text-[#D4AF37]"
            >
              Privacy Policy
            </Link>

            <span>•</span>

            <Link
              href="/refund-policy"
              className="transition duration-300 hover:text-[#D4AF37]"
            >
              Refund Policy
            </Link>

            <span>•</span>

            <Link
              href="/terms"
              className="transition duration-300 hover:text-[#D4AF37]"
            >
              Terms & Conditions
            </Link>

            <span>•</span>

            <Link
              href="/contact"
              className="transition duration-300 hover:text-[#D4AF37]"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          {/* INSTAGRAM */}
          <Link
            href="/"
            className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-zinc-300 transition duration-300 hover:border-[#D4AF37]/30 hover:bg-[#D4AF37]/5 hover:text-[#D4AF37]"
          >
            <FaInstagram size={24} />
          </Link>

          {/* LINKEDIN */}
          <Link
            href="/"
            className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-zinc-300 transition duration-300 hover:border-[#D4AF37]/30 hover:bg-[#D4AF37]/5 hover:text-[#D4AF37]"
          >
            <FaFacebook size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
}