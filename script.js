function init(){
var left=document.getElementById("left");
var right=document.getElementById("right");
var center =document.getElementById("center");
    center.onmouseover=showAnsver	;
	center.onmouseout=notshowAnsver;
	center.onclick=showInfo;
	info.onmouseout=hideInfo;
	
	function showAnsver(){
	center =document.getElementById("center");
	center.className="center0";
    right.className="otherbloks2";
	left.className="otherbloks2";
	  var audio = new Audio(); // Создаём новый элемент Audio
       audio.src = 'zvuk1.mp3'; // Указываем путь к звуку "клика"
       audio.autoplay = true; // Автоматически запускаем
	}
	
	function notshowAnsver(){
		center =document.getElementById("center");
		center.className="center";
		left.className="otherbloks";
		right.className="otherbloks";
	}
  }
  
  function showInfo(){
	info=document.getElementById("info");  
	info.className="infovisible";
  }
   function hideInfo(){
	info=document.getElementById("info");  
	info.className="infonotvisible";
  }

window.onload=init;

