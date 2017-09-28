import React,{ Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import $ from 'jquery';
import Loginenter from './../root/loginenter';
import Footer from './../components/footer/footer';

class Mymoney extends Component{
    constructor(props){
    	super(props);
    }
    componentDidMount(){
    	let {history:{push},userInfo,login,signup,logout} = this.props;
    	// if(!userInfo){
     //        setTimeout(ev=>{
     //            push('/loginenter');
     //        }, 1000);
    	// }
    }
    render(){
        
    	let {userInfo,login,signup,logout} = this.props;
        if(!userInfo){
            return(
                <Loginenter history={history} 
                {...{
                    login,
                    signup
                }}/>
            );
        }
        return(
                <div className="warp">
                     <header className="level2 ">
                          <section className="title claer1">
                              <a className="mid" href="javascript:;">用户</a>
                              <Link className="right" to="">首页</Link>
                          </section>
                     </header>
                     <content>
                           <section className="m-acinfo">
                               <img width="70" height="70" src={require('../../../img/img4.png')} /> 
                               <h2>{userInfo.username}</h2>
                               <p>登录账号{userInfo.username}</p>
                           </section>
                           <section className="m-acmore">
                               <div className="group">
                                    <p><a href="/">
                                        <span className="label">余额</span>
                                        <span className="value">充值送红包</span>
                                        <span className="fr"><span className="ui-red-light btn-x" id="J_recharge" >充值</span></span>
                                    </a></p>
                                    <p className="notfirst"><a href="/">
                                        <span className="label">红包</span>
                                        <span className="value">红包抵阅点</span>
                                        <span className="fr"><span className="ui-red-light btn-x" id="J_exchange" >兑换</span></span>
                                    </a></p>
                                    <p className="notfirst"><a href="/">
                                         <span className="label">积分</span>
                                         <span className="value">还没有积分哦</span>
                                    </a></p>
                               </div>
                               <div className="group">
                                    <p className="notfirst"><a href="">
                                      <span className="label">我的书架</span>
                                      <span className="value">0本</span>
                                      <span className="fr"><span className="ui-rightaw">&gt;</span></span>
                                   </a></p>
                                </div>
                                <div className="group group-bottom">
                                <a href="javascript:;" className="ui-red-light" >ä¸‹è½½ç½‘æ˜“äº‘é˜…è¯»å®¢æˆ·ç«¯</a>
                                     <a  href="/logout"  className="ui-gray-dark logout"
                                     onClick={ev=>{ev.stopPropagation();
                                                    ev.preventDefault();
                                                    this.props.logout();}}>退出登录</a>
                                </div>
                           </section>
                     </content>
                     <footer>
                         <Footer></Footer>
                     </footer>
                </div>
        )
    }
} 
export default Mymoney;