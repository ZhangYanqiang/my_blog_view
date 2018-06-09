<template>
<div id="ball">
	<canvas id="canvas"></canvas>	
</div>
</template>
<script type="text/javascript">
export default{
	data() {
		return{
			x: 200,
	 	 	y: 25,
	  		vx: 5,
	  		vy: 1,
	  		radius: 25,
	  		color: '#8c4356', 	  		
		}
	},
	mounted(){
		this.$nextTick(function(){
            this.mian();	
        });
	},
	methods: { 
		init: function(){
			this.canvas = document.getElementById('canvas');
			this.ctx = this.canvas.getContext('2d');
			if (canvas.width  < window.innerWidth)  
	        {  
	            canvas.width  = window.innerWidth;  
	        }  
	        if (canvas.height < window.innerHeight)  
	        {  
	            canvas.height = window.innerHeight;  
	        } 
	    },
		draw:function(){
			this.init();
			this.ctx.beginPath();
			this.ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,true);
			this.ctx.closePath();
			this.ctx.fillStyle = this.color;
			this.ctx.fill();
		},
		move:function(){
			this.draw();
			this.ctx.fillStyle = 'rgba(255,255,255,0.5)';
			this.ctx.fillRect(0,0,canvas.width,canvas.height);
			//this.ctx.clearRect(0,0, canvas.width, canvas.height);
				
			this.x += this.vx;
			this.y += this.vy;
			//this.vy *= .99;
			//this.vy += .25;

			if(this.y + this.vy > this.canvas.height-this.radius || this.y + this.vy < this.radius){
				this.vy = -this.vy;
			}
			if(this.x + this.vx > this.canvas.width-this.radius || this.x + this.vx < this.radius){
				this.vx = -this.vx;
			} 
			this.raf = window.requestAnimationFrame(this.move);
		},
		mian:function(){
			this.init();
			this.draw();
			this.move();
					
		},				
	}
}

</script>
<style type="text/css">
#canvas{
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: -999;
	left: 0px;
	top: 0px;
}
body{
	margin: 0;
}	
</style>
