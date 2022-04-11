import React from "react"

const FunctionalGreeting = props => {
    return (
        <div className="greeting">
            <h1>
                Hello, {props.name}!
            </h1>
            <h2>
                I'm a single functional compotent!
            </h2>
        </div>
    )
}

export default FunctionalGreeting