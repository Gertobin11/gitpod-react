import React from "react"

const FunctionalGreetingWithProps = props => {
    return (
        <div className="greeting">
            <h1>
                Hello, {props.greeting}!
            </h1>
            <h2>Are you still {props.age}?</h2>
        </div>
    )
}

export default FunctionalGreetingWithProps