import React, {Component} from 'react';
class Footer extends Component{
	render(){
		return(
              <div>
                  <nav className="footer">
                       <a href="">网易首页<span>  |</span></a>
                      
                       <a href="">公司简介<span>  |</span></a>
                       <a href="">客户服务<span>  |</span></a>
                      
                       <a href="">相关法律<span>  |</span></a>
                      
                       <a href="">网站导航<span>  |</span></a>
                       
                       <a href="">意见反馈<span>  |</span></a>
                       
                       <a href="">客服电话<span>  |</span></a>
                       
                       <a href="">帮助中心<span>  |</span></a>
                       
                       <a href="">作者中心</a>

                  </nav>
                   <div className="m-right"><p>网易公司版权所有&#169;1997-2017</p></div>
              </div>
	    )
	}
}
export default Footer;