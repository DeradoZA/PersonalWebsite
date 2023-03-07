import React, { Component } from 'react';
import SecondComp from './secondcomp';


class Counter extends Component {
    state = { 
        count: 0,
        imageURL: "https://picsum.photos/200",
        tags: ['tag1','tag2','tag3']
     };

     handleIncrement(){
        console.log('Increment Clicked');
     }
     
    render() { 
        let classes = "badge m-2";
        classes += (this.state.count === 0) ? " text-bg-danger" : " text-bg-primary";

        return (
         <div>
            <span className={classes}>{this.formatCount()}</span>
            <SecondComp></SecondComp>
            <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
        </div>
        );
    }

    formatCount() {
        return this.state.count === 0 ? <h1>Zero</h1> : this.state.count;
    }
}
 
export default Counter;