import React, {Component} from "react";

class Banner extends Component{

    state = {
        bannerImg: "https://cdn.pixabay.com/photo/2017/07/01/19/48/background-2462431_960_720.jpg"
    };

    render() {
        return(
        <div>
            <img src={this.state.bannerImg} alt="test"/>
        </div>
        );
    }
}

export default Banner;