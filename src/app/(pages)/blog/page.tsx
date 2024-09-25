import HeroText from "../../../components/global/HeroText";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import CardBlog from "../../../components/CardBlog";

export default async function Page({ posts }: any) {
  const blogDir = "blogs";

  const files = fs.readdirSync(path.join(blogDir));

  const blogs = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");

    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
    };
  });
  return (
    <div>
      <HeroText
        heading="Blog"
        desc="This is a description to let you know that I'm adding a projects page."
      />
      <div className="flex flex-col gap-8">
        {blogs
          .map((blog: any, index: any) => {
            return (
              <CardBlog
                key={index}
                link={blog.slug}
                title={blog.meta.title}
                subtitle={blog.meta.subtitle}
                posted={blog.meta.posted}
                updated={blog.meta.updated}
                tags={blog.meta.tags}
                category={blog.meta.category}
              />
            );
          })
          .sort((a: any, b: any) => {
            return a.props.posted < b.props.posted ? 1 : -1;
          })}
      </div>
    </div>
  );
}
