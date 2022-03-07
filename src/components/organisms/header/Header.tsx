import React from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import HeaderAside from "./headerComponents/HeaderAside";
import HsContainer from "src/components/atoms/layout/HsContainer";
import HsText from "src/components/atoms/text/HsText";
import { IoSearch } from "react-icons/io5";
import { MENU_LIST } from "src/constants/menu";
import { MenuType } from "src/types/menu";

const Header = () => {
	const [isAsideOpen, setIsAsideOpen] = React.useState(false);

	return (
		<header>
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
							PLUSIVE
						</HsText>
					</Link>
					<HsContainer>
						<HsContainer display={["none", "flex"]} alignItems="center">
							{MENU_LIST.map((item: MenuType) => (
								<Link href={item.url} key={item.name}>
									<HsText
										color={"white"}
										cursor="pointer"
										margin={"0 20px 0 0"}
										fontWeight={500}
									>
										{item.name}
									</HsText>
								</Link>
							))}
							<Link href={"/search"}>
								<IoSearch
									color="white"
									size={22}
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
		</header>
	);
};

export default Header;
