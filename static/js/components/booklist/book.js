import React,{ Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import $ from 'jquery';
// import Booklist from './booklist';

class Book extends Component{
	constructor(props){
		super(props);
		this.state = {
			list:null
		};
		this.hasUnMount = false;
		
	}
	componentDidMount(){
        let {reqData:{count,name}}= this.props;
		$.ajax({
			url:'https://api.douban.com/v2/book/search',
			type:'get',
			dataType:'jsonp',
            callback:'time',
			data:{
                tag:name,
                fields:'all',
                count:count
			},
			success:(data)=>{
				this.setState({
					list:data
				})
			}
		});
	}
	componentWillUnmount(){
        this.hasUnMount = true;
	}
	render(){
         let arrBook = null;
         if(this.state.list){
         	let {books} = this.state.list;
         	arrBook = books.map((e,i)=>{
                 let j={
                 	key:e.id,
                    id:e.id,
                    index:i,
                    title:e.title,
                    name:e.subtitle,
                    img:e.images.medium,
                    author:e.author
                 }
                 return(
                       <li key={j.key}>
                   <a href="javascript:;" className="pic">
                            <img src={j.img} alt={j.title}/>
                     </a>
                     <a href="javascript:;" className="info">
                           <h4>{j.title}</h4>
                           <span>{j.author}</span>
                     </a>
                </li>
         	  )
         	})
         	$('#u-loading').css('display','none');


         }
         return (
                <ul className="claer1">
                     {arrBook}
                </ul>
         	);
	}
}
export default Book;