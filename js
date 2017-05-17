  $(document).ready(function() {
    <!---$("#engineer").remove();--->
    <!---$("#scholar").remove();--->


	    $("#soldierbtn").click(function(){
        $("#scholar").hide()
		    $("#soldier").show()
		    $("#engineer").hide()
        $("#links").hide()
        $("#soldierbtn").addClass("active")
        $("#engineerbtn").removeClass("active")
        $("#scholarbtn").removeClass("active")
        $("#linksbtn").removeClass("active");
          }); 
    
	    $("#scholarbtn").click(function(){
        $("#scholar").show()
		    $("#soldier").hide()
		    $("#engineer").hide()
        $("#links").hide()
        $("#scholarbtn").addClass("active")
        $("#engineerbtn").removeClass("active")
        $("#soldierbtn").removeClass("active")
        $("#scholar").removeClass("hidden")
        $("#linksbtn").removeClass("active");
          }); 
    
    
	    $("#engineerbtn").click(function(){
        $("#scholar").hide()
		    $("#soldier").hide()
        $("#links").hide()
		    $("#engineer").show()
        $("#engineerbtn").addClass("active")
        $("#scholarbtn").removeClass("active")
        $("#soldierbtn").removeClass("active")
        $("#engineer").removeClass("hidden")
        $("#linksbtn").removeClass("active");
          }); 

 	    $("#linksbtn").click(function(){
        $("#scholar").hide()
		    $("#soldier").hide()
		    $("#engineer").hide()
        $("#links").show()
        $("#linksbtn").addClass("active")
        $("#scholarbtn").removeClass("active")
        $("#soldierbtn").removeClass("active")
        $("#engineerbtn").removeClass("active")
        $("#links").removeClass("hidden");
          }); 
   
  });
