/**
 * Created by 做信的恋人 on 2016-08-14.
 */
var Time,hour;
 var secondNode=document.getElementById('second');
 var minuteNode=document.getElementById('minute');
 var hourNode=document.getElementById('hour');

 function clock(){
     var Time= new Date();
         hour=Time.getHours();
     var minute=Time.getMinutes();
     var second=Time.getSeconds();

     second=second*6;//一秒钟6度;
     minute=minute*6+(second/60);//360/6=60;
     hour=hour*30+(minute/12);//360/30=12;

     secondNode.style.transform='rotate('+second+'deg)';
     minuteNode.style.transform='rotate('+minute+'deg)';
     hourNode.style.transform='rotate('+hour+'deg)';
 }
clock();
window.setInterval(clock,1000);