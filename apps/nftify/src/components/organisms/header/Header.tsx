import React from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import HeaderAside from "./headerComponents/HeaderAside";
import { IoSearch } from "react-icons/io5";
import { MENU_LIST } from "src/constants/menu";
import { MenuType } from "src/types/menu";
import { HsContainer, HsText } from "@hs-platforms/hs-core-ui";

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
					width={["100%", "1200px"]}
					display={"flex"}
					alignItems={"center"}
					justifyContent={"space-between"}
					padding={"0 16px"}
				>
					<Link href={"/"}>
						<HsText variant={"h4"} cursor={"pointer"}>
							NFTIFY
						</HsText>
					</Link>
					<HsContainer>
						<HsContainer display={["none", "flex"]} alignItems="center">
							{MENU_LIST.map((item: MenuType) => (
								<HsText
									cursor="pointer"
									margin={"0 20px 0 0"}
									fontWeight={500}
									key={item.name}
								>
									{item.name}
								</HsText>
							))}
							<IoSearch size={22} style={{ cursor: "pointer" }} />
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
