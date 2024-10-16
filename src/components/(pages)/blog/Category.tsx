interface Category {
  label?: string;
}

// Define a lookup object to map roles to their display name and background color
const categoryStyles: Record<string, { label: string; bgColor: string }> = {
  birthday: { label: "Birthday", bgColor: "bg-red-500" },
  entrepreneurial: { label: "Entrepreneurial", bgColor: "bg-blue-500" },
  retrospect: { label: "Retrospect", bgColor: "bg-green-500" },
  tech: { label: "Tech", bgColor: "bg-green-500" },
  thoughts: { label: "Thoughts", bgColor: "bg-green-500" },
};

export default function Category({ label }: Category) {
  const category = categoryStyles[label || ""] || {
    label: "",
    bgColor: "bg-gray-400",
  }; // Fallback to 'Project' if label is not found

  return (
    <div className="mt-2 inline-block w-min whitespace-nowrap font-sans text-sm">
      {/* TODO 2: Figure out the styling for each of the background colors for each role */}
      <div
        className={`rounded-md border px-2 py-1 text-sm ${category.bgColor}`}
      >
        {category.label}
      </div>
    </div>
  );
}
