function Mostrar()
{
var nume;
var cont=0;
var contpos=0;
var total=0;
var max;
var min;
var prom;
var flag;

do
{
    num=parseInt(prompt("ingrese numero"));
    while(num<0)
    {
        num=parseInt(prompt("ingrese un numero positivo"));
    }
    if(flag)
    {
        max=min=num;
        flag=false
    }
    if(num>max)
    {
        max=num;
    }
    if(num<min)
    {
        min=num
    }
    if(num%2==0)
    {
        contpos++;
    }
}
while(confirm("desea continuar?"))
prom=total/cont

document.write("la cantidad e numeros pares es: " + contpos);
document.write("la suma de todos los numeros es: " + total);
document.write("el promedio de todos los numeros es: " + prom);
document.write("el numero maximo es: " + max);
document.write("el numero minimo es: " + min);


}
