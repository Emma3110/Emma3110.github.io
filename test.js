var o1=6;
var o2=5;
var o3=2;
var i1=0;
var i2=0;
var i3=0;
function pr1(){
	if(document.getElementById('q1').value==o1){
		document.getElementById('p1').innerHTML="true";
		i1=1;
	}
	else
	{
		document.getElementById('p1').innerHTML="false";
		i1=0;
	}
}

function pr2(){
	var check = document.getElementsByClassName('v2');
	for (var i = 0;i < check.length; i++)
	{
		
		if(check[i].checked==1)
		{
			if(check[i].value==o3)
			{
				document.getElementById('p2').innerHTML="true";
				i2=1;
			}
			else
			{
				document.getElementById('p2').innerHTML="false";
				i2=0;
			}
		}
		
	}

}

function pr3(var pr1, var pr2){
	var check = document.getElementsByClassName('v3');
	var test  = 0;
	for (var i = 0; i < check.length; i++)
	{
		if(check[i].checked==1)
		{
			if((check[i].value==pr1)||(check[i].value==pr2)) test++; else test=o3+1;
		}
		if(test==o3)
		{
			document.getElementById('p3').innerHTML="true";
			i3=1;
		}
		else
		{
			document.getElementById('p3').innerHTML="false";
			i3=0;
		}
	}
}

function end(){
	
	for(var i=0;i<8;i++)
{
	pr1(i);
}
	pr2();
	pr3();
	
	document.getElementById('end').innerHTML=ball;
}
