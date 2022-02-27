import HsContainer from "src/components/atoms/layout/HsContainer";
import HsText from "src/components/atoms/text/HsText";
import Link from "next/link";
import { MENU_LIST } from "src/constants/menu";
import { MenuType } from "src/types/menu";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
	return (
		<footer>
			<HsContainer backgroundColor="#222227">
				<HsContainer
					width={[, "1100px"]}
					margin={["100px 0 0 0", "100px auto 0 auto"]}
					padding={["40px 15px 60px 15px", "40px 0 60px"]}
				>
					<HsContainer
						display={[, "flex"]}
						justifyContent={[, "space-between"]}
					>
						<HsText color={"white"} variant="h4" margin={"0 0 20px 0"}>
							NFT GAMES
						</HsText>
						<HsContainer
							margin={"0 0 20px 0"}
							display="flex"
							alignItems={"center"}
						>
							<a
								href="https://www.instagram.com//"
								className="site-nav-item"
								target="_blank"
								rel="noopener noreferrer"
							>
								<BsInstagram
									color="white"
									size={20}
									style={{ margin: "10px 10px 0 0", cursor: "pointer" }}
								/>
							</a>
							<a href="mailto:asdf@gmail.com">
								<AiOutlineMail
									color="white"
									size={25}
									style={{ margin: "10px 0 0 0", cursor: "pointer" }}
								/>
							</a>
						</HsContainer>
					</HsContainer>
					<HsContainer display={"flex"} margin="0 0 20px 0">
						{MENU_LIST.map((item: MenuType) => (
							<Link href={item.url}>
								<HsText
									color={"gray.gray10"}
									margin="0 10px 0 0"
									cursor="pointer"
								>
									{item.name}
								</HsText>
							</Link>
						))}
					</HsContainer>
					<HsText color="white">© NFT GAMES, 2021</HsText>
				</HsContainer>
			</HsContainer>
		</footer>
	);
};

export default Footer;
