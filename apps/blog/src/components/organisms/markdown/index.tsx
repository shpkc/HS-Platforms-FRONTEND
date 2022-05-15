import styled from "@emotion/styled";
import ReactMarkdown from "react-markdown";

export const MarkdownWrapper = styled(ReactMarkdown)`
	h1 {
		font-size: 2rem;
	}
	li::before {
		content: "";
		position: absolute;
		top: 0.375em;
		left: 0.25em;
		width: 0.375em;
		height: 0.375em;
		border-radius: 50%;
		background-color: #f2f2f2;
	}
	li {
		position: relative;
		font-size: 1.2rem;
		line-height: 1.3;
		color: #555770;
		font-weight: 500;
		padding: 0 0 0 1.5rem;
		margin: 0 0 0.5rem 0;
	}
`;
