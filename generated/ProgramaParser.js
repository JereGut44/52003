// Generated from Programa.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import ProgramaListener from './ProgramaListener.js';
const serializedATN = [4,1,15,57,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,5,0,16,8,0,10,0,12,0,19,9,0,1,0,1,0,1,1,1,1,3,1,25,8,
1,1,2,1,2,1,2,1,2,5,2,31,8,2,10,2,12,2,34,9,2,1,2,1,2,1,3,1,3,1,3,1,3,1,
3,1,3,1,4,1,4,1,5,1,5,5,5,48,8,5,10,5,12,5,51,9,5,1,5,1,5,1,6,1,6,1,6,0,
0,7,0,2,4,6,8,10,12,0,2,1,0,8,9,1,0,11,14,53,0,17,1,0,0,0,2,24,1,0,0,0,4,
26,1,0,0,0,6,37,1,0,0,0,8,43,1,0,0,0,10,45,1,0,0,0,12,54,1,0,0,0,14,16,3,
2,1,0,15,14,1,0,0,0,16,19,1,0,0,0,17,15,1,0,0,0,17,18,1,0,0,0,18,20,1,0,
0,0,19,17,1,0,0,0,20,21,5,0,0,1,21,1,1,0,0,0,22,25,3,4,2,0,23,25,3,6,3,0,
24,22,1,0,0,0,24,23,1,0,0,0,25,3,1,0,0,0,26,27,5,1,0,0,27,28,3,8,4,0,28,
32,5,2,0,0,29,31,3,2,1,0,30,29,1,0,0,0,31,34,1,0,0,0,32,30,1,0,0,0,32,33,
1,0,0,0,33,35,1,0,0,0,34,32,1,0,0,0,35,36,5,3,0,0,36,5,1,0,0,0,37,38,5,4,
0,0,38,39,5,5,0,0,39,40,3,10,5,0,40,41,5,6,0,0,41,42,5,7,0,0,42,7,1,0,0,
0,43,44,7,0,0,0,44,9,1,0,0,0,45,49,5,10,0,0,46,48,3,12,6,0,47,46,1,0,0,0,
48,51,1,0,0,0,49,47,1,0,0,0,49,50,1,0,0,0,50,52,1,0,0,0,51,49,1,0,0,0,52,
53,5,10,0,0,53,11,1,0,0,0,54,55,7,1,0,0,55,13,1,0,0,0,4,17,24,32,49];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ProgramaParser extends antlr4.Parser {

    static grammarFileName = "Programa.g4";
    static literalNames = [ null, "'mientras'", "'{'", "'}'", "'imprimir'", 
                            "'('", "')'", "';'", "'verdadero'", "'falso'", 
                            "'\"'", null, null, "' '" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, "LETRA", "DIGITO", "ESPACIO", 
                             "SIMBOLO", "WS" ];
    static ruleNames = [ "programa", "instruccion", "bucle", "salida", "condicion", 
                         "cadena", "caracter" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ProgramaParser.ruleNames;
        this.literalNames = ProgramaParser.literalNames;
        this.symbolicNames = ProgramaParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ProgramaParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1 || _la===4) {
	            this.state = 14;
	            this.instruccion();
	            this.state = 19;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 20;
	        this.match(ProgramaParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ProgramaParser.RULE_instruccion);
	    try {
	        this.state = 24;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 22;
	            this.bucle();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 23;
	            this.salida();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bucle() {
	    let localctx = new BucleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ProgramaParser.RULE_bucle);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.match(ProgramaParser.T__0);
	        this.state = 27;
	        this.condicion();
	        this.state = 28;
	        this.match(ProgramaParser.T__1);
	        this.state = 32;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1 || _la===4) {
	            this.state = 29;
	            this.instruccion();
	            this.state = 34;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 35;
	        this.match(ProgramaParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ProgramaParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.match(ProgramaParser.T__3);
	        this.state = 38;
	        this.match(ProgramaParser.T__4);
	        this.state = 39;
	        this.cadena();
	        this.state = 40;
	        this.match(ProgramaParser.T__5);
	        this.state = 41;
	        this.match(ProgramaParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ProgramaParser.RULE_condicion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        _la = this._input.LA(1);
	        if(!(_la===8 || _la===9)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ProgramaParser.RULE_cadena);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this.match(ProgramaParser.T__9);
	        this.state = 49;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 30720) !== 0)) {
	            this.state = 46;
	            this.caracter();
	            this.state = 51;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 52;
	        this.match(ProgramaParser.T__9);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	caracter() {
	    let localctx = new CaracterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, ProgramaParser.RULE_caracter);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 30720) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

ProgramaParser.EOF = antlr4.Token.EOF;
ProgramaParser.T__0 = 1;
ProgramaParser.T__1 = 2;
ProgramaParser.T__2 = 3;
ProgramaParser.T__3 = 4;
ProgramaParser.T__4 = 5;
ProgramaParser.T__5 = 6;
ProgramaParser.T__6 = 7;
ProgramaParser.T__7 = 8;
ProgramaParser.T__8 = 9;
ProgramaParser.T__9 = 10;
ProgramaParser.LETRA = 11;
ProgramaParser.DIGITO = 12;
ProgramaParser.ESPACIO = 13;
ProgramaParser.SIMBOLO = 14;
ProgramaParser.WS = 15;

ProgramaParser.RULE_programa = 0;
ProgramaParser.RULE_instruccion = 1;
ProgramaParser.RULE_bucle = 2;
ProgramaParser.RULE_salida = 3;
ProgramaParser.RULE_condicion = 4;
ProgramaParser.RULE_cadena = 5;
ProgramaParser.RULE_caracter = 6;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ProgramaParser.RULE_programa;
    }

	EOF() {
	    return this.getToken(ProgramaParser.EOF, 0);
	};

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.exitPrograma(this);
		}
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ProgramaParser.RULE_instruccion;
    }

	bucle() {
	    return this.getTypedRuleContext(BucleContext,0);
	};

	salida() {
	    return this.getTypedRuleContext(SalidaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.exitInstruccion(this);
		}
	}


}



class BucleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ProgramaParser.RULE_bucle;
    }

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.enterBucle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.exitBucle(this);
		}
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ProgramaParser.RULE_salida;
    }

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.enterSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.exitSalida(this);
		}
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ProgramaParser.RULE_condicion;
    }


	enterRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.enterCondicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.exitCondicion(this);
		}
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ProgramaParser.RULE_cadena;
    }

	caracter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CaracterContext);
	    } else {
	        return this.getTypedRuleContext(CaracterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.exitCadena(this);
		}
	}


}



class CaracterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ProgramaParser.RULE_caracter;
    }

	LETRA() {
	    return this.getToken(ProgramaParser.LETRA, 0);
	};

	DIGITO() {
	    return this.getToken(ProgramaParser.DIGITO, 0);
	};

	ESPACIO() {
	    return this.getToken(ProgramaParser.ESPACIO, 0);
	};

	SIMBOLO() {
	    return this.getToken(ProgramaParser.SIMBOLO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.enterCaracter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ProgramaListener ) {
	        listener.exitCaracter(this);
		}
	}


}




ProgramaParser.ProgramaContext = ProgramaContext; 
ProgramaParser.InstruccionContext = InstruccionContext; 
ProgramaParser.BucleContext = BucleContext; 
ProgramaParser.SalidaContext = SalidaContext; 
ProgramaParser.CondicionContext = CondicionContext; 
ProgramaParser.CadenaContext = CadenaContext; 
ProgramaParser.CaracterContext = CaracterContext; 
