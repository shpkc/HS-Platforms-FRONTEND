import { AxiosResponse } from "axios";
import HsContainer from "src/components/atoms/layout/HsContainer";
import HsText from "src/components/atoms/text/HsText";

import { Carousel } from "react-responsive-carousel";
import HsImage from "src/components/atoms/image/HsImage";

const HomeContents = ({ data }: { data: AxiosResponse["data"] }) => {
	return (
		<HsContainer
			padding={"100px 15px 0 15px"}
			width={[, "1300px"]}
			margin={[, "0 auto"]}
		>
			<HsContainer>
				<HsContainer>
					<Carousel showArrows={false} showThumbs={false} showStatus={false}>
						<HsContainer height={["360px", "500px"]}>
							<HsContainer position={"relative"}>
								<div
									style={{
										position: "absolute",
										zIndex: 10000,
										left: 0,
										top: 0,
										display: "block",
										height: "100%",
										width: "100%",
										background:
											"linear-gradient(30deg,rgba(0,0,0,0.7) 0,rgba(0,0,0,0) 100%)",
									}}
								/>
								<HsImage
									objectFit={"cover"}
									borderRadius={12}
									src={
										"https://tennisflow.s3.ap-northeast-2.amazonaws.com/games/1/thumbnail.jpeg"
									}
								/>
							</HsContainer>
							<HsContainer>
								<HsText color="white" variant="h4">
									Axie Infinity
								</HsText>
							</HsContainer>
						</HsContainer>
						<HsContainer>
							<HsImage
								borderRadius={12}
								src={
									"https://tennisflow.s3.ap-northeast-2.amazonaws.com/games/2/thumbnail.jpeg"
								}
								height={500}
							/>
						</HsContainer>
					</Carousel>
				</HsContainer>
			</HsContainer>
		</HsContainer>
	);
};

export default HomeContents;
