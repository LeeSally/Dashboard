function LoadingCircle(t,i,s,a){this.canvas=document.createElement("canvas"),s=s||t.offsetWidth,a=a||t.offsetHeight,this.canvas.setAttribute("width",s+"px"),this.canvas.setAttribute("height",a+"px"),this.canvas.setAttribute("style","position:absolute;"),this.ctx=this.canvas.getContext("2d"),t.appendChild(this.canvas),this.parentEle=t,this.centerX=s/2,this.centerY=a/2,this.color=i||"rgba(200,200,200,0.8)",this.isRun=!1,LoadingCircle.prototype.draw=function(t,i){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);for(var s=0;s<9;s++){var a=2*Math.PI*(s+1)/9;this.ctx.beginPath(),this.ctx.arc(this.centerX+Math.sin(i+a)*t,this.centerY-Math.cos(i+a)*t,.8+.3*s,0,2*Math.PI),this.ctx.fillStyle=this.color,this.ctx.fill()}},LoadingCircle.prototype.start=function(){window.clearInterval(this.loop);var t=0,i=5;this.isRun=!0;var s=this;this.loop=window.setInterval(function(){0<=t&&t<=4*Math.PI/5?i+=.4:5<i&&(i-=.4),t+=i/5*Math.PI/36,t%=2*Math.PI,s.draw(15,t)},30)},LoadingCircle.prototype.stop=function(){window.clearInterval(this.loop),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.isRun=!1},LoadingCircle.prototype.hide=function(){this.canvas.style.cssText="display:none"}}