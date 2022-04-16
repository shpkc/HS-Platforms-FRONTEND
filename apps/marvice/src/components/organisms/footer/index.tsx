import Link from "next/link";
import { MENU_LIST } from "src/constants/menu";
import { MENU_TYPE } from "src/types/menu";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { HsContainer, HsText } from "@hs-platforms/hs-core-ui";

const Footer = () => {
	return (
		<footer>
			<HsContainer backgroundColor="#222227">
				<HsContainer
					width={[, "1100px"]}
					margin={["100px 0 0 0", "100px auto 0 auto"]}
					padding={["40px 16px 60px 16px", "40px 0 60px"]}
				>
					<HsContainer
						display={[, "flex"]}
						justifyContent={[, "space-between"]}
					>
						<HsText color={"white"} variant="h4" margin={"0 0 20px 0"}>
							MARVICE
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
						{MENU_LIST.map((item: MENU_TYPE) => (
							<Link href={item.link} key={item.id}>
								<HsText
									color={"gray.gray10"}
									margin="0 10px 0 0"
									cursor="pointer"
								>
									{item.title}
								</HsText>
							</Link>
						))}
					</HsContainer>
					<HsText color="white">© MARVICE</HsText>
				</HsContainer>
			</HsContainer>
		</footer>
	);
};

export default Footer;
