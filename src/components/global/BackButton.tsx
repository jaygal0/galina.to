"use client"; // Ensure this is a client component

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="text-md font-sans font-thin no-underline hover:underline"
    >
      &#60; Back
    </button>
  );
}
