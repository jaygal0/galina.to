// app/not-found.tsx
import React from "react";

const NotFound = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
    </div>
  );
};

export default NotFound;
