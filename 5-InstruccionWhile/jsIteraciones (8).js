function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta="si"
	var numero;

	while(respuesta=="si"||respuesta=="SI")
	{
     numero=parseInt(prompt("ingrese un numero"));
	 while(isNaN(numero))
	 {
		 numero=parseInt(prompt("error,ingrese un numero"));
	 }
	 if(numero>=0)
	 {
		 positivo=positivo + numero;
	 }
	 else
	 {
		 negativo= negativo * numero;
		 contador=contador + 1

	 }
	 respuesta=prompt("desea continuar si/no?")
	}

	


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN