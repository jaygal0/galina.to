interface Role {
  label?: string;
}

export default function Role({ label }: Role) {
  return (
    <div className="inline-block whitespace-nowrap font-sans text-sm">
      {label == "Founder" ? (
        <div className="rounded-md border bg-slate-400 px-3 py-1 text-sm">
          Founder
        </div>
      ) : label == "Creative Director" ? (
        <div className="rounded-md border bg-slate-400 px-3 py-1 text-sm">
          Creative Director
        </div>
      ) : label == "UX Designer" ? (
        <div className="rounded-md border bg-slate-400 px-3 py-1 text-sm">
          UX Designer
        </div>
      ) : label == "Lead UX Designer" ? (
        <div className="rounded-md border bg-slate-400 px-3 py-1 text-sm">
          Lead UX Designer
        </div>
      ) : label == "Intern" ? (
        <div className="rounded-md border bg-slate-400 px-3 py-1 text-sm">
          Intern
        </div>
      ) : (
        <div className="rounded-md border bg-slate-400 px-3 py-1 text-sm">
          Project
        </div>
      )}
    </div>
  );
}
