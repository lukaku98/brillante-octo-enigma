function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;

	while(respuesta=="si"|| respuesta=="SI")
	{
		numero=parseInt(prompt("ingrese un numero"));

		while(isNaN(numero))
		{
			numero=parseInt(prompt("eso no es un numero,ingrese un numero"));

	
		}
		respuesta=prompt("desea continuar si/no?");
		contador=contador +1
		acumulador=acumulador + numero;


	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN