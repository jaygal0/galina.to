import Link from "next/link";

interface T {
  label: string;
  noTrack?: Boolean;
}

export default function HeadingUnderlined({ label, noTrack }: T) {
  return (
    <Link href="projects" className="group relative inline-block">
      <span
        className={`relative z-10 w-min transform font-bold transition-all duration-1000 ease-in-out hover:scale-105 hover:${noTrack ? "" : "tracking-wide"} hover:opacity-100`}
      >
        {label}
      </span>
      <span className="absolute bottom-[-3px] left-0 z-0 h-2 w-full origin-left scale-x-0 bg-green-700 transition-transform duration-1000 ease-in-out group-hover:scale-x-100" />
    </Link>
  );
}
