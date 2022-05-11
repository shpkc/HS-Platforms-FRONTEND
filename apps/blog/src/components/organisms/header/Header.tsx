import React from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { MENU_LIST } from "src/constants/menu";
import { HsContainer, HsText } from "@hs-platforms/hs-core-ui";
import { useScroll } from "src/hooks/scroll/useScroll";

const Header = () => {
	const { scrollY } = useScroll();
	console.log(scrollY);
	return (
		<header>
			<HsContainer
				width={"100%"}
				position={"fixed"}
				left={0}
				top={12}
				zIndex={1000}
			>
				<HsContainer
					borderRadius={"4px"}
					padding={"16px 24px"}
					boxShadow={"0 1px 15px #d8d8d8"}
					margin={"0 auto"}
					maxWidth={"740px"}
					backgroundColor={"hsla(0,0%,100%,.7)"}
				>
					<HsContainer
						display={"flex"}
						alignItems={"center"}
						justifyContent={"space-between"}
						width={"100%"}
					>
						<Link href={"/"}>
							<HsText variant={"h4"} cursor={"pointer"}>
								TEVELOPER
							</HsText>
						</Link>
						<HsContainer display={"flex"}>
							<Link href={"/about"}>
								<HsText cursor={"pointer"}>ABOUT</HsText>
							</Link>
							<HsText>GITHUB</HsText>
						</HsContainer>
					</HsContainer>
				</HsContainer>
			</HsContainer>
		</header>
	);
};

export default Header;
