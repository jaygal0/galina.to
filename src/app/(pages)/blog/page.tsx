import HeroText from "../../../../components/global/HeroText";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import CardBlog from "../../../../components/CardBlog";

export default async function Page({ posts }: any) {
  return (
    <div>
      <HeroText
        heading="Blog"
        desc="This is a description to let you know that I'm adding a projects page."
      />
      <div className="grid grid-cols-3 gap-x-4 gap-y-8">
        {posts
          .map((post: any, index: any) => {
            return (
              <CardBlog
                key={index}
                link={post.slug}
                title={post.frontMatter.title}
                subtitle={post.frontMatter.subtitle}
                posted={post.frontMatter.posted}
                updated={post.frontMatter.updated}
                tags={post.frontMatter.tags}
                category={post.frontMatter.category}
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

// TODO: Figure out how to bring in these props in next14
// export const getStaticProps = async () => {
//   const files = fs.readdirSync(path.join("blogs"));

//   const posts = files.map((filename) => {
//     const markdownWithMeta = fs.readFileSync(
//       path.join("blogs", filename),
//       "utf-8"
//     );
//     const { data: frontMatter } = matter(markdownWithMeta);
//     return {
//       frontMatter,
//       slug: filename.split(".")[0],
//     };
//   });
//   return {
//     props: {
//       posts,
//     },
//   };
// };
