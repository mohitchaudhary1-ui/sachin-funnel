"use client";

import { motion } from "framer-motion";
import { Send, Sparkles } from "lucide-react";
import { FaEnvelope, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone } from "react-icons/fa";


export default function ContactPage() {
  return (
    <main className="relative overflow-hidden bg-black pt-36 pb-28">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        {/* GOLD GLOW */}
        <div className="absolute left-[-10%] top-0 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/10 blur-3xl" />

        <div className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[#FFD700]/10 blur-3xl" />

        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:80px_80px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* TOP SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* BADGE */}
          <div className="inline-flex items-center gap-3 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-5 py-2 backdrop-blur-xl">
            <Sparkles
              size={16}
              className="text-[#D4AF37]"
            />

            <p className="text-sm font-medium tracking-wide text-[#E7D3A1]">
              Contact Humgence
            </p>
          </div>

          {/* HEADING */}
          <h1 className="mt-8 text-5xl font-black leading-[1] tracking-tight text-white md:text-7xl">
            Let’s create{" "}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFE8A3] bg-clip-text text-transparent">
              something powerful
            </span>
          </h1>

          {/* TEXT */}
          <p className="mt-8 text-xl leading-relaxed text-zinc-400">
            Whether you have questions about workshops,
            collaborations, mentorship or AI marketing systems —
            we’d love to hear from you.
          </p>
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="mt-24 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[40px] border border-[#D4AF37]/10 bg-gradient-to-b from-[#111111] to-[#080808] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.6)]"
          >
            {/* GLOW */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_55%)]" />

            <div className="relative z-10">
              <h2 className="text-4xl font-black text-white">
                Contact Information
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-zinc-400">
                Reach out anytime — our team usually responds
                within 24 hours.
              </p>

              {/* CONTACT CARDS */}
              <div className="mt-10 flex flex-col gap-6">
                {[
                  {
                    icon: FaEnvelope,
                    title: "Email Address",
                    value: "hello@humgence.com",
                  },
                  {
                    icon: FaPhone,
                    title: "Phone Number",
                    value: "+91 98765 43210",
                  },
                  {
                    icon: FaMapMarkerAlt,
                    title: "Location",
                    value: "India",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex items-start gap-5 rounded-3xl border border-[#D4AF37]/10 bg-[#D4AF37]/5 p-5 backdrop-blur-xl"
                    >
                      {/* ICON */}
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D4AF37]/10 bg-black/30">
                        <Icon
                          size={24}
                          className="text-[#D4AF37]"
                        />
                      </div>

                      {/* CONTENT */}
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-lg text-zinc-400">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* SOCIALS */}
              <div className="mt-10">
                <h3 className="text-xl font-bold text-white">
                  Follow Us
                </h3>

                <div className="mt-5 flex gap-4">
                  {[FaInstagram, FaFacebook].map(
                    (Icon, index) => (
                      <button
                        key={index}
                        className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D4AF37]/10 bg-[#D4AF37]/5 text-[#D4AF37] transition duration-300 hover:border-[#D4AF37]/30 hover:bg-[#D4AF37]/10"
                      >
                        <Icon size={22} />
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[40px] border border-[#D4AF37]/10 bg-gradient-to-b from-[#111111] to-[#080808] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.6)]"
          >
            {/* GLOW */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_55%)]" />

            <div className="relative z-10">
              <h2 className="text-4xl font-black text-white">
                Send a Message
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-zinc-400">
                Fill in the form and we’ll get back to you soon.
              </p>

              {/* FORM */}
              <form className="mt-10 flex flex-col gap-6">
                {/* NAME */}
                <div>
                  <label className="mb-3 block text-lg font-medium text-white">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="h-16 w-full rounded-2xl border border-[#D4AF37]/10 bg-[#0D0D0D] px-5 text-lg text-white outline-none transition duration-300 placeholder:text-zinc-500 focus:border-[#D4AF37]/40"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="mb-3 block text-lg font-medium text-white">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="h-16 w-full rounded-2xl border border-[#D4AF37]/10 bg-[#0D0D0D] px-5 text-lg text-white outline-none transition duration-300 placeholder:text-zinc-500 focus:border-[#D4AF37]/40"
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="mb-3 block text-lg font-medium text-white">
                    Message
                  </label>

                  <textarea
                    rows="6"
                    placeholder="Write your message..."
                    className="w-full rounded-2xl border border-[#D4AF37]/10 bg-[#0D0D0D] px-5 py-5 text-lg text-white outline-none transition duration-300 placeholder:text-zinc-500 focus:border-[#D4AF37]/40"
                  />
                </div>

                {/* BUTTON */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="group flex h-16 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#D4AF37] to-[#F5D06F] text-lg font-bold text-black shadow-[0_0_45px_rgba(212,175,55,0.35)] transition duration-300 hover:shadow-[0_0_70px_rgba(212,175,55,0.55)]"
                >
                  Send Message

                  <Send
                    size={20}
                    className="transition duration-300 group-hover:translate-x-1"
                  />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}