"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function CreateWebinarPage() {
  const router = useRouter();

  const [title, setTitle] =
    useState("");

  const [slug, setSlug] =
    useState("");

  const [type, setType] =
    useState("english");

  const [zoomLink, setZoomLink] =
    useState("");

  const [date, setDate] =
    useState("");

  const handleCreate = async (e) => {
    e.preventDefault();

    const { error } =
      await supabase
        .from("webinars")
        .insert([
          {
            title,
            slug,
            webinar_type: type,
            zoom_link: zoomLink,
            webinar_date: date,
          },
        ]);

    if (error) {
      alert(error.message);
      return;
    }

    router.push("/admin/webinars");
  };

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="text-5xl font-black">
        Create Webinar
      </h1>

      <form
        onSubmit={handleCreate}
        className="mt-10 space-y-6"
      >
        <input
  type="text"
  placeholder="Webinar Title"
  value={title}
  onChange={(e) => {
    const value = e.target.value;

    setTitle(value);

    // auto generate slug
    setSlug(
      value
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
    );
  }}
  className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
/>

        <input
          type="text"
          placeholder="Slug"
          value={slug}
          onChange={(e) =>
            setSlug(e.target.value)
          }
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
        />

        <select
  value={type}
  onChange={(e) =>
    setType(e.target.value)
  }
  className="w-full rounded-2xl border border-white/10 bg-[#0B1120] px-5 py-4 text-white outline-none"
>
  <option
    value="english"
    className="bg-[#0B1120] text-white"
  >
    English Webinar
  </option>

  <option
    value="maths"
    className="bg-[#0B1120] text-white"
  >
    Maths Webinar
  </option>
</select>

        <input
          type="text"
          placeholder="Zoom Link"
          value={zoomLink}
          onChange={(e) =>
            setZoomLink(e.target.value)
          }
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
        />

        <input
          type="datetime-local"
          value={date}
          onChange={(e) =>
            setDate(e.target.value)
          }
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
        />

        <button className="rounded-2xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-8 py-4 font-bold text-black">
          Create Webinar
        </button>
      </form>
    </div>
  );
}