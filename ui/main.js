var button=document.GetElementByd('counter');
var counter=0;
button.onclick=function(){
  counter=counter+1;
  var span=document.GetElementById('count');
  span.innerHTML=counter.toString();    
};