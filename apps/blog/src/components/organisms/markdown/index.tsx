import styled from "@emotion/styled";

styled;

const MarkdownWrapper = styled(ReactMarkdown)`
	a {
		color: var(--green2);
		font-weight: 500;
		transition: color 0.1s;
		&:hover {
			color: var(--green3);
		}
	}
	ul {
		margin: 0.8rem 0;
		> li {
			margin: 0.4rem 0;
		}
	}
`;
