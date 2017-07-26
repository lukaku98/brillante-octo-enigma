function Mostrar()
{
var largo;
var ancho;
var perimetro;
var cantmetros;
largo=parseInt(document.getElementById("alrgo").value);
ancho=parseInt(document.getElementById("ancho").value);

perimetro=(largo * 2) + (ancho * 2);

cantmetros=perimetro *3;



alert("la cantidad de alambre necesaria es : " + cantmetros);

}
