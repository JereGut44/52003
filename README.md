1. Abrir la aplicación Visual Studio Code.
2. Clonar la carpeta de GitHub donde se encuentra el proyecto entregado. (https://github.com/JereGut44/52003)
3. Abrir, dentro de VS Code, la carpeta clonada con el proyecto.
4. Para utilizar el proyecto, se debe editar el archivo "input.txt" (Visible en la parte izquierda de la pantalla en el explorer, junto a los demás archivos del proyecto). 
	En este archivo se debe copiar lo que se quiere probar, por ejemplo, alguno de los ejemplos entregados en archivo de texto.
	Una vez copiado el ejemplo, guardar los cambios (ctrl + S) para que el programa utilice esta entrada.
5. Compilar y ejecutar el programa: Utilizamos el comando "F5" para que comience la depuración y ejecución del programa.
6. Veremos la salida en la parte de debug consol, obteniendo el árbol de análisis sintáctico en formato de texto.
7. Para ver el arbol de derivación, los lexer tokens, parser rules,  necesitamos colocarnos sobre el archivo g4 e ir a la pestaña de ANTLR4 (ubicada en la parte izquierda).
8. Para el análisis léxico debemos inicializar el programa:
   	-en la consola escribimos "npm start".
9. Para ver la tabla de tokens y lexemas debemos copiar en la consola el siguiente comando y ejecutarlo:
    	java -cp ".;antlr-4.13.2-complete.jar" TokenTable
