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
};

export default function AppUsed({ fontMatter }: Props) {
  return (
    <div className="mb-2 rounded-3xl bg-slate-200 p-6">
      <h2 className="my-0">Apps used</h2>
      <div className="flex flex-wrap gap-10 gap-y-4">
        {/* Sort the apps array alphabetically */}
        {fontMatter
          .sort((a: string, b: string) => a.localeCompare(b))
          .map((app: string) => {
            return appsMap[app] ? (
              <div key={app} className="flex flex-col items-center gap-0">
                <Image
                  src={`/app-${app}.jpg`}
                  alt={appsMap[app]} // Use the human-readable name from appsMap for alt text
                  width={60}
                  height={60}
                  className="my-2 rounded-xl"
                  quality={100}
                />
                <p className="my-0 text-center text-sm capitalize">
                  {appsMap[app]} {/* Display the human-readable name */}
                </p>
              </div>
            ) : null;
          })}
      </div>
    </div>
  );
}
