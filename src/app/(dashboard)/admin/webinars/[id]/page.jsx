"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useParams } from "next/navigation";
export default function EditWebinarPage({
  
}) {
  const router = useRouter();
  const params = useParams();

  const [loading, setLoading] =
    useState(true);

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

  const [active, setActive] =
    useState(true);

  useEffect(() => {
    fetchWebinar();
  }, []);

  const fetchWebinar = async () => {
    const { data, error } =
      await supabase
        .from("webinars")
        .select("*")
        .eq("id", params.id)
        .single();
    console.log("DATA:", data);
    console.log("ERROR:", error);

    if (data) {
      setTitle(data.title);
      setSlug(data.slug);
      setType(data.webinar_type);
      setZoomLink(data.zoom_link);

      setDate(
        data.webinar_date?.slice(0, 16)
      );

      setActive(data.is_active);
    }

    setLoading(false);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const { error } =
      await supabase
        .from("webinars")
        .update({
          title,
          slug,
          webinar_type: type,
          zoom_link: zoomLink,
          webinar_date: date,
          is_active: active,
        })
        .eq("id", params.id);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Webinar updated");

    router.push("/admin/webinars");
  };

  if (loading) {
    return (
      <div className="text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="text-5xl font-black">
        Edit Webinar
      </h1>

      <form
        onSubmit={handleUpdate}
        className="mt-10 space-y-6"
      >
        {/* TITLE */}
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => {
            const value =
              e.target.value;

            setTitle(value);

            setSlug(
              value
                .toLowerCase()
                .replace(
                  /[^a-z0-9\s-]/g,
                  ""
                )
                .replace(/\s+/g, "-")
            );
          }}
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
        />

        {/* SLUG */}
        <input
          type="text"
          placeholder="Slug"
          value={slug}
          onChange={(e) =>
            setSlug(e.target.value)
          }
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
        />

        {/* TYPE */}
        <select
          value={type}
          onChange={(e) =>
            setType(e.target.value)
          }
          className="w-full rounded-2xl border border-white/10 bg-[#0B1120] px-5 py-4 text-white"
        >
          <option
            value="english"
            className="bg-[#0B1120]"
          >
            English Webinar
          </option>

          <option
            value="maths"
            className="bg-[#0B1120]"
          >
            Maths Webinar
          </option>
        </select>

        {/* ZOOM */}
        <input
          type="text"
          placeholder="Zoom Link"
          value={zoomLink}
          onChange={(e) =>
            setZoomLink(e.target.value)
          }
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
        />

        {/* DATE */}
        <input
          type="datetime-local"
          value={date}
          onChange={(e) =>
            setDate(e.target.value)
          }
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
        />

        {/* ACTIVE */}
        <label className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
          <input
            type="checkbox"
            checked={active}
            onChange={(e) =>
              setActive(e.target.checked)
            }
          />

          <span>
            Active Webinar
          </span>
        </label>

        {/* BUTTON */}
        <button className="rounded-2xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-8 py-4 font-bold text-black">
          Update Webinar
        </button>
      </form>
    </div>
  );
}