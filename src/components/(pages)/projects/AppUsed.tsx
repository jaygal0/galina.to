import Image from "next/image";

interface FontMatter {
  [x: string]: any;
  apps: string[]; // Array of app names as strings
}

interface Props {
  fontMatter: FontMatter; // Props expects fontMatter with apps array
}

// Mapping the app keys to their human-readable names
const appsMap: Record<string, string> = {
  aftereffects: "AfterEffects",
  analytics: "Analytics",
  chatgpt: "ChatGPT",
  figma: "Figma",
  illustrator: "Illustrator",
  indesign: "Indesign",
  instagram: "Instagram",
  jira: "Jira",
  maze: "Maze",
  nextjs: "NextJS",
  notion: "Notion",
  orbi: "Orbi",
  photoshop: "Photoshop",
  pitch: "Pitch",
  premiere: "Premiere",
  prisma: "Prisma",
  sentry: "Sentry",
  tableplus: "Table Plus",
  typescript: "TypeScript",
  vscode: "VS Code",
  youtube: "youtube",
  github: "Github",
};

export default function AppUsed({ fontMatter }: Props) {
  return (
    <div className="min-w-0 flex-1 rounded-3xl bg-slate-200 p-6">
      <h3 className="my-0">Apps used</h3>
      <div className="flex flex-wrap gap-10 gap-y-4">
        {fontMatter
          .sort((a: string, b: string) => a.localeCompare(b))
          .map((app: string) => {
            return appsMap[app] ? (
              <div key={app} className="flex flex-col items-center gap-0">
                <Image
                  src={`/app/${app}.jpg`}
                  alt={appsMap[app]}
                  width={60}
                  height={60}
                  className="my-2 rounded-xl"
                  quality={100}
                />
                <p className="my-0 text-center text-sm capitalize">
                  {appsMap[app]}
                </p>
              </div>
            ) : null;
          })}
      </div>
    </div>
  );
}
