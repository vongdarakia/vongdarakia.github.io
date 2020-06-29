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
                    fullName
                }
            }
        }
    }
`;

const Home = ({ data: { site } }: Props) => {
    const fullName = site?.siteMetadata?.author?.fullName;

    if (None(fullName)) {
        throw new Error("author.fullName does not exist in siteMetadata");
    }

    return (
        <Layout>
            <h1>I am {fullName}</h1>
            <p>
                I tell computers to do things that makes life easier for humans
            </p>
        </Layout>
    );
};

export default Home;
