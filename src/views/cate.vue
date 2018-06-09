<template>
	<div id="cate">
		<v-header ></v-header>
		<div class="cate-content" v-for="item in allArticleList">
			<div class="img">
				<router-link :to="{path:'/article', query:{id:item.art_id}}">
					<img :src="'https://193.112.224.24/'+item.art_thumb" onerror="this.onerror='';this.src='https://193.112.224.24/uploads/mr.jpg'">
				</router-link>
		 </div>
			<div class="cate-meida">
				<div class="cate-title">
					<router-link :to="{path:'/article', query:{id:item.art_id}}"><p>{{item.art_title}}</p></router-link>
				</div>
				<div class="cate-des">{{item.art_description}}</div>
				<div class="cate-tag">
					<el-tag type="cate-danger" size="mini"><i class="el-icon-zh-biaoqian">&nbsp{{item.art_tag}}</i></el-tag>
				</div>
				<div class="cate-bottom"> 
					<div class="cate-author"><i class="el-icon-zh-gerenzhongxin">&nbsp{{item.art_editor}}</i></div>
					<div class="cate-date"><i class="el-icon-zh-shijian">&nbsp{{item.art_time|time}}</i></div>
					<div class="cate-view"><i class="el-icon-zh-eye">&nbsp{{item.art_view}}</i></div>
					<div class="cate-more"><router-link :to="{path:'/article', query:{id:item.art_id}}">
						Read More &nbsp&nbsp></router-link></div>
				</div>
			</div>	
		</div>
	</div>
</template>

<script type="text/javascript">
import axios from 'axios'
import head from './head'
export default {
	data(){
		return {
			allArticleList:[],
		};
	},
	mounted(){
		this.getAllarticle(this.$route.query.id);
	},
	 watch: {
		'$route'(to, from){
			this.getAllarticle();
		}
    },
	filters: {
		//时间戳转换成日期
		time: function(value){
			let d = new Date(parseInt(value)*1000);
			return (d.getFullYear())+'-'+(d.getMonth() + 1 > 9 ? d.getMonth() + 1 : '0' + 
				(d.getMonth() + 1)) + '-' + (d.getDate() > 9 ? d.getDate() : '0' + d.getDate());
		}
	},
	methods:{
		getAllarticle:function(){
			let id = this.$route.query.id;
			if(id){
				id = this.$route.query.id;
			}else{
				id = 1;
			}
			axios.get('/articles/'+id)
				.then(response=>{
					this.allArticleList = response.data.data;
				});
		},
	},
    components: {	
		'v-header': head,
	},
}	
</script>
<style type="text/css">
@import "../assets/icon/iconfont.css";

*{
	margin: 0;
	padding: 0;
	text-decoration: none;
}
p{
	font-family: "Microsoft YaHei",Arial,sans-serif;
	font-size: 1.4em;
}
a{
	text-decoration:none;
	color: #333;
}
#cate{
	width: 100%;
	height: 100%;
	font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
.cate-content{
	position: relative;
	width: 70%;
	height: 170px;
	margin: 0 auto;
	border-bottom: #99a9bf 1px solid;
	display: block;
	margin-top: 30px!important;
}
.cate-content img{
	width: 260px;
	height: 140px;
	border-radius: 5px;
	float: left;
}
.cate-meida{
	width: 70%;
	margin-left: 10px;
	float: left;
}
.cate-tag{
	height: 30px;
	line-height: 30px;
}
.cate-title{
	width: 80%;
	height: 50px;
	line-height: 50px;
	color: #34495e;
	white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.cate-des{
	width: 80%;
	height: 30px;
	line-height: 30px;
	color: #7f8c8d;
	white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.cate-bottom{
	width: 90%;
	height: 35px;
	line-height: 35px;
}
.cate-author{
	display: inline-block;
	color: #95a5a6;
}
.cate-view,.cate-date{
	display: inline-block;
	margin-left: 8px;
	color: #95a5a6;
}
.cate-more {
	display: inline-block;
	float: right;
}
.cate-more a{
	color: #18bc9c !important;
}


</style>