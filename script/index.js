
window.onload = function(){ 
	sr.EventUtil.add(document.getElementById("btn-download"),
		"click",
		function(){
			alert("download...");
		}
	);
	
	sr.scrollNear = function(elem){
		var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
		
		if(Math.abs(elem.offsetTop + elem.clientHeight/2- scrollTop - window.innerHeight/2) < 80){
			for(var i = 0; i< elem.children.length;i++){ 
				sr.ClassUtil.add(elem.children[i],"anim");
			} 
		}
			
	}; 
	
	sr.EventUtil.add(window,"scroll",
		sr.EventUtil.throttle(function(){
			sr.scrollNear(document.getElementById("prod-feature"));
			sr.scrollNear(document.getElementById("prod-install-environment"));
			sr.scrollNear(document.getElementById("prod-dashboard"));
		},80,80)
	);
	
	Idd.getAppInfo(function(data){ 
		if(data){
			document.getElementById("version-no").innerHTML = data.Version;
		}  
	});
}