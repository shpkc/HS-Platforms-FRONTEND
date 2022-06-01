import { HsContainer, HsText } from "@hs-platforms/hs-core-ui";
import { AxiosResponse } from "axios";
import { MDXRemote } from "next-mdx-remote";
import { AboutMarkdownWrapper } from "../markdown/AboutMarkdownWrapper";

const AboutContents = ({ data }: { data: AxiosResponse["data"] }) => {
	return (
		<HsContainer>
			<HsText
				color={"blue.blue20"}
				fontWeight={"bold"}
				fontSize={["35px", "64px"]}
				lineHeight={1.4}
				margin={["0 0 80px 0", "0 0 150px 0"]}
			>
				안녕하세요
				<br />
				프론트엔드 개발자
				<br />
				박시형 입니다.
			</HsText>
			<AboutMarkdownWrapper>
				<MDXRemote {...data} />
			</AboutMarkdownWrapper>
		</HsContainer>
	);
};

export default AboutContents;
