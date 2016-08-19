import React from "react";
import ReactDOM from "react-dom";
import Marked from "marked";


 function createMarkup(v){
        var m = Marked(v);
        return {__html: m};
    }
class App extends React.Component {
  
   constructor(){
       super();
       this.update = this.update.bind(this);
       this.i ={val:'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*' };
       this.state = {
           input: this.i.val,
           output: this.i.val,
           error: ''
       };
   }    
    update(e){
        let code = e.target.value;
        this.setState({
            output: code
        });
    }
    
   
    
    render (){
        return (
            <div className="row">
               <div className="col-md-6">
               <textarea onChange={this.update}
               defaultValue={this.state.input}
               className="in"></textarea>
               </div>
               <div className="col-md-6">
               <div className="disp"
               dangerouslySetInnerHTML={createMarkup(this.state.output)} />
               </div>
            </div>
            );
    }
}

export default App