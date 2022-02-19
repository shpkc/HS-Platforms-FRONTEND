import React from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import HeaderAside from "./headerComponents/HeaderAside";
import HsContainer from "src/components/atoms/layout/HsContainer";
import HsText from "src/components/atoms/text/HsText";

const Header = () => {
	const [isAsideOpen, setIsAsideOpen] = useState(false);
	return (
		<>
			{isAsideOpen && <HeaderAside />}
			<HsContainer
				backgroundColor={"black"}
				width={"100%"}
				position={"fixed"}
				left={0}
				top={0}
				borderBottom={"1px solid #222227"}
				height={60}
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
				zIndex={1000}
			>
				<HsContainer
					width={["100%", "1300px"]}
					display={"flex"}
					alignItems={"center"}
					justifyContent={"space-between"}
					padding={"0 15px"}
				>
					<Link href={"/"}>
						<HsText color={"white"} variant={"h4"}>
							NFTGAMES
						</HsText>
					</Link>
					<GiHamburgerMenu
						color="white"
						size={26}
						onClick={() => setIsAsideOpen(!isAsideOpen)}
					/>
				</HsContainer>
			</HsContainer>
		</>
	);
};

export default Header;
