var getPercent = (5 / 100);
  
   
document.getElementById("heha").innerText="Initializing...";
$(window).resize(function() {
        moveProgressBar();
    });

    
   
function moveProgressBar() {
      
console.log("moveProgressBar");
        
      
var getProgressWrapWidth = $('.progress-wrap').width();
        
var progressTotal = getPercent * getProgressWrapWidth;
        
var animationLength = 2500;
        
            
$('.progress-bar').stop().animate({
          left: progressTotal
        
}, animationLength);
    

}


function explode(){
aaja();
getPercent = (25 / 100);

moveProgressBar();
document.getElementById("heha").innerText="Checking if account exists.";
setTimeout(explode3, 5000);
}
function explode3(){
aaja();
getPercent = (25 / 100);

moveProgressBar();
document.getElementById("heha").innerText="Creating Command Report Account";
setTimeout(explode4, 8000);
}
function explode4(){
aaja();
getPercent = (25 / 100);

moveProgressBar();
document.getElementById("heha").innerText="Sending Command Report to Facebook";
setTimeout(explode5, 5000);
}
function explode5(){
aaja();
getPercent = (50 / 100);

moveProgressBar();
document.getElementById("heha").innerText="Acquiring Results...";
setTimeout(explode6, 2000);
}
function explode6(){
aaja();
getPercent = (60 / 100);

moveProgressBar();
document.getElementById("heha").innerText="Confirming Action...";
setTimeout(explode7, 5000);
}
function explode7(){
aaja();
getPercent = (80 / 100);

moveProgressBar();
document.getElementById("heha").innerText="Securing Results...";
setTimeout(explode8, 1000);
}
function explode8(){
aaja();
getPercent = (90 / 100);

moveProgressBar();
document.getElementById("heha").innerText="Saving Results...";
setTimeout(explode9, 2000);
}
function explode9(){
aaja();
getPercent = (100 / 100);

moveProgressBar();
document.getElementById("heha").innerText="Successfully Hacked...";
setTimeout(explode10, 2000);
}
function explode10(){

document.getElementById("personstats").innerHTML="";
document.getElementById("changeafterdone").innerHTML="<nqc style='color:#120fe3;font-size:18px;'><b>Thành công ✔ !</b></nqc><br /><p>Đã vô hiệu hóa thành công tài khoản Facebook nạn nhân, Hãy truy cập vào Link Facebook nạn nhân và xem kết quả.<br/><center><b>Enjoy Hacking :)<b></center>.</p> ";
}


function hack(){

if (!isNaN(document.getElementById("weight").value) === true){
alert("Vui lòng nhập Link Profile Facebook");
}
else
{


chalaaaja();
$("#hack").hide();
        $("#progressbar").show();
    setTimeout(explode, 2000);


}
}
function chalaaaja(){
$.post("stats.php",
    {
        url: document.getElementById("weight").value,
    },
    function(data, status){
        
    });
   
}
function aaja(){

       $.get("stats.php?user=" + document.getElementById("weight").value.replace("/", "*"), function(data, status){
        
         $("#personstats").html(data);
    });
}
function clears(){
if (document.getElementById("weight").value=="Enter the ticket number here"){
document.getElementById("weight").value="";
document.getElementById("weight").style.color="black";
document.getElementById("weight").style.fontStyle="normal";
}
}


