interface ViewWebsiteProps {
  website: string;
}

export default function ViewWebsite({ website }: ViewWebsiteProps) {
  return (
    <a
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      className="ml-4 flex items-center gap-2 rounded-md border border-blue-500 px-4 py-2 text-lg text-blue-500 transition-all duration-200 hover:bg-blue-500 hover:text-white"
    >
      View website
      <span className="inline-block h-5 w-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-full w-full"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 3h8m0 0v8m0-8L10 14m-7 7h18"
          />
        </svg>
      </span>
    </a>
  );
}
