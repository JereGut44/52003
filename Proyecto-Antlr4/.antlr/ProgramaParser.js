// Generated from c:/Users/Jere Gutierrez/ssl-antlr-proyecto/Programa.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
const serializedATN = [4,1,12,46,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,1,0,5,0,14,8,0,10,0,12,0,17,9,0,1,0,1,0,1,1,1,1,3,1,23,8,1,1,2,1,
2,1,2,1,2,5,2,29,8,2,10,2,12,2,32,9,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,
4,1,4,1,5,1,5,1,5,0,0,6,0,2,4,6,8,10,0,1,1,0,8,9,42,0,15,1,0,0,0,2,22,1,
0,0,0,4,24,1,0,0,0,6,35,1,0,0,0,8,41,1,0,0,0,10,43,1,0,0,0,12,14,3,2,1,0,
13,12,1,0,0,0,14,17,1,0,0,0,15,13,1,0,0,0,15,16,1,0,0,0,16,18,1,0,0,0,17,
15,1,0,0,0,18,19,5,0,0,1,19,1,1,0,0,0,20,23,3,4,2,0,21,23,3,6,3,0,22,20,
1,0,0,0,22,21,1,0,0,0,23,3,1,0,0,0,24,25,5,1,0,0,25,26,3,8,4,0,26,30,5,2,
0,0,27,29,3,2,1,0,28,27,1,0,0,0,29,32,1,0,0,0,30,28,1,0,0,0,30,31,1,0,0,
0,31,33,1,0,0,0,32,30,1,0,0,0,33,34,5,3,0,0,34,5,1,0,0,0,35,36,5,4,0,0,36,
37,5,5,0,0,37,38,3,10,5,0,38,39,5,6,0,0,39,40,5,7,0,0,40,7,1,0,0,0,41,42,
7,0,0,0,42,9,1,0,0,0,43,44,5,10,0,0,44,11,1,0,0,0,3,15,22,30];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ProgramaParser extends antlr4.Parser {

    static grammarFileName = "Programa.g4";
    static literalNames = [ null, "'mientras'", "'{'", "'}'", "'imprimir'", 
                            "'('", "')'", "';'", "'verdadero'", "'falso'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, "CADENA", "CARACTER", "WS" ];
    static ruleNames = [ "programa", "instruccion", "bucle", "salida", "condicion", 
                         "cadena" ];

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
	        this.state = 15;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1 || _la===4) {
	            this.state = 12;
	            this.instruccion();
	            this.state = 17;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 18;
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
	        this.state = 22;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 20;
	            this.bucle();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 21;
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
	        this.state = 24;
	        this.match(ProgramaParser.T__0);
	        this.state = 25;
	        this.condicion();
	        this.state = 26;
	        this.match(ProgramaParser.T__1);
	        this.state = 30;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1 || _la===4) {
	            this.state = 27;
	            this.instruccion();
	            this.state = 32;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 33;
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
	        this.state = 35;
	        this.match(ProgramaParser.T__3);
	        this.state = 36;
	        this.match(ProgramaParser.T__4);
	        this.state = 37;
	        this.cadena();
	        this.state = 38;
	        this.match(ProgramaParser.T__5);
	        this.state = 39;
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
	        this.state = 41;
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
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        this.match(ProgramaParser.CADENA);
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
ProgramaParser.CADENA = 10;
ProgramaParser.CARACTER = 11;
ProgramaParser.WS = 12;

ProgramaParser.RULE_programa = 0;
ProgramaParser.RULE_instruccion = 1;
ProgramaParser.RULE_bucle = 2;
ProgramaParser.RULE_salida = 3;
ProgramaParser.RULE_condicion = 4;
ProgramaParser.RULE_cadena = 5;

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

	CADENA() {
	    return this.getToken(ProgramaParser.CADENA, 0);
	};


}




ProgramaParser.ProgramaContext = ProgramaContext; 
ProgramaParser.InstruccionContext = InstruccionContext; 
ProgramaParser.BucleContext = BucleContext; 
ProgramaParser.SalidaContext = SalidaContext; 
ProgramaParser.CondicionContext = CondicionContext; 
ProgramaParser.CadenaContext = CadenaContext; 
