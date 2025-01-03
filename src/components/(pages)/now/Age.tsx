"use client";

import React, { useState, useEffect } from "react";
import moment from "moment";
import Number from "./Number";
import Time from "./Time";

export default function Age() {
  let a = moment(new Date());
  let b = new Date(1989, 6, 30, 15, 15, 0, 0);

  var diffDuration = moment.duration(a.diff(b));

  const [years, setYears] = useState<number>(0);
  const [months, setMonths] = useState<number>(0);
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const countdown = setInterval(() => {
      setYears(diffDuration.years());
      setMonths(diffDuration.months());
      setDays(diffDuration.days());
      setHours(diffDuration.hours());
      setMinutes(diffDuration.minutes());
      setSeconds(diffDuration.seconds());
    }, 1000);
    return () => clearInterval(countdown);
  });

  function addLeadingZeros(num: number, totalLength: number) {
    return String(num).padStart(totalLength, "0");
  }

  return (
    <div className="flex w-full justify-between font-mono">
      <div>
        <Number interval={addLeadingZeros(years, 2)} />
        <Time time="years" />
      </div>
      <div>
        <Number interval={addLeadingZeros(months, 2)} />
        <Time time="months" />
      </div>{" "}
      <div>
        <Number interval={addLeadingZeros(days, 2)} />
        <Time time="days" />
      </div>{" "}
      <div>
        <Number interval={addLeadingZeros(hours, 2)} />
        <Time time="hours" />
      </div>{" "}
      <div>
        <Number interval={addLeadingZeros(minutes, 2)} />
        <Time time="minutes" />
      </div>{" "}
      <div>
        <Number interval={addLeadingZeros(seconds, 2)} />
        <Time time="seconds" />
      </div>
    </div>
  );
}
