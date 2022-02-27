import HsContainer from "src/components/atoms/layout/HsContainer";
import HsText from "src/components/atoms/text/HsText";
import Link from "next/link";
import { MENU_LIST } from "src/constants/menu";
import { MenuType } from "src/types/menu";

const Footer = () => {
	return (
		<footer>
			<HsContainer backgroundColor="#222227">
				<HsContainer
					width={[, "1100px"]}
					margin={[, "0 auto"]}
					padding={["60px 0"]}
				>
					<HsContainer display={"flex"}>
						<HsText color={"white"} variant="h4">
							NFT GAMES
						</HsText>
						{MENU_LIST.map((item: MenuType) => (
							<Link href={item.url}>
								<HsText color={"white"} variant="h4">
									{item.name}
								</HsText>
							</Link>
						))}
						<HsText color={"white"} variant="h4">
							NFT GAMES
						</HsText>
						<HsText color={"white"} variant="h4">
							NFT GAMES
						</HsText>
						<HsText color={"white"} variant="h4">
							NFT GAMES
						</HsText>
					</HsContainer>
					<HsText color="white">© NFT GAMES, 2021</HsText>
				</HsContainer>
			</HsContainer>
		</footer>
	);
};

export default Footer;
