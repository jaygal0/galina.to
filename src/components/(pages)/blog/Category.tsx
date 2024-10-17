interface Category {
  label?: string;
}

// Define a lookup object to map roles to their display name and background color
const categoryStyles: Record<string, { label: string; bgColor: string }> = {
  birthday: { label: "Birthday", bgColor: "bg-chips-one" },
  entrepreneurial: { label: "Entrepreneurial", bgColor: "bg-chips-two" },
  retrospect: { label: "Retrospect", bgColor: "bg-chips-three" },
  tech: { label: "Tech", bgColor: "bg-chips-four" },
  thoughts: { label: "Thoughts", bgColor: "bg-chips-five" },
};

export default function Category({ label }: Category) {
  const category = categoryStyles[label || ""] || {
    label: "",
    bgColor: "bg-chips-six",
  }; // Fallback to 'Project' if label is not found

  return (
    <div className="mt-2 inline-block w-min whitespace-nowrap font-sans text-sm">
      <div
        className={`rounded-md border px-2 py-1 text-sm ${category.bgColor}`}
      >
        {category.label}
      </div>
    </div>
  );
}
