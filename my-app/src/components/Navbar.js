import React from "react"
import "./Navbar.module.css"


class Navbar extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        buttonText: "log in",
        greeting: "Hello Guest"
    }
}

greetingHandler() {
    this.setState((prevState, prevProps) => {
        return {
            buttonText: prevState.buttonText === "log in" ? "log out" : "log in",
            greeting: prevState.greeting === "Hello Guest" ? "Welcome back, User" : "Hello Guest"
        }
    }, () => {
        console.log(this.state.buttonText);
        console.log(this.state.greeting)
    })
}

render() {
    return (
        <nav>
            <h1>My Gallery</h1>
            <div className="login">
                <span>{this.state.greeting}</span>
                <button onClick={() => this.greetingHandler()}>{this.state.buttonText}</button>
            </div>
        </nav>
    )
}
}

export default Navbar