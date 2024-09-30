"use client";

import { useEffect, useState, ReactNode } from "react";
import { usePathname } from "next/navigation";

interface FadeInComponentProps {
  children: ReactNode;
}

const FadeInComponent: React.FC<FadeInComponentProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsVisible(false); // Reset to hidden on path change
    const timer = setTimeout(() => {
      setIsVisible(true); // Fade in after a short delay
    }, 100);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [pathname]); // Run effect on pathname change

  return (
    <div
      className={`transition-all duration-1000 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

export default FadeInComponent;
