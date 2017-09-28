import React, {Component} from 'react';
class Down extends Component{
	render(){
		return(
             <div className="bottom">
                   <section className="search1">
                         <from action="" method="get" id="From_bottom">
                                <div className="search1_input">
                                      <div className="inner">
                                             <input name="key" autoComplete="off" id="search-input-bottom"  placeholder="搜索资讯源、书籍、杂志" ref="ipts"/>
                                             <button>搜索</button>
                                            
                                      </div>
                                </div>
                          </from>
                   </section>
                   <div className="hr1"></div>
                   <div className="down1">
                          <a href="javascript:;" className="down2">下载网易云阅读客户端</a>
                   </div>
             </div>
		)
	}
}
export default Down;