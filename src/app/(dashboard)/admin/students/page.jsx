"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import {
  Search,
  Users,
} from "lucide-react";

export default function StudentsPage() {
  const [students, setStudents] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");
 const fetchStudents = async () => {
    const { data, error } =
  await supabase
    .from("registrations")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

    if (error) {
  console.log(error);
} else {
  setStudents(data);
  console.log(data);
}

    setLoading(false);
  };
  useEffect(() => {
    fetchStudents();
  }, []);

 

  const filteredStudents =
    students.filter((student) =>
      student.full_name
        ?.toLowerCase()
        .includes(search.toLowerCase())
    );
    console.log(filteredStudents);

  return (
  <div className="space-y-8">
    {/* TOP */}
    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <h1 className="text-3xl font-black sm:text-4xl lg:text-5xl">
          Students
        </h1>

        <p className="mt-2 text-sm text-zinc-400 sm:text-base">
          Manage webinar registrations
          and student leads.
        </p>
      </div>

      {/* SEARCH */}
      <div className="relative w-full lg:w-96">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />

        <input
          type="text"
          placeholder="Search students..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-12 pr-5 text-sm text-white outline-none sm:text-base"
        />
      </div>
    </div>

    {/* STATS */}
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:p-6">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 sm:h-14 sm:w-14">
            <Users className="text-cyan-400" />
          </div>

          <div>
            <p className="text-sm text-zinc-400 sm:text-base">
              Total Students
            </p>

            <h2 className="mt-1 text-3xl font-black sm:text-4xl">
              {students.length}
            </h2>
          </div>
        </div>
      </div>
    </div>

    {/* MOBILE CARDS */}
    <div className="space-y-4 lg:hidden">
      {loading ? (
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center text-zinc-400">
          Loading students...
        </div>
      ) : filteredStudents.length ===
        0 ? (
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center text-zinc-400">
          No students found
        </div>
      ) : (
        filteredStudents.map((student) => (
          <div
            key={student.id}
            className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold">
                  {student.full_name}
                </h3>

                <p className="mt-2 text-sm text-zinc-400">
                  {student.email}
                </p>

                <p className="mt-1 text-sm text-zinc-400">
                  {student.phone}
                </p>
              </div>

              <span className="rounded-full bg-cyan-400/10 px-3 py-2 text-xs text-cyan-300">
                {student.workshop}
              </span>
            </div>

            <div className="mt-5 border-t border-white/10 pt-4 text-sm text-zinc-500">
              Registered:
              {" "}
              {new Date(
                student.created_at
              ).toLocaleDateString()}
            </div>
          </div>
        ))
      )}
    </div>

    {/* DESKTOP TABLE */}
    <div className="hidden overflow-hidden rounded-3xl border border-white/10 bg-white/5 lg:block">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px]">
          <thead className="border-b border-white/10 bg-white/5">
            <tr>
              <th className="px-6 py-5 text-left text-sm font-semibold text-zinc-400">
                Name
              </th>

              <th className="px-6 py-5 text-left text-sm font-semibold text-zinc-400">
                Phone
              </th>

              <th className="px-6 py-5 text-left text-sm font-semibold text-zinc-400">
                Email
              </th>

              <th className="px-6 py-5 text-left text-sm font-semibold text-zinc-400">
                Workshop
              </th>

              <th className="px-6 py-5 text-left text-sm font-semibold text-zinc-400">
                Registered At
              </th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td
                  colSpan="5"
                  className="px-6 py-10 text-center text-zinc-400"
                >
                  Loading students...
                </td>
              </tr>
            ) : filteredStudents.length ===
              0 ? (
              <tr>
                <td
                  colSpan="5"
                  className="px-6 py-10 text-center text-zinc-400"
                >
                  No students found
                </td>
              </tr>
            ) : (
              filteredStudents.map(
                (student) => (
                  <tr
                    key={student.id}
                    className="border-b border-white/5"
                  >
                    <td className="px-6 py-5 font-medium">
                      {student.full_name}
                    </td>

                    <td className="px-6 py-5 text-zinc-300">
                      {student.phone}
                    </td>

                    <td className="px-6 py-5 text-zinc-300">
                      {student.email}
                    </td>

                    <td className="px-6 py-5">
                      <span className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                        {student.workshop}
                      </span>
                    </td>

                    <td className="px-6 py-5 text-zinc-400">
                      {new Date(
                        student.created_at
                      ).toLocaleDateString()}
                    </td>
                  </tr>
                )
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);
}