var Standard12Color = {
	
	Gray:function(){
		//Gray
		var list =[];
		for(var i=0;i<12;i++){
			list.push('RGB('+ (50 + 18*i) +','+ (50 + 18*i) +','+ (50 + 18*i) +')');
		}
		return list;
	},
	
	Blue:function(){ 
		var list = []; 
		list.push('RGB(0,46,80)');
		list.push('RGB(0,70,122)');
		list.push('RGB(0,93,162)');
		list.push('RGB(0,117,204)');
		list.push('RGB(0,138,242)');
		list.push('RGB(29,158,255)');
		list.push('RGB(63,173,255)');
		list.push('RGB(101,189,255)');
		list.push('RGB(137,204,255)');
		list.push('RGB(175,221,255)');
		list.push('RGB(219,239,255)');
		list.push('RGB(243,250,255)');
		return list;
	},
	
	Red:function(){ 
		var list = [];
		
		list.push('RGB(72,0,0)');
		list.push('RGB(112,0,0)');
		list.push('RGB(150,0,0)');
		list.push('RGB(188,0,0)');
		list.push('RGB(226,0,0)');
		list.push('RGB(242,9,9)');
		list.push('RGB(255,47,47)');
		list.push('RGB(255,87,87)');
		list.push('RGB(255,125,125)');
		list.push('RGB(255,163,163)');
		list.push('RGB(255,201,201)');
		list.push('RGB(255,239,239)');
		
		return list;
	}, 
	Orange:function(){ 
		var list = [];
		
		list.push('RGB(70,45,0)');
		list.push('RGB(108,69,0)');
		list.push('RGB(146,94,0)');
		list.push('RGB(184,118,0)');
		list.push('RGB(222,143,0)');
		list.push('RGB(255,166,5)');
		list.push('RGB(255,180,45)');
		list.push('RGB(255,194,83)');
		list.push('RGB(255,207,121)');
		list.push('RGB(255,221,159)');
		list.push('RGB(255,234,197)');
		list.push('RGB(255,248,235)');
		
		return list;
	}
}
//========================================
//color set
function ChartColorSet(ColorName, level){
	this.set ={
		FillColor:'RGB(221,221,221)',
		FillHighColor:'RGB(234,234,234)',
		lineColor:'RGB(178,178,178)'
	};
	
	this.name = ColorName || 'gray'; 
	this.level = level; 
	var list = Standard12Color.Blue();
	
	if(this.name == 'blue'){
		this.set.FillColor = 'RGB(153,204,255)';
		this.set.FillHighColor = 'RGB(204,236,255)';
		this.set.lineColor = 'RGB(102,153,255)';
		
		var list = Standard12Color.Blue();
		
	}else if(this.name == 'gray'){
		this.set.FillColor = 'RGB(221,221,221)';
		this.set.FillHighColor = 'RGB(234,234,234)';
		this.set.lineColor = 'RGB(178,178,178)';
		
		list = Standard12Color.Gray();
		
	}else if(this.name == 'red'){
		this.set.FillColor = 'RGB(255,153,153)';
		this.set.FillHighColor = 'RGB(255,204,204)';
		this.set.lineColor = 'RGB(255,124,128)'; 
		
		list = Standard12Color.Red();
		
	}else if(this.name == 'orange'){
		this.set.FillColor = 'RGB(255,204,102)';
		this.set.FillHighColor = 'RGB(255,253,153)';
		this.set.lineColor = 'RGB(255,153,51)'; 
		list = Standard12Color.Orange();
		
	}else if(this.name == 'green'){
		this.set.FillColor = 'RGB(214,245,113)';
		this.set.FillHighColor = 'RGB(230,255,139)';
		this.set.lineColor = 'RGB(159,231,29)'; 
		//list = Standard12Color.Green();
		
	}else if(this.name == 'yellow'){
		this.set.FillColor = 'RGB(255,255,102)';
		this.set.FillHighColor = 'RGB(255,255,204)';
		this.set.lineColor = 'RGB(255,204,0)'; 
		
	}else if(this.name == 'purple'){
		this.set.FillColor = 'RGB(153,153,255)';
		this.set.FillHighColor = 'RGB(204,204,255)';
		this.set.lineColor = 'RGB(153,102,255)'; 
	}
	
	if(this.level!=undefined && list!=undefined ){
		if(this.level> 0 && this.level<=5){
			this.set.FillColor = list[this.level*2];
			this.set.FillHighColor = list[this.level*2+1];
			this.set.lineColor = list[this.level*2-1]; 
		} 
	} 
		
	
	ChartColorSet.prototype.getFillColor = function(alpha){
		if(BrowserUtil.isIE()){
			return this.set.FillColor;
		}else{
			return this.set.FillColor.substring(0,(this.set.FillColor.length -1)) + ',' +  alpha +')';
		}
	}
	
	
	ChartColorSet.prototype.getFillHighColor = function(alpha){
		if(BrowserUtil.isIE()){
			return this.set.FillHighColor;
		}else{
			return this.set.FillHighColor.substring(0,(this.set.FillHighColor.length -1)) + ',' +  alpha +')'; 
		}
	}
	
	
	ChartColorSet.prototype.getLineColor = function(alpha){
		if(BrowserUtil.isIE()){
			return this.set.lineColor;
		}else{
			return this.set.lineColor.substring(0,(this.set.lineColor.length -1)) + ',' +  alpha +')'; 			
		}
	}
	
}
