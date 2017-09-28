import React, {Component} from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import $ from 'jquery';

class Bookrank extends Component{
	constructor(props){
		super(props);
		this.state = {
			list:null
		};
		this.hasUnMount = false;
	}
	componentDidMount(){
		let {reqData:{name,count}} = this.props;
		$.ajax({
             url:'https://api.douban.com/v2/book/search',
             type:'get',
             dataType:'jsonp',
             callback:'rank',
             data:{
             	tag:name,
             	fields:'all',
             	count:count
             },
             success:(data)=>{
             	if(this.hasUnMount)  return;
             	this.setState({
             		list:data
             	})
             }
		});
	}
	componentWillUnMount(){
		this.hasUnMount = true;
	}
	render(){
		let rankArr = null;
        if(this.state.list){
        	let {books} = this.state.list;
             rankArr = books.map((e,i)=>{
            let j = {
                key:e.id,
                index:i,
                id:e.id,
                title:e.title,
                author:e.author,
                summary:e.summary
            }
            return(
                <li  key={j.key}>
                     <a href="javascript:;" title={j.title}>
                         <em className="bg2">{j.index+1}</em>
                         <span>{j.title}</span>
                     </a>
                </li>
            )
          })
        }
        return(
              <ul className="m-rank-list claer1">
                    {rankArr}
              </ul>
        )
       
	}
}
export default Bookrank;