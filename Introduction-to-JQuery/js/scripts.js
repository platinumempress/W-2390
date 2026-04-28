$(function() {
    $("#accordion").accordion({
    active: false, //Start with all sections closed
    collapsible: true, //Allow all sections to be collapsible
    heightStyle: "content" //Set height to content
    })

    //Open on single click
    $(".h3").on("click", function () {
        
    });

    // Close on double click
    $(".h3").on("dblclick", function () {
        $(this).next("div").slideUp(); // Hide the next <div>
      });

    $(".summer").css({"color":"Darkblue",
                     "font-size":"30px"
    });                 

    $( ".li2 strong" ).css("color","maroon");
   

    $(".inner-container").css("background-color","#e4f1fb"); ({               
  });             

       // Initialize control groups
       $(".controlgroup").controlgroup();
       $(".controlgroup-vertical").controlgroup({ 
        "direction": "vertical"
    });

       // Center align text for control group labels and buttons
       $(".ui-controlgroup-vertical") > button.ui-button, 
       (".ui-controlgroup-vertical") > ".ui-controlgroup-label".css({
        "text-align": "center"
    });

    $("#car-type-button","#room-type-button").css ({
        
      });

      // Initialize spinner for room-type and car-type buttons
      $("#room-spinner","#car-spinner").spinner();
     

    $(".winter").css({
       "color": "Darkblue",
       "font-size": "27px"
    .text("Winter World Games"), })  
});
  
    $(".winterp").text(`The Special Olympic Winter Games are a celebration
     of athleticism and inclusivity, bringing together athletes with intellectual
      disabilities from around the world. Held every four years, these games feature
       a variety of winter sports such as alpine skiing, snowboarding, figure skating,
        and floorball. The event not only showcases the incredible skills and determination 
        of the athletes but also promotes a message of acceptance and unity. Beyond the 
        competition, the games foster a sense of community and camaraderie among participants,
         volunteers, and spectators, highlighting the transformative power of sports in 
         empowering individuals and breaking down barriers.`);                       
                   
         $(document).ready(function () {
          $(".grid-item").each(function () {
            var itemTitle = $(".grid-item-title");
          
            // Add a class on mouse enter in the grid-item
            $(this).on("mouseenter", function () {
              if ($(this).data("title")) {
                itemTitle.html("<span>" + $(this).data("title") + "</span>");
                itemTitle.addClass("visible");
              }
        
              //  Move title on mouse move
              $(document).on("mousemove", function (e) {
                itemTitle.css({
                  left: e.clientX - 10,
                  top: e.clientY + 25,
                });
              });
            });
        
            // Remove Class on mouse leave from grid-item
            $(this).on("mouseleave", function () {
              itemTitle.removeClass("visible");
            });
          });
      
      });       


  $("button").click(function() {
      $("ul").slideToggle();
  });

  // Flip button functionality for hotel rooms 
  $(".flip").click(function() {
    $(".panel").show(); 
  });

  // Flip button functionality for rental cars
  $(".flip2").click(function() {
    $(".panel2").show(); // Ensure this is executed 
  });

  //submit button functionality
  $(".sub").click(function() {
     $(this).text("Submitted").css("color", "red");
  }); 

  //submit button functionality
  $(".sub2").click(function() {
    $(this).text("Submitted").css("color", "red");
 }); 
 

   


   

