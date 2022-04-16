import React from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import HeaderAside from "./headerComponents/HeaderAside";
import { IoSearch } from "react-icons/io5";
import { MENU_LIST } from "src/constants/menu";
import { HsContainer, HsText } from "@hs-platforms/hs-core-ui";
import { MENU_TYPE } from "src/types/menu";

const Header = () => {
	const [isAsideOpen, setIsAsideOpen] = React.useState(false);

	return (
		<header>
			{isAsideOpen && <HeaderAside close={() => setIsAsideOpen(false)} />}
			<HsContainer
				width={"100%"}
				position={"fixed"}
				left={0}
				top={0}
				height={60}
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
				zIndex={1000}
				backgroundColor={"white"}
				borderBottom="1px solid #ededed"
			>
				<HsContainer
					width={["100%", "1100px"]}
					display={"flex"}
					alignItems={"center"}
					justifyContent={"space-between"}
					padding={"0 16px"}
				>
					<Link href={"/"}>
						<HsText variant={"h4"} cursor={"pointer"}>
							MARVICE
						</HsText>
					</Link>
					<HsContainer>
						<HsContainer display={["none", "flex"]} alignItems="center">
							{MENU_LIST.map((item: MENU_TYPE) => (
								<Link href={item.link} key={item.id}>
									<HsText
										cursor="pointer"
										margin={"0 20px 0 0"}
										fontWeight={500}
									>
										{item.title}
									</HsText>
								</Link>
							))}
							<Link href={"/search"}>
								<IoSearch size={22} style={{ cursor: "pointer" }} />
							</Link>
						</HsContainer>
						<HsContainer display={[, "none"]}>
							<GiHamburgerMenu
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
