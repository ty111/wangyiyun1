import React,{ Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
class Biaoti extends Component{
	
		constructor(props){
            super(props);
		}
		render(){
		    return(
                <h3 className="claer1">
                    <span className="size1">{this.props.title}</span>
                    <Link to="" className="more">更多 ></Link>
                </h3>
	        );
	    }
} 
export default Biaoti;