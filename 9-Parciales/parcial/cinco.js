function Mostrar()
{
var dia;

dia=prompt("ingrese un dia de la semana");

switch(dia)
{
    case"sabado":
    case"domingo":
    alert("es fin de semana");
    break;

    case"lunes":
    case"martes":
    case"miercoles":
    case"jueves":
    case"viernes":
    alert("a trabajar");
    break;

    default:
    alert("no es un dia de la semana");

}

}
