import { HsContainer, HsText } from "@hs-platforms/hs-core-ui";
import { AxiosResponse } from "axios";
import ReactMarkdown from "react-markdown";
import { MarkdownWrapper } from "../markdown";

const AboutContents = ({ data }: { data: AxiosResponse["data"] }) => {
	console.log(data);
	return (
		<HsContainer
			padding={["100px 16px 0 16px", "140px 0 0 0"]}
			minHeight={"100vh"}
		>
			<HsText
				color={"blue.blue20"}
				fontWeight={"bold"}
				fontSize={"64px"}
				lineHeight={1.4}
				margin={"0 0 150px 0"}
			>
				안녕하세요
				<br />
				프론트엔드 개발자
				<br />
				박시형 입니다.
			</HsText>
			<MarkdownWrapper children={data.compiledSource} />
		</HsContainer>
	);
};

export default AboutContents;
