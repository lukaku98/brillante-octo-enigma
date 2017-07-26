function Mostrar()
{
var cont=0
var nota
var sexo
var acumnota=0
var promedio
var notamin
var contvarones=0

while(cont<100)
{
    nota=parseInt(prompt("ingrese nota"));
    sexo=prompt("ingrese sexo");
    sexo=sexo.tolowercase();

    while(nota<0||nota >=10)
    {
        nota=parseInt(prompt("erros,reingrese nota"));
    }
    while(sexo!="f" && sexo!="m")
    {
        sexo=prompt("error,reingrese numero ");
        sexo=sexo.tolower.case();
    }



}

}
