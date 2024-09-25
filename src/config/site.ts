import { SiteConfig } from "@/types";

const site_url = process.env.NEXT_PUBLIC_APP_URL as string;

export const siteConfig: SiteConfig = {
    name: "LingoBuddy",
    description: "A Next.js starter with Stripe, Auth, Prisma, and Shadcn UI",
    url: site_url,
    ogImage: `${site_url}/_static/og.jpg`,
    links: {
        twitter: "https://twitter.com/adilplusk",
        github: "https://github.com/adilkhali",
    },
    mailSupport: "support@spark.com",
    keywords: ["next.js", "typescript", "prisma", "stripe", "auth", "shadcn"],
};