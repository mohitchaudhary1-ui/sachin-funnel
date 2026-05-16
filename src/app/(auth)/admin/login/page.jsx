"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AdminLogin() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] =
        useState("");
    const [loading, setLoading] =
        useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();

        setLoading(true);

        const { data, error } =
            await supabase.auth.signInWithPassword({
                email,
                password,
            });

        setLoading(false);

        if (error) {
            alert(error.message);
            return;
        }

        // create auth cookie
        document.cookie =
            "admin-auth=true; path=/; max-age=86400";

        router.push("/admin/dashboard");
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-[#050816] p-6">
            <form
                onSubmit={handleLogin}
                className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
                <h1 className="text-4xl font-black text-white">
                    Admin Login
                </h1>

                <div className="mt-8 space-y-5">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                        className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                        className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none"
                    />
                </div>

                <button
                    type="submit"
                    className="mt-8 w-full rounded-2xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-6 py-4 text-lg font-bold text-black"
                >
                    Login
                </button>
            </form>
        </div>
    );
}