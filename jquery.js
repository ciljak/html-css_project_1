$("p").css("color", "#333"); //select paragrapghand applystyle
$("p").css("padding-left", "10px");

/* JS + jQuery funkcia pre načítanie stavu radio buttonov farby pozadia */
$(document).ready(function(){
    $("input[type='button']").click(function(){
        var radioValue = $("input[name='bcolor']:checked").val();
        /* otvorí okno s textom zvolenej farby 
          if(radioValue){
            alert("Your are a - " + radioValue);
          }
        */

        if(radioValue == "white" ){
            $("article").css("background-color", "white");
            $("article h1").css("background-color", "white");
        }

        if(radioValue == "green" ){
            $("article").css("background-color", "#aad576");
            $("article h1").css("background-color", "#aad576");
        }

        if(radioValue == "orange" ){
            $("article").css("background-color", "#fcf6bd");
            $("article h1").css("background-color", "#fcf6bd");
        }
    });
});


