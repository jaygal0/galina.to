interface Role {
  label?: string;
}

// Define a lookup object to map roles to their display name and background color
const roleStyles: Record<string, { label: string; bgColor: string }> = {
  Founder: { label: "Founder", bgColor: "bg-chips-one" },
  "Creative Director": {
    label: "Creative Director",
    bgColor: "bg-chips-two",
  },
  "UX Designer": { label: "UX Designer", bgColor: "bg-chips-three" },
  "Lead UX Designer": { label: "Lead UX Designer", bgColor: "bg-chips-four" },
  "Graphic Designer": { label: "Graphic Designer", bgColor: "bg-chips-five" },
};

export default function Role({ label }: Role) {
  const role = roleStyles[label || ""] || {
    label: "Project",
    bgColor: "bg-chips-six",
  }; // Fallback to 'Project' if label is not found

  return (
    <div className="inline-block whitespace-nowrap font-sans text-sm">
      <div className={`rounded-md border px-2 py-1 text-sm ${role.bgColor}`}>
        {role.label}
      </div>
    </div>
  );
}
