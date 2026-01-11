"use client";

import { useState, useEffect } from "react";
import dayjs from "dayjs";

interface Dates {
  created: string; // Expecting ISO string format for dates
  updated?: string; // Optional updated date, also in ISO string format
}

export default function CreatedAt({ created, updated }: Dates) {
  const [dateString, setDateString] = useState("");

  useEffect(() => {
    // Format date after the component has mounted on the client
    const formattedDate = updated
      ? dayjs(updated).format("MMM D YYYY")
      : dayjs(created).format("MMM D YYYY");

    setDateString(formattedDate);
  }, [created, updated]);

  return (
    <p className="text-sm text-muted-foreground">
      {updated ? `Updated at: ${dateString}` : `Posted on: ${dateString}`}
    </p>
  );
}
