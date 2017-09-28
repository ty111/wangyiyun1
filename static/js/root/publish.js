import React, {Component} from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

//轮播器
import Banner from './../components/banner/banner';
import Biaoti from './../components/booklist/biaoti';
import Book from './../components/booklist/book';

import Ad from './../components/title/ad';

import $ from 'jquery';

class Publish extends Component{
	constructor(props)
	{
		super(props);
		this.state = {
			list:null,
			banner:null,
			editor:{
				name:'历史',
				count:4
			},
			newBook:{
				name:'社会',
				count:4
			},
			rankingList:{
				name:'法治',
				count:4
			}
			
		}
	}
	render(){
		let {history,location, location:{state}} = this.props;
		return(
            <div>
                <Banner>轮播图</Banner>
               
                     <section className="list">
                     <Biaoti title={'本周强推'}></Biaoti>
                     <div id="u-loading" style={{display:'block'}}>
                         <b>正在加载...</b>
                     </div>
                     <div className="m-book">
                         <Book reqData={this.state.editor}
						history={history} 
						{...{
							location
						}}/>
                     </div>
                    
                     </section>
                
               
                     <section className="list listt clearf sub1">
                    <Biaoti title={'新书抢鲜'}></Biaoti>
                  
                    <div className="m-book">
                         <Book reqData={this.state.newBook}
						history={history} 
						{...{
							location
						}}/>
                    </div>
                </section>
               
                
                    <section className="list listt clearf sub1">
                    <Biaoti title={'经典排行榜'}></Biaoti>

                    <div className="m-book">
                         <Book reqData={this.state.rankingList}
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
export default Publish;