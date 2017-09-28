import React,{ Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import $ from 'jquery';
let nanArr = ['玄幻仙侠','科幻奇幻','军事谍战','官场职场','悬疑探险','灵异恐怖','都市生活','同人网游','历史传奇','短篇小说'];
let nvArr = ['都市言情','穿越架空','仙侠幻情','灵异推理','同人网游','短篇美文','种田重生','宫斗宅斗','浪漫青春','古风古韵'];
let pubArr = ['小说作品','文学作品','文化艺术','人文社科','经济管理','两性情感','成功励志','亲子少儿','品质生活','自然科学','计算机','培训考试','外文外版','杂志期刊'];
class Classif extends Component{
	constructor(props){
		super(props);
		this.state = {
			list1:nanArr,
			list2:nvArr,
			list3:pubArr
		}
	}
	componentDidMount(){

	}
	render(){
		let NanArr = this.state.list1.map((e,i)=>{
			return(
              
                     <div className="classif1 f1" key={i}><a href="" className="">{e}</a></div>
                
			);
		});
		let NvArr = this.state.list2.map((e,i)=>{
			return(
                
                     <div className="classif1 f1" key={i}><a href="" className="">{e}</a></div>
                  
			);
		});
		let pubArr = this.state.list3.map((e,i)=>{
			return(
                
                     <div className="classif1 f1" key={i}><a href="" className="">{e}</a></div>
                 
			);
		});
		return(
             <div className="wrap">
                   <section className="">
                        <div className="t1">
                             <h3><a href=""><em className="sep"></em>男生小说</a></h3>
                             <div className="listN">{NanArr}</div>
                        </div>
                        <div className="t1">
                             <h3><a href=""><em className="sep"></em>女生小说</a></h3>
                             <div className="listNV">{NvArr}</div>
                        </div>
                        <div className="t1">
                             <h3><a href=""><em className="sep"></em>出版小说</a></h3>
                             <div className="listP">{pubArr}</div>
                        </div>
                   </section>
             </div>
		)
	}
}
export default Classif;