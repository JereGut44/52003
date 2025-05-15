grammar Programa;
// Regla principal
programa: instruccion* EOF;                            

// Instrucciones
instruccion: bucle
           | salida
           ;
// Bucle 
bucle:'mientras' condicion '{'instruccion*'}';

// Salida 
salida: 'imprimir' '('cadena')' ';';

// Condición
condicion: 'verdadero'
         | 'falso' 
         ;

// Cadena 
cadena: CADENA;




CADENA: '"' CARACTER* '"';
 CARACTER: LETRA
         | DIGITO
         | SIMBOLO
         | ' '
         ;

//LEXEMAS
fragment LETRA: [a-z-A-Z];
fragment DIGITO: [0-9];
fragment SIMBOLO: '.' | ',' | '!' | '?' | ':' | ';';
WS: [ \t\r\n]+ -> skip;