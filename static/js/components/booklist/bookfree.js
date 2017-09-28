import React,{ Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import $ from 'jquery';

class Bookfree extends Component{
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
			data:{
				tag:name,
				fields:'all',
				count:count
			},
			callback:'free',
			success:(data)=>{
				if(this.hasUnMount) return;
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
		 let arrBook = null;
		 if(this.state.list){
		 	let {books} = this.state.list;
		 	arrBook = books.map((e,i)=>{
		 		let j = {
             		key:e.id,
             		id:e.id,
             		title:e.title,
             		name:e.subtitle,
             		img:e.images.medium,
             		summary:e.summary,
             		author:e.author
             	}
             	return(
                     <li key={j.key}>
                         <a href="javascript:;" className="claer1" title={j.title}>
                              <img src={j.img} alt={j.title}/>
                              <h3>{j.title}</h3>
                              <p>{j.author}</p>
                              <p>{j.summary}</p>
                         </a>
                     </li>
                )
		 	})
		 };
		 return(
             <ul className="m-free-list">
                 {arrBook}  
             </ul>
		 );
	}
}
export default Bookfree;