import React from "react";
import { Layout } from "../components/Layout";
import { graphql } from "gatsby";
import { AuthorQuery } from "../../graphql-types";
import { None } from "../utils/None";

interface Props {
    readonly data: AuthorQuery;
}

export const query = graphql`
    query Author {
        site {
            siteMetadata {
                author {
                    firstName
                }
            }
        }
    }
`;

const Home = ({ data: { site } }: Props) => {
    const firstName = site?.siteMetadata?.author?.firstName;

    if (None(firstName)) {
        throw new Error("author.firstName does not exist in siteMetadata");
    }

    return (
        <Layout>
            <h1>I am {firstName}</h1>
            <p>
                This page is still under construction, and probably forever.
                Thank you for your patience.
            </p>
        </Layout>
    );
};

export default Home;
