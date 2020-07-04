/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        author: {
            firstName: "Akia",
            lastName: "Vongdara",
            fullName: "Akia Vongdara",
        },
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-76022540-3",
            },
        },
        "gatsby-plugin-graphql-codegen",
        "gatsby-plugin-typescript",
        "gatsby-plugin-styled-components",
        {
            resolve: "gatsby-plugin-typography",
            options: {
                pathToConfigModule: "src/utils/typography",
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "src",
                path: `${__dirname}/src/`,
            },
        },
        "gatsby-transformer-remark",
    ],
    pathPrefix: "/",
};
