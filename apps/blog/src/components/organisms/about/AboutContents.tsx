import { HsContainer, HsText } from "@hs-platforms/hs-core-ui";
import ReactMarkdown from "react-markdown";

const AboutContents = () => {
	return (
		<HsContainer padding={["100px 16px 0 16px", "140px 0 0 0"]}>
			<HsText>안녕하세요</HsText>
			<HsText>박시형 입니다.</HsText>
			{/* <ReactMarkdown children={data.contents} /> */}
		</HsContainer>
	);
};

export default AboutContents;
