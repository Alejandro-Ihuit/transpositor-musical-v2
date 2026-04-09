# Transpositor Musical v2

Transpositor Musical v2 es una aplicación web pensada para facilitar la transposición de notas musicales de forma clara, rápida e intuitiva.

El proyecto permite trabajar con dos sistemas de nombrado de notas:

- **Notación latina:** Do, Re, Mi, Fa, Sol, La, Si
    - Para la escritura manual.
- **Cifrado americano:** C, D, E, F, G, A, B
    - Para la escritura digital mediante los botones de la interfaz.

El propósito del proyecto es simplificar el proceso de transposición musical y servir como apoyo tanto para el estudio como para la práctica, reduciendo la confusión que suele surgir al cambiar de tonalidad o al interpretar equivalencias entre notas y alteraciones.

## Características principales
- Transposición de notas musicales de:
    - Sib a Do.
    - Do a Sib.
    - Sib a Mib.
    - Mib a Sib.
- Tonalidades disponibles (anexo complemento con sus relativas menores):
    - Do mayor.
    - Sol mayor.
    - Re mayor.
    - La mayor.
    - Mi mayor.
    - Si mayor.
    - Fa# mayor.
    - Do# mayor.
    - Fa mayor.
    - Sib mayor.
    - Mib mayor.
    - Lab mayor.
    - Reb mayor.
    - Solb mayor.
    - Dob mayor.

### Tonalidad
Al seleccionar una tonalidad, se mostrarán las notas que tienen alteración, facilitando aprendizaje de las mismas sin tanto esfuerzo.  
Y al escribir una nota usando el cifrado americano (escritura digital: mediante los botones integrados en la interfaz), se agrega la nota con su respectiva(s) alteración(es) a la tonalidad seleccionada.

### Alteración puntual
La sección incluye 3 botones para agregar alteraciones puntuales a las notas, sin importar la tonalidad seleccionada. Estas alteraciones son:
- Sostenido (#).
- Bemol (b).
- Natural (♮).

Para usarlo, primero presionar alguna de las opciones anteriores, seguidamente ingresar una nota usando el cifrado americano (escritura digital: mediante los botones integrados en la interfaz); se agregará la nota con su respectiva alteración puntual, y se desactivará el botón automáticamente para evitar confusiones.

### Borrar última
Borra la última nota ingresada, sin importar la tonalidad seleccionada ni el tipo de alteración (si es que tiene alguna).

### Botontes de **Limpiar** y **Copiar**
Limpiar: borra todas las notas ingresadas, en el input de **Entrada**.  
Copiar: copia el contenido del input de salida (**Resultado**) al portapapeles, para que pueda ser pegado en cualquier otro lugar.

Toda nota ingresada en el input de **Entrada** se transpondrá automáticamente a la tonalidad seleccionada, mostrando el resultado en el input de **Resultado**.

## Consideraciones
Si se ingresó notas en una tonalidad inicial, y luego se cambia a otra tonalidad, que tenga más o  menos alteraciones, dichas notas no se "convertirán" a las nuevas alteraciones, sino que se mantendrán tal cual fueron ingresadas, las posteriores al cambio serán las que respeten la tonalidad seleccionada. 
Tomarlo en cuenta para evitar confusiones, y si se desea que todas las notas se ajusten a la nueva tonalidad, simplemente borrar el contenido del input de **Entrada** y volver a ingresarlas.