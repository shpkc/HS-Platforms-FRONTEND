import { ReactNode } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

// NOTE : code block highlight
const CodeBlock = ({ children }: { children: ReactNode }) => {
	return (
		<SyntaxHighlighter language={"js"} style={coldarkDark}>
			{children}
		</SyntaxHighlighter>
	);
};

export default CodeBlock;
