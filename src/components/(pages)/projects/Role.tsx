interface Role {
  label?: string;
}

// Define a lookup object to map roles to their display name and background color
const roleStyles: Record<string, { label: string; bgColor: string }> = {
  Founder: { label: "Founder", bgColor: "bg-red-500" },
  "Creative Director": { label: "Creative Director", bgColor: "bg-blue-500" },
  "UX Designer": { label: "UX Designer", bgColor: "bg-green-500" },
  "Lead UX Designer": { label: "Lead UX Designer", bgColor: "bg-purple-500" },
  "Graphic Designer": { label: "Graphic Designer", bgColor: "bg-yellow-500" },
};

export default function Role({ label }: Role) {
  const role = roleStyles[label || ""] || {
    label: "Project",
    bgColor: "bg-gray-400",
  }; // Fallback to 'Project' if label is not found

  return (
    <div className="inline-block whitespace-nowrap font-sans text-sm">
      {/* TODO 2: Figure out the styling for each of the background colors for each role */}
      <div className={`rounded-md border px-2 py-1 text-sm ${role.bgColor}`}>
        {role.label}
      </div>
    </div>
  );
}
