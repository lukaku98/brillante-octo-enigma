function Mostrar()
{
var numero
var cont=0

numero=parseInt(prompt("ingrese numero"));

for(i=1;i<=numero;i++)
{
    if(i %2==0)
    {
        cont++;
        
    }
}
console.log(cont);


}//FIN DE LA FUNCIÓN