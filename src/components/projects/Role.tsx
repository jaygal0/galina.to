import { textComponents } from "../../types";

type Role = {
  label?: string;
};

export default function Role({ label }: Role) {
  return (
    <>
      {label == "Founder" ? (
        <div className="px-3 py-1 border bg-slate-400 text-sm rounded-md">
          Founder
        </div>
      ) : label == "Creative Director" ? (
        <div className="px-3 py-1 border bg-slate-400 text-sm rounded-md">
          Creative Director
        </div>
      ) : label == "UX Designer" ? (
        <div className="px-3 py-1 border bg-slate-400 text-sm rounded-md">
          UX Designer
        </div>
      ) : label == "Lead UX Designer" ? (
        <div className="px-3 py-1 border bg-slate-400 text-sm rounded-md">
          Lead UX Designer
        </div>
      ) : label == "Intern" ? (
        <div className="px-3 py-1 border bg-slate-400 text-sm rounded-md">
          Intern
        </div>
      ) : (
        <div className="px-3 py-1 border bg-slate-400 text-sm rounded-md">
          Personal Project
        </div>
      )}
    </>
  );
}
