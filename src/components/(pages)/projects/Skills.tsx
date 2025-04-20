"use client";

import { useState } from "react";

interface FontMatter {
  [x: string]: any;
  apps: string[]; // Array of app names as strings
}

interface Props {
  fontMatter: FontMatter; // Props expects fontMatter with apps array
}

const skillsMap: Record<string, string> = {
  accessibility: "Accessibility",
  animation: "Animation",
  app_design: "App Design",
  audio: "Audio Engineering",
  branding: "Branding",
  css: "CSS",
  databases: "Databases",
  design_systems: "Design Systems",
  figma: "Figma",
  gamification: "Gamification",
  graphic_design: "Graphic Design",
  html: "HTML",
  illustration: "Illustration",
  interaction_design: "Interaction Design",
  javascript: "Javascript",
  motion_design: "Motion Design",
  photography: "Photography",
  prototyping: "Prototyping",
  responsive_design: "Responsive Design",
  tailwind: "Tailwind CSS",
  typography: "Typography",
  ui_design: "UI Design",
  usability_testing: "Usability Testing",
  user_flows: "User Flows",
  user_research: "User Research",
  ux_design: "UX Design",
  video_editing: "Video Editing",
  videography: "Videography",
  web_design: "Web Design",
  wireframing: "Wireframing",
};

export default function Skills({ fontMatter }: Props) {
  const [expanded, setExpanded] = useState(false);
  const skills = fontMatter.sort((a: string, b: string) => a.localeCompare(b));

  const visibleSkills = expanded ? skills : skills.slice(0, 5);

  return (
    <>
      <div className="my-4 min-w-0 flex-1 rounded-3xl bg-slate-200 p-6 md:hidden">
        <h2 className="mb-2 mt-0">Skills Applied</h2>
        <div className="flex flex-wrap gap-3">
          {visibleSkills.map((skill: string) =>
            skillsMap[skill] ? (
              <div
                key={skill}
                className="items-center rounded-full border bg-slate-100 px-6 py-1 text-sm"
              >
                {skillsMap[skill]}
              </div>
            ) : null,
          )}
        </div>

        {skills.length > 5 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-6 text-sm text-stone-600 hover:underline"
          >
            {expanded ? "Show Less" : "Show More"}
          </button>
        )}
      </div>

      {/* Show full amount if on a desktop */}

      <div className="hidden min-w-0 flex-1 rounded-3xl bg-slate-200 p-6 md:block">
        <h3 className="mb-2 mt-0">Skills Applied</h3>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill: string) =>
            skillsMap[skill] ? (
              <div
                key={skill}
                className="items-center rounded-full border bg-slate-100 px-6 py-1 text-sm"
              >
                {skillsMap[skill]}
              </div>
            ) : null,
          )}
        </div>
      </div>
    </>
  );
}
