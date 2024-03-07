var estadoCivil=0, edad=0, estatura=0, genero=0,contadorPersona=0,acumuladorEdad=0,acumuladorEstatura=0,promedioEdad=0,promedioEstatura=0,porcentajeCondición=0,totalPersona=0;
totalPersona=parseInt(prompt("Ingrese el total de personas"));
for (let numeroPersonas=1; numeroPersonas<=totalPersona;numeroPersonas++) {
    edad=parseInt(prompt("Ingrese la edad de la persona " + numeroPersonas));
    estadoCivil=parseInt(prompt("Ingrese el estado civil de la persona " + numeroPersonas+ " 1.Soltero o 2.Casado"));
    estatura=parseInt(prompt("Ingrese la estatura de la persona " + numeroPersonas+ " en centimetros"));
    genero=parseInt(prompt("Ingrese el genero de la persona " + numeroPersonas + "  1.Masculino o 2.Femenino"));
    if ((edad>=19) && (estadoCivil==1) && (genero==1) && (estatura>170)) {
        contadorPersona=contadorPersona+1;
        acumuladorEdad=acumuladorEdad+edad;
        acumuladorEstatura=acumuladorEstatura+estatura;
    }
}
promedioEdad=acumuladorEdad/contadorPersona;
promedioEstatura=acumuladorEstatura/contadorPersona;
porcentajeCondición=(contadorPersona/totalPersona)*100;
alert("El promedio de edad de las personas que cumplen la condición es " + promedioEdad);
alert("El promedio de estatura de las personas que cumplen la condición es " + promedioEstatura);
alert("El promedio de las personas que cumplen la condición es " + porcentajeCondición);