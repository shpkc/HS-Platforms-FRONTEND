import styled from "@emotion/styled";

// NOTE : custom markdown wrapper
export const MarkdownWrapper = styled.div`
	p {
		color: #555770;
		font-size: 1.1rem;
		line-height: 1.4;
		margin: 0.2rem 0 0.4rem;
		font-weight: 300;
	}
	em {
		color: black;
		font-size: 1.1rem;
		line-height: 1.4;
		font-weight: bold;
		min-width: 90px;
		max-width: 90px;
		display: inline-block;
	}
	h1 {
		color: #555770;
		font-size: 2.25rem;
		line-height: 1.4;
		font-weight: bold;
	}
	h3 {
		color: #555770;
		font-size: 1.9rem;
		line-height: 1.4;
		font-weight: bold;
	}
	h4 {
		color: #555770;
		font-size: 1.5rem;
		line-height: 1.3;
		font-weight: bold;
		margin: 0.4rem 0;
	}
	h5 {
		color: #555770;
		font-size: 1.1rem;
		line-height: 1.4;
		margin: 0.2rem 0 0.4rem;
		font-weight: 500;
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
		padding: 0 0 0 1.5rem;
		margin: 0 0 0.5rem 0;
	}
	hr {
		border-top: 1px solid #e3e9ed;
		margin: 1rem 0;
		@media (min-width: 1024px) {
			width: 600px;
		}
	}
	a {
		color: #58acfa;
		font-weight: 6001;
	}
`;
