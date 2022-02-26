import React from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import HeaderAside from "./headerComponents/HeaderAside";
import HsContainer from "src/components/atoms/layout/HsContainer";
import HsText from "src/components/atoms/text/HsText";
import { IoSearch } from "react-icons/io5";

const MENU_LIST = [
	{ title: "GAMES", url: "/games" },
	{ title: "BEST", url: "/best" },
	{ title: "UPCOMING", url: "/upcoming" },
	{ title: "REPORT", url: "/report" },
];

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
					width={["100%", "1100px"]}
					display={"flex"}
					alignItems={"center"}
					justifyContent={"space-between"}
					padding={"0 15px"}
				>
					<Link href={"/"}>
						<HsText color={"white"} variant={"h4"} cursor={"pointer"}>
							NFTGAMES
						</HsText>
					</Link>
					<HsContainer>
						<HsContainer display={["none", "flex"]} alignItems="center">
							{MENU_LIST.map(item => (
								<Link href={item.url} key={item.title}>
									<HsText
										color={"white"}
										cursor="pointer"
										margin={"0 20px 0 0"}
										fontWeight={500}
									>
										{item.title}
									</HsText>
								</Link>
							))}
							<Link href={"/search"}>
								<IoSearch
									color="white"
									size={20}
									style={{ cursor: "pointer" }}
								/>
							</Link>
						</HsContainer>
						<HsContainer display={[, "none"]}>
							<GiHamburgerMenu
								color="white"
								size={26}
								cursor="pointer"
								onClick={() => setIsAsideOpen(!isAsideOpen)}
							/>
						</HsContainer>
					</HsContainer>
				</HsContainer>
			</HsContainer>
		</>
	);
};

export default Header;
