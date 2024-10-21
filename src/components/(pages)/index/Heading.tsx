import HeadingUnderlined from "./HeadingUnderlined";

export default function Page() {
  return (
    <div>
      <h1 className="text-md mb-1 font-sans font-bold text-primary md:-mb-3 md:text-3xl">
        Hi, I'm Joshua Galinato
      </h1>
      <h2 className="flex flex-col text-5xl font-bold xl:text-7xl 2xl:text-8xl">
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
