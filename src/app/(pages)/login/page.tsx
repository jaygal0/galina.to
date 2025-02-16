"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import FadeInComponent from "@/components/global/FadeIn";
import HeroText from "@/components/global/HeroText";
import BackButton from "@/components/global/BackButton";

export default function Page() {
  const [password, setPassword] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get the intended redirect URL or default to "/dashboard"
  const redirectTo = searchParams.get("redirect") || "/";

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.replace(redirectTo); // Ensure redirection after login
    } else {
      alert("Incorrect password");
    }
  };

  return (
    <FadeInComponent>
      <HeroText
        heading="Protected Content"
        desc="The content you are trying to view requires a password in order to gain access."
        isBackButton
      />
      <div className="w-full px-6 pb-8 font-sans md:px-40">
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="rounded-md p-2"
          />
          <button type="submit" className="rounded-md bg-black p-2 text-white">
            Submit
          </button>
        </form>
      </div>
    </FadeInComponent>
  );
}
