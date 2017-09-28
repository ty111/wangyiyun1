import React,{ Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import $ from 'jquery';

class Search extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
             <div className="wrap">
                 <header>
                      <div className="level2">
                           <section className="">
                               <div className=""></div>
                               <Link to="/" className="fl home">首页</Link>	
                           </section>
                      </div>
                 </header>
                 <content></content>
                 <footer></footer>
             </div>
		)
	}
}