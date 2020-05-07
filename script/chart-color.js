'use strict';
var Standard12Color = {
	
	Gray:function(){   //  灰 
		var list =[];
		for(var i=0;i<12;i++){
			list.push('RGB('+ (50 + 18*i) +','+ (50 + 18*i) +','+ (50 + 18*i) +')');
		}
		return list;
	},
	
	Red:function(){           //红
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
	Vermilion:function(){         //朱砂
		var list = [];
		
		list.push('RGB(33,9,9)');
		list.push('RGB(63,17,17)');
		list.push('RGB(93,25,25)');
		list.push('RGB(124,34,34)');
		list.push('RGB(154,42,42)');
		list.push('RGB(184,50,50)');
		list.push('RGB(204,68,68)');
		list.push('RGB(212,98,98)');
		list.push('RGB(220,128,128)');
		list.push('RGB(229,159,159)');
		list.push('RGB(237,189,189)');
		list.push('RGB(245,219,219)');
		
		return list;
	},
	
	OrangeRed:function(){          //橘红
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
	Orange:function(){           //橘色
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
	Coffee:function(){            //咖色
		var list = [];
		
		list.push('RGB(33,26,9)');
		list.push('RGB(63,50,17)');
		list.push('RGB(93,74,25)');
		list.push('RGB(124,98,34)');
		list.push('RGB(154,122,42)');
		list.push('RGB(184,146,50)');
		list.push('RGB(204,165,68)');
		list.push('RGB(212,179,98)');
		list.push('RGB(220,194,128)');
		list.push('RGB(229,209,159)');
		list.push('RGB(237,223,189)');
		list.push('RGB(245,238,219)');
		
		return list;
	},
	
	Yellow:function(){             //黄色
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
	AppleGreen:function(){             //苹果绿
		var list = [];
		
		list.push('RGB(20,50,0)');
		list.push('RGB(36,88,0)');
		list.push('RGB(51,126,0)');
		list.push('RGB(66,164,0)');
		list.push('RGB(83,204,0)');
		list.push('RGB(98,242,0)');
		list.push('RGB(118,255,25)');
		list.push('RGB(141,255,63)');
		list.push('RGB(163,255,101)');
		list.push('RGB(186,255,139)');
		list.push('RGB(210,255,179)');
		list.push('RGB(232,255,217)');
		
		return list;
	},
	Olive:function(){              //橄榄绿
		var list = [];
		
		list.push('RGB(24,33,9)');
		list.push('RGB(45,63,17)');
		list.push('RGB(67,93,25)');
		list.push('RGB(90,124,34)');
		list.push('RGB(111,154,42)');
		list.push('RGB(133,184,50)');
		list.push('RGB(152,204,68)');
		list.push('RGB(169,212,98)');
		list.push('RGB(185,220,128)');
		list.push('RGB(202,229,159)');
		list.push('RGB(219,237,189)');
		list.push('RGB(235,245,229)');
		
		return list;
	},
	Green:function(){               //荧光绿
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
	Malachite:function(){              //孔雀绿
		var list = [];
		
		list.push('RGB(9,33,20)');
		list.push('RGB(17,63,38)');
		list.push('RGB(25,93,56)');
		list.push('RGB(34,124,75)');
		list.push('RGB(42,154,93)');
		list.push('RGB(50,184,111)');
		list.push('RGB(68,214,130)');
		list.push('RGB(98,212,150)');
		list.push('RGB(128,220,170)');
		list.push('RGB(159,229,191)');
		list.push('RGB(189,237,211)');
		list.push('RGB(219,245,231)');
		
		return list;
	},
	
	Cyan:function(){                 //青色
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
	Indigo:function(){                  //黛青色
		var list = []; 
		list.push('RGB(9,30,33)');
		list.push('RGB(17,58,63)');
		list.push('RGB(25,85,93)');
		list.push('RGB(34,113,124)');
		list.push('RGB(42,141,154)');
		list.push('RGB(50,168,184)');
		list.push('RGB(68,188,204)');
		list.push('RGB(98,198,212)');
		list.push('RGB(128,209,220)');
		list.push('RGB(159,221,229)');
		list.push('RGB(189,231,237)');
		list.push('RGB(219,242,245)');
		return list;
	},
	
	Blue:function(){                   //蓝色
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
	
	Jean:function(){                    //牛仔蓝
		var list = []; 
		list.push('RGB(9,22,33)');
		list.push('RGB(17,41,63)');
		list.push('RGB(25,61,93)');
		list.push('RGB(34,81,124)');
		list.push('RGB(42,101,154)');
		list.push('RGB(50,120,184)');
		list.push('RGB(68,139,204)');
		list.push('RGB(98,158,212)');
		list.push('RGB(128,176,220)');
		list.push('RGB(159,196,229)');
		list.push('RGB(189,214,237)');
		list.push('RGB(219,233,245)');
		return list;
	},
	
	DeepBlue:function(){                    //深蓝
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
	
	Purple:function(){                    //紫色
		var list = [];
		
		list.push('RGB(21,0,42)');
		list.push('RGB(40,0,80)');
		list.push('RGB(59,0,118)');
		list.push('RGB(79,0,158)');
		list.push('RGB(98,0,196)');
		list.push('RGB(117,0,234)');
		list.push('RGB(136,17,255)');
		list.push('RGB(155,55,255)');
		list.push('RGB(174,93,255)');
		list.push('RGB(194,133,255)');
		list.push('RGB(213,171,255)');
		list.push('RGB(232,209,255)');
		
		return list;
	},
	Violet:function(){                   //紫罗兰
		var list = [];
		
		list.push('RGB(26,9,33)');
		list.push('RGB(50,17,63)');
		list.push('RGB(74,25,93)');
		list.push('RGB(98,34,124)');
		list.push('RGB(122,42,154)');
		list.push('RGB(146,50,184)');
		list.push('RGB(165,68,204)');
		list.push('RGB(179,98,212)');
		list.push('RGB(194,128,220)');
		list.push('RGB(209,159,229)');
		list.push('RGB(223,189,237)');
		list.push('RGB(238,219,245)');
		
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
		
	}else if(this.name == 'vermilion'){
		this.set.FillColor = 'RGB(220,128,128)';
		this.set.FillHighColor = 'RGB(237,189,189)';
		this.set.lineColor = 'RGB(204,68,68)'; 
		
		list = Standard12Color.Vermilion();
		
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
		
	}else if(this.name == 'coffee'){
		this.set.FillColor = 'RGB(220,194,128)';
		this.set.FillHighColor = 'RGB(237,223,189)';
		this.set.lineColor = 'RGB(204,165,68)'; 
		
		list = Standard12Color.Coffee();
		
	}else if(this.name == 'yellow'){
		this.set.FillColor = 'RGB(252,255,113)';
		this.set.FillHighColor = 'RGB(255,251,189)';
		this.set.lineColor = 'RGB(250,255,37)'; 
		
		list = Standard12Color.Yellow();
		
	}else if(this.name == 'applegreen'){
		this.set.FillColor = 'RGB(163,255,101)';
		this.set.FillHighColor = 'RGB(210,255,179)';
		this.set.lineColor = 'RGB(118,255,25)'; 
		
		list = Standard12Color.AppleGreen();
		
	}else if(this.name == 'olive'){
		this.set.FillColor = 'RGB(185,220,128)';
		this.set.FillHighColor = 'RGB(219,237,211)';
		this.set.lineColor = 'RGB(68,214,130)'; 
		
		list = Standard12Color.Olive();
		
	}else if(this.name == 'green'){
		this.set.FillColor = 'RGB(125,231,178)';
		this.set.FillHighColor = 'RGB(191,243,217)';
		this.set.lineColor = 'RGB(61,219,140)'; 
		
		list = Standard12Color.Green();
		
	}else if(this.name == 'malachite'){
		this.set.FillColor = 'RGB(128,220,170)';
		this.set.FillHighColor = 'RGB(189,237,211)';
		this.set.lineColor = 'RGB(68,214,130)'; 
		
		list = Standard12Color.Malachite(); 
		
	} else if(this.name == 'cyan'){
		this.set.FillColor = 'RGB(85,216,255)';
		this.set.FillHighColor = 'RGB(163,255,255)';
		this.set.lineColor = 'RGB(9,196,255)';
		
		list = Standard12Color.Cyan();
		
	} else if(this.name == 'indigo'){
		this.set.FillColor = 'RGB(128,209,220)';
		this.set.FillHighColor = 'RGB(189,231,237)';
		this.set.lineColor = 'RGB(68,188,204)';
		
		list = Standard12Color.Indigo();
		
	} else if(this.name == 'blue'){
		this.set.FillColor = 'RGB(83,149,255)';
		this.set.FillHighColor = 'RGB(159,196,255)';
		this.set.lineColor = 'RGB(5,100,255)';
		
		list = Standard12Color.Blue();
		
	}else if(this.name == 'jean'){
		this.set.FillColor = 'RGB(128,176,220)';
		this.set.FillHighColor = 'RGB(189,214,237)';
		this.set.lineColor = 'RGB(68,139,204)';
		
		list = Standard12Color.Jean();
		
	} else if(this.name == 'deepblue'){
		this.set.FillColor = 'RGB(128,146,220)';
		this.set.FillHighColor = 'RGB(189,198,234)';
		this.set.lineColor = 'RGB(69,95,203)'; 
		
		list = Standard12Color.DeepBlue();
		
	}else if(this.name == 'purple'){
		this.set.FillColor = 'RGB(174,93,255)';
		this.set.FillHighColor = 'RGB(213,171,255)';
		this.set.lineColor = 'RGB(136,17,255)'; 
		
		list = Standard12Color.Purple();
		
	}else if(this.name == 'violet'){
		this.set.FillColor = 'RGB(194,128,220)';
		this.set.FillHighColor = 'RGB(223,189,237)';
		this.set.lineColor = 'RGB(165,68,204)'; 
		
		list = Standard12Color.Violet();
	}
	
	if(this.level!=undefined && list!=undefined ){
		if(this.level> 0 && this.level<=5){
			this.set.FillColor = list[this.level*2];
			this.set.FillHighColor = list[this.level*2+1];
			this.set.lineColor = list[this.level*2-1]; 
		} 
	} 
		
	
	ChartColorSet.prototype.getFillColor = function(alpha){
		if(sr.BrowserUtil.isIE()){
			return this.set.FillColor;
		}else{
			return this.set.FillColor.substring(0,(this.set.FillColor.length -1)) + ',' +  alpha +')';
		}
	}
	
	
	ChartColorSet.prototype.getFillHighColor = function(alpha){
		if(sr.BrowserUtil.isIE()){
			return this.set.FillHighColor;
		}else{
			return this.set.FillHighColor.substring(0,(this.set.FillHighColor.length -1)) + ',' +  alpha +')'; 
		}
	}
	
	
	ChartColorSet.prototype.getLineColor = function(alpha){
		if(sr.BrowserUtil.isIE()){
			return this.set.lineColor;
		}else{
			return this.set.lineColor.substring(0,(this.set.lineColor.length -1)) + ',' +  alpha +')'; 			
		}
	}
	
}
