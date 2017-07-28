function Mostrar()
{
//tomo la edad  
var edad;

 edad= document.getElementById("edad").value;

 if(edad >18)
 {
     alert("ustede es mayor de edad");
 }
else if(edad >= 13&& edad <=17)
{
    alert("usted es un adolescente");
}
else
{
    alert("usted es un niño");
}


}//FIN DE LA FUNCIÓN