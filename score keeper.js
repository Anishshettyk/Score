var p1=document.querySelector("#p1");
var p2=document.getElementById("p2");
var reset=document.querySelector("#reset");
var input=document.querySelector("#input");

var p1display=document.querySelector("#p1display");
var p2display=document.querySelector("#p2display");
var inputdisplay=document.querySelector("#inputdisplay");

p1Score=0;
p2Score=0;

var gameover=false;
var winningscore=5;

p1.addEventListener("click",function(){
	if(!gameover)
	{
		p1Score++;
		if(winningscore===p1Score)
		{
			gameover=true;
			p1display.classList.add("winner");
		}
		p1display.textContent=p1Score;
	}
});


p2.addEventListener("click",function(){
	if(!gameover)
	{
		p2Score++;
		if(winningscore===p2Score)
		{
			gameover=true;
			p2display.classList.add("winner");
		}
		p2display.textContent=p2Score;
	}
});

reset.addEventListener("click",function(){
p1Score=0;
p2Score=0;
p1display.textContent=p1Score;
p2display.textContent=p2Score;

p1display.classList.remove("winner");
p2display.classList.remove("winner");

gameover=false;
});


input.addEventListener("change",function(){
inputdisplay.textContent=input.value;
winningscore=Number(input.value);

});

