import React, {Component} from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import $ from 'jquery';
import Biaoti from './../components/booklist/biaoti';
import Bookrank from './../components/booklist/bookrank';
class Rank extends Component{
	constructor(props){
		super(props);
		this.state = {
			list:null,
			girl:{
				name:'一',
				count:3
			},
			boy:{
				name:'二',
				count:3
			},
			publish:{
				name:'三',
				count:3
			}
		}
	}
	render(){
		let {history,location, location:{state}} = this.props;
		return(
             <div className="wrap">
                  <section className="list">
                        <Biaoti title={'女生排行版'}></Biaoti>
                        <Bookrank 
                        reqData={this.state.girl}
                               history={history}
                               {...{
                               	location
                               }}
                             />
                        
                  </section>
                  <section className="list">
                         <Biaoti title={'男生排行版'}></Biaoti>
                         <Bookrank reqData={this.state.boy}
                              history={history}
                              {...{
                              	location
                              }}
                         />
                  </section>
                  <section className="list">
                         <Biaoti title={'推荐排行版'}></Biaoti>
                         <Bookrank reqData={this.state.publish}
                              history={history}
                              {...{
                              	location
                              }}
                         />
                  </section>
             </div>
		)
	}

}
export default Rank;