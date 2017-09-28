import React, {Component} from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
class Adt extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
            <section className="ad2">
                
                      <a href="">
                       <img src={require('./../../../../img/20170911140852560b9.jpg')}  alt=""/>
                      </a>
                       <a href="">
                       <img src={require('./../../../../img/20170911140852560b9.jpg')}  alt=""/>
                      </a>
                
            </section>
		)
	}
}
export default Adt;  