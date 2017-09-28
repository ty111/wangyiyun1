import React, {Component} from 'react';
import Nav from './components/nav/nav';
import Title from './components/title/title';
import Publish from './root/publish';
import Girl from './root/girl';
import Boy from './root/boy';
import Free from './root/free';
import Taste from './root/taste';
import Rank from './root/rank';
import Classif from './root/classif';
import Down from './components/down/down';
import Footer from './components/footer/footer';


import $ from 'jquery';
//路由
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
class App extends Component{
	constructor(props){
		super(props);
	}

	render(){
        let {match:{path},history,location,location:{state}}=this.props;
		return(
            <div>
                <header>
                     <Nav>头部导航条</Nav>
                     <Title
                           history={history}
                           {...{
                               location
                           }}
                     >列表</Title>

                </header>
                <Route exact path={`/`} component={Publish}/>
                <Route  path={`/publish`} component={Publish}/>
                <Route  path={`/boy`} component={Boy}/>
                <Route  path={`/girl`} component={Girl}/>
                <Route  path={`/free`} component={Free}/>
                <Route  path={`/taste`} component={Taste}/>
                <Route  path={`/classif`} component={Classif}/>
                <Route  path={`/rank`} component={Rank}/>
            
                <footer>
                    <Down>下载和搜索</Down>
                    <Footer>底部</Footer>
                </footer>
            </div>
		);
	}
}
export default App;