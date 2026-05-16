"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function WebinarsPage() {
    const [webinars, setWebinars] =
        useState([]);
    const fetchWebinars = async () => {
        const { data, error } =
            await supabase
                .from("webinars")
                .select("*");

        console.log("DATA:", data);
        console.log("ERROR:", error);

        if (data) {
            setWebinars(data);
        }
    };
    useEffect(() => {
        fetchWebinars();
    }, []);



    return (
        <div>
            {/* TOP */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-5xl font-black">
                        Webinars
                    </h1>

                    <p className="mt-3 text-zinc-400">
                        Manage webinar links, dates
                        and registrations.
                    </p>
                </div>

                <Link
                    href="/admin/webinars/create"
                    className="rounded-2xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-6 py-4 font-bold text-black"
                >
                    Create Webinar
                </Link>
            </div>

            {/* TABLE */}
            <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                <table className="w-full">
                    <thead className="border-b border-white/10">
                        <tr>
                            <th className="px-6 py-5 text-left text-zinc-400">
                                Title
                            </th>

                            <th className="px-6 py-5 text-left text-zinc-400">
                                Type
                            </th>

                            <th className="px-6 py-5 text-left text-zinc-400">
                                Date
                            </th>

                            <th className="px-6 py-5 text-left text-zinc-400">
                                Status
                            </th>
                            <th className="px-6 py-5 text-left text-zinc-400">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {webinars.map((webinar) => (
                            <tr
                                key={webinar.id}
                                className="border-b border-white/5"
                            >
                                <td className="px-6 py-5 font-medium">
                                    {webinar.title}
                                </td>

                                <td className="px-6 py-5 text-zinc-300">
                                    {webinar.webinar_type}
                                </td>

                                <td className="px-6 py-5 text-zinc-300">
                                    {new Date(
                                        webinar.webinar_date
                                    ).toLocaleString()}
                                </td>

                                <td className="px-6 py-5">
                                    {webinar.is_active ? (
                                        <span className="rounded-full bg-emerald-400/10 px-4 py-2 text-sm text-emerald-400">
                                            Active
                                        </span>
                                    ) : (
                                        <span className="rounded-full bg-red-400/10 px-4 py-2 text-sm text-red-400">
                                            Inactive
                                        </span>
                                    )}
                                </td>
                                <td className="px-6 py-5">
                                    <Link
                                        href={`/admin/webinars/${webinar.id}`}
                                        className="rounded-xl bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-400"
                                    >
                                        Edit
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}