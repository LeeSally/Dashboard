	

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
	}
	
} 

window.onload = function(){
	
	//==============================================
	//1. View : UI component
	//=================== 
	
	//----------------------------------
	//1) Bar Chart 
	
	//- Idd count 
	Idd.View.Count.Canvas = new sr.ChartBar(document.getElementById("chart-idd-count"));
	
	//- Idd top client 
	Idd.View.Clients.Canvas = new sr.ChartBarVertical(document.getElementById("chart-top-client"));
	
	
	//----------------------------------
	//2) Pie chart
	
	//- Idd type 
	Idd.View.Type.Canvas = new sr.ChartPie(document.getElementById("chart-idd-type"));
	
	//- Idd rate
	Idd.View.Rate.Canvas = new sr.ChartPercentPie(document.getElementById("chart-idd-rate"));
	
	
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
				Idd.Func.renderTable;
			}
		}
		
	);
	
	
	
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
	//=================
	//----------------------------
	//(1) IDD Count
	
	Idd.Data.loadCount = function(data){
	
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
		
		var iddCount = Idd.View.Count;
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
		
		iddType.Canvas.render({
			radius:40,
			linewidth:20,
			style:'flat',
			X:120,
			Y:75, 
			event: function(obj){
				if(obj){
					console.log('Selected value:' + obj.Name);
				}else{
					console.log('Unselect all items.');
				} 
			},
			list:data
		});
		
		iddType.Loading.stop();
	}
	
	
	//----------------------------
	//3) IDD Rate
	
	Idd.Data.loadRate = function(data){ 
		
		var iddRate = Idd.View.Rate;
		
		iddRate.Canvas.render({
			radius:40,
			name:'IDD case',
			value: data.value,
			sum:data.sum,
			style:'flat',
			color:'red',
			linewidth:6, 
			
			event: function(obj){
				if(obj){
					console.log('Selected value:' + obj.Name);
				}else{
					console.log('Unselected ');
				}
				
			}
		}); 
		
		iddRate.Loading.stop();
	}
	
	
	//----------------------------
	//4) IDD Top Clients 
	Idd.Data.loadClients = function(data){ 
		var Event = function(obj){
			if(obj){
				console.log('Selected:' + obj.XName + '  ' + obj.YVal);
			}else{
				console.log('Unselect all items.');
			}
		} 
		
		var iddClients = Idd.View.Clients;
		iddClients.Canvas.draw({ 
			title: "",
			yLabels:data.name,
			sort:'desc',
			data: data.list, 
			style:'flat',
			event: Event
		});
		
		iddClients.Loading.stop();
		
	}
	
	
	//----------------------------
	//4) Addin users
	Idd.Data.loadUsers = function(data){
		document.getElementById("chart-user-active").innerHTML = data.active; 
		document.getElementById("chart-user-all").innerHTML = data.all;
	}
	
	
	//----------------------------
	//5) IDD table 
	Idd.Data.loadTable = function (data){ 
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
		
		var MaxPage = 1;
		var IddPage = Idd.View.Page;
		var IddTable = Idd.View.Table;
		
		if(data.Count % IddPage.PerPage){
			MaxPage = Math.floor(data.Count / IddPage.PerPage) +1;
		}else{
			MaxPage = data.Count / IddPage.PerPage;
		}
		
		if(MaxPage==0) MaxPage =1;
		
		IddTable.loadData(data.List);
		IddTable.setFilterList(data.Filter);
		IddPage.setMaxPage(MaxPage);
		
	}
	
	
	
	
	//==============================================
	//4. Load Http response data into chart
	
	Idd.Func.renderTable = function(){
		Idd.View.Table.wait();
		
		var StartDay = Idd.View.DatePicker.getStartDay();
		var EndDay = Idd.View.DatePicker.getEndDay(); 
		var Eid = sr.CookieUtil.set('idd-user');
	
		var url="IDDList?SDay=" + StartDay + "&EDay=" + EndDay + '&eid=' + Eid;
		
		//Set Sort & Filter condition
		var paras = {};
		paras.Sort = Idd.View.Table.getSortFields();
		paras.FilterVal= Idd.View.Table.getFilterFields();
		paras.FilterList = Idd.View.Table.getFilterList();
		paras.StartRow = (Idd.View.Page.CurPage-1) * Idd.View.Page.PerPage+1;
		paras.RecordNum = Idd.View.Page.PerPage;
		paras.isRefresh = Idd.isRefresh; 
		
		console.log(paras); 
		sr.HttpUtil.send(url,'POST',Idd.Data.loadTable, JSON.stringify(paras));
		
	} 
	
	Idd.View.Page.TurnPageEvent = Idd.Func.renderTable;
	
	
	Idd.Func.renderAll = function(data){
		Idd.isRefresh = true; 
		
		Idd.View.Count.Loading.start();
		Idd.View.Rate.Loading.start();
		Idd.View.Type.Loading.start();
		Idd.View.Clients.Loading.start(); 
		
		var StartDay = Idd.View.DatePicker.getStartDay();
		var EndDay = Idd.View.DatePicker.getEndDay(); 
		var Period = Idd.View.DatePicker.PeriodType || ""; 
		var Eid = sr.CookieUtil.set('idd-user');
		
		var url="IDDChart?Perid="+ Period +"&SDay=" + StartDay + "&EDay=" + EndDay + '&eid=' + Eid;
		
		sr.HttpUtil.send(url,'GET',function(data){
			data = data ||{
				Count:[
					{
						category:"Total",
						list: [35,130,118,28,120,40,53,80,101,125,105,180,176,122,95,109,108,81,150,125,120,80,93,115,102,160,126,152,90,32,68],
						color:"deepblue"
					} 
				],
				Rate: {
					value: 37,
					sum:165
				},
				Type:[
					{
						name:'Email Subject',
						value: 30,
						color:'deepblue'
					},
					
					{
						name:'Email Body',
						value: 36,
						color:'green'
					},
					{
						name:'Attachment files',
						value: 19,
						color:'red'
					},  
					{
						name:'Recipients',
						value: 23,
						color:'orange'
					},
				],
				Clients:{
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
				Users:{
					active:12,
					all:93
				}
			}
			
			Idd.Data.loadCount(data.Count);
			Idd.Data.loadRate(data.Rate);
			Idd.Data.loadClients(data.Clients);
			Idd.Data.loadType(data.Type); 
			Idd.Data.loadUsers(data.Users);
		});
		
		//2) Table
		Idd.View.Table.resetFilter();
		Idd.View.Page.CurPage = 1; 
		Idd.Func.renderTable();
		
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
			Team:'ATPS - APAC Macro support'
		}
		 
		document.getElementById("user-name").innerHTML = data.Name; 
		document.getElementById("user-menu-detail").innerHTML = "<p style='font-weight:600;'>"+ data.Name + "</p><p>" + data.Id + "</p><p>" + data.Title + "</p><p>" + data.Team + "</p>";
		
	}
	
	Idd.Func.login = function(data){ 
		var Eid = sr.CookieUtil.set('idd-user');
		url="UserInfo?eid" + Eid; 
		sr.HttpUtil.send(url,'GET', Idd.Data.loadUserInfo);
	}
	
	Idd.Func.login();
	
	
	//show menu 
	sr.EventUtil.add(document.getElementById("user-box"),
		"click",
		function(e){
			var menu = document.getElementById("user-menu"); 
			sr.StyleUtil.set(menu,"display","block"); 
			sr.StyleUtil.set(menu,"left",this.offsetLeft + "px"); 
			
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
		
		//window.location.href = "login.html";
		Idd.Func.renderAll();
	});
	
	
	//log in 
	sr.EventUtil.add(document.getElementById("btn-login"),"click",function(e){
		window.location.href="login.html";
	});
	
	
	sr.EventUtil.add(document,"click",function(e){
		sr.StyleUtil.set(document.getElementById("user-menu"),"display","none"); 
	});
	
	
	sr.EventUtil.add(window,"resize",function(e){ 
		sr.StyleUtil.set(document.getElementById("user-menu"),"display","none");
	});
	
}