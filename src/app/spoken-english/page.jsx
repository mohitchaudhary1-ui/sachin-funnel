"use client";
import React from "react";
import RegisterModal from "@/components/RegisterModal";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Star,
  Globe,
  CalendarDays,
} from "lucide-react";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabase";

const benefits = [
  "Improve spoken English confidence",
  "Daily speaking practice sessions",
  "Grammar & vocabulary improvement",
  "Pronunciation & fluency training",
  "Public speaking confidence",
  "Real-life conversation practice",
];

const audience = [
  "School Students",
  "College Students",
  "Job Seekers",
  "Beginners",
  "Housewives",
  "Working Professionals",
  "Competitive Exam Students",
  "Anyone Wanting Better English",
];

const modules = [
  "Basic Spoken English",
  "Grammar & Sentence Formation",
  "Vocabulary Building",
  "Daily Conversation Practice",
  "Pronunciation & Fluency",
  "Interview & Public Speaking Skills",
];

const getNextWorkshopDate = () => {
  const now = new Date();

  // first webinar date
  const workshopDate = new Date();

  // set webinar time
  workshopDate.setHours(11, 0, 0, 0);

  // if today's webinar already started/passed
  // move to next webinar after 2 days
  if (now >= workshopDate) {
    workshopDate.setDate(workshopDate.getDate() + 2);
  } else {
    // webinar still upcoming today
    // keep today's webinar
  }

  return workshopDate;
};



const testimonials = [
  {
    name: "Aman Sharma",
    image: "https://i.pravatar.cc/100?img=11",
    review:
      "Earlier I was very nervous while speaking English. After joining these classes, my confidence improved a lot and now I can speak comfortably in interviews.",
  },
  {
    name: "Priya Verma",
    image: "https://i.pravatar.cc/100?img=32",
    review:
      "Grammar explanations are very simple and easy to understand. Daily speaking practice helped me improve my fluency quickly.",
  },
  {
    name: "Rahul Kumar",
    image: "https://i.pravatar.cc/100?img=15",
    review:
      "I liked the practical teaching style. The trainer focuses on communication instead of only theory which made learning easier for me.",
  },
  {
    name: "Sneha Gupta",
    image: "https://i.pravatar.cc/100?img=45",
    review:
      "The classes helped me remove hesitation while speaking English. Now I can communicate better in college presentations and conversations.",
  },
  {
    name: "Arjun Singh",
    image: "https://i.pravatar.cc/100?img=18",
    review:
      "Very beginner friendly classes. Vocabulary practice and speaking sessions improved my confidence within a few weeks.",
  },
  {
    name: "Neha Joshi",
    image: "https://i.pravatar.cc/100?img=24",
    review:
      "I joined to improve spoken English for job interviews. The mock speaking sessions and daily exercises were extremely helpful.",
  },
];


export default function FacebookWorkshopPage() {
  const [openModal, setOpenModal] = React.useState(false);
  const [workshopData, setWorkshopData] =
  React.useState(null);

React.useEffect(() => {
  fetchWorkshop();
}, []);

const fetchWorkshop = async () => {
  const { data, error } =
    await supabase
      .from("webinars")
      .select("*")
      .eq(
        "webinar_type",
        "english"
      )
      .single();

  if (data) {
    setWorkshopData({
      title: data.title,
      date: new Date(
        data.webinar_date
      ),
      mode: "Online on Zoom",
      zoom_link: data.zoom_link,
    });
  }

  console.log(error);
};

if (!workshopData) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      Loading workshop...
    </div>
  );
}
  return (<>
    <main className="relative overflow-hidden bg-black text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-0 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/10 blur-3xl" />

        <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[#FFD700]/10 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:80px_80px]" />
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden bg-black pt-36 pb-24">
        {/* BACKGROUND */}
        <div className="absolute inset-0 -z-10">
          {/* GOLD GLOW */}
          <div className="absolute left-[-10%] top-0 h-[500px] w-[500px] rounded-full bg-yellow-500/10 blur-3xl" />

          <div className="absolute right-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-3xl" />

          {/* GRID */}
          <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:80px_80px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {/* TOP TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-6xl text-center"
          >
            {/* TITLE */}
            <h1 className="text-3xl font-black uppercase leading-[1.15] tracking-tight text-white md:text-5xl">
              Improve Your{" "}
              <span className="text-yellow-400">
                Spoken English
              </span>{" "}
              & Build
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent underline decoration-yellow-400 underline-offset-8">
                Confidence in Communication
              </span>
              <br />
              with Live Interactive
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent underline decoration-yellow-400 underline-offset-8">
                Spoken English Classes
              </span>
            </h1>

            {/* SUBTEXT */}
            <p className="mx-auto mt-8 max-w-4xl text-xl font-medium leading-relaxed text-zinc-300 md:text-2xl">
              Even If {`You're`} A Complete Beginner & Feel Hesitant Speaking English
            </p>
          </motion.div>

          {/* MAIN GRID */}
          <div className="mt-20 grid items-center gap-10 lg:grid-cols-[1.3fr_.9fr]">
            {/* LEFT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              {/* GLOW */}
              <div className="absolute inset-0 rounded-[40px] bg-yellow-500/10 blur-3xl" />

              {/* CARD */}
              <div className="relative overflow-hidden rounded-[36px] border border-yellow-500/10 bg-gradient-to-b from-[#111111] to-[#080808] p-4 shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop"
                  alt="workshop"
                  className="h-full w-full rounded-[28px] object-cover"
                />
              </div>
            </motion.div>

            {/* RIGHT PANEL */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              {/* DATE CARD */}
              <div className="rounded-[32px] border border-yellow-500/10 bg-gradient-to-b from-[#111111] to-[#080808] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                <div className="flex items-center gap-5">
                  {/* DATE BOX */}
                  <div className="overflow-hidden rounded-2xl border border-blue-500/20">
                    <div className="bg-blue-600 px-5 py-2 text-center text-sm font-bold uppercase tracking-wide text-white">
                      {workshopData.date.toLocaleString("default", { month: "short" })}
                    </div>

                    <div className="bg-white px-5 py-1 text-center text-2xl font-black text-black">
                      {workshopData.date.getDate()}
                    </div>
                  </div>

                  {/* DATE CONTENT */}
                  <div>
                    <h3 className="text-medium font-black text-white">
                      {workshopData.date.getDate()} {workshopData.date.toLocaleString("default", { month: "long" })} {workshopData.date.getFullYear()} ({workshopData.date.toLocaleString("default", { weekday: "long" })})
                    </h3>

                    <p className="mt-2 text-sm text-zinc-400">
                      {workshopData.date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })} IST
                    </p>
                  </div>
                </div>
              </div>

              {/* INFO GRID */}
              <div className="grid grid-cols-2 gap-5">
                {/* MODE */}
                <div className="rounded-[28px] border border-yellow-500/10 bg-gradient-to-b from-[#111111] to-[#080808] p-6">
                  <div className="flex items-center gap-3">
                    <CalendarDays
                      size={22}
                      className="text-yellow-400"
                    />

                    <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
                      Mode
                    </p>
                  </div>

                  <h3 className="mt-4 text-xl font-black text-white">
                    Live Online Classes
                  </h3>
                </div>

                {/* LANGUAGE */}
                <div className="rounded-[28px] border border-yellow-500/10 bg-gradient-to-b from-[#111111] to-[#080808] p-6">
                  <div className="flex items-center gap-3">
                    <Globe
                      size={22}
                      className="text-yellow-400"
                    />

                    <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
                      Language
                    </p>
                  </div>

                  <h3 className="mt-4 text-xl font-black text-white">
                    Hindi + English Support
                  </h3>
                </div>
              </div>

              {/* CTA */}
              <button onClick={() => setOpenModal(true)} className="w-full rounded-[28px] bg-gradient-to-b from-red-500 to-red-700 px-8 py-7 text-center shadow-[0_20px_60px_rgba(239,68,68,0.35)] transition duration-300 hover:scale-[1.02]">
                <h3 className="text-3xl font-black leading-tight text-white">
                  Join FREE Spoken English Workshop!
                </h3>

                <p className="mt-3 text-lg font-semibold text-red-100">
                  (Limited Seats Available — Register Now!)
                </p>
              </button>

              {/* BONUS */}
              <div className="text-center">
                <p className="text-2xl font-bold leading-relaxed text-white">
                  Register now to get{" "}
                  <span className="text-yellow-400">
                    FREE Speaking Practice Material
                  </span>{" "}
                  & Daily English Exercises
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STUDENT RESULTS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-5xl font-black">
              Student{" "}
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFE8A3] bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>

            <p className="mt-6 text-xl text-zinc-400">
              Students improving spoken English confidence,
              communication skills & fluency through practical learning.
            </p>
          </div>

          {/* TESTIMONIAL GRID */}
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="rounded-[30px] border border-[#D4AF37]/10 bg-gradient-to-b from-[#111111] to-[#080808] p-6"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-14 w-14 rounded-full"
                  />

                  <div>
                    <h3 className="font-bold">
                      {item.name}
                    </h3>

                    <div className="mt-1 flex gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-[#D4AF37] text-[#D4AF37]"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="mt-5 leading-relaxed text-zinc-400">
                  {item.review}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IS THIS FOR */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="rounded-[40px] border border-[#D4AF37]/10 bg-gradient-to-b from-[#111111] to-[#080808] p-10">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-5xl font-black">
                Who is this workshop for?
              </h2>

              <p className="mt-6 text-xl text-zinc-400">
                Perfect for anyone wanting to improve spoken English and communication skills.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {audience.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-[#D4AF37]/10 bg-[#D4AF37]/5 px-5 py-4"
                >
                  <BadgeCheck
                    size={18}
                    className="text-[#D4AF37]"
                  />

                  <p className="font-medium text-zinc-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-5xl font-black">
              What You’ll Learn
            </h2>

            <p className="mt-6 text-xl text-zinc-400">
              Step-by-step practical spoken English training.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {modules.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="rounded-[30px] border border-[#D4AF37]/10 bg-gradient-to-b from-[#111111] to-[#080808] p-8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/10">
                  <span className="text-xl font-black text-[#D4AF37]">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-6 text-3xl font-black">
                  {item}
                </h3>

                <p className="mt-5 text-lg leading-relaxed text-zinc-400">
                  Learn through live speaking practice, grammar exercises, confidence-building activities and daily communication training.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="pb-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-[40px] border border-[#D4AF37]/10 bg-gradient-to-r from-[#111111] via-[#101010] to-[#080808] p-12 text-center shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.14),transparent_60%)]" />

            <div className="relative z-10">
              <h2 className="text-5xl font-black leading-tight">
                Ready to Speak {" "}
                <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFE8A3] bg-clip-text text-transparent">
                  English Confidently?
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-zinc-400">
                Join the FREE live workshop and improve your spoken English with practical speaking sessions and expert guidance.
              </p>

              <button onClick={() => setOpenModal(true)} className="mt-10 rounded-2xl bg-gradient-to-r from-[#D4AF37] to-[#F5D06F] px-10 py-5 text-lg font-bold text-black shadow-[0_0_45px_rgba(212,175,55,0.35)] transition duration-300 hover:shadow-[0_0_70px_rgba(212,175,55,0.55)]">
                Join FREE Workshop
              </button>
            </div>
          </div>
        </div>
      </section>
      <RegisterModal
        open={openModal}
        setOpen={setOpenModal}
        workshop={workshopData}
      />
    </main>
    <Footer />
  </>
  );
}

