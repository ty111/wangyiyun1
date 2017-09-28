import React, { Component } from 'react';
import $ from 'jquery';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Banner from './../components/banner/banner';
import Biaoti from './../components/booklist/biaoti';
import Book from './../components/booklist/book';
import Down from './../components/down/down';
import Ad from './../components/title/ad';
import Adt from './../components/title/ad2';
class Boy extends Component{
	constructor(props){
		super(props);
		this.state = {
             arrdayJXN:{
                name:'html',
				count:4 
             },
             wenxuearrN:{
                 name:'java',
				count:4
             },
             qingchunN:{
                name:'C++',
				count:4,
				star:1
             }
		}
	}
    render(){
    	let {history,location, location:{state}} = this.props;
    	return(
            <div>
                  <Banner>轮播图</Banner>
                  <section className="list">
                    <Biaoti title={'每日精选'}></Biaoti>
                    <div id="u-loading" style={{display:'block'}}>
                         <b>正在加载...</b>
                    </div>
                    <div className="m-book">
                         <Book reqData={this.state.arrdayJXN}
						history={history} 
						{...{
							location
						}}/>
                    </div>
                    
                </section>
                <Ad></Ad>
                <section className="list">
                    <Biaoti title={'悬疑推理'}></Biaoti>
                  
                    <div className="m-book">
                         <Book reqData={this.state.wenxuearrN}
						history={history} 
						{...{
							location
						}}/>
                    </div>
                </section>
                <section className="list listt clearf sub1">
                    <Biaoti title={'精品小说'}></Biaoti>
                  
                    <div className="m-book">
                         <Book reqData={this.state.qingchunN}
						history={history} 
						{...{
							location
						}}/>
                    </div>
                </section>
               <Ad></Ad>
            </div>
    	)
    }
}
export default Boy;