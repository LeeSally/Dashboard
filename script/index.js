window.onscroll = function(){
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	var elem = document.getElementById("prod-feature");  
	if(Math.abs(elem.offsetTop - scrollTop - window.innerHeight/2) < 30){
		for(var i = 0; i< elem.children.length;i++){ 
			ClassUtil.add(elem.children[i],"anim");
		} 
	}
	
	var elem2 = document.getElementById("prod-install-environment");  
	if(Math.abs(elem2.offsetTop - scrollTop - window.innerHeight/2) < 30){
		for(var i = 0; i< elem2.children.length;i++){ 
			ClassUtil.add(elem2.children[i],"anim");
		} 
	}
	
	
}

window.onload = function(){
	var btn = document.getElementById("btn-download");
	EventUtil.add(btn,"click",function(){
		alert("download...");
	});
}