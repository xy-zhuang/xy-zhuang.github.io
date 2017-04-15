function pwe(){
	var x=document.getElementById("sp");
	if (x){if(x.style.visibility=="hidden"){
	x.style.visibility="visible";
	}
	else {
	x.style.visibility="hidden";	
	}}
}


window.onload=function(){
	var qbox=document.getElementById("xl");
	var bLeft = bTop = bRight = bBottom = bCtrlKey = false;
    setInterval(function (){
		if(bLeft)
	    {
			qbox.style.left=qbox.offsetLeft-10+"px";
		}
		else if(bRight)
		{
			qbox.style.left=qbox.offsetLeft+10+"px";
		}
		if (bTop)
		{
			qbox.style.top=qbox.offsetTop-10+"px";
		}
		else if(bBottom)
		{
			qbox.style.top=qbox.offsetTop+10+"px";
		}limit();
	},30);
	document.onkeyup = function (event)
	{
		switch ((event || window.event).keyCode)
		{
			case 37:
				bLeft = false;
				break;
			case 38:
				bTop = false;
				break;
			case 39:
				bRight = false;
				break;
			case 40:
				bBottom = false;
				break;
		}
	};

	}