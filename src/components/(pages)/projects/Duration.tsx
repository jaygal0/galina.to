"use client";

import { useState, useEffect } from "react";
import moment from "moment";

interface Dates {
  startDate: string; // Expecting ISO string format for dates
  endDate?: string; // Optional updated date, also in ISO string format
}

export default function Duration({ startDate, endDate }: Dates) {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [duration, setDuration] = useState("");

  useEffect(() => {
    const start = moment(new Date(startDate));
    const end = endDate ? moment(new Date(endDate)) : moment(); // Default to current date if no endDate provided

    // Format startTime and set "Present" if no endDate
    setStartTime(start.format("MMM YYYY"));
    setEndTime(endDate ? end.format("MMM YYYY") : "Present");

    // Calculate the difference in years, months, and weeks
    const years = end.diff(start, "years");
    start.add(years, "years");

    const months = end.diff(start, "months");
    start.add(months, "months");

    const weeks = end.diff(start, "weeks");

    // Format the duration with singular/plural handling
    const formattedDuration = `${years ? years + (years === 1 ? " year, " : " years, ") : ""}${
      months ? months + (months === 1 ? " month, " : " months, ") : ""
    }${weeks ? weeks + (weeks === 1 ? " week" : " weeks") : ""}`;

    // Remove trailing comma and space if needed
    setDuration(formattedDuration.trim().replace(/,\s*$/, ""));
  }, [startDate, endDate]);

  return (
    <div className="inline-block whitespace-nowrap rounded-md border px-2 py-1 font-sans text-sm text-gray-500">
      {startTime} - {endTime} {duration && `(${duration})`}
    </div>
  );
}
