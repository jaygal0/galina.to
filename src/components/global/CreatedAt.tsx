"use client";

import { useState, useEffect } from "react";
import moment from "moment";

interface Dates {
  created: string; // Expecting ISO string format for dates
  updated?: string; // Optional updated date, also in ISO string format
}

export default function CreatedAt({ created, updated }: Dates) {
  const [dateString, setDateString] = useState("");

  useEffect(() => {
    // Format date after the component has mounted on the client
    const formattedDate = updated
      ? moment(new Date(updated)).format("MMM Do YYYY")
      : moment(new Date(created)).format("MMM Do YYYY");

    setDateString(formattedDate);
  }, [created, updated]);

  return (
    <p className="my-0 text-sm text-gray-500 md:text-base">
      {updated ? `Updated at: ${dateString}` : `Posted on: ${dateString}`}
    </p>
  );
}
