import { AxiosResponse } from "axios";
import HsContainer from "src/components/atoms/layout/HsContainer";
import HsText from "src/components/atoms/text/HsText";

import { Carousel } from "react-responsive-carousel";

const HomeContents = ({ data }: { data: AxiosResponse["data"] }) => {
	return (
		<HsContainer
			padding={"100px 15px 0 15px"}
			width={[, "1300px"]}
			margin={[, "0 auto"]}
		>
			<HsContainer height={"508px"}>
				<Carousel>
					<HsContainer>
						<img
							src={
								"https://tennisflow.s3.ap-northeast-2.amazonaws.com/games/1/thumbnail.jpeg"
							}
						/>
					</HsContainer>
					<HsContainer>
						<img
							src={
								"https://tennisflow.s3.ap-northeast-2.amazonaws.com/games/1/thumbnail.jpeg"
							}
						/>
					</HsContainer>
				</Carousel>
			</HsContainer>
		</HsContainer>
	);
};

export default HomeContents;
