"use client";

import React, { useState } from "react";
import {
    AnimatePresence,
    motion,
} from "framer-motion";
import { X } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function RegisterModal({
    open,
    setOpen,
    workshop,
}) {
    const [message, setMessage] =
  useState(null);

const [messageType, setMessageType] =
  useState("");
    const [loading, setLoading] =
        useState(false);

    const [formData, setFormData] =
        useState({
            full_name: "",
            email: "",
            phone: "",
            profession: "",
        });

    // HANDLE INPUT CHANGE
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // HANDLE SUBMIT
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            setMessage(null);

            const { error } = await supabase
                .from("registrations")
                .insert([
                    {
                        ...formData,
                        workshop:
                            workshop?.title ||
                            "Facebook Ads Workshop",
                    },
                ]);

            // DUPLICATE ERROR
            if (error) {
                if (error.code === "23505") {
                    setMessageType("error");

                    setMessage(
                        "You already registered for this workshop."
                    );

                    return;
                }

                throw error;
            }

            // SUCCESS
            setMessageType("success");

            setMessage(
                "Registration successful! Check your WhatsApp soon."
            );

            // RESET FORM
            setFormData({
                full_name: "",
                email: "",
                phone: "",
                profession: "",
            });

            // AUTO CLOSE
            setTimeout(() => {
                setOpen(false);

                setMessage(null);
            }, 2000);
        } catch (error) {
            console.error(error);

            setMessageType("error");

            setMessage(
                "Something went wrong. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 px-4 py-10 backdrop-blur-sm"
                >
                    {/* MODAL */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.92,
                            y: 30,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.92,
                            y: 30,
                        }}
                        transition={{ duration: 0.25 }}
                        className="relative w-full max-w-xl rounded-[28px] bg-white p-5 shadow-[0_20px_80px_rgba(0,0,0,0.5)] md:p-6"
                    >
                        {/* CLOSE */}
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute right-5 top-5 text-black transition duration-300 hover:scale-110"
                        >
                            <X size={28} />
                        </button>

                        {/* HEADER */}
                        <div className="text-center">
                            <h2 className="text-2xl font-black text-black md:text-5xl">
                                Register Now
                            </h2>
                        </div>
                        {message && (
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: -10,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                className={`mt-6 rounded-2xl px-5 py-4 text-center text-sm font-semibold ${messageType === "success"
                                        ? "bg-green-100 text-green-700"
                                        : "bg-red-100 text-red-700"
                                    }`}
                            >
                                {message}
                            </motion.div>
                        )}
                        {/* FORM */}
                        <form
                            onSubmit={handleSubmit}
                            className="mt-8 flex flex-col gap-4"
                        >
                            {/* NAME */}
                            <input
                                required
                                type="text"
                                name="full_name"
                                value={formData.full_name}
                                onChange={handleChange}
                                placeholder="Full Name"
                                className="h-12 rounded-2xl border border-zinc-300 px-5 text-xl font-semibold text-black outline-none transition duration-300 placeholder:text-zinc-500 focus:border-black"
                            />

                            {/* EMAIL */}
                            <input
                                required
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                className="h-12 rounded-2xl border border-zinc-300 px-5 text-xl font-semibold text-black outline-none transition duration-300 placeholder:text-zinc-500 focus:border-black"
                            />

                            {/* PHONE */}
                            <input
                                required
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Mobile No. (Don't add 0 or +91)"
                                className="h-12 rounded-2xl border border-zinc-300 px-5 text-xl font-semibold text-black outline-none transition duration-300 placeholder:text-zinc-500 focus:border-black"
                            />

                            {/* PROFESSION */}
                            <input
                                required
                                type="text"
                                name="profession"
                                value={formData.profession}
                                onChange={handleChange}
                                placeholder="Profession"
                                className="h-12 rounded-2xl border-2 border-zinc-300 px-5 text-xl font-semibold text-black outline-none transition duration-300 placeholder:text-zinc-500"
                            />

                            {/* BUTTON */}
                            <button
                                disabled={loading}
                                type="submit"
                                className="mt-2 h-16 rounded-2xl bg-[#FF3B3B] text-2xl font-black text-white shadow-[0_10px_40px_rgba(255,59,59,0.35)] transition duration-300 hover:scale-[1.01] hover:bg-[#ff2b2b] disabled:opacity-70"
                            >
                                {loading
                                    ? "Submitting..."
                                    : "Register Now"}
                            </button>
                        </form>

                        {/* FOOTER */}
                        <div className="mt-6 text-center">
                            <p className="text-lg font-semibold text-zinc-700">
                                🔒 We respect your privacy. No spam.
                            </p>

                            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-zinc-700">
                                🎁 Bonus: Free Lifetime Access –
                                900+ Social Media Templates to post
                                on Facebook & Instagram for Next 3
                                years.
                            </p>

                            <p className="mt-2 text-xl font-black text-zinc-800">
                                ✅ 27,500+ professionals already
                                attended
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}