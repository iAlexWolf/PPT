var respuesta = "Si";

while (respuesta == "Si") {

	function equis (minimo, maximo) {
		var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
		return numero;
	}
	var hola = ["Piedra", "Papel", "Tijeras"];

	var piedra = 0;
	var papel = 1;
	var tijeras = 2;

	var opcionUsuario = prompt("¿Que eliges? \nPiedra = 0 \nPapel = 1 \nTijeras = 2",0);
	var opcionMaquina = equis(0,2);
	
	if(opcionUsuario < 3) {
		alert("Elegiste " + hola[opcionUsuario]);
		alert("La maquina eligio " + hola[opcionMaquina]);
			if (opcionUsuario == piedra && opcionMaquina == piedra || opcionUsuario == papel && opcionMaquina == papel || opcionUsuario == tijeras && opcionMaquina == tijeras) {
			alert("JA. Empataste v:");
		}
		if (opcionUsuario == piedra && opcionMaquina == papel || opcionUsuario == papel && opcionMaquina == tijeras || opcionUsuario == tijeras && opcionMaquina == piedra) {
			alert("Perdiste v':");
			alert("No te sientas mal por perder con una maquina :3");
		}
		if (opcionUsuario == piedra && opcionMaquina == tijeras || opcionUsuario == papel && opcionMaquina == piedra || opcionUsuario == tijeras && opcionMaquina == papel) {
			alert("Ganaste :D");
		}
	}
	else{
		alert("¿Sabes leer? .-.");
	}
	respuesta = prompt("¿Quieres seguir jugando?", "Si");
}