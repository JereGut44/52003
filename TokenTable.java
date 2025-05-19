import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.CharStreams;

public class TokenTable {
    public static void main(String[] args) throws Exception {
        // Entrada de ejemplo
        String input = """
            mientras verdadero {
                imprimir("Hola mundo!");
            }
            """;

        ProgramaLexer lexer = new ProgramaLexer(CharStreams.fromString(input));
        CommonTokenStream tokens = new CommonTokenStream(lexer);
        tokens.fill();

        System.out.printf("%-20s %-20s\n", "TOKEN", "LEXEMA");
        System.out.println("------------------------------------------");

        for (Token token : tokens.getTokens()) {
            if (token.getType() != Token.EOF) {
                String tokenName = lexer.getVocabulary().getSymbolicName(token.getType());
                System.out.printf("%-20s %-20s\n", tokenName, token.getText());
            }
        }
    }
}
