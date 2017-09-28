import React, {Component} from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import ReactSwipe from 'react-swipe';
let bannerArr = [
     {
          name:'',
          img:require('../../../../img/20170906162107c6fc1.jpg')
     },
     {
          name:'',
          img:require('../../../../img/2017090715253064129.jpg')
     },
     {
           name:'',
           img:require('../../../../img/20170911140852560b9.jpg')
     },
     {
           name:'',
           img:require('../../../../img/20170918162348cd1db.jpg')
     }
]
class Banner extends Component{
	  // let {history:{push}} = props;
      render(){
      	   let BanArr = bannerArr.map((e,i)=>{
      	   	  return(
                  <div key={i}>
                       <img src={e.img} alt={e.name}/>
                  </div>
      	   	  )
      	   })
            return(
                  <ReactSwipe className="banner" swipeOptions={{continuous: true,auto:3000}}>
                        {BanArr}
                  </ReactSwipe>
            );
      	  
      	  
      }

 }
 export default Banner;
 