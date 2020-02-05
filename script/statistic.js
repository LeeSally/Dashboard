	

function ModalDialog(width,height){
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
	EventUtil.add(wrap,'click',function(){
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
	
	EventUtil.add(this.Body,'click',function(e){ 
		if(e.stopPropagation){
			e.stopPropagation();//阻止冒泡
		}else{
			e.cancelBubble=true;
		}
	});
	
	
	//close button
	var btnClose = document.createElement("div"); 
	var i = document.createElement("i");
	btnClose.appendChild(i);
	btnClose.className = "dialog-btn-close";
	
	this.Body.appendChild(btnClose);
	
	var _this = this;
	EventUtil.add(btnClose,'click',function(){
		_this.hide();
	});
	
	
	
	ModalDialog.prototype.hide =function(){
		StyleUtil.set(_this.Back,"display","none");
		StyleUtil.set(_this.Wrap,"display","none");
		StyleUtil.set(_this.Body,"display","none");
		//StyleUtil.set(document.body,"overflow","auto");
	}
	
	
	ModalDialog.prototype.show =function(){
		StyleUtil.set(_this.Back,"display","block");
		StyleUtil.set(_this.Wrap,"display","block");
		StyleUtil.set(_this.Body,"display","block");
		//StyleUtil.set(document.body,"overflow","hidden");
	}
	
	
	ModalDialog.prototype.load =function(data){
		
		//content
		var html = "";
		
		html = "<div class=\"dialog-content-top\">";
		html += "<div><span class=\"dialog-content-value\">" + data.time + "</span><span class=\"mail-status\">" + data.status + "</span><span class=\"dialog-content-value\">" + data.type + "</span><span class=\"dialog-content-value\">" + data.employee + "</span></div>";
		html += "<div class=\"mail-subject\">" + data.subject + "</div>";
		html += "</div>";
		
		html += "<div class=\"dialog-content-body\">";
		html += "<div><span class=\"dialog-content-label\">Target client(s):</span></div>";
		html += "<div><span class=\"dialog-content-value\">" + data.client + "</span></div>";
		html += "<div><span class=\"dialog-content-label\">Description:</span></div>"; 
		html += "<div><span class=\"dialog-content-value\">" + data.desc + "</span></div>"; 
		html += "<div><span class=\"dialog-content-label\">Comments:</span></div>";
		html += "<div  class=\"dialog-content-comment\"><span class=\"dialog-content-comment-l\"><textarea class=\"dialog-content-textarea\"></textarea></span><span class=\"dialog-content-comment-r\"><a class=\"dialog-content-btn\"/>OK</a></span></div>"; 
		html += "</div>"; 
		this.Content.innerHTML = html;
	}
	
}

window.onload = function(){
	
	//==============================================
	//1. Chart and table component
	//===================
	var ChartList = [];
	var isRefresh = false;
	
	//----------------------------------
	//1) Bar Chart - IDD Sum Number
	
	//- Idd count
	var ele = document.getElementById("chart-idd-count"); 
	ChartList[0] = new ChartBar(ele);
	
	//- Idd top client
	ele = document.getElementById("chart-top-client"); 
	ChartList[3] = new ChartBarVertical(ele);
	
	
	//----------------------------------
	//2) Pie chart
	
	//- Idd type
	ele = document.getElementById("chart-idd-type"); 
	ChartList[1] = new ChartPie(ele);
	
	//- Idd rate
	ele = document.getElementById("chart-idd-rate"); 
	ChartList[2] = new ChartPercentPie(ele);
	
	//- external email rate
	var oChart4 = new ChartPercentPie(document.getElementById("ChartExMail"));
	
	
	
	//----------------------------------
	//3) Modal dialog
	var dialog = new ModalDialog(600,320);
	
	
	//----------------------------------
	//4) Data table
	ele = document.getElementById("table-detail");
	var TableIdd = new DataTable(ele,{
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
							color:'#ff7d7d'
						},
						{
							name:"Pass",
							color:'#d6f571'
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
					id:"Subject",
					name:"Email Subject",
					width:240,
					action:function(row_id){ 
						dialog.load(
							{
								subject:'AB FF future report',
								time:'2020-01-11 12:08:32',
								type:'Attachment files',
								status:'Fail',
								client:'Goldman Sachs',
								employee:'e657027',
								desc:'Sensitive words: MTBJ; JSTB; JP Morgan;AM group bank'
							}
						);
						dialog.show();
					}
				},
				{
					id:"Detail",
					name:"Description",
					width:300
				}
			],
			loadEvent:function(){ 
				requestHttp("detail",loadTable);
			}
		}
		
	);
	
	
	
	//----------------------------------
	//5) Pagination
	ele = document.getElementById("table-page");
	var TablePage = new Pagination(ele,
		{
			PerPage:50,
			PerPageList:[20,50,100]
		}
	);
	
	
	
	//==============================================
	//2. Common function 
	//===================
	
	//----------------------------
	//1) Base Date 
	var BaseDay = new Date();
	var CustomDay = new Date(BaseDay);
	
	//----------------------------
	//2) Send a HTTP Data request
	function requestHttp(type,func,StartDay,EndDay){
		
		var xmlReq;
		StartDay = StartDay || DatePicker.getStartDay();
		EndDay = EndDay || DatePicker.getEndDay();
		
		var eid = CookieUtil.set('idduid');
		
		if(window.XMLHttpRequest){//直接支持ajax
			xmlReq=new XMLHttpRequest();
		}else{//不直接支持ajax
			xmlReq=new ActiveObject('Microsoft.XMLHTTP');
		}
		
		xmlReq.onreadystatechange=function(){
			// get response
			if (xmlReq.readyState==4&&xmlReq.status==200) {
				var data = xmlReq.responseText;
				var json = JSON.parse(data);
				func(json);
				
			}else{
				func();
			}
		};
		

		//创建异步get请求
		var url="";
		var isPost = false;
		var paras =""; 
		
		if(type=='count'){
			url="IDDCount?StartDay=" + StartDay + "&EndDay=" + EndDay + '&User=' + eid;
		}else if(type=='rate'){
			url="IDDRate?StartDay=" + StartDay + "&EndDay=" + EndDay + '&User=' + eid;
		}else if(type=='type'){
			url="IDDType?StartDay=" + StartDay + "&EndDay=" + EndDay + '&User=' + eid;
		}else if(type=='client'){
			url="TopClient?StartDay=" + StartDay + "&EndDay=" + EndDay + '&User=' + eid;
		}else if(type=='detail'){
			
			TableIdd.wait();
			
			isPost = true;
			url="IddDetail?StartDay=" + StartDay + "&EndDay=" + EndDay + '&User=';
			
			//get sort & filter 
			paras = {};
			paras.sort = TableIdd.getSortFields();
			paras.filter= TableIdd.getFilterFields();
			paras.startRow = (TablePage.CurPage-1) * TablePage.PerPage+1;
			paras.endRow = TablePage.CurPage * TablePage.PerPage;
			
			console.log(paras);
			
		}else if(type=='login'){
			url="IDDLogin?User=" + eid;
		}
		
		
		func();
		
		if(isPost){
			//xmlReq.open("POST",url,true);
			//xmlReq.setRequestHeader('content-type', 'application/json');
			//xmlReq.send(paras); 
		}else{
			//xmlReq.open("GET",url,true);
			//xmlReq.send(); 
		} 
		
	}
	
	
	
	//==============================================
	//3. Function to render component
	//=================
	//----------------------------
	//(1) IDD Count  
	function loadIDDCount(data){
	
		var xLineMap = []; 
		var DataList = [];
		var Title = "IDD Count";
		var Event = null;
		
		if(DatePicker.PeriodType == 'week'){ 
			
			var tmpDate = DateUtil.getDate(DatePicker.getStartDay()); 
			
			for(i=0;i< 7; i++){
				var cur = new Date(tmpDate);
				cur.setDate(tmpDate.getDate()+i);
				
				xLineMap.push({
					Label:DateUtil.format(cur,'mm.dd') + ' (' + DateUtil.getWeekName(i+1,'www') +')',
					LongName:DateUtil.format(cur,'yyyy-mm-dd')
				}); 
			}
			
			//data value
			DataList = [
				{
					category:"Total",
					list: [90,112,121,103,158,180,152],
					color:"blue"
				} 
				,
				/*
				{
					category:"My team",
					list:[5,15,6,10,21,26,36],
					color:"red"
				}
				*/
			];
			
			Title = 'IDD Count of ' + DateUtil.format(DateUtil.getWeekStartDay(DatePicker.BaseDate),"yyyy mmm dd")  + " - " + DateUtil.format(DateUtil.getWeekEndDay(DatePicker.BaseDate),"mmm dd");
			
			Event = function(obj){
				if(obj){
					console.log('Selected:' + obj.XName + '  ' + obj.YVal);
				}else{
					console.log('Unselect all items.');
				}
			}
			
		}else if(DatePicker.PeriodType == 'month'){
		
			var EndDate = DateUtil.getDate(DatePicker.getEndDay());
			var EndDay = EndDate.getDate(); 
			
			for(i=1;i<= EndDay; i++){	
				var tmpDate = new Date(EndDate);
				tmpDate.setDate(i);
				xLineMap.push({
					Label:i,
					LongName:DateUtil.format(tmpDate,'yyyy-mm-dd')
				});
			}

			//data value
			var DataList = [
				{
					category:"Total",
					list: [95,110,118,98,120,80,50,80,101,125,105,180,176,122,95,109,108,81,150,125,120,80,93,115,102,160,126,152,90,32,68],
					color:"blue"
				} 
				/*
				,
				{
					category:"My team",
					list:[8,18,10,12,18,26,36,8,12,10,12,20,30,30,16,11,6,6,20,17,23,17,19,20,16,22,10,12],
					color:"gray"
				}
				*/
			];
				
			Title = 'IDD Count of ' + DateUtil.format(tmpDate,"yyyy mmm");
			
			
		}else if(DatePicker.PeriodType == 'year'){
		
			var tmpDate = DateUtil.getDate(DatePicker.getStartDay());
			for(i=0;i< 12; i++){
				tmpDate.setMonth(i);
				xLineMap.push({
					Label:DateUtil.format(tmpDate,'mmm'),
					LongName:DateUtil.format(tmpDate,'yyyy mmm')
				});
			}
			
			//data value
			var DataList = [
				{
					category: "Total",
					list: [5210,3752,3580,3987,2105,4872,6638,5085,3614,5953,7523,6328],
					color:"blue"
				}
				,
				{
					category: "Me", 
					list:[502,683,416,729,852,871,637,714,967,1021,902,1168],
					color:"green"
				}
			];
			
			Title = 'IDD Count of ' + DatePicker.BaseDate.getFullYear();
		}
		
		
		ChartList[0].draw({ 
			title: Title,
			style:'flat',
			xNames:xLineMap,
			data: DataList, 
			event: Event
		});
		
		LoadList[0].stop();
	}
	
	
	
	
	//----------------------------
	//2) IDD Type 
	function loadIDDType(data){
		
		data = [
			{
				name:'Email Subject',
				value: 30,
				color:'purple'
			},
			
			{
				name:'Email Body',
				value: 36,
				color:'green'
			},
			{
				name:'Attachment files',
				value: 19,
				color:'blue'
			},  
			{
				name:'Recipients',
				value: 23,
				color:'gray'
			},
		];
		
		ChartList[1].render({
			radius:40,
			linewidth:20,
			style:'flat',
			X:110,
			event: function(obj){
				if(obj){
					console.log('Selected value:' + obj.Name);
				}else{
					console.log('Unselect all items.');
				} 
			},
			list:data
		});
		
		LoadList[1].stop();
	}
	
	
	//----------------------------
	//3) IDD Rate 
	function loadIDDRate(data){
		data = {
			value: 37,
			sum:165
		};
		
		ChartList[2].render({
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
		
		LoadList[2].stop();
	}
	
	
	//----------------------------
	//4) IDD Top Client 
	function loadTopClient(data){ 
		
		//data value
		data = data || {};
		data.list = [
			{
				category:"Email number",
				list: [90,112,121,103,158,180,147,28,83,21], 
				color:"purple"
			}
		];
		
		data.name = ["JP Morgan", "Goldman Sachs", "MTBJ", "JSTB", "HSBC", "CICC","CITI Bank","AB Capital","Deutsche Bank","UBS"];
		
		var Event = function(obj){
			if(obj){
				console.log('Selected:' + obj.XName + '  ' + obj.YVal);
			}else{
				console.log('Unselect all items.');
			}
		} 
		
		
		ChartList[3].draw({ 
			title: "Top 10 Client",
			yLabels:data.name,
			sort:'desc',
			data: data.list, 
			style:'flat',
			event: Event
		});
		
		LoadList[3].stop();
		
	}
	
	
	//----------------------------
	//5) IDD detailed table
	function loadTable(data){

		data = data || {
			count:50,
			list:[
			
				{
					id:'001',
					cols:["2020-01-11 13:22:01","Pass","","GD_HZ GPD Custody","Daily cash reports for 2020 Jan 11",""]
				},
				{
					id:'002',
					cols:["2020-01-11 12:08:32","Fail","Attachment files","GS_HZ_JP","AB FF future report","MTBJ; JSTB; JP Morgan;AM group bank"]
				},
				{
					id:'003',
					cols:["2020-01-11 12:06:19","Fail","Email subject","GD_Global_Custody","Margin Instruction","MTBJ; JSTB; JP Morgan;AM group bank"]
				},
				{
					id:'004',
					cols:["2020-01-11 11:42:25","Pass","","GS_HZ_JP","Security SSI ALI4 2020-01-11",""]
				},
				{
					id:'005',
					cols:["2020-01-11 10:06:49","Pass","","GS_HZ_AU","Compliance certification",""]
				}
			/**/	
			],
			
			
			filter:[
				/*
				{	id:'team',
					list:["1 Global Custody","2 AIS","3 HZ-JP","4 APAC Macro support","5 USIS","6 ECC","7 GMAS APAC","8 Global Custody","9 AIS","10 HZ-JP","11 APAC Macro support","12 USIS","13 ECC","14 GMAS APAC"]
				}
				*/
			]
			
		};
		
		var MaxPage = 1;
		if(data.count % TablePage.PerPage){
			MaxPage = Math.floor(data.count / TablePage.PerPage) +1;
		}else{
			MaxPage = data.count / TablePage.PerPage;
		}
		
		if(MaxPage==0) MaxPage =1;
		
		TableIdd.loadData(data.list);
		TableIdd.setFilterList(data.filter);
		TablePage.setMaxPage(MaxPage);
		
	}
	
	
	TablePage.TurnPageEvent = function(){
		requestHttp('detail',loadTable);
	}
	
	
	//==============================================
	//4. Load Http response data into chart 
	function renderData(){
		isRefresh = true;
		
		TableIdd.resetFilter();
		TablePage.CurPage = 1;
		
		requestHttp('count',loadIDDCount);
		requestHttp('type',loadIDDType);
		requestHttp('rate',loadIDDRate);
		requestHttp('client',loadTopClient); 
		requestHttp('detail',loadTable);
		
		oChart4.render({
			//title:'External email %',
			radius:40,
			name:'IDD case',
			value: 127,
			sum:165,
			style:'flat',
			color:'blue',
			linewidth:6, 
			
			event: function(obj){
				if(obj){
					console.log('Selected value:' + obj.Name);
				}else{
					console.log('Unselected ');
				}
				
			}
		});
		
		isRefresh = false;
	} 
	
	
	//==============================================
	//5. Date picker 
	var DatePicker = new DatePeriodPicker(document.getElementById("date-box"),'week',1,BaseDay,renderData); 
	
	
	//==============================================
	//6. Chart type toggle tab
	var ChartTab = new TabMenu("period-type",[
		{
			name:"Week",
			event:function(){
				DatePicker.setPeriodType("week");
			}
		},{
			name:"Month",
			event:function(){
				DatePicker.setPeriodType("month");
			}
		},{
			name:"Year",
			event:function(){
				DatePicker.setPeriodType("year"); 
			}
		}
	]);
	
	
	
	
	//===========================================
	//7. Login panel
	function loadUserInfo(data){
		data = data || {
			eid:'e657027',
			name:'Li, Shiru (Sally)',
			title:'Senior Associate',
			team:'ATPS - APAC Macro support'
		}
		
		var ele = document.getElementById("user-name");
		ele.innerHTML = data.name;
		
		ele = document.getElementById("user-menu-detail");
		ele.innerHTML = "<p style='font-weight:600;'>"+ data.name + "</p><p>" + data.eid + "</p><p>" + data.title + "</p><p>" + data.team + "</p>";
		
	}
	
	requestHttp('login',loadUserInfo);
	
	
	//show menu
	ele = document.getElementById("user-box");
	EventUtil.add(ele,"click",function(e){
		var menu = document.getElementById("user-menu"); 
		StyleUtil.set(menu,"display","block"); 
		StyleUtil.set(menu,"left",this.offsetLeft + "px"); 
		
		if(e.stopPropagation){
			e.stopPropagation();//阻止冒泡
		}else{
			e.cancelBubble=true;
		}
	});
	
	ele = document.getElementById("user-menu");
	EventUtil.add(ele,"click",function(e){ 
		if(e.stopPropagation){
			e.stopPropagation();//阻止冒泡
		}else{
			e.cancelBubble=true;
		}
		
	});
	
	
	
	//log off
	ele = document.getElementById("btn-logoff");
	EventUtil.add(ele,"click",function(e){
		
		ele = document.getElementById("user-menu"); 
		StyleUtil.set(ele,"display","none"); 
		
		CookieUtil.set('idduid','guest');
		
		
		var ele = document.getElementById("user-menu-detail");
		StyleUtil.set(ele,"display","none");
		
		
		ele = document.getElementById("btn-logoff");
		StyleUtil.set(ele,"display","none");
		
		
		ele = document.getElementById("btn-login");
		StyleUtil.set(ele,"display","block");
		
		ele = document.getElementById("user-name");
		ele.innerHTML = "Guest";
		
		//window.location.href = "Login.html";
		renderData();
	});
	
	
	//log in
	ele = document.getElementById("btn-login");
	EventUtil.add(ele,"click",function(e){
		window.location.href="Login.html";
	});
	
	
	EventUtil.add(document,"click",function(e){
		var menu = document.getElementById("user-menu"); 
		StyleUtil.set(menu,"display","none"); 
	});
	
	
	EventUtil.add(window,"resize",function(e){
		var menu = document.getElementById("user-menu"); 
		StyleUtil.set(menu,"display","none");
	});
	
}