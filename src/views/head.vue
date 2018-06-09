<template>
	<div id="head">
		<div class="head-top">
			<div class="head-content">
				<div class="head-home">
					<router-link to="/home">
					<el-button class="button-new-tag" size="small">首页</el-button></router-link>
				</div>
				<div class="head-nav" v-for="item in navList">
					<router-link :to="{path:'/cate', query:{id:item.cate_id}}">
					<el-button class="button-new-tag" size="small">
	                  {{item.cate_name}}
	                </el-button></router-link>
				</div>
				<div class="head-search">
					 <el-select multiple filterable remote reserve-keyword placeholder="请输入关键词">	
	  				</el-select>
				</div>
			</div>
			
		</div>		
	</div>
</template>
<script type="text/javascript">
	import axios from 'axios'
    export default {
    data(){ 
      return {
        navList:[]
      }   
    },
    mounted(){
        this.$nextTick(function(){
            this.getNav(); 
        });    
    },
    methods: {
        getNav: function(){
            axios.get('/categorys')
                .then(response => {
                  this.navList = response.data.data;
                });
        },   
    },
  }	
</script>
<style lang="scss">
*{
	margin: 0;
	padding: 0;
	text-decoration: none;
}
html,body{
	width: 100%;
	height: 100%; 
	#head{
		width: 100%;
		height: 16%; 
		.head-top{
		    background: #99a9bf;
		    width: 100%;
		    height: 100%;
		    color: #fff;
		}
		.head-content{
			width: 80%;
			margin: 0 auto;	
			height: 50%;
		}
		.head-home,.head-nav{
			height: 100px;
			line-height: 100px;
			float: left;
			.button-new-tag{
				clear: both;
			    border: none;
			    background-color: #99a9bf; 
			    color: #fff;
			    font-size: 20px;	
			} 	
		}
		.head-search{
			float: right;
			height: 100px;
			line-height: 100px;
		}
	}
}


</style>