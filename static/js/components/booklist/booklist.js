import React,{ Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import $ from 'jquery';
class Booklist extends Component{
    constructor(props){
    	super(props);
    }
    render(){
    	return(
             <li>
                 <a href="javascript:;" className="pic">
                      <img src={this.props.img} alt={this.props.title} />
                 </a>
                 <a href="javascript:;" className="info">
                      <h4>{this.props.name}</h4>
                       <span>{this.props.editor}</span>
                 </a>
             </li>
    	)
    }
}
export default Booklist;
