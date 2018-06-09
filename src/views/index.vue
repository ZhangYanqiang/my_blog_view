<template>
	<div id="home" class="home">
		<v-header></v-header>
		<div class="head-signatur">
			<p>放下烙铁抄起键盘的工程师...</p>
		</div>		
		<cate></cate>
	</div>
</template>
<script type="text/javascript">
	import head from './head'
	import cate from './cate'
	export default{
		data(){
			return{

			}
		},
		components:{	
			cate,
			'v-header': head,
		},
		methonds(){

		}
	}
</script>
<style type="text/css">
*{
	margin: 0;
	padding: 0;
}
html,body,.home{
	width: 100%;
	height: 100%;
}
.home-cate{
	width: 100%;
	height: 100%;
}
.head-signatur{
    background: #99a9bf;
    width: 100%;
    height: 8%;
    color: #fff;
}
.head-signatur p{
	width: 80%;
	height: 50%;
	margin: 0 auto;
	line-height: 50%;
	padding-left: 15px;
}

</style>