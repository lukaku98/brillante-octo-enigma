function Mostrar()
{

var numero
var cont=0;
numero=parseInt(prompt("ingrese numero"));
for(i=2; i<numero;i++)
{
    if(numero % i==0)
    {
        cont++;
    }
    if(cont>2)
    {
        alert("no es primo")
    }
    else
    {
        alert("es primo");
    
    }
}



}//FIN DE LA FUNCIÓN