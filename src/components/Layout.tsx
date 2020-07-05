import React, { ReactNode } from "react";
import { Nav } from "./Nav";

interface Props {
    readonly children: ReactNode;
}

export const Layout = ({ children }: Props) => {
    return (
        <div id="layout">
            <main>{children}</main>
        </div>
    );
};
