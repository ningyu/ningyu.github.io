/**
 * 检测用户使用Ctrl + Shift + i 或者在菜单中选择开发者工具，重定向至安全页。
 */
hehe();

window.onresize = function()
{
	if((window.outerWidth - window.innerWidth) > 200) //判断当前窗口内页宽度和窗口宽度，如果差值大于200，那么呵呵
	{
		fucky0u();
	}	
	if((window.outerHeight - window.innerHeight) > 200) //判断当前窗口内页高度和窗口高度，如果差值大于200，那么呵呵
	{
		fucky0u();
		// 关闭当前标签页
		/*if (!window.opener) 
		{
			window.open(" ", "_self");
			window.close();
		} 
		else 
		{
			window.opener = null;
			window.close();
		}*/
	}
}

function fucky0u()
{
	if (!window.opener) 
	{
		window.open(" ", "_self");
		window.close();
	} 
	else 
	{
		window.opener = null;
		window.close();
	}
	//window.close(); //关闭当前窗口(防抽)
	window.location = "about:blank"; //将当前窗口跳转置空白页
}

function ck()
{
	console.profile();
	console.profileEnd();
	
	//我们判断一下profiles里面有没有东西，如果有，肯定有人按F12了，没错！！
	if(console.clear)
	{
		console.clear() 
	};
	
	if (typeof console.profiles == "object")
	{
		return console.profiles.length > 0;
	}
}

function hehe()
{
	if((window.console && (console.firebug || console.table && /firebug/i.test(console.table()) )) || (typeof opera == 'object' && typeof opera.postError == 'function' && console.profile.length > 0))
	{
		fucky0u();
	}
	if(typeof console.profiles == "object" && console.profiles.length > 0)
	{
		fucky0u();
	}
	
	if((window.outerWidth - window.innerWidth) > 200) //判断当前窗口内页宽度和窗口宽度，如果差值大于200，那么呵呵
	{
		fucky0u();
	}
	if((window.outerHeight - window.innerHeight) > 200) //判断当前窗口内页高度和窗口高度，如果差值大于200，那么呵呵
	{
		fucky0u();
	}
}
