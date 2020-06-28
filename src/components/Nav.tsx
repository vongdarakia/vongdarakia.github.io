import React from "react";
import { Link } from "gatsby";

export const Nav = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
        </nav>
    );
};
