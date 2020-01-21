window.onload = function(){
	var ChartList = [];
	
	//==============================================
	//1. Web component
	
	//----------------------------------
	//1) Bar Chart - IDD Sum Number
	
	var element = document.getElementById("chart-idd-count"); 
	ChartList[0] = new ChartBar(element);
	
	element = document.getElementById("chart-top-client"); 
	ChartList[3] = new ChartBarVertical(element);
	
	
	//----------------------------------
	//2) Pie chart
	element = document.getElementById("chart-idd-type"); 
	ChartList[1] = new ChartPie(element);
	
	
	element = document.getElementById("chart-idd-rate"); 
	ChartList[2] = new ChartPercentPie(element);
	
	
	var oChart4 = new ChartPercentPie(document.getElementById("ChartExMail"));
	
	
	//----------------------------------
	//3) table
	ele = document.getElementById("table-test");
	var TableIdd = new DataTable(ele,{
			FixCol:2,
			Height:300,
			MaxMenuNum:10,
			ColDraggable:true,
			Title:[
				{
					id:"Time",
					name:"Time",
					width:92,
					sortable:true,
				},
				{
					id:"ScanResult",
					name:"Status",
					width:40,
					filterable:true,
					filterlist:["Fail","Pass"]
				},
				{
					id:"ContentType",
					name:"Content type",
					width:92,
					filterable:true,
					filterlist:["Recipients","Email subject","Email body","Attachment files"]
				},
				{
					id:"Team",
					name:"Team",
					width:124,
					filterable:true,
					search:true,
					filterlist:["1 Global Custody","2 AIS","3 HZ-JP","4 APAC Macro support","5 USIS","6 ECC","7 GMAS APAC","8 Global Custody","9 AIS","10 HZ-JP","11 APAC Macro support","12 USIS","13 ECC","14 GMAS APAC"]
				},
				{
					id:"Subject",
					name:"Email Subject",
					width:240,
					clickevent:function(id){
						
					}
				},
				
				{
					id:"Detail",
					name:"Description",
					width:200,
				},
				/**/
				
			],
			event:function(){
				requestHttp("detail",loadTable);
			}
		},
		
	);
	
	
	ele = document.getElementById("table-page");
	var TablePage = new Pagination(ele,
		{
			PerPage:50,
			PerPageList:[20,50,100],
		}
	);
	
	
	
	//==============================================
	//2. Common function 
	
	//----------------------------
	//1) Date
	var BaseDay = new Date();
	var CustomDay = new Date(BaseDay);
	
	//----------------------------
	//2) Send a HTTP Data request
	function requestHttp(type,func,StartDay,EndDay){
		
		var xmlReq;
		StartDay = StartDay || DatePicker.getStartDay();
		EndDay = EndDay || DatePicker.getEndDay();
		
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
			url="ServletIDDCount?StartDay=" + StartDay + "&EndDay=" + EndDay + '&User=';
		}else if(type=='rate'){
			url="ServletIDDRate?StartDay=" + StartDay + "&EndDay=" + EndDay + '&User=';
		}else if(type=='type'){
			url="ServletIDDType?StartDay=" + StartDay + "&EndDay=" + EndDay + '&User=';
		}else if(type=='client'){
			url="ServletTopClient?StartDay=" + StartDay + "&EndDay=" + EndDay + '&User=';
		}else if(type=='detail'){
			isPost = true;
			url="ServletIddDetail?StartDay=" + StartDay + "&EndDay=" + EndDay + '&User=';
			
			//get sort & filter 
			paras = {};
			paras.sort = TableIdd.getSortFields();
			paras.filter= TableIdd.getFilterFields();
			paras.startRow = (TablePage.CurPage-1) * TablePage.PerPage+1;
			paras.endRow = TablePage.CurPage * TablePage.PerPage;
			
			console.log(paras);
		}
		 
		if(isPost){
			xmlReq.open("POST",url,true);
			xmlReq.setRequestHeader('content-type', 'application/json')
			//xmlReq.send(paras); 
		}else{
			xmlReq.open("GET",url,true);
			//xmlReq.send(); 
		} 
		
	}
	
	
	
	//==============================================
	//3. Function to render component
	
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
				value: 30,
				color:'green'
			},
			{
				name:'Attachment files',
				value: 30,
				color:'blue'
			},  
		];
		
		ChartList[1].render({
			radius:50,
			linewidth:12,
			
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
			event: Event
		});
		
		LoadList[3].stop();
		
	}
	
	
	//----------------------------
	//5) IDD detailed table
	function loadTable(data){

		data = data || {
			count:51,
			list:[
			
				{
					id:'001',
					cols:["2020-01-11 13:22:01","Pass","","GD_HZ GPD Custody","Daily cash reports for 2020 Jan 11"]
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
					cols:["2020-01-11 11:42:25","Pass","","GS_HZ_JP","Security SSI ALI4 2020-01-11"]
				},
				{
					id:'005',
					cols:["2020-01-11 10:06:49","Pass","","GS_HZ_AU","Compliance certification"]
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
		TableIdd.setFilter(data.filter);
		TablePage.setMaxPage(MaxPage);
		
		console.log("Load table event: set max page:" + MaxPage);
	}
	
	
	TablePage.TurnPageEvent = function(){
		requestHttp('detail',loadTable);
	}
	
	
	//==============================================
	//4. Load Http response data into chart 
	function renderData(){
		
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
	
}