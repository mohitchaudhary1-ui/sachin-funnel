"use client";

import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Are these workshops beginner friendly?",
    answer:
      "The training is designed for complete beginners and covers step-by-step frameworks, AI prompts, ad systems, and practical implementation workflows.",
  },
  {
    question: "Will I get recordings of workshops?",
    answer:
      "This is a live implementation-focused session. However, you’ll receive important notes, frameworks, and actionable takeaways after the workshop.",
  },
  {
    question: "What if I miss the workshop session?",
    answer:
      "You can simply register again for the next available batch and continue learning from future live sessions.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="relative overflow-hidden bg-black py-28">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        {/* GOLD GLOW */}
        <div className="absolute left-[-10%] top-0 h-[400px] w-[400px] rounded-full bg-[#D4AF37]/10 blur-3xl" />

        <div className="absolute bottom-[-10%] right-[-10%] h-[400px] w-[400px] rounded-full bg-[#FFD700]/10 blur-3xl" />

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
        >
          {/* BADGE */}
          <div className="inline-flex items-center gap-3 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-5 py-2 backdrop-blur-xl">
            <HelpCircle
              size={16}
              className="text-[#D4AF37]"
            />

            <p className="text-sm font-medium tracking-wide text-[#E7D3A1]">
              Frequently Asked Questions
            </p>
          </div>

          {/* TITLE */}
          <h2 className="mt-7 max-w-4xl text-5xl font-black tracking-tight text-white md:text-6xl">
            Got Questions?{" "}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFE8A3] bg-clip-text text-transparent">
              We’ve Got You Covered
            </span>
          </h2>
        </motion.div>

        {/* FAQ GRID */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
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
              {/* CARD GLOW */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_55%)] opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                {/* ICON */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D4AF37]/10 bg-[#D4AF37]/5">
                  <HelpCircle
                    size={24}
                    className="text-[#D4AF37]"
                  />
                </div>

                {/* QUESTION */}
                <h3 className="mt-6 text-3xl font-black leading-tight text-white">
                  {faq.question}
                </h3>

                {/* ANSWER */}
                <p className="mt-5 text-lg leading-relaxed text-zinc-400">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}