function mostrarData(){
	var nom = document.getElementById("nombre").value;
	var ape = document.getElementById("apellido").value;
	var mail = document.getElementById("email").value;
	var cel = document.getElementById("telefono").value;
	var dir = document.getElementById("direccion").value;
	var selecion= document.getElementById("sel").value;
	usuario(nom,ape,mail,cel,dir,selecion);

}

function usuario(nombre,apellido,email,phone,direccion,selector){
	var cliente = document.getElementById("clientes");
	var producto = document.getElementById("productos");

	cliente.innerHTML += "Señora : " + nom + " " + ape + "<br>";
	cliente.innerHTML += "Email : " + mail + "<br>";
	cliente.innerHTML += "Teléfono : " + cel + "<br>";
	producto.innerHTML += "Dirección : " + dir + "<br>";	

	if(selector == "Pack de té clásico"){
		datosCompra.innerHTML = selector + " <p>Has elegido Pack de té clásico <p>"
	}else if(selector == "Pack frutales"){
		datosCompra.innerHTML = selector + "<p>Has elegido Pack frutales<p>"
	}else if(selector == "Pack variedades"){
		datosCompra.innerHTML = selector + "<p>Has elegido Pack Variedades<p>"
	}

}



