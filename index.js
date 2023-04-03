
setInterval(()=>{
    d= new Date();
    hour =d.getHours();
    min =d.getMinutes();
    sec =d.getSeconds();
   // console.log(hour+" :"+ min + " :" + sec)
     am_pm=" AM";
   if(hour > 12)
   {
        hour =hour-12       
   }
   if(hour >= 12)
   {
       am_pm="PM";
   }

   var time =document.querySelector("h1");
    time.innerHTML=hour +":"+min+":"+sec + " "+am_pm;


   

},100)