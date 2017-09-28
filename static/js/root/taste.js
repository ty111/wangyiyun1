import React, { Component } from 'react';
import $ from 'jquery';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Bookfree from './../components/booklist/bookfree'; 

class Taste extends Component{
	constructor(props){
		super(props);
		this.state = {
			list:null,
			newbook2:{
				name:'爱',
				count:8
			}	
		}
		this.hasUnMount = false;
	}
	render(){
		let {history,location,location:{state}} = this.props;
		return(
            <div className="wrap">
                 <section className="list">
                      <div className = "free-list">
                           <Bookfree reqData={this.state.newbook2} 
                             history={history}
                             {...{location}
                            }/>
                      </div>
                 </section>
            </div>  
		)
	}
}
export default Taste; 
