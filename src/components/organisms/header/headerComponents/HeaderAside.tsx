import React from "react";
import HsContainer from "src/components/atoms/layout/HsContainer";
import Link from "next/link";
import HsText from "src/components/atoms/text/HsText";
import { RightToLeft } from "styles/animation";

const HeaderAside = () => {
	return (
		<HsContainer
			position="fixed"
			left={0}
			top={60}
			display="flex"
			justifyContent={[, "center"]}
			width={"100%"}
			height={"calc(100vh - 60px)"}
			backgroundColor="black"
			css={RightToLeft}
		>
			<HsContainer padding={"30px 15px 0 15px"} width={[, "1300px"]}>
				<Link href={"/upcoming"}>
					<HsText color={"white"} variant={"h4"} margin="0 0 15px 0">
						UPCOMING
					</HsText>
				</Link>
				<Link href={"/games"}>
					<HsText color={"white"} variant={"h4"} margin="0 0 15px 0">
						GAMES
					</HsText>
				</Link>
			</HsContainer>
		</HsContainer>
	);
};

export default HeaderAside;
