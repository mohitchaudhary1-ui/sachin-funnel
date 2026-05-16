"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function DashboardPage() {
  const [studentsCount, setStudentsCount] =
    useState(0);

  const [webinarsCount, setWebinarsCount] =
    useState(0);

  const [upcomingWebinar, setUpcomingWebinar] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // STUDENTS COUNT
      const {
        count: studentsTotal,
      } = await supabase
        .from("registrations")
        .select("*", {
          count: "exact",
          head: true,
        });

      // WEBINARS COUNT
      const {
        count: webinarsTotal,
      } = await supabase
        .from("webinars")
        .select("*", {
          count: "exact",
          head: true,
        });

      // UPCOMING WEBINAR
      const { data: webinarData } =
        await supabase
          .from("webinars")
          .select("*")
          .eq("is_active", true)
          .order("webinar_date", {
            ascending: true,
          })
          .limit(1)
          .single();

      setStudentsCount(
        studentsTotal || 0
      );

      setWebinarsCount(
        webinarsTotal || 0
      );

      setUpcomingWebinar(
        webinarData
      );
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
  <div className="space-y-8">
    {/* TOP */}
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-black sm:text-4xl lg:text-5xl">
          Dashboard
        </h1>

        <p className="mt-2 text-sm text-zinc-400 sm:text-base">
          Overview of students,
          webinars and registrations.
        </p>
      </div>
    </div>

    {/* STATS */}
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {/* STUDENTS */}
      <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:p-6">
        <p className="text-sm text-zinc-400 sm:text-base">
          Total Students
        </p>

        <h2 className="mt-4 text-4xl font-black sm:text-5xl">
          {loading
            ? "..."
            : studentsCount}
        </h2>
      </div>

      {/* WEBINARS */}
      <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:p-6">
        <p className="text-sm text-zinc-400 sm:text-base">
          Total Webinars
        </p>

        <h2 className="mt-4 text-4xl font-black sm:text-5xl">
          {loading
            ? "..."
            : webinarsCount}
        </h2>
      </div>

      {/* UPCOMING */}
      <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:p-6 sm:col-span-2 xl:col-span-1">
        <p className="text-sm text-zinc-400 sm:text-base">
          Upcoming Webinar
        </p>

        {upcomingWebinar ? (
          <>
            <h2 className="mt-4 text-xl font-black leading-snug sm:text-2xl">
              {
                upcomingWebinar.title
              }
            </h2>

            <p className="mt-3 text-sm text-zinc-300 sm:text-base">
              {new Date(
                upcomingWebinar.webinar_date
              ).toLocaleString()}
            </p>
          </>
        ) : (
          <h2 className="mt-4 text-xl font-black sm:text-2xl">
            No Webinar
          </h2>
        )}
      </div>
    </div>

    {/* SYSTEM STATUS */}
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:p-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-black sm:text-3xl">
            Webinar System Status
          </h2>

          <p className="mt-2 text-sm text-zinc-400 sm:text-base">
            Current webinar platform
            operational status.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {/* ACTIVE */}
        <div className="rounded-2xl border border-emerald-400/10 bg-emerald-400/5 p-5 sm:p-6">
          <p className="text-sm text-zinc-400 sm:text-base">
            Active Webinar
          </p>

          <h3 className="mt-3 text-xl font-bold text-emerald-400 sm:text-2xl">
            {upcomingWebinar
              ? "Running"
              : "Not Active"}
          </h3>
        </div>

        {/* REGISTRATION */}
        <div className="rounded-2xl border border-cyan-400/10 bg-cyan-400/5 p-5 sm:p-6">
          <p className="text-sm text-zinc-400 sm:text-base">
            Registration System
          </p>

          <h3 className="mt-3 text-xl font-bold text-cyan-400 sm:text-2xl">
            Operational
          </h3>
        </div>
      </div>
    </div>
  </div>
);
}