import React from 'react';
class Clicking extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter:1
        };
        this.changeColor=this.changeColor.bind(this);
       
    }
    changeColor() {
        this.setState({counter:this.state.counter *6});
        console.log(this.state.counter);
      }
    
    render() {
        return  <div>
             <span> {this.state.counter}</span>
             <button onCliclk= { () => this.changeColor()}>UPDATE value</button>
              </div>
    }
}
export default Clicking;