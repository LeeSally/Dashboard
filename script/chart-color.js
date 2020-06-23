'use strict';
sr.Chart = { 
};
sr.Chart.ThemeStyle = "";


sr.Chart.Standard12Color = {
	
	Gray:function(){   //  灰 
		var list =[];
		var num  = 0;
		
		for(var i=0;i<16;i++){
			num = (240 - 10*i);
			list.push('RGB('+ num +','+ num +','+ num +')');
		} 
		return list;
	},
	
	Red:function(){           //红
	
		var list = [];
		
		list.push('RGB(255,217,217)');
		list.push('RGB(255,197,197)');
		list.push('RGB(255,179,179)');
		list.push('RGB(255,159,159)');
		list.push('RGB(255,139,139)');
		list.push('RGB(255,121,121)');
		list.push('RGB(255,101,101)');
		list.push('RGB(255,83,83)');
		list.push('RGB(255,63,63)');
		list.push('RGB(255,45,45)');
		list.push('RGB(255,25,25)');
		list.push('RGB(255,5,5)');
		list.push('RGB(242,0,0)');
		list.push('RGB(222,0,0)');
		list.push('RGB(204,0,0)');
		list.push('RGB(184,0,0)');
		
		return list;
	},
	
	RoseRed:function(){                                   //玫瑰红
	
		var list = [];		
		
		list.push('RGB(255,197,218)');
		list.push('RGB(255,179,206)');
		list.push('RGB(255,159,193)');
		list.push('RGB(255,139,180)');
		list.push('RGB(255,121,169)');
		list.push('RGB(255,101,156)');
		list.push('RGB(255,83,144)');
		list.push('RGB(255,63,132)');
		list.push('RGB(255,45,120)');
		list.push('RGB(255,25,107)');
		list.push('RGB(255,5,94)');
		list.push('RGB(242,0,86)');
		list.push('RGB(222,0,79)');
		list.push('RGB(204,0,74)');
		list.push('RGB(184,0,66)');
		list.push('RGB(164,0,59)');
		
		return list;
		
	},
	Vermilion:function(){         //朱砂
	
		var list = [];
		
		list.push('RGB(245,219,219)');
		list.push('RGB(241,203,203)');
		list.push('RGB(237,189,189)');
		list.push('RGB(233,173,173)');
		list.push('RGB(229,159,159)');
		list.push('RGB(225,143,143)');
		list.push('RGB(220,128,128)'); 
		list.push('RGB(216,114,114)'); 
		list.push('RGB(212,98,98)');
		list.push('RGB(208,84,84)');
		list.push('RGB(204,68,68)');
		list.push('RGB(200,54,54)');
		list.push('RGB(184,50,50)');
		list.push('RGB(168,46,46)');
		list.push('RGB(154,42,42)');
		list.push('RGB(138,38,38)');
		
		return list;
	},
	
	OrangeRed:function(){          //橘红
	
		var list = [];
		
		list.push('RGB(255,218,197)'); 
		list.push('RGB(255,206,179)'); 
		list.push('RGB(255,193,159)');
		list.push('RGB(255,180,139)');
		list.push('RGB(255,169,121)');
		list.push('RGB(255,156,101)');
		list.push('RGB(255,144,83)'); 
		list.push('RGB(255,132,63)');
		list.push('RGB(255,120,45)'); 
		list.push('RGB(255,107,25)'); 
		list.push('RGB(255,94,5)'); 
		list.push('RGB(242,86,0)'); 
		list.push('RGB(222,79,0)'); 
		list.push('RGB(204,73,0)'); 
		list.push('RGB(200,74,0)'); 
		list.push('RGB(180,67,0)'); 
		
		return list;
	},
	Orange:function(){           //橘色
	
		var list = [];
			
		list.push('RGB(255,233,189)');  
		list.push('RGB(255,227,171)');
		list.push('RGB(255,220,151)');
		list.push('RGB(255,214,133)');
		list.push('RGB(255,208,113)');
		list.push('RGB(255,201,93)');
		list.push('RGB(255,195,75)');
		list.push('RGB(255,188,55)');
		list.push('RGB(255,182,37)');
		list.push('RGB(255,176,17)');
		list.push('RGB(254,169,0)');
		list.push('RGB(234,156,0)');
		list.push('RGB(214,143,0)');
		list.push('RGB(210,141,4)');
		list.push('RGB(192,129,4)');
		list.push('RGB(173,163,3)');
		
		return list;
	},
	Coffee:function(){            //咖色
	
		var list = []; 
		
		list.push('RGB(245,238,219)');
		list.push('RGB(241,231,204)');
		list.push('RGB(237,223,189)');
		list.push('RGB(233,216,174)');
		list.push('RGB(229,209,159)');
		list.push('RGB(225,202,143)');
		list.push('RGB(220,194,128)');
		list.push('RGB(216,187,114)');
		list.push('RGB(212,179,98)');
		list.push('RGB(208,173,84)');
		list.push('RGB(204,165,68)');
		list.push('RGB(200,158,54)');
		list.push('RGB(184,146,50)');
		list.push('RGB(168,133,46)');
		list.push('RGB(154,122,42)');
		list.push('RGB(138,109,38)');
		list.push('RGB(124,98,34)');
		return list;
	},
	
	Yellow:function(){             //黄色
	
		var list = [];
		
		list.push('RGB(255,255,197)'); 
		list.push('RGB(255,255,179)');
		list.push('RGB(255,255,159)');
		list.push('RGB(255,255,139)');
		list.push('RGB(255,255,121)');
		list.push('RGB(255,255,101)');
		list.push('RGB(255,255,83)');
		list.push('RGB(255,255,63)');
		list.push('RGB(255,255,45)');
		list.push('RGB(255,255,25)');
		list.push('RGB(255,255,5)');
		list.push('RGB(248,242,0)');
		list.push('RGB(230,225,0)');
		list.push('RGB(210,205,0)');
		list.push('RGB(192,187,0)');
		list.push('RGB(172,168,0)');
		
		return list;
	},
	AppleGreen:function(){             //苹果绿
	
		var list = [];
		
		list.push('RGB(232,255,217)');
		list.push('RGB(231,255,179)');
		list.push('RGB(225,255,159)');
		list.push('RGB(219,255,139)');
		list.push('RGB(214,255,121)');
		list.push('RGB(207,255,101)');
		list.push('RGB(202,255,83)');
		list.push('RGB(196,255,63)');
		list.push('RGB(190,255,45)');
		list.push('RGB(184,255,25)'); 
		list.push('RGB(178,255,5)');
		list.push('RGB(167,242,0)');
		list.push('RGB(153,222,0)');
		list.push('RGB(141,204,0)');
		list.push('RGB(127,184,0)');
		list.push('RGB(113,164,0)');
		
		return list;
	},
	Olive:function(){              //橄榄绿
		var list = [];
		
		list.push('RGB(235,245,229)');
		list.push('RGB(227,241,103)');
		list.push('RGB(219,237,189)');
		list.push('RGB(210,233,174)');
		list.push('RGB(202,229,159)');
		list.push('RGB(194,225,143)');
		list.push('RGB(185,220,128)');
		list.push('RGB(177,216,114)');
		list.push('RGB(169,212,98)');
		list.push('RGB(161,208,84)');
		list.push('RGB(152,204,68)');
		list.push('RGB(144,200,54)');
		list.push('RGB(133,184,50)');
		list.push('RGB(122,168,46)');
		list.push('RGB(111,154,42)');
		list.push('RGB(100,138,38)');
		
		return list;
	},
	Green:function(){               //荧光绿
		var list = [];
		
		list.push('RGB(217,255,238)');
		list.push('RGB(197,255,229)');
		list.push('RGB(179,255,221)');
		list.push('RGB(159,255,212)');
		list.push('RGB(139,255,203)');
		list.push('RGB(121,255,194)');
		list.push('RGB(101,255,185)');
		list.push('RGB(83,255,177)');
		list.push('RGB(63,255,168)');
		list.push('RGB(45,255,160)'); 
		list.push('RGB(25,255,151)');
		list.push('RGB(5,255,142)');
		list.push('RGB(0,242,133)');
		list.push('RGB(0,222,122)');
		list.push('RGB(0,204,112)');
		list.push('RGB(0,184,101)');
		
		return list;
	},
	Malachite:function(){              //孔雀绿
		var list = [];
		
		list.push('RGB(219,245,231)');
		list.push('RGB(203,241,220)');
		list.push('RGB(189,237,211)');
		list.push('RGB(173,233,200)');
		list.push('RGB(159,229,191)');
		list.push('RGB(143,225,180)');
		list.push('RGB(128,220,170)');
		list.push('RGB(114,216,160)');
		list.push('RGB(98,212,150)');
		list.push('RGB(84,208,140)');
		list.push('RGB(68,214,130)');
		list.push('RGB(54,200,120)');
		list.push('RGB(50,184,111)');
		list.push('RGB(46,168,101)');
		list.push('RGB(42,154,93)');
		list.push('RGB(38,138,83)');
		
		return list;
	},
	
	Cyan:function(){                 //青色
		var list = [];
		
		list.push('RGB(217,253,255)');
		list.push('RGB(197,252,255)');
		list.push('RGB(179,251,255)');
		list.push('RGB(159,250,255)');
		list.push('RGB(139,249,255)');
		list.push('RGB(121,249,255)');
		list.push('RGB(101,248,255)');
		list.push('RGB(83,247,255)');
		list.push('RGB(63,246,255)');
		list.push('RGB(45,245,255)');
		list.push('RGB(25,244,255)');
		list.push('RGB(5,243,255)');
		list.push('RGB(0,230,242)');
		list.push('RGB(0,211,222)');
		list.push('RGB(0,194,204)');
		list.push('RGB(0,175,184)');
		
		return list;
	},
	Indigo:function(){                  //黛青色
		var list = [];
		
		list.push('RGB(219,242,245)');
		list.push('RGB(203,236,241)');
		list.push('RGB(189,231,237)');
		list.push('RGB(173,226,233)');
		list.push('RGB(159,221,229)');
		list.push('RGB(143,215,225)');
		list.push('RGB(128,209,220)');
		list.push('RGB(114,206,216)');
		list.push('RGB(98,198,212)');
		list.push('RGB(84,193,208)');
		list.push('RGB(68,188,204)');
		list.push('RGB(54,183,200)');
		list.push('RGB(50,168,184)');
		list.push('RGB(46,153,168)');
		list.push('RGB(42,141,154)');
		list.push('RGB(38,126,138)');
		
		return list;
	},
	
	Blue:function(){                   //蓝色
		var list = [];
		
		list.push('RGB(235,247,255)');
		list.push('RGB(217,240,255)');
		list.push('RGB(197,232,255)');
		list.push('RGB(179,224,255)');
		list.push('RGB(159,216,255)');
		list.push('RGB(139,208,255)');
		list.push('RGB(121,201,255)');
		list.push('RGB(101,193,255)');
		list.push('RGB(83,185,255)');
		list.push('RGB(63,177,255)');
		list.push('RGB(45,170,255)');
		list.push('RGB(25,162,255)');
		list.push('RGB(5,154,255)');
		list.push('RGB(0,144,242)');
		list.push('RGB(0,132,222)');
		list.push('RGB(0,121,202)');
		
		return list;
	},
	
	Jean:function(){                    //牛仔蓝
		var list = [];
		
		list.push('RGB(219,233,245)');
		list.push('RGB(203,224,245)');
		list.push('RGB(189,214,237)');
		list.push('RGB(173,204,233)');
		list.push('RGB(159,196,229)'); 
		list.push('RGB(143,186, 225)');
		list.push('RGB(128,176,220)');
		list.push('RGB(114,167,216)');
		list.push('RGB(98,158,212)');
		list.push('RGB(84,149,208)');
		list.push('RGB(68,139,204)');
		list.push('RGB(54,130,200)');
		list.push('RGB(50,120,184)');
		list.push('RGB(46,110,168)');
		list.push('RGB(42,101,154)');
		list.push('RGB(38,90,138)');
		
		return list;
	},
	
	DeepBlue:function(){                    //深蓝
		var list = [];
		
		list.push('RGB(219,224,245)');
		list.push('RGB(203,210,241)');
		list.push('RGB(189,198,237)');
		list.push('RGB(173,184,233)');
		list.push('RGB(159,172,229)');
		list.push('RGB(143,159,225)');
		list.push('RGB(128,146,220)');
		list.push('RGB(114,133,216)');
		list.push('RGB(100,122,212)');
		list.push('RGB(84,108,208)');
		list.push('RGB(69,95,204)');
		list.push('RGB(55,82,199)'); 
		list.push('RGB(51,76,183)');
		list.push('RGB(47,70,167)');
		list.push('RGB(43,64,153)');
		list.push('RGB(39,58,137)');
		
		return list;
	},
	
	Purple:function(){                    //紫色
		var list = [];
		
		list.push('RGB(248,235,255)'); 
		list.push('RGB(241,217,255)');
		list.push('RGB(234,197,255)');
		list.push('RGB(228,179,255)');
		list.push('RGB(221,159,255)');
		list.push('RGB(214,139,255)');
		list.push('RGB(207,121,255)');
		list.push('RGB(200,101,255)');
		list.push('RGB(194,83,255)');
		list.push('RGB(186,64,255)');
		list.push('RGB(180,45,255)');
		list.push('RGB(173,25,255)');
		list.push('RGB(166,5,255)');
		list.push('RGB(156,0,242)');
		list.push('RGB(134,0,222)');
		list.push('RGB(131,0,204)');
		
		return list;
	},
	Violet:function(){                   //紫罗兰
		var list = []; 
		
		list.push('RGB(238,219,245)');
		list.push('RGB(231,203,241)');
		list.push('RGB(223,189,237)');
		list.push('RGB(216,173,233)');
		list.push('RGB(209,159,229)');
		list.push('RGB(202,143,225)');
		list.push('RGB(194,128,220)');
		list.push('RGB(187,114,216)');
		list.push('RGB(179,98,212)');
		list.push('RGB(173,84,208)');
		list.push('RGB(165,68,204)');
		list.push('RGB(158,54,200)');
		list.push('RGB(146,50,184)');
		list.push('RGB(133,46,168)');
		list.push('RGB(122,42,154)');
		list.push('RGB(109,38,138)');
		
		return list;
	}
	
}
//========================================
//color set

sr.Chart.ColorSet = function(ColorName, level){
	this.set ={
		FillColor:'RGB(221,221,221)',
		FillHighColor:'RGB(234,234,234)',
		lineColor:'RGB(178,178,178)'
	};
	
	this.name = ColorName || 'gray'; 
	this.level = level; 
	var list = sr.Chart.Standard12Color.Blue();
	
	switch(this.name){
		case 'gray':
			list = sr.Chart.Standard12Color.Gray();break;
		case 'rose-red':
			list = sr.Chart.Standard12Color.RoseRed();break;
		case 'red':
			list = sr.Chart.Standard12Color.Red();break;
		case 'vermilion':
			list = sr.Chart.Standard12Color.Vermilion();break;
		case 'orange-red':
			list = sr.Chart.Standard12Color.OrangeRed();break;
		case 'orange':
			list = sr.Chart.Standard12Color.Orange();break;
		case 'coffee':
			list = sr.Chart.Standard12Color.Coffee();break;
		case 'yellow':
			list = sr.Chart.Standard12Color.Yellow();break;
		case 'apple-green':
			list = sr.Chart.Standard12Color.AppleGreen();break;
		case 'olive':
			list = sr.Chart.Standard12Color.Olive();break;
		case 'green':
			list = sr.Chart.Standard12Color.Green();break;
		case 'malachite':
			list = sr.Chart.Standard12Color.Malachite();break;
		case 'cyan':
			list = sr.Chart.Standard12Color.Cyan();break;
		case 'indigo':
			list = sr.Chart.Standard12Color.Indigo();break;
		case 'blue':
			list = sr.Chart.Standard12Color.Blue();break;
		case 'jean':
			list = sr.Chart.Standard12Color.Jean();break;
		case 'deep-blue':
			list = sr.Chart.Standard12Color.DeepBlue();break;
		case 'purple':
			list = sr.Chart.Standard12Color.Purple();break;
		case 'violet':
			list = sr.Chart.Standard12Color.Violet();break;
	}
	
	
	if(list!=undefined ){
		//series color
		
		if(this.level && this.level!=undefined){ 
			
			if(this.level>= 0 && this.level< 8){
				console.log(list[this.level*2]);
				this.set.FillColor = list[this.level*2];
				this.set.FillHighColor = list[this.level*2+1];
				this.set.lineColor = list[this.level*2-1]; 
			} 
		} else{
			
			//default color 
			if(sr.Chart.ThemeStyle=='dark'){
				if(this.name=='gray'){
					this.set.FillColor = list[6];
					this.set.FillHighColor = list[4];
					this.set.lineColor = list[7];
				}else{
					this.set.FillColor = list[3];
					this.set.FillHighColor = list[1];
					this.set.lineColor = list[5];
				}
			}else{
				if(this.name=='gray'){
					this.set.FillColor = list[3];
					this.set.FillHighColor = list[1];
					this.set.lineColor = list[5];
				}else{
					this.set.FillColor = list[6];
					this.set.FillHighColor = list[4];
					this.set.lineColor = list[7];
				}
			} 
		}
	}
	
	
	sr.Chart.ColorSet.prototype.getFillColor = function(alpha){
		if(sr.BrowserUtil.isIE()){
			return this.set.FillColor;
		}else{
			return this.set.FillColor.substring(0,(this.set.FillColor.length -1)) + ',' +  alpha +')';
		}
	}
	
	
	sr.Chart.ColorSet.prototype.getFillHighColor = function(alpha){
		if(sr.BrowserUtil.isIE()){
			return this.set.FillHighColor;
		}else{
			return this.set.FillHighColor.substring(0,(this.set.FillHighColor.length -1)) + ',' +  alpha +')'; 
		}
	}
	
	
	sr.Chart.ColorSet.prototype.getLineColor = function(alpha){
		if(sr.BrowserUtil.isIE()){
			return this.set.lineColor;
		}else{
			return this.set.lineColor.substring(0,(this.set.lineColor.length -1)) + ',' +  alpha +')'; 			
		}
	}
	
	
	
}


sr.Chart.ThemeColor = {
	Font: function(){
		switch(sr.Chart.ThemeStyle){
			case 'dark': return 'RGB(255,255,255)'; //#fff
			default: return 'RGB(102,102,102)';    //#666
		} 
	},
	FontMinor:function(){
		switch(sr.Chart.ThemeStyle){
			case 'dark': return 'RGB(210,210,210)';
			default: return 'RGB(153,153,153)';    //#999
		}
	},
	FontLight:function(){
		switch(sr.Chart.ThemeStyle){
			case 'dark': return 'RGB(180,180,180)';
			default: return 'RGB(204,204,204)';    //#ccc
		}
	},
	
	Title: function(){
		switch(sr.Chart.ThemeStyle){
			case 'dark': return 'RGB(255,255,255)'; //#fff
			default: return 'RGB(102,102,102)';    //#666
		} 
	},
	
	GridLine:function(){
		switch(sr.Chart.ThemeStyle){
			case 'dark': return 'RGB(180,180,180)';
			default: return 'RGB(204,204,204)';    //#ccc
		}
	},
	Axis:function(){
		switch(sr.Chart.ThemeStyle){
			case 'dark': return 'RGB(255,255,255)';  //#fff
			default: return 'RGB(102,102,102)';     //#666
		}
	}
}