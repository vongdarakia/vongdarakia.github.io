import React from "react"
import { Link } from "gatsby"

export default function Home() {
    return (
        <div>
            <h1>Hello world!</h1>
            <p>
                <Link to="/about">About</Link>
            </p>
        </div>
    )
}
