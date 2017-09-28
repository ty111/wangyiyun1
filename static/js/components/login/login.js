import React,{ Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import $ from 'jquery';

class Login extends Component{
	constructor(props){
		super(props);
		this.add = this.add.bind(this);
		this.login = this.login.bind(this);
	}
	//注册
	add(ev){
         ev.stopPropagation();
	     ev.preventDefault();
         this.login1('add');
	}
   
	//登录
	login(ev){
         ev.stopPropagation();
	     ev.preventDefault();
	     this.login1('login');
	}
	login1(str)
	{   let {history:{push},login,signup} = this.props;
		if(!$('#user').val()||!$('#pass').val()){
            $('#erro').html('用户名和密码不能为空！');
            $('#erro').css('display','block');
            setTimeout(function(){
               $('#erro').css('display','none');
            },2000);
            return;             
		}
		if(str === 'login')
		{
             login({
                  username:$('#user').val(),
                  password:$('#pass').val(),
                  cfPassw:$('#pass').val()
             })
		}else{
			 signup({
                  username:$('#user').val(),
                  password:$('#pass').val(),
                  cfPassw:$('#pass').val()
			 })
		}

	}

	render(){
        let {history:{push, goBack}, login} = this.props;
		return(
            <div className="login">
                 <div className="login-1">
                       <a href="/mymoney" className="left back">《 </a>
                       <span>登录</span>
                       <Link to="/" className="right">首页</Link>
                 </div>
                 <div className="login-2">
                      <div className="login-2-form">
                             <input type="text" placeholder="用户名可为数字、字母、下划线" className="u-input"id="user"/>
		                       <i className="" style={{display: "block"}}></i>
                              <input type="password"  placeholder="密码" className="u-input" id="pass"/>
		                      <a href="javascript:;" id="getCode"  className="u-button disable" style={{marginRight:"2%"}} onClick = {this.add} >注册</a>
	                          <a href="javascript:;" id="logCode" className="u-button disable" onClick = {this.login}>登录</a>
                      </div>
                 </div>
                  <div className="login-3">
				        <div className="line-title">
				            <h4>
				                以下帐号直接登录
				            </h4>
				        </div>
				        	<ul className="f-cb">
					            <li className="mail" >
					              <a href=""><span></span>网易邮箱</a>
					            </li>
					            <li className="weibo" >
					              <a href=""><span></span>新浪微博</a>
					            </li>
					            <li className="tx-weibo" >
					              <a href=""><span></span>腾讯微博</a>
					            </li>
				            </ul>
				   </div>
				   <p id="erro">用户名或密码错误</p>
            </div>
	    )
	}
}
export default Login;