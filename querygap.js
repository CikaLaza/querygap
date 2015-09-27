$(document).ready(function(){
    $("#hideAndShow").click(function(){
        $("#pHideAndShow").toggle();
    });
    
	$("#flip").click(function(){
		$("#panel").slideToggle("slow");
    });
    
	$("#alertButton").click(function(){
        alert("Value: " + $("#alertTest").val());
    });
});
