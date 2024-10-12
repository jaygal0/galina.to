import Image from "next/image";

interface FontMatter {
  map(arg0: (app: any) => JSX.Element | null): import("react").ReactNode;
  apps: string[]; // Assuming apps is an array of strings
}

interface Props {
  fontMatter: FontMatter;
}

const appsMap: Record<string, string> = {
  analytics: "Google Analytics",
  figma: "Figma",
  illustrator: "Adobe Illustrator",
  maze: "Maze",
  notion: "Notion",
  photoshop: "Adobe Photoshop",
  premiere: "Adobe Premiere",
  sentry: "Sentry",
  nextjs: "NextJS",
  typescript: "TypeScript",
};

export default function AppUsed({ fontMatter }: Props) {
  return (
    <div className="flex gap-8">
      {fontMatter.map((app) => {
        return appsMap[app] ? (
          <div key={app} className="flex flex-col items-center gap-0">
            <Image
              src={`/app-${app}.jpg`}
              alt={app}
              width={80}
              height={80}
              className="my-2 rounded-3xl"
              quality={100}
            />
            <p className="my-0 text-center text-sm capitalize">{app}</p>
          </div>
        ) : null;
      })}
    </div>
  );
}
