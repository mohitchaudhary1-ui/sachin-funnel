"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-black pt-15 pb-28">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        {/* Gold Glow */}
        <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[#D4AF37]/10 blur-3xl" />

        <div className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[#FFD700]/10 blur-3xl" />

        {/* Radial Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_45%)]" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:80px_80px]" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 px-6 lg:grid-cols-2 lg:px-10">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* TOP BADGE */}
          <div className="inline-flex items-center gap-3 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-5 py-2 backdrop-blur-xl">
            <div className="h-2.5 w-2.5 rounded-full bg-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,1)]" />

            <p className="text-sm font-medium tracking-wide text-[#E7D3A1]">
              English & Maths Coaching • Live Interactive Classes
            </p>
          </div>

          {/* TITLE */}
          <h1 className="mt-8 max-w-4xl text-5xl font-black leading-[1] tracking-tight text-white md:text-7xl">
            Master{" "}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFE8A3] bg-clip-text text-transparent">
              English & Maths
            </span>{" "}
            with Expert Coaching.{" "}
            {/* <span className="bg-gradient-to-r from-[#FFD700] to-[#FFF1B8] bg-clip-text text-transparent">
              Premium Brand
            </span>{" "}
            with AI Marketing. */}
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400 md:text-xl">
            Interactive live classes designed to improve grammar,
            spoken English, vocabulary, calculations, problem-solving
            skills & exam performance for school students.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/webinar">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="group flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#D4AF37] to-[#F5D06F] px-10 py-2 text-lg font-bold text-black shadow-[0_0_45px_rgba(212,175,55,0.35)] transition duration-300 hover:shadow-[0_0_70px_rgba(212,175,55,0.55)]"
              >
                Join Free Demo

                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.button>
            </Link>

            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="rounded-2xl border border-[#D4AF37]/20 bg-white/[0.03] px-10 py-2 text-lg font-semibold text-white backdrop-blur-xl transition duration-300 hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/5"
              >
                About Classes
              </motion.button>
            </Link>
          </div>

          {/* PREMIUM BUTTON */}
          <div className="mt-5">
            <button className="rounded-2xl border border-[#D4AF37]/20 bg-[#111111] px-6 py-2 text-lg font-semibold text-[#E7D3A1] transition duration-300 hover:border-[#D4AF37]/40 hover:bg-[#161616]">
              Batch Starting Soon
            </button>
          </div>

          {/* FEATURES */}
          <div className="mt-10 flex flex-wrap gap-5">
            {[
              "Live Interactive Classes",
              "Easy Concept Learning",
              "Weekly Tests",
              "Doubt Support",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2"
              >
                <CheckCircle2
                  size={18}
                  className="text-[#D4AF37]"
                />

                <span className="text-base text-zinc-400">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* STATS */}
          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                title: "10K+",
                desc: "Students taught successfully",
              },
              {
                title: "4.9/5",
                desc: "Student satisfaction rating",
              },
              {
                title: "95%",
                desc: "Students improved exam scores",
              },
            ].map((item) => (
              <motion.div
                whileHover={{ y: -6 }}
                key={item.title}
                className="rounded-[30px] border border-[#D4AF37]/10 bg-gradient-to-b from-[#111111] to-[#0A0A0A] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl"
              >
                <h3 className="text-2xl font-black text-[#F5D06F]">
                  {item.title}
                </h3>

                <p className="mt-3 leading-relaxed text-zinc-400">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Glow */}
          <div className="absolute inset-0 rounded-[40px] bg-[#D4AF37]/10 blur-3xl" />

          {/* Card */}
          <div className="relative rounded-[40px] border border-[#D4AF37]/15 bg-gradient-to-b from-[#111111] to-[#080808] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
            {/* Image */}
            <div className="overflow-hidden rounded-[30px] border border-[#D4AF37]/10">
              <img
                src="/images/hero.jpeg"
                alt="mentor"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="mt-7">
              <h2 className="text-3xl font-black text-white">
                Sachin 
              </h2>

              <p className="mt-4 text-lg leading-relaxed text-zinc-400">
                Helping students improve English communication,
                grammar, mathematics problem-solving & academic
                performance through practical teaching methods.
              </p>

              {/* TAGS */}
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Meta Ads",
                  "AI Marketing",
                  "Lead Funnels",
                  "WhatsApp Automation",
                ].map((tag) => (
                  <div
                    key={tag}
                    className="rounded-full border border-[#D4AF37]/10 bg-[#D4AF37]/5 px-4 py-2 text-sm text-[#E7D3A1] backdrop-blur-xl"
                  >
                    {tag}
                  </div>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/webinar">
                  <button className="rounded-2xl bg-gradient-to-r from-[#D4AF37] to-[#F5D06F] px-7 py-4 text-lg font-bold text-black shadow-[0_0_45px_rgba(212,175,55,0.35)]">
                    Join Free Demo
                  </button>
                </Link>

                <Link href="/about">
                  <button className="rounded-2xl border border-[#D4AF37]/20 bg-white/[0.03] px-7 py-4 text-lg font-semibold text-white backdrop-blur-xl transition duration-300 hover:border-[#D4AF37]/40">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}