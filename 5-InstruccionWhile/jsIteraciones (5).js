function Mostrar()
{

var sexo = prompt("ingrese f ó m .");

while(!(sexo== "f"|| sexo=="m"))

{
    sexo=prompt("sexo invalido");
}



document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN