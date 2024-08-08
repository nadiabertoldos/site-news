var opu=0, opd=0, opt=0, poru=0, pord=0, port=0, totalvotos=0;

$("#votar").click(function(){
	if ($("#opU").prop("checked")) {
		opu = opu+1;
		totalvotos = totalvotos+1;
	}else if ($("#opD").prop("checked")) {
		opd = opd+1;
		totalvotos= totalvotos+1;
	}else if ($("#opT").prop("checked")) {
		opt = opt+1;
		totalvotos= totalvotos+1;
	}else{
		alert("Vote em algum participante!");
	}

	poru = (opu * 100) / totalvotos;
	pord = (opd * 100) / totalvotos;
	port = (opt * 100) / totalvotos;

	document.getElementById("porU").value = poru;
	document.getElementById("porD").value = pord;
	document.getElementById("porT").value = port;
})