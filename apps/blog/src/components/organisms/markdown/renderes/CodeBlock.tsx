import { ReactNode } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

// NOTE : code block highlight
const CodeBlock = ({
	className,
	children,
}: {
	className?: string;
	children: ReactNode;
}) => {
	return (
		<SyntaxHighlighter
			language={className?.replace("language-", "")}
			style={vscDarkPlus}
		>
			{children}
		</SyntaxHighlighter>
	);
};

export default CodeBlock;
