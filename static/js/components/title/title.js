import React,{ Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import $ from 'jquery';

let arr = [
   {
   	   id:Math.round().toString(),
   	   title:'男频',
   	   name:'/boy',
   },
   {
   	   id:Math.round().toString(),
   	   title:'女频',
   	   name:'/girl',
   },
   {
   	   id:Math.round().toString(),
   	   title:'出版',
   	   name:'/publish',
   },
   {
   	   id:Math.round().toString(),
   	   title:'分类',
   	   name:'/classif',
   },
   {
   	   id:Math.round().toString(),
   	   title:'免费',
   	   name:'/free',
   },
   {
   	   id:Math.round().toString(),
   	   title:'口味',
   	   name:'/taste',
   },
   {
   	   id:Math.round().toString(),
   	   title:'排行',
   	   name:'/rank',
   }
]

class Title extends Component{
	constructor(props){
		super(props);
		this.state = {
			arr:arr
		}
	}
	render(){
      let {history, location:{pathname}} = this.props;
      let Arr = this.state.arr.map((e,i)=>{
       	    // let {q,fileds} = e.data? e.data:{};
       	    return(
            
                  <li key={i}>
                        <a onClick={event=>{
                            event.preventDefault();
                            event.stopPropagation();
                            history.push({
                                 pathname:e.name
                            });
                        }} 
                            className={e.name === pathname?'crt':''} href="javascript:;" >
                            {e.title}
                        </a>
                  </li>
            );
       });
      return (

            <ul className ="menu clear1">
                   {Arr}
                   <li key="8">
                       <Link to = "/mymoney" className = "money">充值</Link>
                   </li>
            </ul>
      	);

	}
}
export default Title;