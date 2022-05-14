import Link from "next/link";
import { MENU_LIST } from "src/constants/menu";
import { MENU_TYPE } from "src/types/menu";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { HsContainer, HsText } from "@hs-platforms/hs-core-ui";

const Footer = () => {
	return (
		<footer>
			<HsContainer
				display={"flex"}
				alignItems={"center"}
				justifyContent={"center"}
			>
				<HsText padding={"16px"} fontWeight={"bold"} fontSize={"1.2rem"}>
					©TEVELOPER,
					<span style={{ fontWeight: "400", margin: "0 5px" }}>Built with</span>
					Next.js
				</HsText>
			</HsContainer>
		</footer>
	);
};

export default Footer;
