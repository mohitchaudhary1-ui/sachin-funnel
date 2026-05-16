"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Check,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const leftPoints = [
  "Step-by-step grammar & vocabulary improvement",
  "Easy maths tricks for faster calculations",
  "Regular practice sheets & homework support",
];

const rightPoints = [
  "Live interactive English speaking sessions",
  "Mathematics problem-solving & concept clarity",
  "Weekly tests, revision classes & doubt support",
];

export default function TrainingDifferenceSection() {
  return (
    <section id="why-ai" className="relative overflow-hidden bg-black py-28">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        {/* GOLD GLOW */}
        <div className="absolute left-[-10%] top-0 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/10 blur-3xl" />

        <div className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[#FFD700]/10 blur-3xl" />

        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:80px_80px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* TOP */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* BADGE */}
          <div className="inline-flex items-center gap-3 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-5 py-2 backdrop-blur-xl">
            <Sparkles
              size={16}
              className="text-[#D4AF37]"
            />

            <p className="text-sm font-medium tracking-wide text-[#E7D3A1]">
              Why Students Love Our Classes
            </p>
          </div>

          {/* TITLE */}
          <h2 className="mt-7 text-5xl font-black tracking-tight text-white md:text-6xl">
            Why Our Coaching{" "}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFE8A3] bg-clip-text text-transparent">
              feels different
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-6 text-lg leading-relaxed text-zinc-400 md:text-xl">
            We focus on concept clarity, practical learning,
            spoken confidence, regular practice & personalized
            student attention instead of rote learning.
          </p>
        </motion.div>

        {/* CONTENT BOXES */}
        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* LEFT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-[34px] border border-[#D4AF37]/10 bg-gradient-to-b from-[#111111] to-[#080808] p-7 shadow-[0_20px_80px_rgba(0,0,0,0.6)]"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_55%)] opacity-0 transition duration-500 group-hover:opacity-100" />

            <div className="relative z-10">
              <h3 className="text-4xl font-black tracking-tight text-white">
                English Made Simple
              </h3>

              <p className="mt-5 text-lg leading-relaxed text-zinc-400">
                Improve grammar, vocabulary, spoken English
                and communication skills through practical
                daily learning methods.
              </p>

              {/* POINTS */}
              <div className="mt-8 flex flex-col gap-4">
                {leftPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-4 rounded-2xl border border-[#D4AF37]/10 bg-[#D4AF37]/5 p-5 backdrop-blur-xl"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D4AF37]/10">
                      <Check
                        size={16}
                        className="text-[#D4AF37]"
                      />
                    </div>

                    <p className="flex-1 text-lg leading-relaxed text-zinc-300">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-[34px] border border-[#D4AF37]/10 bg-gradient-to-b from-[#111111] to-[#080808] p-7 shadow-[0_20px_80px_rgba(0,0,0,0.6)]"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_55%)] opacity-0 transition duration-500 group-hover:opacity-100" />

            <div className="relative z-10">
              <h3 className="text-4xl font-black tracking-tight text-white">
                Maths Without Fear
              </h3>

              <p className="mt-5 text-lg leading-relaxed text-zinc-400">
                Understand concepts clearly with easy tricks,
                step-by-step explanations and regular
                practice sessions for better results.
              </p>

              {/* POINTS */}
              <div className="mt-8 flex flex-col gap-4">
                {rightPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-4 rounded-2xl border border-[#D4AF37]/10 bg-[#D4AF37]/5 p-5 backdrop-blur-xl"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D4AF37]/10">
                      <Check
                        size={16}
                        className="text-[#D4AF37]"
                      />
                    </div>

                    <p className="flex-1 text-lg leading-relaxed text-zinc-300">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative mt-20 overflow-hidden rounded-[40px] border border-[#D4AF37]/10 bg-gradient-to-r from-[#111111] via-[#101010] to-[#0B0B0B] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.6)]"
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.14),transparent_60%)]" />

          <div className="relative z-10 flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
            {/* LEFT */}
            <div className="max-w-3xl">
              <h3 className="text-4xl font-black tracking-tight text-white">
                Want Personal Guidance for Better Results?
              </h3>

              <p className="mt-5 text-lg leading-relaxed text-zinc-400">
                Join our regular coaching batches for
                personal mentoring, test preparation,
                revision classes and continuous doubt support.
              </p>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/inner-circle">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  className="group flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#D4AF37] to-[#F5D06F] px-8 py-4 text-lg font-bold text-black shadow-[0_0_45px_rgba(212,175,55,0.35)] transition duration-300 hover:shadow-[0_0_70px_rgba(212,175,55,0.55)]"
                >
                  Join Coaching Batch

                  <ArrowRight
                    size={18}
                    className="transition duration-300 group-hover:translate-x-1"
                  />
                </motion.button>
              </Link>

              <Link href="/about">
                <button className="rounded-2xl border border-[#D4AF37]/20 bg-white/[0.03] px-8 py-4 text-lg font-semibold text-white backdrop-blur-xl transition duration-300 hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/5">
                  About Classes
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}