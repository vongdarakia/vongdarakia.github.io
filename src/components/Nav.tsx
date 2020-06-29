import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledNav = styled.nav`
    text-align: right;
    padding: 24px;

    a:not(:first-child):not(:last-child) {
        margin: 0 16px;
    }
`;

export const Nav = () => {
    return (
        <StyledNav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
        </StyledNav>
    );
};
