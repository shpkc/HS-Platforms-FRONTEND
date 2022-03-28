import React from "react";
import HsContainer from "src/components/atoms/layout/HsContainer";
import Link from "next/link";
import HsText from "src/components/atoms/text/HsText";
import { RightToLeft } from "styles/animation";
import { IoStorefront, IoClose } from "react-icons/io5";
import { MdCollections } from "react-icons/md";
import HsButton from "src/components/atoms/button/HsButton";

const HeaderAside = ({ close }: { close: () => void }) => {
	return (
		<HsContainer
			position="fixed"
			left={0}
			top={0}
			width={"100%"}
			height={"100vh"}
			backgroundColor="rgba(0,0,0,0.2)"
			zIndex={1001}
		>
			<HsContainer
				position="fixed"
				left={0}
				top={0}
				display="flex"
				justifyContent={[, "center"]}
				width={"100%"}
				height={"100vh"}
				backgroundColor="white"
				zIndex={1002}
				css={RightToLeft}
			>
				<HsContainer padding={"16px"} width="100%">
					<HsContainer
						display={"flex"}
						justifyContent="flex-end"
						margin={"0 0 50px 0"}
					>
						<IoClose size={32} onClick={close} />
					</HsContainer>
					<HsContainer
						display={"flex"}
						justifyContent="space-between"
						margin={"0 0 30px 0"}
					>
						<Link href="login">
							<HsButton
								borderRadius={"4px"}
								padding="10px"
								width={"48%"}
								backgroundColor="black"
								color="white"
							>
								Login
							</HsButton>
						</Link>
						<Link href="signUp">
							<HsButton
								borderRadius={"4px"}
								padding="10px"
								width={"48%"}
								color="black"
								backgroundColor="white"
								border="1px solid rgb(229, 232, 235)"
							>
								Sign Up
							</HsButton>
						</Link>
					</HsContainer>
					<Link href={"/marketplace"}>
						<HsContainer
							display={"flex"}
							margin="0 0 30px 0"
							alignItems={"center"}
						>
							<IoStorefront size={18} />
							<HsText
								cursor="pointer"
								fontWeight={500}
								margin="0 0 0 10px"
								fontSize={"1.2rem"}
							>
								Marketplace
							</HsText>
						</HsContainer>
					</Link>
					<Link href={"/drop"}>
						<HsContainer
							display={"flex"}
							margin="0 0 30px 0"
							alignItems={"center"}
						>
							<MdCollections size={18} />
							<HsText
								cursor="pointer"
								fontWeight={500}
								margin="0 0 0 10px"
								fontSize={"1.2rem"}
							>
								Collections
							</HsText>
						</HsContainer>
					</Link>
				</HsContainer>
			</HsContainer>
		</HsContainer>
	);
};

export default HeaderAside;
