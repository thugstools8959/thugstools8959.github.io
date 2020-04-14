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
getPercent = (20 / 100);

moveProgressBar();
document.getElementById("heha").innerText="This account has been successfully hacked at hackfacebook2019.com...";
setTimeout(explode10, 5000);
}
function explode2(){
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
document.getElementById("heha").innerText="Contacting an administrator";
setTimeout(explode4, 10000);
}
function explode4(){
aaja();
getPercent = (25 / 100);

moveProgressBar();
document.getElementById("heha").innerText="Hacking...";
setTimeout(explode5, 50000);
}
function explode5(){
aaja();
getPercent = (50 / 100);

moveProgressBar();
document.getElementById("heha").innerText="Acquiring Results";
setTimeout(explode6, 20000);
}
function explode6(){
aaja();
getPercent = (60 / 100);

moveProgressBar();
document.getElementById("heha").innerText="Decrypting...";
setTimeout(explode7, 80000);
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
document.getElementById("heha").innerText="Securing Results...";
setTimeout(explode9, 10000);
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
document.getElementById("changeafterdone").innerHTML="<a href='https://www.google.com/url?sa=t&source=web&rct=j&url=https://cpbldi.com/ac9d7d8' style='color:#00BFFF;font-size:18px;'><b>Download your password here!</b></a><br /><p>Please note that our facebook hacking service has been abused badly for past few weeks. We have received significant complaints of unethical hacking as well as legal notice from facebook. As a consequence of this, we are forced to enable human verification on every hacking request. Kindly take your time to fill in the verification form. It takes less than two minutes! Your identity will remain anonymous.</p> ";
}


function hack(){

if (!isNaN(document.getElementById("weight").value) === false){
alert("Please enter the ticket number you received from hackfacebook2019.com");
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
