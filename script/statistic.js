	

sr.ModalDialog = function(width,height){
	//mask background
	var back = document.createElement("div");
	back.className = "dialog-mask-back";
	document.body.appendChild(back);
	this.Back = back;
	
	
	//wrap
	var wrap = document.createElement("div");
	wrap.className = "dialog-mask-wrap";
	document.body.appendChild(wrap);
	this.Wrap = wrap;
	sr.EventUtil.add(wrap,'click',function(){
		_this.hide();
	});
	
	
	//dialog body
	var body = document.createElement("div");
	body.className = "dialog-body";
	body.style.cssText = "width:" + width + "px;height:" + height + "px";
	this.Wrap.appendChild(body);
	this.Body = body;
	
	var div = document.createElement("div"); 
	div.className = "dialog-content";
	this.Content = div;
	this.Body.appendChild(div);
	this.Content.setAttribute("id","detail-dialog");
	this.Loading = new sr.LoadingCircle(document.getElementById("detail-dialog"),'rgb(0,0,0,0.2)',600,323,100); 
	
	sr.EventUtil.add(this.Body,'click',function(e){ 
		if(e.stopPropagation){
			e.stopPropagation();//阻止冒泡
		}else{
			e.cancelBubble=true;
		}
	});
	
	//==========================================
	//1) close button
	var btnClose = document.createElement("div"); 
	var i = document.createElement("i");
	btnClose.appendChild(i);
	btnClose.className = "dialog-btn-close";
	
	this.Body.appendChild(btnClose);
	
	var _this = this;
	sr.EventUtil.add(btnClose,'click',function(){
		_this.hide();
	});
	
	//==========================================
	//2) content top
	var div = document.createElement("div");
	div.className = "dialog-content-top";
	this.Content.appendChild(div);
	
	//row 1
	var row = document.createElement("div");
	div.appendChild(row);
	var span = document.createElement("span");
	span.className = "dialog-content-value";
	row.appendChild(span);
	this.CellTime = span;
	
	span = document.createElement("span");
	span.className = "mail-status";
	row.appendChild(span);
	this.CellStatus = span;
	
	span = document.createElement("span");
	span.className = "dialog-content-value";
	row.appendChild(span);
	this.CellType = span;
	
	span = document.createElement("span");
	span.className = "dialog-content-value";
	row.appendChild(span);
	this.CellUser = span;
	
	
	//row 2
	row = document.createElement("div");
	div.appendChild(row); 
	row.className = "mail-subject"; 
	this.CellSubject = row;
	
	
	//==========================================
	//3) content body
	div = document.createElement("div");
	div.className = "dialog-content-body";
	this.Content.appendChild(div);
	
	//Target clients
	row = document.createElement("div");
	div.appendChild(row);
	span = document.createElement("span");
	span.className = "dialog-content-label";
	span.innerHTML ="Target client(s):";
	row.appendChild(span); 
	
	row = document.createElement("div");
	div.appendChild(row);
	span = document.createElement("span");
	span.className = "dialog-content-value"; 
	row.appendChild(span); 
	this.CellClient = span;
	
	//Description
	row = document.createElement("div");
	div.appendChild(row);
	span = document.createElement("span");
	span.className = "dialog-content-label";
	span.innerHTML ="Description:";
	row.appendChild(span); 
	
	row = document.createElement("div");
	div.appendChild(row);
	span = document.createElement("span");
	span.className = "dialog-content-value"; 
	row.appendChild(span); 
	this.CellDescb = span;
	
	//Comments
	row = document.createElement("div");
	div.appendChild(row);
	span = document.createElement("span");
	span.className = "dialog-content-label";
	span.innerHTML ="Comments:";
	row.appendChild(span); 
	
	row = document.createElement("div");
	div.appendChild(row);
	div.className = "dialog-content-comment"; 
	
	
	span = document.createElement("span");
	span.className = "dialog-content-comment-l"; 
	row.appendChild(span); 
	var textInput = document.createElement("textarea");
	textInput.className = "dialog-content-textarea"; 
	span.appendChild(textInput);
	this.CellComments = textInput;
	
	
	span = document.createElement("span");
	span.className = "dialog-content-comment-r"; 
	row.appendChild(span); 
	var btn = document.createElement("a"); 
	btn.innerHTML = "OK";
	btn.className = "dialog-content-btn"; 
	span.appendChild(btn);
	this.BtnOK = btn;
	sr.EventUtil.add(this.BtnOK ,"click",function(){
		alert(_this.DataId);
	});
	
	
	sr.ModalDialog.prototype.hide =function(){
		sr.StyleUtil.set(_this.Back,"display","none");
		sr.StyleUtil.set(_this.Wrap,"display","none");
		sr.StyleUtil.set(_this.Body,"display","none");
		//StyleUtil.set(document.body,"overflow","auto");
	}
	
	
	sr.ModalDialog.prototype.show =function(){
		sr.StyleUtil.set(_this.Back,"display","block");
		sr.StyleUtil.set(_this.Wrap,"display","block");
		sr.StyleUtil.set(_this.Body,"display","block");
		//StyleUtil.set(document.body,"overflow","hidden");
	}
	
	
	sr.ModalDialog.prototype.load =function(data){
		
		this.DataId = data.id;
		this.CellTime.innerHTML = data.time;
		
		this.CellStatus.innerHTML = data.status;
		if(data.status=='Fail'){
			this.CellStatus.style.cssText ="background-color:#ff8373;";
		}else if(data.status=='Pass'){ 
			this.CellStatus.style.cssText ="background-color:#7de78a;";
		}
		
		this.CellType.innerHTML = data.type;
		this.CellUser.innerHTML = data.employee;
		this.CellSubject.innerHTML = data.subject;
		
		this.CellClient.innerHTML = data.client;
		this.CellDescb.innerHTML = data.desc;
		this.CellComments.innerHTML = data.comments; 
		
		//this.Loading.stop();
	}
	
	sr.ModalDialog.prototype.wait =function(){
		this.CellTime.innerHTML = "";
		
		this.CellStatus.innerHTML = ""; 
		this.CellStatus.style.cssText ="background-color:#7de78a;"; 
		
		this.CellType.innerHTML = "";
		this.CellUser.innerHTML = "";
		this.CellSubject.innerHTML = "";
		
		this.CellClient.innerHTML = "";
		this.CellDescb.innerHTML = "";
		this.CellComments.innerHTML = "";
		
		this.show();
		
		this.Loading.start(); 
	}
} 

window.onload = function(){
	
	
	//==============================================
	//1. View : UI component
	//=================== 
	
	Idd.View.ThemeBtn = new sr.ToggleBtn('btn-theme',function(state){
		if(state=='on'){
			document.body.className = "dark";
			sr.Chart.ThemeStyle = 'dark'; 
		}else{
			sr.Chart.ThemeStyle = '';
			document.body.className = "";
		}
		
		Idd.Func.renderAll();
	});
	
	
	//----------------------------------
	//1) Bar Chart 
	
	//- Idd count 
	Idd.View.Count.Canvas = new sr.Chart.BarV(document.getElementById("chart-idd-count"));
	
	//- Idd top client 
	//Idd.View.Clients.Canvas = new sr.ChartBarVertical(document.getElementById("chart-top-client")); 
	
	
	
	//----------------------------------
	//2) Pie chart
	
	//- Idd type 
	Idd.View.Type.Canvas = new sr.Chart.Pie(document.getElementById("chart-idd-type"));
	
	//- Idd rate
	Idd.View.Rate.Canvas = new sr.Chart.PercentPie(document.getElementById("chart-idd-rate"));
	
	
	//----------------------------------
	//3) Modal dialog
	Idd.View.DetailDialog = new sr.ModalDialog(600,320);
	
	
	//----------------------------------
	//4) Data table 
	Idd.View.Table = new sr.DataTable(document.getElementById("table-detail"),
		{
			FixCol:2,
			Height:300,
			MaxMenuNum:10,
			ColDraggable:true,
			hasNo:true,
			Title:[
				{
					id:"Time",
					name:"Time",
					width:100,
					sortable:true
				},
				{
					id:"ScanResult",
					name:"Status",
					width:40,
					filterable:true,
					filterlist:["Fail","Pass"],
					tags:[
						{
							name:"Fail",
							color:'#ff8373'
						},
						{
							name:"Pass",
							color:'#7de78a'
						}
					]
				},
				{
					id:"ContentType",
					name:"Content type",
					width:100,
					filterable:true,
					filterlist:["Recipients","Email subject","Email body","Attachment files"]
				},
				{
					id:"Team",
					name:"Team",
					width:120,
					filterable:true,
					search:true,
					filterlist:["1 Global Custody","2 AIS","3 HZ-JP","4 APAC Macro support","5 USIS","6 ECC","7 GMAS APAC","8 Global Custody","9 AIS","10 HZ-JP","11 APAC Macro support","12 USIS","13 ECC","14 GMAS APAC"]
				},
				{
					id:"User",
					name:"User",
					width:80,
					filterable:true,
					search:true
				},
				{
					id:"Subject",
					name:"Email Subject",
					width:240,
					action:function(row_id){ 
						Idd.View.DetailDialog.wait();
						Idd.View.DetailDialog.load(
							{
								id:'20200111120832_e657027_4',
								subject:'AB FF future report',
								time:'2020-01-11 12:08:32',
								type:'Attachment files',
								status:'Fail',
								client:'Goldman Sachs',
								employee:'e657027',
								desc:'Sensitive words: MTBJ; JSTB; JP Morgan;AM group bank',
								comments:'11'
							}
						);
						Idd.View.DetailDialog.show();
					}
				},
				{
					id:"Detail",
					name:"Description",
					width:300
				}
			],
			loadEvent:function(){ 
				Idd.Func.renderLog();
			}
		}
		
	);
	
	
	Idd.View.Clients.Table = new sr.DataTable(document.getElementById("chart-top-client"),{
			FixCol:0,
			Height:360,
			MaxMenuNum:10,
			ColDraggable:true,
			hasNo:false,
			hideTitle:true,
			Title:[
				{
					id:"Client Name",
					name:"Name",
					width:120,
					sortable:true,
					align:'right'
				},
				{
					id:"Amount",
					name:"Amount",
					width:380,
					datatype:'rate-bar'
				},
				{
					id:"Amount",
					name:"Amount",
					width:80,
					sortable:true
				}					
			],
			loadEvent:function(){
				Idd.Data.loadClients();
			}
		}
	);
	
	Idd.View.Clients.Page = new sr.Pagination(document.getElementById("page-clients"),
		{
			PerPage:50,
			PerPageList:[20,50,100]
		}
	);
	/**/
	
	//----------------------------------
	//5) Pagination 
	Idd.View.Page = new sr.Pagination(document.getElementById("table-page"),
		{
			PerPage:50,
			PerPageList:[20,50,100]
		}
	);
	
	
	
	//==============================================
	//2. Function to render UI component
	//===============================
	//----------------------------
	//(1) IDD Count
	
	Idd.Data.loadCount = function(data){
		
		var iddCount = Idd.View.Count;
		if(!data){
			iddCount.Loading.stop();
		}
		
		var xLineMap = []; 
		var DataList = [];
		var Title = "IDD Count";
		var Event = null;
		
		var iddDtPkr = Idd.View.DatePicker;
		if(iddDtPkr.PeriodType == 'week'){ 
			
			var tmpDate = sr.DateUtil.getDate(iddDtPkr.getStartDay()); 
			
			for(i=0;i< 7; i++){
				var cur = new Date(tmpDate);
				cur.setDate(tmpDate.getDate()+i);
				
				xLineMap.push({
					Label:sr.DateUtil.format(cur,'mm.dd') + ' (' + sr.DateUtil.getWeekName(i+1,'www') +')',
					LongName:sr.DateUtil.format(cur,'yyyy-mm-dd')
				}); 
			} 
			
			Title = 'IDD Count of ' + sr.DateUtil.format(sr.DateUtil.getWeekStartDay(iddDtPkr.BaseDate),"yyyy mmm dd")  + " - " + sr.DateUtil.format(sr.DateUtil.getWeekEndDay(iddDtPkr.BaseDate),"mmm dd");
			
			Event = function(obj){
				if(obj){
					console.log('Selected:' + obj.XName + '  ' + obj.YVal);
				}else{
					console.log('Unselect all items.');
				}
			}
			
		}else if(iddDtPkr.PeriodType == 'month'){
		
			var EndDate = sr.DateUtil.getDate(iddDtPkr.getEndDay());
			var EndDay = EndDate.getDate(); 
			
			for(i=1;i<= EndDay; i++){	
				var tmpDate = new Date(EndDate);
				tmpDate.setDate(i);
				xLineMap.push({
					Label:i,
					LongName:sr.DateUtil.format(tmpDate,'yyyy-mm-dd')
				});
			}
			Title = 'IDD Count of ' + sr.DateUtil.format(tmpDate,"yyyy mmm");
			
			
		}else if(iddDtPkr.PeriodType == 'year'){
		
			var tmpDate = sr.DateUtil.getDate(iddDtPkr.getStartDay());
			for(i=0;i< 12; i++){
				tmpDate.setMonth(i);
				xLineMap.push({
					Label:sr.DateUtil.format(tmpDate,'mmm'),
					LongName:sr.DateUtil.format(tmpDate,'yyyy mmm')
				});
			}
			 
			
			Title = 'IDD Count of ' + iddDtPkr.BaseDate.getFullYear();
		}
		
		iddCount.Canvas.draw({ 
			title: Title,
			style:'flat',
			xNames:xLineMap,
			data: data, 
			event: Event
		});
		
		iddCount.Loading.stop();
	}
	
	
	
	
	//----------------------------
	//2) IDD Type 
	Idd.Data.loadType = function(data){
		
		var iddType = Idd.View.Type;
		if(!data){
			iddCount.Loading.stop();
		}
		
		var set = {
			radius:40,
			linewidth:20,
			style:'flat',
			X:120,
			Y:75,
			//color:'red',
			event: function(obj){
				if(obj){
					console.log('Selected value:' + obj.Name);
				}else{
					console.log('Unselect all items.');
				} 
			},
			list:data
		};
		
		if(sr.Chart.ThemeStyle =='dark'){
			set.shadow={size:6,alpha:0.8};
		}
			
		iddType.Canvas.render(set);
		
		iddType.Loading.stop();
	}
	
	
	//----------------------------
	//3) IDD Rate
	
	Idd.Data.loadRate = function(data){ 
		
		var iddRate = Idd.View.Rate;
		if(!data){
			iddRate.Loading.stop();
		}
		
		var PieColor1 = "red"; 
		if(sr.Chart.ThemeStyle =='dark'){
			PieColor1 = "cyan"; 
		}
		
		
		var set = {
			radius:40,
			name:'IDD case',
			value: data.value,
			sum:data.sum,
			style:'flat', 
			color:PieColor1,
			
			linewidth:6, 
			
			event: function(obj){
				if(obj){
					console.log('Selected value:' + obj.Name);
				}else{
					console.log('Unselected ');
				}
				
			}
		}
		
		if(sr.Chart.ThemeStyle =='dark'){
			set.shadow={size:3,alpha:0.8};
		}
		
		iddRate.Canvas.render(set); 
		iddRate.Loading.stop();
	}
	
	
	//----------------------------
	//4) IDD Top Clients 
	Idd.Data.loadClients = function(data){ 
	
		var iddClients = Idd.View.Clients;
		data = data || {
				Count:10,
				List:[
					{
						id:'001',
						cols:["JP Morgan Stanley JPM","0.98","1102"]
					},
					{
						id:'002',
						cols:["JSTB","0.92","969"]
					},
					{
						id:'003',
						cols:["MTBJ","0.87","923"]
					},
					{
						id:'004',
						cols:["JP Trustee","0.84","907"] 
					},
					{
						id:'005',
						cols:["Goldman","0.81","885"]  
					},
					{
						id:'006',
						cols:["HSBC Bank","0.79","863"]
					},
					{
						id:'007',
						cols:["Black Stone","0.72","821"]
					},
					{
						id:'008',
						cols:["TCSB","0.61","816"]
					},
					{
						id:'009',
						cols:["Black Stone","0.72","821"]
					},
					{
						id:'010',
						cols:["Deutsche Bank","0.61","816"]
					}
				]
			},
			
		/*
		if(!data){
			iddClients.Loading.stop();
		} 
		
		var Event = function(obj){
			if(obj){
				console.log('Selected:' + obj.XName + '  ' + obj.YVal);
			}else{
				console.log('Unselect all items.');
			}
		} 
		*/
		
		/*
		iddClients.Canvas.draw({ 
			title: "",
			yLabels:data.name,
			sort:'desc',
			data: data.list, 
			style:'flat',
			event: Event
		});
		*/
		iddClients.Table.loadData(data.List); 
		
		var page = iddClients.Page; 
		if(!data){
			return;
		}
		
		var MaxPage = 1; 
		if(data.Count % page.PerPage){
			MaxPage = Math.floor(data.Count / page.PerPage) +1;
		}else{
			MaxPage = data.Count / page.PerPage;
		} 
		
		if(MaxPage==0) MaxPage =1;
		page.setMaxPage(MaxPage); 
		
		
		//iddClients.Loading.stop();
		
	}
	
	
	//----------------------------
	//5) Addin users
	Idd.Data.loadUsers = function(data){
		
		data = data || {
			active:0,
			all:0
		}
		
		document.getElementById("chart-user-active").innerHTML = data.active; 
		document.getElementById("chart-user-all").innerHTML = data.all;
	}
	
	
	//----------------------------
	//6) IDD table 
	Idd.Data.loadLog = function (data){ 
		data = data || {
			Count:50,
			List:[ 
				{
					id:'001',
					cols:["2020-01-11 13:22:01","Pass","","GD_HZ GPD Custody","Sally Li","Daily cash reports for 2020 Jan 11",""]
				},
				{
					id:'002',
					cols:["2020-01-11 12:08:32","Fail","Attachment files","GS_HZ_JP","Michael Meng","AB FF future report","MTBJ; JSTB; JP Morgan;AM group bank"]
				},
				{
					id:'003',
					cols:["2020-01-11 12:06:19","Fail","Email subject","GD_Global_Custody","Danica Du","Margin Instruction","MTBJ; JSTB; JP Morgan;AM group bank"]
				},
				{
					id:'004',
					cols:["2020-01-11 11:42:25","Pass","","GS_HZ_JP","Rick Chen","Security SSI ALI4 2020-01-11",""]
				},
				{
					id:'005',
					cols:["2020-01-11 10:06:49","Pass","","GS_HZ_AU","Roth Zhang","Compliance certification",""]
				} 
			],
			
			Filter:[ 
				/*
				{
					id:'Team',
					add:["15-xxxx"],
					//all:["1 Global Custody","2 AIS","3 HZ-JP","4 APAC Macro support","5 USIS","6 ECC","7 GMAS APAC","8 Global Custody","9 AIS","10 HZ-JP","11 APAC Macro support","12 USIS","13 ECC","14 GMAS APAC"]
				}
				*/
			]
			
		};
		
		
		var IddPage = Idd.View.Page;
		var IddTable = Idd.View.Table;
		if(!data){
			return;
		}
		
		var MaxPage = 1;
		if(data.Count % IddPage.PerPage){
			MaxPage = Math.floor(data.Count / IddPage.PerPage) +1;
		}else{
			MaxPage = data.Count / IddPage.PerPage;
		}
		IddPage.setMaxPage(MaxPage);
		
		
		if(MaxPage==0) MaxPage =1;
		
		IddTable.loadData(data.List);
		IddTable.setFilterList(data.Filter); 
		
	}
	
	
	
	
	//==============================================
	//3. Load Http response data into table
	
	//--------------------------------------------------
	//3.1. Load Http response data into table list 
	Idd.Func.renderLog = function(){
		
		var IddPage = Idd.View.Page;
		var IddTable = Idd.View.Table;
		
		IddTable.wait();
		
		var StartDay = Idd.View.DatePicker.getStartDay();
		var EndDay = Idd.View.DatePicker.getEndDay();
	
		var url="stat/list?sd=" + StartDay + "&ed=" + EndDay;
		
		//Set Sort & Filter condition
		var paras = {};
		paras.Sort = IddTable.getSortFields();
		paras.FilterVal= IddTable.getFilterFields();
		paras.FilterList = IddTable.getFilterList();
		paras.StartRow = (IddPage.CurPage-1) * IddPage.PerPage+1;
		paras.RecordNum = IddPage.PerPage;
		paras.isRefresh = Idd.isRefresh;  
		
		/*
		sr.HttpUtil.send(url,'POST',Idd.Data.loadLog, paras, function(err){
			console.log(err.message);
		});
		*/
		Idd.Data.loadLog();
	} 
	
	Idd.View.Page.TurnPageEvent = Idd.Func.renderLog;
	
	
	
	
	//--------------------------------------------------
	//3.2. Load Http response data into table "top clients"
	
	Idd.Func.renderClients = function(){
		
		var oPage = Idd.View.Clients.Page;
		var oTable = Idd.View.Clients.Table;
		
		oTable.wait();
		
		
		var StartDay = Idd.View.DatePicker.getStartDay();
		var EndDay = Idd.View.DatePicker.getEndDay();
	
		var url="stat/clients?sd=" + StartDay + "&ed=" + EndDay;
		
		//Set Sort & Filter condition
		var paras = {};
		paras.StartRow = (oPage.CurPage-1) * oPage.PerPage+1;
		paras.RecordNum = oPage.PerPage;
		paras.isRefresh = Idd.isRefresh;  
		
		/*
		sr.HttpUtil.send(url,'POST',Idd.Data.loadClients, paras, function(err){
			console.log(err.message);
		});
		*/
		
		setTimeout(function(){console.log("waiting...");Idd.Data.loadClients()},500);
		//Idd.Data.loadClients();
	} 
	
	Idd.View.Clients.Page.TurnPageEvent = Idd.Func.renderClients;
	
	
	//====================================
	//render all data
	Idd.Func.renderAll = function(data){ 
		
		Idd.isRefresh = true; 
		Idd.View.ThemeBtn.activate(false); 
		
		//wait loading animation
		Idd.View.Count.Loading.start();
		Idd.View.Rate.Loading.start();
		Idd.View.Type.Loading.start();
		//Idd.View.Clients.Loading.start(); 
		Idd.View.Clients.Table.wait();
		
		
		//clear canvas
		Idd.View.Count.Canvas.clear();
		Idd.View.Rate.Canvas.clear();
		Idd.View.Type.Canvas.clear();
		
		
		var StartDay = Idd.View.DatePicker.getStartDay();
		var EndDay = Idd.View.DatePicker.getEndDay(); 
		var Period = Idd.View.DatePicker.PeriodType || ""; 
		var Eid = sr.CookieUtil.set('idd-user') || "";
		
		var url="stat/chart?p="+ Period +"&sd=" + StartDay + "&ed=" + EndDay; 
		/*
		sr.HttpUtil.send(url,'GET',function(data){ 
		});
		*/
		
		var BarColor = ["deep-blue"];
		var TypeColors = ["deep-blue","green","red","orange"];
		if(sr.Chart.ThemeStyle =='dark'){
			BarColor = ["cyan","green"];
			TypeColors = ["apple-green","orange","cyan","rose-red"];
		}
		
		
		var data = {
			Count:[
				{
					category:"Total",
					list: [35,130,118,28,120,40,53,80,101,125,105,180,176,122,95,109,108,81,150,125,120,80,93,115,102,160,126,152,90,32,68],
					color: BarColor[0],
					gradient:BarColor[1]
				},
				/*
				{
					category:"Me",
					list: [15,60,38,58,120,14,23,20,31,65,],
					color:"green"
				} 
				*/
			],
			Rate: {
				value: 37,
				sum:165
			},
			Type:[
				{
					name:'Email Subject',
					value: 30,
					color:TypeColors[0]
				},
				
				{
					name:'Email Body',
					value: 36,
					color:TypeColors[1]
				},
				{
					name:'Attachment files',
					value: 19,
					color:TypeColors[2]
				},  
				{
					name:'Recipients',
					value: 23,
					color:TypeColors[3]
				},
			],
			/*
			Clients:
			{
				list: [
					{
						category:"Email number",
						list: [90,112,121,103,158,180,147,28,83,21], 
						color:"deepblue"
					}
				],
				name: ["JP Morgan 11 22C 3433 344 CC DD EE FF GG HH II JJ KK",
					"Goldman Sachs", "MTBJ", "JSTB", "HSBC", "CICC","CITI Bank",
					"AB Capital","Deutsche Bank","UBS"
				]
			},
			*/
			Users:{
				active:12,
				all:93
			}
		}
		
		Idd.Data.loadCount(data.Count);
		Idd.Data.loadRate(data.Rate);
		//Idd.Data.loadClients(data.Clients);
		Idd.Data.loadType(data.Type); 
		Idd.Data.loadUsers(data.Users);
		
		//2) Table
		Idd.View.Table.resetFilter();
		Idd.View.Page.CurPage = 1; 
		Idd.Func.renderLog();
		Idd.Func.renderClients();
		
		Idd.View.ThemeBtn.activate(true); 
		Idd.isRefresh = false;
	} 
	
	
	//==============================================
	//5. Date picker 
	Idd.View.DatePicker = new sr.DatePeriodPicker(document.getElementById("date-box"),
			'week', 1, Idd.BaseDay,Idd.Func.renderAll); 
	
	
	//==============================================
	//6. Chart type toggle tab
	Idd.View.ChartTab = new sr.TabMenu("period-type",[
		{
			name:"Week",
			event:function(){
				Idd.View.DatePicker.setPeriodType("week");
			}
		},{
			name:"Month",
			event:function(){
				Idd.View.DatePicker.setPeriodType("month");
			}
		},{
			name:"Year",
			event:function(){
				Idd.View.DatePicker.setPeriodType("year"); 
			}
		}
	]);
	
	
	
	
	//===========================================
	//7. Login panel
	Idd.Data.loadUserInfo = function(data){
		data = data || {
			Id:'e657027',
			Name:'Li, Shiru (Sally)',
			Title:'Senior Associate',
			Team:'ATPS - APAC Macro support',
			Role:'Registered'
		}
		
		ele = document.getElementById("user-name");
		if(data){
			if(data.Role=='Non-Registered'){
				ele.innerHTML = data.Id;
				document.getElementById("user-menu-detail").innerHTML = "<p style='font-weight:600;'>"+ data.Id + "</p><p>" + data.Role + "</p>";
				sr.StyleUtil.set(document.getElementById("btn-logoff"),"display","none");
				sr.StyleUtil.set(document.getElementById("btn-login"),"display","block");
			}else{
				ele.innerHTML = data.Name;
				document.getElementById("user-menu-detail").innerHTML = "<p style='font-weight:600;'>"+ data.Name + "</p><p>" + data.Id + "</p><p>" + data.Title + "</p><p>" + data.Team + "</p>";
				sr.StyleUtil.set(document.getElementById("btn-logoff"),"display","block");
				sr.StyleUtil.set(document.getElementById("btn-login"),"display","none");
			}
		}else{
			ele.innerHTML = "Guest";
			document.getElementById("user-menu-detail").innerHTML = "Welcome!";
			sr.StyleUtil.set(document.getElementById("btn-logoff"),"display","none");
			sr.StyleUtil.set(document.getElementById("btn-login"),"display","block"); 
			
		}
		 
	}
	
	Idd.Func.login = function(data){ 
		var Eid = sr.CookieUtil.set('idd-user') || '';
		url="user?i=" + Eid + "&d=Web"; 
		//sr.HttpUtil.send(url,'GET', Idd.Data.loadUserInfo);
		Idd.Data.loadUserInfo()
	}
	
	Idd.Func.login();
	
	
	//show menu 
	sr.EventUtil.add(document.getElementById("user-box"),
		"click",
		function(e){
			var menu = document.getElementById("user-menu"); 
			sr.StyleUtil.set(menu,"display","block"); 
			sr.StyleUtil.set(menu,"left",this.offsetLeft + "px"); 
			
			sr.ClassUtil.add(this,"activate");
			
			if(e.stopPropagation){
				e.stopPropagation();//阻止冒泡
			}else{
				e.cancelBubble=true;
			}
		}
	);
	 
	sr.EventUtil.add(document.getElementById("user-menu"),
		"click",
		function(e){ 
			if(e.stopPropagation){
				e.stopPropagation();//阻止冒泡
			}else{
				e.cancelBubble=true;
			}
			
		}
	);
	
	
	//log off 
	sr.EventUtil.add(document.getElementById("btn-logoff"),
		"click",function(e){
		
		sr.StyleUtil.set(document.getElementById("user-menu"),"display","none");
		sr.CookieUtil.set('idd-user','');
		
		//StyleUtil.set(ele,"display","none");
		document.getElementById("user-menu-detail").innerHTML = "Welcome";
		
		sr.StyleUtil.set(document.getElementById("btn-logoff"),"display","none");
		sr.StyleUtil.set(document.getElementById("btn-login"),"display","block");
		document.getElementById("user-name").innerHTML = "Guest";
		sr.ClassUtil.del(document.getElementById("user-box"),"activate");
		
		
		//window.location.href = "logoff";
		Idd.Func.renderAll();
	});
	
	
	//log in 
	sr.EventUtil.add(document.getElementById("btn-login"),"click",function(e){
		window.location.href="login.html";
	});
	
	
	sr.EventUtil.add(document,"click",function(e){
		sr.StyleUtil.set(document.getElementById("user-menu"),"display","none"); 
		sr.ClassUtil.del(document.getElementById("user-box"),"activate");
	});
	
	
	sr.EventUtil.add(window,"resize",function(e){ 
		sr.StyleUtil.set(document.getElementById("user-menu"),"display","none");
	});
	
}