module.exports = {
    siteUrl: "https://rike.dev",
    generateRobotsTxt: true,
    changefreq: "daily",
    exclude: [
        '/server-sitemap.xml',
        `404/`,
        `/legal/`,
        `/404.html`,
        `/xPuezr6542`,
        `/offline-plugin-app-shell-fallback/`,
        `/xPuezr6542/`,
        `/rike.dev-Roadmap.pdf`,
        `/rike.dev-Syllabus.pdf`,
        `/rike.dev-Webinar.pdf`,
        `/blog/[slug]`,
        `/blog/`

    ],
    robotsTxtOptions: {
        additionalSitemaps: [
            'https://rike.dev/server-sitemap.xml',
        ],
        policies: [
            {
                userAgent: "*",
                disallow: [
                    "/kurse/rike.dev-Syllabus.pdf",
                    "/kurse/rike.dev-Roadmap.pdf",
                    "/kurse/buchung-bestaetigt",
                    "/kurse/xPuezr6542",
                    "/legal",
                    `/blog/[slug]`,
                    `/blog/`
                ],
            },
        ],
    },
};
