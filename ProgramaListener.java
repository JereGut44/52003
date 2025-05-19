// Generated from Programa.g4 by ANTLR 4.13.2
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link ProgramaParser}.
 */
public interface ProgramaListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link ProgramaParser#programa}.
	 * @param ctx the parse tree
	 */
	void enterPrograma(ProgramaParser.ProgramaContext ctx);
	/**
	 * Exit a parse tree produced by {@link ProgramaParser#programa}.
	 * @param ctx the parse tree
	 */
	void exitPrograma(ProgramaParser.ProgramaContext ctx);
	/**
	 * Enter a parse tree produced by {@link ProgramaParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void enterInstruccion(ProgramaParser.InstruccionContext ctx);
	/**
	 * Exit a parse tree produced by {@link ProgramaParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void exitInstruccion(ProgramaParser.InstruccionContext ctx);
	/**
	 * Enter a parse tree produced by {@link ProgramaParser#bucle}.
	 * @param ctx the parse tree
	 */
	void enterBucle(ProgramaParser.BucleContext ctx);
	/**
	 * Exit a parse tree produced by {@link ProgramaParser#bucle}.
	 * @param ctx the parse tree
	 */
	void exitBucle(ProgramaParser.BucleContext ctx);
	/**
	 * Enter a parse tree produced by {@link ProgramaParser#salida}.
	 * @param ctx the parse tree
	 */
	void enterSalida(ProgramaParser.SalidaContext ctx);
	/**
	 * Exit a parse tree produced by {@link ProgramaParser#salida}.
	 * @param ctx the parse tree
	 */
	void exitSalida(ProgramaParser.SalidaContext ctx);
	/**
	 * Enter a parse tree produced by {@link ProgramaParser#condicion}.
	 * @param ctx the parse tree
	 */
	void enterCondicion(ProgramaParser.CondicionContext ctx);
	/**
	 * Exit a parse tree produced by {@link ProgramaParser#condicion}.
	 * @param ctx the parse tree
	 */
	void exitCondicion(ProgramaParser.CondicionContext ctx);
	/**
	 * Enter a parse tree produced by {@link ProgramaParser#cadena}.
	 * @param ctx the parse tree
	 */
	void enterCadena(ProgramaParser.CadenaContext ctx);
	/**
	 * Exit a parse tree produced by {@link ProgramaParser#cadena}.
	 * @param ctx the parse tree
	 */
	void exitCadena(ProgramaParser.CadenaContext ctx);
	/**
	 * Enter a parse tree produced by {@link ProgramaParser#caracter}.
	 * @param ctx the parse tree
	 */
	void enterCaracter(ProgramaParser.CaracterContext ctx);
	/**
	 * Exit a parse tree produced by {@link ProgramaParser#caracter}.
	 * @param ctx the parse tree
	 */
	void exitCaracter(ProgramaParser.CaracterContext ctx);
}