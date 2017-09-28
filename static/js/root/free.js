import React,{ Component } from 'react';
import $ from 'jquery';
import Biaoti from './../components/booklist/biaoti';
import Bookfree from './../components/booklist/bookfree';
class Free extends Component{
	constructor(props){
		super(props);
		this.state={
			timer:null,
			time:{
				name:'清单',
				count:3
			},
			newbook1:{
				name:'微光',
				count:3
			}			
		}
		
	}
	//组件加载完成后触发	
	render(){
		
		let {history,location,location:{state}} = this.props;
		return(
            <div className="wrap">
                 <section className="list">
                      <Biaoti title={'限时畅读'}></Biaoti>
                      <div className = "free-list">
                           <Bookfree reqData={this.state.time} 
                             history={history}
                             {...{location
                             }}/>
                      </div>
                 </section>
                 <section className="list listt clearf sub1">
                       <Biaoti title={'新书免费'}/>
                       <div className="free-list">
                            <Bookfree reqData={this.state.newbook1}
                                history={history}
                                {...{
                                	location
                                }}/>
                       </div>
                 </section>
            </div>
              
            
		);
	}
}
export default Free;
