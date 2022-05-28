import styled from "@emotion/styled";
import "@code-hike/mdx/dist/index.css";

// NOTE : custom markdown wrapper
export const MarkdownWrapper = styled.div`
	p {
		color: #555770;
		font-size: 1rem;
		line-height: 1.4;
		margin: 0.2rem 0 0.4rem;
		font-weight: 300;
		@media (min-width: 1024px) {
			font-size: 1.1rem;
			line-height: 1.4;
		}
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
	h6::before {
		content: "";
		position: absolute;
		left: 0px;
		top: 3px;
		width: 15px;
		height: 40px;
		background-color: #427efa;
	}
	h6 {
		position: relative;
		color: #555770;
		font-size: 1.9rem;
		line-height: 1.4;
		font-weight: bold;
		padding: 0 0 0 1.5rem;
	}
	li::before {
		content: "";
		position: absolute;
		top: 8px;
		left: 0px;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background-color: #f2f2f2;
		@media (min-width: 1024px) {
			top: 10px;
		}
	}
	li {
		position: relative;
		font-size: 1rem;
		line-height: 1.3;
		color: #555770;
		padding: 0 0 0 1.2rem;
		margin: 0 0 0.5rem 0;
		@media (min-width: 1024px) {
			font-size: 1rem;
			padding: 0 0 0 1.5rem;
		}
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
	center {
		color: #555770;
		font-size: 1rem;
		line-height: 1.4;
		margin: 0.2rem 0 0.4rem;
		font-weight: bold;
	}
	blockquote {
		border-left: 7px solid #20c997;
		padding: 10px 0 10px 25px;
		background-color: #f8f9fa;
	}
`;
