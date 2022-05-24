import { getServerSideSitemap } from "next-sitemap";
import { fetchEntries } from "./../../util/cms";

export const getServerSideProps = async (ctx) => {
    // Method to source urls from cms
    const posts = await fetchEntries();

    const fields = posts.map((p) => ({
        loc: `/blog/${p.fields.slug}`,
        changefreq: "monthly",
        lastmod: formatDate(p.sys.updatedAt),
        priority: 0.5,
    }));
    return getServerSideSitemap(ctx, fields);
};

// Default export to prevent next.js errors
export default function Sitemap() { }
