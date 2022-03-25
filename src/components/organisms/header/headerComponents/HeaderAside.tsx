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
			height={"100vh"}
			backgroundColor="black"
			css={RightToLeft}
			zIndex={999}
		>
			<HsContainer padding={"30px 15px 0 15px"} width={[, "1200px"]}>
				<Link href={"/games"}>
					<HsText
						color={"white"}
						variant={"h4"}
						margin="0 0 15px 0"
						cursor="pointer"
					>
						GAMES
					</HsText>
				</Link>
				<Link href={"/best"}>
					<HsText
						color={"white"}
						variant={"h4"}
						margin="0 0 15px 0"
						cursor="pointer"
					>
						BEST
					</HsText>
				</Link>
				<Link href={"/upcoming"}>
					<HsText
						color={"white"}
						variant={"h4"}
						margin="0 0 15px 0"
						cursor="pointer"
					>
						UPCOMING
					</HsText>
				</Link>
				<HsText
					color={"white"}
					variant={"h4"}
					margin="0 0 15px 0"
					cursor="pointer"
				>
					REPORT
				</HsText>
			</HsContainer>
		</HsContainer>
	);
};

export default HeaderAside;
