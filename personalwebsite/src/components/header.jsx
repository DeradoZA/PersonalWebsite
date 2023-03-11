import React, {Component} from "react";
import Banner from "./banner";
import TopNav from "./topnav";

class Header extends Component{

    render(){
        return(
            <div>
                <Banner></Banner>
                <TopNav></TopNav>
            </div>
        );    
    }
}

export default Header;