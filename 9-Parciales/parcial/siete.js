function Mostrar()
{
var cont=0;
var nota;
var sexo;
var acumnota=0;
var promedio;
var notamin;
var contv=0;
var bandera=true;

while(cont<=10)
{
    nota=parseInt(prompt("ingrese nota"));
    sexo=prompt("ingrese sexo");
    sexo=sexo.toLowerCase();

    while(nota<0||nota >=10)
    {
        nota=parseInt(prompt("erros,reingrese nota"));
    }
    while(sexo!="f" && sexo!="m")
    {
        sexo=prompt("error,reingrese numero ");
        sexo=sexo.toLowerCase();
    }
    acumnota=acumnota+nota;
    cont++;

    if(bandera)
    {
        notamin=nota;
        bandera=false;
    }
    if(nota<notamin)
    {
        notamin=nota;
    }
    if(sexo="m" && nota>=6)
    {
        contv ++;
    }



}
document.write("el promedio de las notas es: " + promedio);
document.write("la nota mas baja es : " + notamin);
document.write("la cantidad de varones con nota mayor a 6 es: " + contv);

}
