import nextMDX from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkFrontmatter],
    rehypePlugins: [],
  },
});

const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  // Optionally, add any other Next.js config below
  reactStrictMode: true,
  swcMinify: true,
  turbopack: {},
  images: {
    domains: ["external-content.duckduckgo.com"],
  },
};

export default withMDX(nextConfig, {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
});
