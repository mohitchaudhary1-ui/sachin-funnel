"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Award,
  Users,
  BarChart3,
  CheckCircle2,
} from "lucide-react";
import Footer from "@/components/Footer";

const stats = [
  {
    title: "70+ Cr",
    desc: "Ad spend managed with real measurable growth",
  },
  {
    title: "3L+",
    desc: "Business owners & professionals trained",
  },
  {
    title: "4.9/5",
    desc: "Average workshop satisfaction rating",
  },
];

const skills = [
  "Meta Ads with AI",
  "Google & YouTube Ads",
  "WhatsApp Automation",
  "Lead Generation Funnels",
  "AI Marketing Systems",
  "Google My Business",
];

export default function AboutPage() {
  return (<>
    <main className="relative overflow-hidden bg-black pt-36 pb-28">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-0 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/10 blur-3xl" />

        <div className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[#FFD700]/10 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:80px_80px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* HERO */}
        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* BADGE */}
            <div className="inline-flex items-center gap-3 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-5 py-2 backdrop-blur-xl">
              <Sparkles
                size={16}
                className="text-[#D4AF37]"
              />

              <p className="text-sm font-medium tracking-wide text-[#E7D3A1]">
                About Humgence
              </p>
            </div>

            {/* HEADING */}
            <h1 className="mt-8 text-5xl font-black leading-[1] tracking-tight text-white md:text-7xl">
              Practical,{" "}
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFE8A3] bg-clip-text text-transparent">
                implementation-first
              </span>{" "}
              AI marketing training.
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-8 text-xl leading-relaxed text-zinc-400">
              We help business owners, creators,
              freelancers & professionals leverage
              AI + Digital Marketing to generate leads,
              scale sales & build strong personal brands.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-zinc-500">
              Our workshops focus on execution,
              systems & practical implementation —
              so you can apply strategies immediately
              instead of consuming endless theory.
            </p>

            {/* BUTTONS */}
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Link href="/webinar">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  className="group flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#D4AF37] to-[#F5D06F] px-8 py-4 text-lg font-bold text-black shadow-[0_0_45px_rgba(212,175,55,0.35)] transition duration-300 hover:shadow-[0_0_70px_rgba(212,175,55,0.55)]"
                >
                  Register FREE Workshop

                  <ArrowRight
                    size={18}
                    className="transition duration-300 group-hover:translate-x-1"
                  />
                </motion.button>
              </Link>

              <Link href="/contact">
                <button className="rounded-2xl border border-[#D4AF37]/20 bg-white/[0.03] px-8 py-4 text-lg font-semibold text-white backdrop-blur-xl transition duration-300 hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/5">
                  Contact Us
                </button>
              </Link>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-[40px] bg-[#D4AF37]/10 blur-3xl" />

            {/* Card */}
            <div className="relative overflow-hidden rounded-[40px] border border-[#D4AF37]/10 bg-gradient-to-b from-[#111111] to-[#080808] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
              {/* IMAGE */}
              <div className="overflow-hidden rounded-[30px] border border-[#D4AF37]/10">
                <img
                  src="/images/hero.jpeg"
                  alt="mentor"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="mt-7">
                <h2 className="text-4xl font-black text-white">
                  Sachin
                </h2>

                <p className="mt-4 text-lg leading-relaxed text-zinc-400">
                  AI Marketing Strategist, Funnel Architect
                  & Digital Growth Mentor helping businesses
                  scale using AI-powered systems.
                </p>

                {/* TAGS */}
                <div className="mt-6 flex flex-wrap gap-3">
                  {skills.map((tag) => (
                    <div
                      key={tag}
                      className="rounded-full border border-[#D4AF37]/10 bg-[#D4AF37]/5 px-4 py-2 text-sm text-[#E7D3A1]"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* STATS */}
        <div className="mt-28 grid grid-cols-1 gap-8 md:grid-cols-3">
          {stats.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[34px] border border-[#D4AF37]/10 bg-gradient-to-b from-[#111111] to-[#080808] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.6)]"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_55%)] opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <h3 className="text-5xl font-black text-[#F5D06F]">
                  {item.title}
                </h3>

                <p className="mt-5 text-lg leading-relaxed text-zinc-400">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* EXPERIENCE SECTION */}
        <div className="mt-28 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* LEFT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-[34px] border border-[#D4AF37]/10 bg-gradient-to-b from-[#111111] to-[#080808] p-8"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#D4AF37]/10 bg-[#D4AF37]/5">
              <Award
                size={30}
                className="text-[#D4AF37]"
              />
            </div>

            <h3 className="mt-7 text-4xl font-black text-white">
              Real-world experience
            </h3>

            <p className="mt-6 text-lg leading-relaxed text-zinc-400">
              Every strategy taught inside our workshops
              comes from practical implementation,
              tested campaigns & real business growth.
            </p>

            <div className="mt-8 flex flex-col gap-5">
              {[
                "Campaign structures",
                "AI prompts & systems",
                "Lead generation workflows",
                "WhatsApp automations",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <CheckCircle2
                    size={20}
                    className="text-[#D4AF37]"
                  />

                  <p className="text-lg text-zinc-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-[34px] border border-[#D4AF37]/10 bg-gradient-to-b from-[#111111] to-[#080808] p-8"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#D4AF37]/10 bg-[#D4AF37]/5">
              <BarChart3
                size={30}
                className="text-[#D4AF37]"
              />
            </div>

            <h3 className="mt-7 text-4xl font-black text-white">
              Systems that scale
            </h3>

            <p className="mt-6 text-lg leading-relaxed text-zinc-400">
              Learn how to combine AI, funnels,
              automation & advertising into scalable
              growth systems for long-term success.
            </p>

            <div className="mt-8 flex flex-col gap-5">
              {[
                "AI-powered ads",
                "Funnel architecture",
                "Conversion systems",
                "Personal branding",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <CheckCircle2
                    size={20}
                    className="text-[#D4AF37]"
                  />

                  <p className="text-lg text-zinc-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
    <Footer/>
    </>
  );
}