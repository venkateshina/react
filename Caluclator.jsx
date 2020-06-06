import React from 'react';

 class Caluclator extends React.Component {
     state = {
         a:10,
         b:5
     };
     setA = e =>{
        this.setState({
            a:parseInt(e.target.value)
        });
    };
    setB = e =>{
        this.setState({
            b:parseInt(e.target.value)
        });
    };

     
     render() {
         return(
             <div>
                 <input onChange={this.setA}  />
                 
                 

                 <input onChange={this.setB}/>
                 { 'A:'+ this.state.a + 'B:'+this.state.b}
                 <br/>

                 { 'Add:' + (this.state.a + this.state.b)}
                 <br/>
                 { 'sub:' + (this.state.a - this.state.b)}

                 <br/>
                 { 'mul' + (this.state.a * this.state.b)}
                 <br/>
                 { 'divv' + (this.state.a / this.state.b)}
                 <br/>
             </div>

         );
        
        
        
     }
 }
export default Caluclator;