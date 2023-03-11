import React, {Component} from "react";
import Banner from "./banner";
import Navbar from "./navbar";

class Header extends Component{

    render(){
        return(
            <div>
                <Banner></Banner>
                <Navbar></Navbar>
            </div>
        );    
    }
}

export default Header;