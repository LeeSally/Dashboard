window.onload = function(){
	var DataList = [
		{
			name:"0. Overview",
			PageId:'doc0'
		},
		{
			name:"1. Installation",
			PageId:'doc1',
			ActionType:'fold',
			list:[
				{
					name:'1.1. Install',
					PageId:'doc1.1'
				},
				{
					name:'1.2. Uninstall',
					PageId:'doc1.2'
				}
			]	
		},
		{
			name:"2. Settings",
			PageId:'doc2',
			ActionType:'fold',
			list:[
				{
					name:'2.1. Initialize',
					PageId:'doc2.1'
				},
				{
					name:'2.2. Import',
					PageId:'doc2.2'
				},
				{
					name:'2.3. Export',
					PageId:'doc2.3'
				}
			]
		},
		{
			name:"3. Main function",
			PageId:'doc3',
			ActionType:'fold',
			list:[
				{
					name:'3.1. Maintain Client data',
					PageId:'doc3.1',
					ActionType:'fold',
					list:[
						{
							name:"1) Client name",
							PageId:'doc3.1.1'
						},
						{
							name:"2) Email address domain",
							PageId:'doc3.1.2'
						},
						{
							name:"3) Keywords",
							PageId:'doc3.1.3'
						}
					]
				},
				{
					name:'3.2. Scan IDD',
					PageId:'doc3.2',
					ActionType:'fold',
					list:[
						{
							name:"1) Identify target client",
							PageId:'doc3.2.1'
						},
						{
							name:"2) Scan email content",
							PageId:'doc3.2.2'
						},
						{
							name:"3) Skip",
							PageId:'doc3.2.3'
						}
					]
				}
			]
		},
		{
			name:"4. Others",
			PageId:'doc4',  
			list:[
				{
					name:"4.1. Scan when send",
					PageId:'doc4.1'
				},
				{
					name:"4.2. Upgrade Program",
					PageId:'doc4.2'
				}
			]
		}
	];
	
	
	var menu = document.getElementById("menu-list");
	new sr.TreeMenu(menu,DataList,120,90);
	sr.ImgLazyLoad(-150,"../style/images/errpicbg.png");
	
	//new sr.scrollBarY(document.getElementById("menu-list"));
	
	var btn = document.getElementById("btn_Download");
	
	
};