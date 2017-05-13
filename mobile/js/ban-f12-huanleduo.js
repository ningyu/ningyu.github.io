/**
 * 检测用户点击键盘的F12键，警告并屏蔽。
 */
document.onkeydown = function(e)
{
	e = e ? e : window.event; 
    var keyCode = e.which ? e.which : e.keyCode;
    
	SexyLightbox.initialize({
		color: 'white',
		imagesdir: 'images/sexyimages'
	});
	
	if(keyCode == 123)
	{
		$.get("http://ipinfo.io", function(response) 
		{
			var clientIP = response.ip;
			
			var ipInLocatlStorage = localStorage.getItem(clientIP);
			
			if (clientIP) // 获得客户端IP成功
			{
				if (ipInLocatlStorage)
				{
					if (ipInLocatlStorage > 5)
					{
						window.location.href = "http://wwww.clingtony.com";
						return;
					}
					else
					{
						localStorage.setItem(clientIP, parseInt(ipInLocatlStorage) + 1);
						//console.log("After set storage is " + localStorage.getItem(clientIP));
					}
				}
				else
				{
					localStorage.setItem(clientIP, 1);
				}
			}
		}, "jsonp");	

		var msg = "亲，我们只给你5次按F12的机会，这不是演习，一旦进入黑名单，你家IP今年将再不能访问我，三思啊！";
		notif({
	    	type: "error",
			msg: msg,
			position: "center",
			width: "all",
			height: 200,
			autohide: false,
			opacity: 1.0
		});
		
		$('#forbidNotice').click();
		
		if(document.all)
		{
			window.event.returnValue = false;
		}
		else
		{
			e.preventDefault();
		}
	}
	if(keyCode == 27)
	{
		// 解决用户使用IE浏览器在首页，且完成了向导（即比尔德前面没有遮挡物），点击ESC键时GIF动画会停止播放
		if (RegExp('index.html', 'gi').test(window.location.href) && $.cookie('clingtony_visit_flag') == "visited")
		{
			alert("不用管我，我不累！");
		}
		if(document.all)
		{
			window.event.returnValue = false;
		}
		else
		{
			e.preventDefault();
		}
	}
}
