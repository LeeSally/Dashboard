window.onload = function(){
	var DataList = [
		{
			name:"1. Installation",
			PageId:'doc1'
		},
		{
			name:"2. Settings",
			PageId:'doc2'
		},
		{
			name:"3. Main function",
			PageId:'doc3',
			list:[
				{
					name:'3.1. Maintain Client data',
					PageId:'doc3.1',
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
						},
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
	new TreeMenu(menu,DataList,120,90);
	ImgLazyLoad(-150,"style/images/errpicbg.png");
	
	var btn = document.getElementById("btn_Download");
	
	
};