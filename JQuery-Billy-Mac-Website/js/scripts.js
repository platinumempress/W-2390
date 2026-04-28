$(function() {
    $("#accordion").accordion({
    active: false, //Start with all sections closed
    collapsible: true, //Allow all sections to be collapsible
    heightStyle: "content" //Set height to content
    })

    $(document).ready(function () {
        const modal = $("#modal");
        const modalImg = $("#modal-img");
        const modalTitle = $("#modal-title");
        const modalText = $("#modal-text");
    
        // Add click event to all images
        $(".gallery .item img").on("click", function () {
            const parent = $(this).closest(".item");
            const title = parent.find("h4").text();
            const text = parent.find("p").text();
    
            // Set modal content
            modalImg.attr("src", $(this).attr("src"));
            modalTitle.text(title);
            modalText.text(text);
    
            // Show modal
            modal.css("display", "flex");
        });
    
        // Close modal on close button click
        $(".close").on("click", function () {
            modal.css("display", "none");
        });
    
        // Close modal on outside click
        modal.on("click", function (e) {
            if ($(e.target).is(modal)) {
                modal.css("display", "none");
            }
        });
        
        $("#contact-form").on("submit", function (e) {
            e.preventDefault(); // Prevent the default form submission behavior

            const submitButton = $(this).find("button[type='submit']");
    
            // Add a rotation animation to the form
            $(this).css({
                transform: "rotate(360deg)",
                transition: "transform 1s ease-in-out"
            });
    
            // Change the button text to "Sent" after the animation
        setTimeout(() => {
            submitButton.text("Sent"); // Update the button text
            submitButton.css("color", "red"); // Change the text color to red
            submitButton.prop("disabled", true); // Disable the button to prevent resubmission
            $(this).css("transform", "none"); // Reset the rotation
        }, 1000); // Match the duration of the animation
    });

    });

  $("button").click(function() {
        $("ul").slideToggle();
    });
  
  $(".boo-1").click(function() {
      $(".panel").slideToggle(); 
    });

    $(".boo-2").click(function() {
        $(".panel2").slideToggle(); 
      });

      $(".boo-3").click(function() {
        $(".panel3").slideToggle(); 
      });

      $(".boo-4").click(function() {
        $(".panel4").slideToggle(); 
      });

      $(".billy").click(function() {
        $(".story").slideToggle(); 
      });

      $(".mac").click(function() {
        $(".tell").slideToggle(); 
      });
  
  


});    