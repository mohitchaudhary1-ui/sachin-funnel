
"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
const navLinks = [
  {
    name: "Workshops",
    id: "workshops",
    href: "/#workshops",
  },
  {
    name: "Why AI",
    id: "why-ai",
    href: "/#why-ai",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "FAQ",
    id: "faq",
    href: "/#faq",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const Router = useRouter();
  const [mobileMenu, setMobileMenu] = React.useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#050816]/85 backdrop-blur-2xl">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* LEFT LOGO */}
        <Link href="/" className="relative z-50">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/30 to-emerald-500/30 blur-xl" />

              <img
                src="https://i.pravatar.cc/100"
                alt="profile"
                className="relative h-14 w-14 rounded-2xl border border-white/10 object-cover"
              />
            </div>

            <div>
              <h1 className="text-xl font-semibold tracking-tight text-white">
                Sachin 
              </h1>

              <p className="text-sm text-zinc-400">
                AI + Digital Marketing
              </p>
            </div>
          </motion.div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-10 lg:flex">
  {navLinks.map((item) => {
    // SCROLL ITEMS
    if (item.id && item.href) {
      return (
        <button
          key={item.name}
          onClick={() => {
            // redirect to href first, then scroll to id
            Router.push(item.href);
            document
              .getElementById(item.id)
              ?.scrollIntoView({
                behavior: "smooth",
              });
          }}
          className="group relative text-[15px] font-medium text-zinc-300 transition duration-300 hover:text-white"
        >
          {item.name}

          <span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-300 group-hover:w-full" />
        </button>
      );
    }

    // NORMAL LINKS
    return (
      <Link
        key={item.name}
        href={item.href}
        className="group relative text-[15px] font-medium text-zinc-300 transition duration-300 hover:text-white"
      >
        {item.name}

        <span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-300 group-hover:w-full" />
      </Link>
    );
  })}
</nav>

        {/* RIGHT BUTTONS */}
        <div className="hidden items-center gap-4 lg:flex">
          <Link href="/about">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="rounded-2xl border border-white/10 bg-white/5 px-7 py-3 text-sm font-medium text-white backdrop-blur-xl transition duration-300 hover:border-cyan-400/30 hover:bg-white/10"
            >
              About Humgence
            </motion.button>
          </Link>

          <Link href="/webinar">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="rounded-2xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-8 py-3 text-sm font-semibold text-black shadow-[0_0_35px_rgba(45,212,191,0.35)] transition duration-300 hover:shadow-[0_0_50px_rgba(45,212,191,0.55)]"
            >
              Register FREE
            </motion.button>
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="relative z-50 text-white lg:hidden"
        >
          {mobileMenu ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 top-0 flex min-h-screen w-full flex-col items-center justify-center gap-8 bg-[#050816] px-6 lg:hidden"
          >
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenu(false)}
                className="text-3xl font-medium text-zinc-300 transition duration-300 hover:text-white"
              >
                {item.name}
              </Link>
            ))}

            <Link href="/webinar">
              <button className="mt-6 rounded-2xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-10 py-4 text-base font-semibold text-black shadow-[0_0_35px_rgba(45,212,191,0.35)]">
                Register FREE
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
