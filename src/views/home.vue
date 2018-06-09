<template>
    <div id="home" class="home"> 
    <ball> </ball>  
        <div class=content>
            <div class="admin-img"><img src="../assets/header.png"></div>
            <div class=title><p>放下烙铁抄起键盘的工程师...</p></div>
            <div class="nav" v-for="item in navList">
                <router-link :to="{path:'/cate', query:{id:item.cate_id}}"><el-button class="button-new-tag" size="small" >
                  {{item.cate_name}}
                </el-button></router-link>
            </div>
            <div class="my-resume">
              <p>关于我</p>
              <el-collapse v-model="activeName" accordion>
                <el-collapse-item title="一致性 Consistency" name="1">
                  <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                  <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                </el-collapse-item>
                <el-collapse-item title="反馈 Feedback" name="2">
                  <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                  <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                </el-collapse-item>
                <el-collapse-item title="效率 Efficiency" name="3">
                  <div>简化流程：设计简洁直观的操作流程；</div>
                  <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                  <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                </el-collapse-item>
                <el-collapse-item title="可控 Controllability" name="4">
                  <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                  <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                </el-collapse-item>
              </el-collapse>  
            </div>
      </div>  
    </div>
</template>
<script>
    import axios from 'axios'
    import ball from './ball'
    export default {
    data() { 
      return{
        navList: [],
        activeName: '0',
      }   
    },
    components: {
      ball,
    },
    mounted: function(){
        this.$nextTick(function(){
            this.getNav() 
        });    
    },
    methods: {
        getNav: function(){
            axios({
              methods:'get',
              url:'/categorys'
            })
            .then(res => {
              console.log(res)
              this.navList = res.data.data
            });
        }, 
    },
  }
    
</script>
<style lang="scss">
 .home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50; 
  position: relative;
  text-decoration: none;
  .content{
      position: relative;
      width: 80%;
      margin: 0 auto;
      margin-top: 10%;
      text-align: center; 
      img{
        width: 120px;
        height: 120px;
        border-radius:50%;         
      }
      .title {
        text-align: center;
        color: #6289ad;
        margin-top: 30px;
        text-align: center;
      }
      .nav{
        display: inline-block;
        text-align: center;
        margin-top: 20px;
        .button-new-tag{
          width: 80px;
          border: none;
          font-size: 15px;
        }
      }
      .my-resume{
        width: 50%;
        margin: 80px auto;
        text-align: left;
     }   
   }  
}  
      
</style> 