import React, {Component} from "react";

class Navbar extends Component{

    render() {
        return(
        <div className="topnav">
            <a href="#main">Home</a>
            <a href="#socials">Socials</a>
            <a href="#projects">Projects</a>
        </div>
        );
    }
}

export default Navbar;