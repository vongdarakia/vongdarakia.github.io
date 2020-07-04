import { None } from "../utils/None";
import { resolve } from "path";
import { GatsbyNode } from "gatsby";
import { CreatePages_MarkdownQuery } from "graphql-types";

interface MarkdownResponse {
    data?: CreatePages_MarkdownQuery | undefined;
}

const createPages: GatsbyNode["createPages"] = async ({
    graphql,
    boundActionCreators,
}) => {
    const { createPage } = boundActionCreators;
    const blogTemplate = resolve(__dirname, "../templates/blog.tsx");

    const { data }: MarkdownResponse = await graphql(`
        query CreatePages_Markdown {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        html
                        excerpt
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);

    if (None(data)) {
        throw new Error(
            "Something happened in createPages when querying for markdown files"
        );
    }

    data.allMarkdownRemark.edges.forEach((edge) => {
        const { fields } = edge.node;

        if (None(fields) || None(fields.slug)) return;

        const { slug } = fields;

        createPage({
            path: `/blog/${slug}`,
            component: blogTemplate,
            context: {
                slug: fields.slug,
            },
        });
    });
};

export default createPages;
