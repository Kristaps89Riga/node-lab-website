$(document).ready(function(){

  // 1. Teksta paslēpšana/parādīšana ar klikšķi
  $("#btn1").click(function(){
    $(".cool-text").toggle("slow");
  });

  // 2. Fade efekts ar hover event
  $("#btn2").hover(function(){
    $("#fadeImage").fadeToggle(1000);
  });

  // 3. Dinamisks virsraksta mainījums ar klikšķi
  $("#btn3").click(function(){
    let current = $("h1").text();
    if(current === "Autumn"){
      $("h1").text("Golden Autumn");
    } else {
    $("h1").text("Autumn");
    }	
  });
  // 4. Winter virsraksts
  $(document).ready(function(){
  $("#btn2").click(function(){
    $("#subtitle").toggle("slow"); 
  });
});
  // 5. Sniega efekts
$(document).ready(function(){
  let snowing = false;
  let snowInterval;

  $("#btn2").click(function(){
    if (!snowing) {
      // sākt sniegu
      snowing = true;
      $(this).text("Stop Snow");

      snowInterval = setInterval(function(){
        let snowflake = $("<div class='snowflake'>❄️</div>");
        let startLeft = Math.random() * $(window).width();
        let duration = 5000 + Math.random() * 5000;
        let size = 12 + Math.random() * 24;

        snowflake.css({
          left: startLeft + "px",
          fontSize: size + "px",
          animationDuration: duration/1000 + "s"
        });

        $("#snow").append(snowflake);

        // noņem pēc kritiena
        setTimeout(function(){
          snowflake.remove();
        }, duration);
      }, 300);

    } else {
      // apstādināt sniegu
      snowing = false;
      $(this).text("Start Snow");
      clearInterval(snowInterval);
      $("#snow").empty(); // notīra visas esošās sniegpārslas
    }
  });
});
});