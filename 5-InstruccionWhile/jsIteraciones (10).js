function Mostrar()
{

	var numeros;
	var respuesta="si";
    var acumuladorneg=0;
	var acumuladorpos=0;
	var contadorpos=0;
	var contadorneg=0;
	var contadorceros=0;
	var contadorpares=0;
	var promediopos;
	var promedioneg;
	var diferencia;

	while(respuesta=="si"||respuesta=="SI")
	{
		numero=parseInt(prompt("ingrese un numero"));
		while(isNaN(numero))
		{
			numero=parseInt(prompt("error,ingrese un numero"));
		}
		if(numero<0)
		{
			acumuladorneg= acumuladorneg + numero;
			contadorneg ++;
		}
		else if(numero>0)
		{
			acumuladorpos=acumuladorpos + numero;
			contadorpos ++;
		}
		else
		{
			contadorceros ++;
		}
		if(numero % 2 ==0)
		{
			contadorpares ++;
		}
		respuesta=prompt("desea continuar si/no?")	
		
	}
	promediopos=acumuladorpos/contadorpos;
	promedioneg=acumuladorneg/contadorneg;
	
	diferencia=contadorneg - contadorpos;
	
	if(diferencia<0)
	{
      diferencia=diferencia*-1
	}

	document.write(" la suma de los negativos es: " + acumuladorneg + "<br>" );
	document.write(" la suma de los positivos es: " + acumuladorpos + "<br>");
    document.write(" la cantidad de positivos es: " + contadorpos +"<br>" );
	document.write(" la cantidad de negativos es: " + contadorneg +"<br>" );
    document.write(" la cantidad de ceros es: " + contadorceros + "<br>" );
	document.write(" la cantidad de pares es: " + contadorpares + "<br>");
	document.write(" el promedio de positivos es: " + promediopos + "<br>");
	document.write(" el promedio de negativos es: " + promedioneg + "<br>");
	document.write(" la diferencia es: " + diferencia + "<br>");


      



	
	

	





}//FIN DE LA FUNCIÓN