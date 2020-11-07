 /* When the user clicks on the button, 
        toggle between hiding and showing the dropdown content */
        function myFunction() {
            document.getElementById("navcurr").classList.toggle("show");
          }
          
          // Close the dropdown if the user clicks outside of it
          window.onclick = function(e) {
            if (!e.target.matches('.nav-link dropdown-toggle')) {
            var myDropdown = document.getElementById("navcurr");
              if (myDropdown.classList.contains('show')) {
                myDropdown.classList.remove('show');
              }
            }
          }
          $(document).ready(function()
          {
            $(".pics").click(function(){
              $(".pics").hide();
            });
            
            $("#buttoninc").click(function(){
              $("body").css('font-size','+=3');
            });

            $("#buttonchange").click(function(){
              $("body").css('font-family','Calibri, cursive'); 
              $(".bodymain").css('font-family','Calibri , cursive');
              $("p").css('font-family','Calibri , cursive');
              $("li").css('font-family','Calibri , cursive');


            });

            $("#buttonreset").click(function(){
              $("body").css('font-size','1em');
              $("h1").css('font-size', '40px');
              $("body").css('font-family','Concert One'); 
            });
            $(".Bigpic").click(function() {
                $(this).height(100);
                $(this).width(100);
                $(this).off(); 
              });
          });