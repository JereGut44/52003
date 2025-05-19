grammar Programa;

programa: instruccion* EOF ;

instruccion: bucle
          | salida
          ;

bucle: 'mientras' condicion '{' instruccion* '}' ;

salida: 'imprimir' '(' cadena ')' ';' ;

condicion: 'verdadero'
         | 'falso'
         ;

cadena: '"' caracter* '"' ;

caracter: LETRA
        | DIGITO
        | ESPACIO
        | SIMBOLO
        ;

LETRA: [a-zA-Z] ;
DIGITO: [0-9] ;
ESPACIO: ' ' ;
SIMBOLO: '.' | ',' | '!' | '?' | ':' | ';' | '"' ;

// Ignorar espacios y saltos de línea fuera de cadenas
WS: [ \t\r\n]+ -> skip ;
