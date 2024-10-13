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
      ? moment(new Date(updated)).format("MMMM Do YYYY, h:mm A")
      : moment(new Date(created)).format("MMMM Do YYYY, h:mm A");

    setDateString(formattedDate);
  }, [created, updated]);

  return (
    <p className="my-4 text-gray-500">
      {updated ? `Updated at: ${dateString}` : `Created at: ${dateString}`}
    </p>
  );
}
