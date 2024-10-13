interface Role {
  label?: string;
}

// Define a lookup object to map roles to JSX
const roleStyles: Record<string, string> = {
  Founder: "Founder",
  "Creative Director": "Creative Director",
  "UX Designer": "UX Designer",
  "Lead UX Designer": "Lead UX Designer",
  Intern: "Intern",
};

export default function Role({ label }: Role) {
  const displayLabel = roleStyles[label || ""] || "Project"; // Fallback to 'Project' if label is not found

  return (
    <div className="inline-block whitespace-nowrap font-sans text-sm">
      <div className="rounded-md border bg-slate-400 px-3 py-1 text-sm">
        {displayLabel}
      </div>
    </div>
  );
}
