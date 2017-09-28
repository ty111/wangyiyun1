import React, {Component} from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
 
//导航
class Nav extends Component{
	render(){
		return (
            <section className="top claer1">
                  <h1 className="top1">网易云阅读</h1>
                  <a href="javascript:;" className="download">下载APP</a>
                  <div className="top2">
                      <Link to="" className="search float1">搜索</Link>
                      <i className="sep f1"></i>
                      <Link to="/mymoney" className="account float1">账号</Link>
                  </div>
            </section>

		);
	}
}
export default Nav;