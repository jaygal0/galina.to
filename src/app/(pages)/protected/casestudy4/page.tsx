"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/check-auth");
        if (res.ok) {
          setIsAuthenticated(true);
        } else {
          router.replace("/login?redirect=/dashboard"); // Redirect if not authenticated
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        router.replace("/login?redirect=/dashboard"); // Fallback redirect
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  if (isLoading) return <p>Loading...</p>;
  if (!isAuthenticated) return null; // Prevents flicker before redirect

  return (
    <div>
      <h1>Case study 4</h1>
    </div>
  );
}
