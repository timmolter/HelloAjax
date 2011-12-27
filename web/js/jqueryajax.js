function jqueryajax(){

	$.post("hello",
		function(data){
			document.getElementById("jquerycallbackmessage").innerHTML = data;
		}, "text");
}