import path from "path";
import { GatsbyNode } from "gatsby";

// eslint-disable-next-line @typescript-eslint/require-await
const onCreateNode: GatsbyNode["onCreateNode"] = async ({ node, actions }) => {
    const { createNodeField } = actions;

    if (node.internal.type === "MarkdownRemark") {
        const slug = path.basename(node.fileAbsolutePath as string, ".md");

        createNodeField({
            node,
            name: "slug",
            value: slug,
        });
    }
};

export default onCreateNode;
