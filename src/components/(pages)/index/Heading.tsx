import HeadingUnderlined from "./HeadingUnderlined";

export default function Page() {
  return (
    <div>
      <h1 className="-mb-3 font-sans text-3xl font-bold text-primary">
        Hi, I'm Joshua Galinato
      </h1>
      <h2 className="flex flex-col text-8xl font-bold">
        <span>
          I <HeadingUnderlined label="Design" />,
        </span>{" "}
        <HeadingUnderlined label="Develop" />
        <span>
          &amp; <span className="hover:">Solve</span>
        </span>
        <HeadingUnderlined label="Problems" noTrack />
      </h2>
    </div>
  );
}
