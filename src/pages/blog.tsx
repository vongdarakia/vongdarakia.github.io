import React from "react";
import { Layout } from "../components/Layout";
import { graphql, Link } from "gatsby";
import { BlogListQuery } from "../../graphql-types";
import { None } from "../utils/None";

interface Props {
    data: BlogListQuery;
}

export const query = graphql`
    query BlogList {
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
`;

const Blog = ({ data }: Props) => {
    const {
        allMarkdownRemark: { edges },
    } = data;

    const blogs = edges.map((edge) => edge.node);

    return (
        <Layout>
            <header>
                <h1>Blog</h1>
            </header>
            <ul>
                {blogs.map((blog) => {
                    if (
                        None(blog.frontmatter) ||
                        None(blog.frontmatter.title) ||
                        None(blog.frontmatter.date) ||
                        None(blog.html) ||
                        None(blog.fields) ||
                        None(blog.fields.slug)
                    ) {
                        throw new Error(
                            "Missing title/date/fields/fields.slug/html for blog"
                        );
                    }

                    const {
                        frontmatter: { title, date },
                        fields: { slug },
                    } = blog;

                    return (
                        <li key={title}>
                            <Link to={`/blog/${slug}`}>
                                <h2>{title}</h2>
                                <h4>{date}</h4>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </Layout>
    );
};

export default Blog;
