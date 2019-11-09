
function reset()
	{
		mass=document.getElementsByClassName('v2');
		mass[0].checked=1;
		mass=document.getElementsByClassName('v1');
		mass[0].checked=1;
		mass=document.getElementsByClassName('v3');
		mass[0].checked=1;
		mass=document.getElementsByClassName('v4');
		for (var k=0; k<mass.length;k++)
		mass[k].checked=0;
		mass=document.getElementsByClassName('v5');
		for (k=0; k<mass.length;k++)
		mass[k].checked=0;
		mass=document.getElementsByClassName('v6');
		mass[0].checked=1;
		mass=document.getElementsByClassName('v7');
		for (k=0; k<mass.length;k++)
		mass[k].checked=0;
		mass=document.getElementsByClassName('v8');
		mass[0].checked=1;
		mass=document.getElementsByClassName('v9');
		mass[0].checked=1;
		mass=document.getElementById('q1');
		mass.value="";
	}

function q111()
{
var otvet=[2,6,4,3,3,17100000,4,2,4,1];	
var ball=0;	
var mass=document.getElementsByClassName('v2');

for (var i = 0;i < mass.length; i++)
	{
		if(mass[i].checked==1)
		{
			if(mass[i].value==otvet[0])	ball++;
		}
	}

mass=document.getElementsByClassName('v1');
for (var i = 0;i < mass.length; i++)
	{
		if(mass[i].checked==1)
		{
			if(mass[i].value==otvet[1])	ball++;
		}
	}

mass=document.getElementsByClassName('v3');
for (var i = 0;i < mass.length; i++)
	{
		if(mass[i].checked==1)
		{
			if(mass[i].value==otvet[2])	ball++;
		}
	}

mass=document.getElementsByClassName('v6');
for (var i = 0;i < mass.length; i++)
	{
		if(mass[i].checked==1)
		{
			if(mass[i].value==otvet[6])	ball++;
		}
	}

mass=document.getElementsByClassName('v8');
for (var i = 0;i < mass.length; i++)
	{
		if(mass[i].checked==1)
		{
			if(mass[i].value==otvet[8])	ball++;
		}
	}

mass=document.getElementsByClassName('v9');
for (var i = 0;i < mass.length; i++)
	{
		if(mass[i].checked==1)
		{
			if(mass[i].value==otvet[9])	ball++;
		}
	}
	


mass = document.getElementsByClassName('v4');
	var test  = 0;
	for (var i = 0; i < mass.length; i++)
	{
		if(mass[i].checked==1)
		{
			if(mass[i].value==1) test++; else test=4;
		}
	}	
	if (test==otvet[3])
		{
		ball++;
		}
	

mass = document.getElementsByClassName('v5');
	var test  = 0;
	for (var i = 0; i < mass.length; i++)
	{
		if(mass[i].checked==1)
		{
			if(mass[i].value==1) test++; else test=4;
		}
	}	
	if (test==otvet[4])
		{
		ball++;
		}
	

mass = document.getElementsByClassName('v7');
	var test  = 0;
	for (var i = 0; i < mass.length; i++)
	{
		if(mass[i].checked==1)
		{
			if(mass[i].value==1) test++; else test=4;
		}
	}	
	if (test==otvet[7])
		{
		ball++;
		}
	
if(document.getElementById('q1').value==otvet[5]) ball++;




if (ball==10)
{
	document.getElementById('end2').innerHTML="Молодец! Все задания верные!Количество верных ответов:"+ball;
	
}


if ((ball<10)&&(ball>5))
{
	document.getElementById('end2').innerHTML="Хорошо, но могло быть и лучше! Нужно больше читать про Россия. Количество верных ответов:"+ball;
}
if ((ball<5)&&(ball>=0))
{
	document.getElementById('end2').innerHTML="Вы плохо знаете Россию. Количество верных ответов:"+ball;
}




}



function reset()
	{
		mass=document.getElementsByClassName('v2');
		mass[0].checked=1;
		mass=document.getElementsByClassName('v1');
		mass[0].checked=1;
		mass=document.getElementsByClassName('v3');
		mass[0].checked=1;
		mass=document.getElementsByClassName('v4');
		for (var k=0; k<mas.length;k++)
		mass[k].checked=0;
		mass=document.getElementsByClassName('v5');
		for (k=0; k<mas.length;k++)
		mass[k].checked=0;
		mass=document.getElementsByClassName('v6');
		mass[0].checked=1;
		mass=document.getElementsByClassName('v7');
		for (k=0; k<mas.length;k++)
		mass[k].checked=0;
		mass=document.getElementsByClassName('v8');
		mass[0].checked=1;
		mass=document.getElementsByClassName('v9');
		mass[0].checked=1;
		mass=document.getElementById('q1');
		mass.value="";
	}


