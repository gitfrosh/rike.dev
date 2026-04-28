module.exports = {
    siteUrl: "https://rike.dev",
    generateRobotsTxt: true,
    changefreq: "monthly",
    exclude: [
        `/404`,
        `/legal`,
        `/404.html`,
    ],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                disallow: [
                    "/legal/",
                ],
            },
        ],
    },
};
