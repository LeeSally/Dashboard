
window.onload = function(){
	var btn = document.getElementById("btn-download");
	EventUtil.add(btn,"click",function(){
		alert("download...");
	});
	
	var scrollNear = function(elem){
		var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
		
		if(Math.abs(elem.offsetTop - scrollTop - window.innerHeight/2) < 60){
			for(var i = 0; i< elem.children.length;i++){ 
				ClassUtil.add(elem.children[i],"anim");
			} 
		}
			
	};
	
	
	EventUtil.add(window,"scroll",
		EventUtil.throttle(function(){
			scrollNear(document.getElementById("prod-feature"));
			scrollNear(document.getElementById("prod-install-environment"));
			scrollNear(document.getElementById("prod-dashboard"));
		},120,120)
	);
}