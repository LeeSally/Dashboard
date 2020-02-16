'use strict';
var Standard12Color = {
	
	Gray:function(){
		//Gray
		var list =[];
		for(var i=0;i<12;i++){
			list.push('RGB('+ (50 + 18*i) +','+ (50 + 18*i) +','+ (50 + 18*i) +')');
		}
		return list;
	},
	
	
	Red:function(){ 
		var list = [];
		
		list.push('RGB(62,0,0)');
		list.push('RGB(100,0,0)');
		list.push('RGB(138,0,0)');
		list.push('RGB(176,0,0)');
		list.push('RGB(214,0,0)');
		list.push('RGB(254,0,0)');
		list.push('RGB(255,37,37)');
		list.push('RGB(255,75,75)');
		list.push('RGB(255,115,115)');
		list.push('RGB(255,151,151)');
		list.push('RGB(255,189,189)');
		list.push('RGB(255,229,229)');
		
		return list;
	},
	OrangeRed:function(){ 
		var list = [];
		
		list.push('RGB(62,22,0)');
		list.push('RGB(100,36,0)');
		list.push('RGB(138,49,0)');
		list.push('RGB(176,63,0)');
		list.push('RGB(214,76,0)');
		list.push('RGB(254,91,0)');
		list.push('RGB(255,115,37)');
		list.push('RGB(255,139,75)');
		list.push('RGB(255,165,115)');
		list.push('RGB(255,188,151)');
		list.push('RGB(255,213,189)');
		list.push('RGB(255,238,229)');
		
		return list;
	},
	Orange:function(){ 
		var list = [];
		
		list.push('RGB(62,44,0)');
		list.push('RGB(100,71,0)');
		list.push('RGB(138,99,0)');
		list.push('RGB(176,126,0)');
		list.push('RGB(214,153,0)');
		list.push('RGB(254,181,0)');
		list.push('RGB(255,193,37)');
		list.push('RGB(255,204,75)');
		list.push('RGB(255,215,115)');
		list.push('RGB(255,225,151)');
		list.push('RGB(255,236,189)');
		list.push('RGB(255,248,229)');
		
		return list;
	},
	Yellow:function(){ 
		var list = [];
		
		list.push('RGB(61,62,0)');
		list.push('RGB(98,100,0)');
		list.push('RGB(135,138,0)');
		list.push('RGB(172,176,0)');
		list.push('RGB(209,214,0)');
		list.push('RGB(248,254,0)');
		list.push('RGB(250,255,37)');
		list.push('RGB(251,255,75)');
		list.push('RGB(252,255,113)');
		list.push('RGB(255,255,151)');
		list.push('RGB(255,251,189)');
		list.push('RGB(255,255,229)');
		
		return list;
	},
	AppleGreen:function(){ 
		var list = [];
		
		list.push('RGB(2,42,7)');
		list.push('RGB(38,75,13)');
		list.push('RGB(55,107,19)');
		list.push('RGB(71,139,25)');
		list.push('RGB(88,173,31)');
		list.push('RGB(105,205,37)');
		list.push('RGB(125,220,60)');
		list.push('RGB(146,226,92)');
		list.push('RGB(168,232,124)');
		list.push('RGB(189,238,156)');
		list.push('RGB(212,244,190)');
		list.push('RGB(234,249,223)');
		
		return list;
	},
	Green:function(){ 
		var list = [];
		
		list.push('RGB(8,42,25)');
		list.push('RGB(14,74,44)');
		list.push('RGB(20,106,63)');
		list.push('RGB(26,138,82)');
		list.push('RGB(32,172,102)');
		list.push('RGB(38,204,121)');
		list.push('RGB(61,219,140)');
		list.push('RGB(92,225,158)');
		list.push('RGB(125,231,178)');
		list.push('RGB(157,237,197)');
		list.push('RGB(191,243,217)');
		list.push('RGB(223,249,236)');
		
		return list;
	},
	Cyan:function(){ 
		var list = []; 
		list.push('RGB(0,26,34)');
		list.push('RGB(0,55,72)');
		list.push('RGB(0,85,112)');
		list.push('RGB(0,114,150)');
		list.push('RGB(0,143,188)');
		list.push('RGB(0,172,226)');
		list.push('RGB(9,196,255)');
		list.push('RGB(47,205,255)');
		list.push('RGB(85,216,255)');
		list.push('RGB(125,224,255)');
		list.push('RGB(163,233,255)');
		list.push('RGB(201,242,255)');
		return list;
	},
	Blue:function(){ 
		var list = []; 
		list.push('RGB(0,11,30)');
		list.push('RGB(0,27,70)');
		list.push('RGB(0,41,108)');
		list.push('RGB(0,56,146)');
		list.push('RGB(0,70,184)');
		list.push('RGB(0,85,255)');
		list.push('RGB(5,100,255)');
		list.push('RGB(45,125,255)');
		list.push('RGB(83,149,255)');
		list.push('RGB(121,172,255)');
		list.push('RGB(159,196,255)');
		list.push('RGB(197,219,255)');
		return list;
	},
	DeepBlue:function(){ 
		var list = [];
		
		list.push('RGB(9,14,33)');
		list.push('RGB(18,26,62)');
		list.push('RGB(26,39,82)');
		list.push('RGB(35,52,123)');
		list.push('RGB(43,64,153)');
		list.push('RGB(51,76,183)');
		list.push('RGB(69,95,204)');
		list.push('RGB(100,122,212)');
		list.push('RGB(128,146,220)');
		list.push('RGB(159,172,229)');
		list.push('RGB(189,198,237)');
		list.push('RGB(219,224,245)');
		
		return list;
	},
	
	Purple:function(){ 
		var list = [];
		
		list.push('RGB(21,9,33)');
		list.push('RGB(40,17,63)');
		list.push('RGB(59,25,93)');
		list.push('RGB(79,34,124)');
		list.push('RGB(98,42,154)');
		list.push('RGB(117,80,184)');
		list.push('RGB(136,68,204)');
		list.push('RGB(155,98,212)');
		list.push('RGB(174,128,220)');
		list.push('RGB(194,159,229)');
		list.push('RGB(213,189,237)');
		list.push('RGB(232,219,245)');
		
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
	
	if(this.name == 'gray'){
		this.set.FillColor = 'RGB(221,221,221)';
		this.set.FillHighColor = 'RGB(234,234,234)';
		this.set.lineColor = 'RGB(178,178,178)';
		
		list = Standard12Color.Gray();
		
	}else if(this.name == 'red'){
		this.set.FillColor = 'RGB(255,115,115)';
		this.set.FillHighColor = 'RGB(255,189,189)';
		this.set.lineColor = 'RGB(255,37,37)'; 
		
		list = Standard12Color.Red();
		
	}else if(this.name == 'orangered'){
		this.set.FillColor = 'RGB(255,165,115)';
		this.set.FillHighColor = 'RGB(255,213,189)';
		this.set.lineColor = 'RGB(255,115,37)'; 
		
		list = Standard12Color.OrangeRed();
		
	}else if(this.name == 'orange'){
		this.set.FillColor = 'RGB(255,215,115)';
		this.set.FillHighColor = 'RGB(255,236,189)';
		this.set.lineColor = 'RGB(255,193,37)'; 
		
		list = Standard12Color.Orange();
		
	}else if(this.name == 'yellow'){
		this.set.FillColor = 'RGB(252,255,113)';
		this.set.FillHighColor = 'RGB(255,251,189)';
		this.set.lineColor = 'RGB(250,255,37)'; 
		
		list = Standard12Color.Yellow();
		
	}else if(this.name == 'applegreen'){
		this.set.FillColor = 'RGB(168,232,124)';
		this.set.FillHighColor = 'RGB(212,244,190)';
		this.set.lineColor = 'RGB(125,220,60)'; 
		
		list = Standard12Color.AppleGreen();
		
	}else if(this.name == 'green'){
		this.set.FillColor = 'RGB(125,231,178)';
		this.set.FillHighColor = 'RGB(191,243,217)';
		this.set.lineColor = 'RGB(61,219,140)'; 
		
		list = Standard12Color.Green();
		
	} else if(this.name == 'cyan'){
		this.set.FillColor = 'RGB(85,216,255)';
		this.set.FillHighColor = 'RGB(163,255,255)';
		this.set.lineColor = 'RGB(9,196,255)';
		
		list = Standard12Color.Cyan();
		
	} else if(this.name == 'blue'){
		this.set.FillColor = 'RGB(83,149,255)';
		this.set.FillHighColor = 'RGB(159,196,255)';
		this.set.lineColor = 'RGB(5,100,255)';
		
		list = Standard12Color.Blue();
		
	}else if(this.name == 'deepblue'){
		this.set.FillColor = 'RGB(128,146,220)';
		this.set.FillHighColor = 'RGB(189,198,234)';
		this.set.lineColor = 'RGB(69,95,203)'; 
		
		list = Standard12Color.DeepBlue();
		
	}else if(this.name == 'purple'){
		this.set.FillColor = 'RGB(174,128,220)';
		this.set.FillHighColor = 'RGB(213,189,237)';
		this.set.lineColor = 'RGB(136,68,204)'; 
		
		list = Standard12Color.Purple();
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
