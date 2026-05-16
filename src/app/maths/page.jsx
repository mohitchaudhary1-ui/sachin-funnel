"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Check,
  Plus,
  Star,
  Clock3,
} from "lucide-react";

import RegisterModal from "@/components/RegisterModal";
import { supabase } from "@/lib/supabase";

const faqs = [
  {
    q: "When will the webinar happen?",
    a: "The webinar happens live every alternate day at 11 AM IST.",
  },
  {
    q: "Is this beginner friendly?",
    a: "Yes. Concepts are explained from basics with easy methods.",
  },
  {
    q: "Will I get practice questions?",
    a: "Yes. You will receive worksheets and practice material.",
  },
  {
    q: "How do I join the class?",
    a: "You will receive the Zoom joining link on WhatsApp after registration.",
  },
];

const benefits = [
  "School Students",
  "Board Exam Students",
  "Competitive Exam Aspirants",
  "Beginners in Maths",
  "Students Weak in Calculations",
  "Foundation Classes",
  "Class 8th to 12th",
  "Anyone Wanting Better Maths Skills",
];

const learnings = [
  "Easy calculation tricks",
  "Step-by-step problem solving",
  "Algebra made simple",
  "Speed maths techniques",
  "Exam preparation strategies",
  "Concept clarity & practice methods",
];

export default function GoogleMyBusinessPage() {
  const [open, setOpen] = useState(false);
  const [webinar, setWebinar] =
    useState(null);


  useEffect(() => {
    fetchWebinar();
  }, []);

  const fetchWebinar = async () => {
    const { data, error } =
      await supabase
        .from("webinars")
        .select("*")
        .eq(
          "slug",
          "math"
        )
        .single();

    console.log(data);
    console.log(error);

    if (data) {
      setWebinar(data);
    }
  };

  if (!webinar) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#050816] text-white">
        Loading webinar...
      </div>
    );
  }

  return (
    <>
      <RegisterModal
        open={open}
        setOpen={setOpen}
        workshop={{
          title: webinar.title,
          date: webinar.webinar_date,
          zoom_link: webinar.zoom_link,
        }}
      />

      <main className="bg-[#050816] text-white">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-white/10 pt-36">
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(45,212,191,0.15),transparent_40%)]" />
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10">
            {/* LEFT */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300">
                <Star size={16} />
                FREE Maths Mastery Webinar
              </div>

              <h1 className="text-4xl font-black leading-tight md:text-6xl">
                Master{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  Mathematics
                </span>{" "}
                with Easy Tricks & Concept Clarity
              </h1>

              <p className="mt-8 text-lg leading-relaxed text-zinc-300">
                Learn maths concepts with simple explanations,
                calculation shortcuts, problem-solving methods
                and practical exam strategies.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <button
                  onClick={() => setOpen(true)}

                  className="rounded-2xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-8 py-4 text-lg font-bold text-black shadow-[0_0_40px_rgba(45,212,191,0.35)] transition duration-300 hover:scale-[1.02]"
                >
                  Join FREE Webinar
                </button>

                <button className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-lg font-semibold text-white backdrop-blur-xl">
                  View Syllabus
                </button>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-2">
                {benefits.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400/20">
                      <Check
                        size={18}
                        className="text-emerald-400"
                      />
                    </div>

                    <p className="font-medium text-zinc-200">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative">
              <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <Image
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
                  alt="Math Webinar"
                  width={700}
                  height={700}
                  className="rounded-[24px]"
                />

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-zinc-400">
                      Next Live Class
                    </p>

                    <h3 className="mt-2 text-xl font-bold">
                      {new Date(webinar.webinar_date).toLocaleString("en-US", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      })}
                    </h3>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-zinc-400">
                      Mode
                    </p>

                    <h3 className="mt-2 text-xl font-bold">
                      Online on Zoom
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LEARN */}
        <section className="border-b border-white/10 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-4xl font-black">
                What You Will Learn
              </h2>

              <p className="mt-6 text-lg text-zinc-400">
                Learn maths concepts with easy tricks,
                better calculation speed and practical
                problem-solving methods.
              </p>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {learnings.map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-400/20 to-emerald-400/20">
                    <Check className="text-cyan-400" />
                  </div>

                  <h3 className="text-xl font-bold leading-relaxed">
                    {item}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-b border-white/10 py-24">
          <div className="mx-auto max-w-5xl px-6 lg:px-10">
            <div className="rounded-[40px] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 p-10 text-center backdrop-blur-xl">
              <Clock3 className="mx-auto text-cyan-400" />

              <h2 className="mt-6 text-4xl font-black">
                Reserve Your FREE Maths Webinar Seat
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-300">
                Limited seats available for live maths
                learning, doubt-solving sessions and
                interactive practice classes.
              </p>

              <button
                onClick={() => setOpen(true)}
                className="mt-10 rounded-2xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-10 py-5 text-xl font-black text-black shadow-[0_0_50px_rgba(45,212,191,0.35)] transition duration-300 hover:scale-[1.02]"
              >
                Join FREE Webinar
              </button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24">
          <div className="mx-auto max-w-5xl px-6 lg:px-10">
            <div className="text-center">
              <h2 className="text-4xl font-black">
                Maths Webinar FAQs
              </h2>
            </div>

            <div className="mt-14 space-y-5">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold">
                      {faq.q}
                    </h3>

                    <Plus />
                  </div>

                  <p className="mt-5 text-zinc-400">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}