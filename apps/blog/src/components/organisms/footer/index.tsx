import { HsContainer, HsText } from "@hs-platforms/hs-core-ui";

const Footer = () => {
	return (
		<footer>
			<HsContainer
				display={"flex"}
				alignItems={"center"}
				justifyContent={"center"}
			>
				<HsText padding={"30px"} fontWeight={"bold"} fontSize={"1.2rem"}>
					©TEVELOPER
					<span style={{ fontWeight: "400", margin: "0 6px" }}>Built with</span>
					Next.js
				</HsText>
			</HsContainer>
		</footer>
	);
};

export default Footer;
