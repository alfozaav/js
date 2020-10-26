// Multiple Conditional: Switch

var signo = prompt('Cuál es tu signo?') // Prompt sirve para hacer preguntas

switch (signo) {
    case 'acuario' :
        document.write('Despreocúpese, ya que será un día donde tendrá la mente relajada y con deseos de conocer nuevos rumbos para su vida. Anímese a lo desconocido.')
        break //Ejecuta el código cuando se encuentra el break
    case 'tauro' :
        document.write('Entienda que con su vitalidad y pasión lograrán llevar a buen término los proyectos que muchos de su entorno creían irrealizables. Avance sin miedo.')
        break
    case 'aries' :
        document.write('Entienda que la carencia de confianza propia podría llegar a ser un obstáculo en su vida. Es el momento para que trate de combatir ese estado.')
        break
    case 'geminis' :
    case 'géminis' :
        document.write('Atravesará un período donde deberá avanzar sin miedo y enfocarse en planificar un nuevo proyecto de vida que lo haga sentir aún más gratificado.')
        break
    case 'picis' :
    case 'pícis' :
        document.write('Deje de querer controlar todo lo que sucede a su alrededor. Entienda que esa actitud no le es beneficiosa, ya que su entorno podría oponerse.')
        break
    case 'cancer' :
    case 'cáncer' :
        document.write('Aprenda a vivir cada momento con intensidad, ya que le sobrarán fuerzas para sortear los obstáculos que se le presenten durante esta jornada.')
        break
    case 'leo' :
        document.write('Prepárese, ya que se acerca el momento propicio para demostrarle al mundo lo que usted es capaz de brindar. Intente ser más solidario, no espere nada a cambio.')
        break
    case 'virgo' :
        document.write('Prepárese, ya que tendrá una excelente jornada para cualquier proyecto que quiera poner en práctica, en especial si se trata de su vida personal.')
        break
    case 'libra' :
        document.write('Transitará una etapa donde podrá ubicarse en una mejor posición social y así obtendrá un crecimiento en su vida que lo hará sentir que está en la cima.')
        break
    case 'escorpio' :
        document.write('No le tema al esfuerzo y sea más persistente cuando quiere algo. Tenga presente que los logros suelen tardar y requieren de constancia en el tiempo.')
        break
    case 'sagitario' :
        document.write('No dude en agasajar a los que aprecia cuando lo sienta. Recuerde que su hospitalidad lo convierte siempre en un gran anfitrión en su entorno.')
        break
    case 'capricornio' :
        document.write('Sepa que será el momento justo para que apueste al crecimiento con total libertad. No dude en hacer planes para su futuro, ya que tendrá todo a su favor.')
        break
    default: //Si ninguna condición se cumple
        document.write('No es un signo sodiacal válido')
        break
}