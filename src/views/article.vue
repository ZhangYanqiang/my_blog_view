<template>
	<div id="article">
		<v-header ></v-header>
		<div class="art">
		<div class="art-head">
			<div class="art-title">{{artList.art_title}}</div>
			<div class="art-des">{{artList.art_description}}</div>
			<div class="art-foot">
				<div class="art-author"><i class="el-icon-zh-gerenzhongxin">&nbsp{{artList.art_editor}}</i></div>
				<div class="art-tag"><i class="el-icon-zh-biaoqian">&nbsp{{artList.art_tag}}</i></div>
				<div class="art-date"><i class="el-icon-zh-shijian">&nbsp{{artList.art_time|time}}</i></div>
				<div class="art-view"><i class="el-icon-zh-eye">&nbsp{{artList.art_view}}</i></div>
			</div>	
		</div>
		<div class="art-content" v-html="artList.art_content">
		</div>
		</div>
		<div class="art-pre" @click="newArt">
			上一篇：<router-link :to="{path:'/article', query:{id:preList.art_id}}" 
			 >
			{{this.pre}}</router-link>
		</div>
		<div class="art-next" @click="newArt">
			下一篇：<router-link :to="{path:'/article', query:{id:nextList.art_id}}" >
			{{this.next}}</router-link>
		</div>
		<div class="new-art-comment">
			<div class="new-comment-name">
				<el-input placeholder="请输入您的昵称" clearable v-model="comment_name"></el-input>
			</div>
			<div class="new-comment-body">
				<el-input
				  type="textarea"  
				  placeholder="请输入评论内容" v-model="comment_content">
				</el-input>
			</div>
			<div class="new-comment-alert">
				<el-alert :title="this.msg" :type="this.suc" show-icon center :closable="false">
  				</el-alert>
			</div>
			<div class="new-comment-submit" @click="postComment">
				<el-button>提交评论</el-button>
			</div>
		</div>
		<div class="art-comment" v-for="item in comList">
			<div class="new-comment-name">
				<p v-model="comment_name">{{item.comment_name}}</p><p>{{item.comment_time}}</p>
			</div>
			<div class="new-comment-body">
				<p>{{item.comment_content}}</p>
			</div>
		</div>
	</div>
	
</template>
<script type="text/javascript">
	import axios from 'axios'
	import head from './head'

	export default{
		data(){
			return{
				artList:[],
				comList:[],
				comment_name: '',
				comment_content: '',
				show: 'false',
				msg: '感谢您的评论',
				suc: 'info',
				preList:[],
				nextList:[],
				pre: '',
				next: '',
				art_id: '',
			}
		},
		components: {	
			'v-header': head,
		},
		mounted(){
			this.$nextTick(function(){
            	this.getArt()
            	this.getComment()
        	});
		},
		filters: {
			//时间戳转换成日期
			time: function(value){
				let d = new Date(parseInt(value)*1000)
				return (d.getFullYear())+'-'+(d.getMonth() + 1 > 9 ? d.getMonth() + 1 : '0' + 
					(d.getMonth() + 1)) + '-' + (d.getDate() > 9 ? d.getDate() : '0' + d.getDate())
			}
		},
		methods: {
			getId: function(){
				if(this.$route.query.id){
					this.art_id = this.$route.query.id
				}else{
					this.art_id = 1
				}
			},
			//获取文章详情
			getArt: function(){
				this.getId()
				axios.get('/art/'+this.art_id)		
				.then(response=>{
					this.artList = response.data.data[0][0]
					if(response.data.data[1]){
						this.preList = response.data.data[1]
						this.pre = this.preList.art_title
					}else{
						this.preList = ''
						this.pre = "没有上一篇了"
					}
					if(response.data.data[2]){  
						this.nextList = response.data.data[2]
						this.next = this.nextList.art_title
					}else{
						this.nextList = ''
						this.next = "没有下一篇了"
					}
				});
			},
			//获取文章评论
			getComment: function(){
				this.getId();
				axios.get('/comments/'+this.art_id)
				.then(response=>{
					this.comList = response.data.data
				});
			},
			//添加评论
			postComment: function(){
				let _this = this;
				if(this.comment_name&&this.comment_content){
					axios({
						url:'/newcomment',
						method: 'post',
						data: {
							comment_name: this.comment_name,
							comment_content: this.comment_content,
							article_id: this.art_id,
						},
						transformRequest: [function (data) {
						    // Do whatever you want to transform the data
						    let ret = ''
						    for (let it in data) {
						      ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
						    }
						    return ret
						  }],
						  headers: {
						    'Content-Type': 'application/x-www-form-urlencoded'
						  }
					}).then(function(res){
					  	_this.msg = "评论成功"
						_this.suc = "success"
						_this.comment_name = ''
						_this.comment_content = ''
						_this.getComment()
					}) 
					.catch(function(err){
					  	console.log(err)
					});
				}else{
					this.msg = "评论内容及昵称不能为空"
					this.suc = "error"
				}
			},
			//上一篇，下一篇更新文章
			newArt: function(){
				this.getArt()
            	this.getComment()
            	this.show = 'false'
				this.msg = '感谢您的评论'
				this.suc = 'info'
			},
		}
	}
</script>
<style type="text/css" lang="scss">
@import "../assets/icon/iconfont.css";
*{
	margin: 0;
	padding: 0;
	text-decoration: none;
}
html,body,#article{
	width: 100%;
	height: 100%;
	.art-head{
		position: relative;
    	background: #99a9bf;
    	width: 100%;
    	height: 16%;
    	color: #fff;
    	display: block;
    	text-align: center;
    	.art-title{
    		line-height: 40px;
    		height: 40px;
    		font-size: 18px;
    	}
    	.art-des{
    		line-height: 40px;
    		height: 40px;
    		font-size: 14px;
    	}
    	.art-foot{	
    		.art-author,.art-date,.art-view,.art-tag{
    			line-height: 30px;
    			height: 30px;
    			display: inline-block;
				margin-left: 8px;
				font-size: 14px;
    		}
    	}
    }
	.art-content{	
    	width: 60%;
    	margin: 0 auto;
    	color: #000;
    	word-wrap: break-word;
    	word-break: normal;
		padding: 30px;
		font-size: 16px;
		background-color: #fffffc;	
	}
	.art-pre,.art-next{
		width: 60%;
		margin: 0 auto;
	}
	.new-art-comment{
		width: 60%;
		margin: 0 auto;
		.new-comment-submit{
			float: right;
		}
		.new-comment-alert{
			width: 87%;
			float: left;
		}
	}
	.art-comment{
		width: 60%;
		margin: 0 auto;
		color: black;
	}

}


	
</style>