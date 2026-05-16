"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
} from "lucide-react";

const workshops = [
  {
    badge: "Most Popular",
    title: "Spoken English Mastery Workshop",
    description:
      "Improve spoken English, grammar, vocabulary, pronunciation and communication confidence through live interactive sessions.",
    tags: [
      "Spoken English",
      "Grammar",
      "Vocabulary",
    ],
    ideal:
      "Ideal for: School Students • Beginners • Competitive Exam Students",
    href: "/spoken-english",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    badge: "Top Rated",
    title: "Mathematics Problem Solving Workshop",
    description:
      "Learn maths concepts with easy tricks, shortcuts, calculations and step-by-step problem solving methods.",
    tags: [
      "Algebra",
      "Calculations",
      "Problem Solving",
    ],
    ideal:
      "Ideal for: School Students • Board Exams • Foundation Classes",
    href: "/maths",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    badge: "High Demand",
    title: "English + Maths Combined Batch",
    description:
      "Complete academic support with English communication, grammar, maths practice, tests and doubt-solving sessions.",
    tags: [
      "Live Classes",
      "Weekly Tests",
      "Doubt Support",
    ],
    ideal:
      "Ideal for: Students who want complete subject improvement",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function WorkshopSection() {
  return (
    <section id="workshops" className="relative overflow-hidden bg-black py-28">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        {/* Glow */}
        <div className="absolute left-[-10%] top-0 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/10 blur-3xl" />

        <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[#FFD700]/10 blur-3xl" />

        {/* Grid */}
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
              Live Coaching Workshops
            </p>
          </div>

          {/* HEADING */}
          <h2 className="mt-7 text-5xl font-black tracking-tight text-white md:text-6xl">
            Join Our{" "}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFE8A3] bg-clip-text text-transparent">
              FREE Demo Classes
            </span>
          </h2>

          {/* TEXT */}
          <p className="mt-6 text-lg leading-relaxed text-zinc-400 md:text-xl">
            Choose the right class for your learning goals.
            Every session focuses on concept clarity,
            interactive learning and practical improvement.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {workshops.map((workshop, index) => (
            <motion.div
              key={workshop.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-[34px] border border-[#D4AF37]/10 bg-gradient-to-b from-[#111111] to-[#080808] p-5 shadow-[0_20px_80px_rgba(0,0,0,0.6)]"
            >
              {/* CARD GLOW */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_55%)] opacity-0 transition duration-500 group-hover:opacity-100" />

              {/* BADGE */}
              <div className="relative z-10 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-4 py-2">
                <div className="h-2.5 w-2.5 rounded-full bg-[#D4AF37]" />

                <span className="text-sm font-semibold text-[#E7D3A1]">
                  {workshop.badge}
                </span>
              </div>

              {/* IMAGE */}
              <div className="relative z-10 mt-5 overflow-hidden rounded-[24px] border border-[#D4AF37]/10">
                <img
                  src={workshop.image}
                  alt={workshop.title}
                  className="h-[240px] w-full object-cover transition duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="relative z-10 mt-6">
                <h3 className="text-3xl font-black leading-tight text-white">
                  {workshop.title}
                </h3>

                {/* TAGS */}
                <div className="mt-5 flex flex-wrap gap-3">
                  {workshop.tags.map((tag) => (
                    <div
                      key={tag}
                      className="rounded-full border border-[#D4AF37]/10 bg-[#D4AF37]/5 px-4 py-2 text-sm text-[#E7D3A1]"
                    >
                      {tag}
                    </div>
                  ))}
                </div>

                {/* DESCRIPTION */}
                <p className="mt-6 text-lg leading-relaxed text-zinc-400">
                  {workshop.description}
                </p>

                {/* BUTTON */}
                <Link href={workshop.href}>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.96 }}
                    className="group/btn mt-8 flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#D4AF37] to-[#F5D06F] px-7 py-4 text-lg font-bold text-black shadow-[0_0_45px_rgba(212,175,55,0.35)] transition duration-300 hover:shadow-[0_0_70px_rgba(212,175,55,0.55)]"
                  >
                    Join FREE Class

                    <ArrowRight
                      size={18}
                      className="transition duration-300 group-hover/btn:translate-x-1"
                    />
                  </motion.button>
                </Link>

                {/* IDEAL */}
                <p className="mt-6 text-base leading-relaxed text-zinc-500">
                  {workshop.ideal}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}