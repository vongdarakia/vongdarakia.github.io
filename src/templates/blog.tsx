import React from "react";
import { Layout } from "../components/Layout";
import { graphql } from "gatsby";
import { BlogQuery } from "../../graphql-types";
import { None } from "../utils/None";

interface Props {
    readonly data: BlogQuery;
    readonly pageContext: {
        readonly slug: string;
    };
}

export const query = graphql`
    query Blog($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                date
            }
            html
        }
    }
`;

const BlogTemplate = ({
    data: { markdownRemark },
    pageContext: { slug },
}: Props) => {
    if (None(markdownRemark) || None(markdownRemark.frontmatter)) {
        throw new Error(
            `Somehow missing markdownRemark or markdownRemark.frontmatter in BlogQuery for ${slug}`
        );
    }

    const { title, date } = markdownRemark.frontmatter;
    const { html } = markdownRemark;

    if (None(title) || None(date) || None(html)) {
        throw new Error(`Missing title, date or html of blog (${slug})`);
    }

    return (
        <Layout>
            <h1>{title}</h1>
            <p>{date}</p>
            <article dangerouslySetInnerHTML={{ __html: html }}></article>
        </Layout>
    );
};

export default BlogTemplate;
