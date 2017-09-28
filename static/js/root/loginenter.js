import React,{ Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import $ from 'jquery';
import Login from './../components/login/login';
import Footer from './../components/footer/footer';
class Loginenter extends Component{
	constructor(props){
		super(props);

	}
	render(){
		let {history,login,signup} = this.props;
		return(
             <div className="wrap">
                  <header className="log1">
                      <section className="claer1 top">
                           <h1 className="top1"></h1>
                           <a href="javascript:;" className="download" style={{float: "right"}}>下载App</a>
                      </section>
                  </header>
                  <Login history={history}
                        {...{
                        	login,
                        	signup
                        }}
                  />
                  <Footer>底部</Footer>
             </div>
		)
	}
}
export default Loginenter;