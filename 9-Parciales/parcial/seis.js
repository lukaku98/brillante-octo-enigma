function Mostrar()
{
var cont=0;
var importe;
var max;
var min;
var bandera=true;

while(cont<3)
{
    cont++;
    importe=parseInt(prompt("ingrese importe"));

    while(importe<0)
    {
        importe=parseInt(prompt("error,ingrese importe"));
    }

if(bandera)

{
    bandera=false;
    max=importe;
    min=importe;
}
else
{
    if(importe>max)
    {
        max=importe;
    }
    if(importe<min)
    {
        min=importe;
    }
}
      

}
document.write("el menor importe de venta fue: " + min);
document.write("el mayor importe de venta fue: " + max);


}
