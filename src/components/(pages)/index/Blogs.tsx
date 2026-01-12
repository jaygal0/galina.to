import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const HIGHLIGHTED_BLOGS = [
  {
    slug: "website-overhaul",
    title: "Website overhaul",
    subtitle: "Redesiging the website to create a stronger brand identity.",
    categories: ["indie maker", "path to design"],
  },
  {
    slug: "36",
    title: "36",
    subtitle: "Proud of my accomplishments.",
    categories: ["birthday"],
  },
  {
    slug: "orbi-userpilot",
    title: "Integrating Userpilot into our onboarding stack",
    subtitle:
      "Building modular, no-code onboarding experiences to help users find value faster.",
    categories: ["UX", "Tech", "Orbi"],
  },
];

export default function Blogs() {
  return (
    <div>
      <p>
        Occasionally I like to write on tech, life and the projects I work on.
        You can view it all on my{" "}
        <Link href="/blog" className="underline">
          blog
        </Link>
        :
      </p>
      {HIGHLIGHTED_BLOGS.map((blog: any, idx: any) => {
        const { title, subtitle, categories } = blog;
        return (
          <Link
            key={idx}
            href={`/blog/${blog.slug}`}
            className="mb-7 block space-y-1"
          >
            <div className="flex items-center gap-2">
              <h3 className="font-semibold underline">{title}</h3>

              {categories.map((category: string) => (
                <Badge
                  key={category}
                  variant="outline"
                  className="h-min capitalize"
                >
                  {category}
                </Badge>
              ))}
            </div>
            <p className="mb-0 text-base text-muted-foreground">{subtitle}</p>
            <div className="flex flex-wrap gap-2"></div>
          </Link>
        );
      })}
    </div>
  );
}
