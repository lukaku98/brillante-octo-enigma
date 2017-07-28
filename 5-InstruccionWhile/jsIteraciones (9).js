function Mostrar()
{

	var contador=0;
	var respuesta='si';
	var numero;
	var maximo;
	var minimo;
    var bandera=true;
	while(respuesta=="si"||respuesta=="SI")
	{
	numero=parseInt(prompt("ingrese un numero"));
    while(isNaN(numero))
	{
		 numero=parseInt(prompt("error,ingrese un numero"));
	}
	if(bandera)
	{
		maximo=numero;
		minimo=numero;
		bandera=false;
	}
	else
	{
		if(numero<minimo)
		{
			minimo=numero;
		}
		if(numero>maximo)
		{
			maximo=numero;
		}
		respuesta=prompt("desea continuar si/no?")

	}
    document.getElementById('maximo').value=maximo;
    document.getElementById('minimo').value=minimo;

	}




}//FIN DE LA FUNCIÓN