import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link, Switch} from 'react-router-dom';
import Mymoney from './root/mymoney';
import App from './App';
import Search from './root/search';
import registerServiceWorker from './registerServiceWorker';


require('../../css/index.css');
require('../../css/position1.css');
require('../../css/style1.css');
require('../../css/login.css');

//创建一个类Index相当于继承react里的component的子类
//export default输出这个类

export default class Index extends React.Component{
    constructor(props){
        	super(props);
          this.state = {
            userInfo:null
          }
          this.logout = this.logout.bind(this);
          this.login = this.login.bind(this);
          this.signup = this.signup.bind(this);
         
      }
       login(reqData){
            let {history:{push}} = this.props;
             $.post('http://api.noods.me/login',reqData)
              .done(data=>{
                   if(data.code === 0){
                        this.setState({
                            userInfo: data.data
                        });
                        push('/')
                   }
                 }
              );
          }
          signup(reqData){
              let {history:{push}} = this.props;
              $.post('http://api.noods.me/register',reqData)
              .done(data=>{
                   if(data.code === 0){
                        this.setState({
                            userInfo: data.data
                        });
                        push('/')
                   }
                 }
              );
          }
          logout(){
               let {history:{push}} = this.props;
               $.post('http://api.noods.me/logout',function(data){
                    if(data.code === 0){
                         this.setState({
                             userInfo:null
                         });
                        push('/');
                    }

               })
          }
          componentDidMount(){
    //自动登录数据请求
                  $.post('http://api.noods.me/autologin')
                  .done(data=>{
                    if(data.code===0){
                      this.setState({userInfo: data.data});
                    }
                    
                  })
  }
    	render(){
        let {userInfo} = this.state;
        let {logout,login,signup} = this;
    		return(
                <Switch>
                    <Route path="/mymoney" render={({history})=>(
                           <Mymoney {...{
                                 history,
                                 userInfo,
                                 login,
                                 signup,
                                 logout

                                
                           }}/>

                      )}/>
                     
                     <Route path="/" component={App}/>

                </Switch>
    		);
    	}
    
}
ReactDOM.render(
   <Router>
        <Route path="/" component={Index}/>
   </Router>
   ,
   document.getElementById('wrap')
);

registerServiceWorker();

