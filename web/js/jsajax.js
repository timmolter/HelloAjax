var xmlhttp = false; //same object for send and callback methods.

function jsajax(){
	xmlhttp = new XMLHttpRequest();
	xmlhttp.open("POST", "hello", true);
	xmlhttp.onreadystatechange = jscallback;
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xmlhttp.send();
}

function jscallback() {
	
    if (xmlhttp.readyState == 4) {
        if (xmlhttp.status == 200) {
        	document.getElementById("jscallbackmessage").innerHTML = xmlhttp.responseText;
        	}
        else {
            alert("An Error has occurred. Status = " + xmlhttp.status);
         }
    }
}