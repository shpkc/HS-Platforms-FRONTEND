import React from "react";
import Link from "next/link";
import { RightToLeft } from "styles/animation";
import { IoStorefront, IoClose } from "react-icons/io5";
import { MdCollections } from "react-icons/md";
import { HsContainer, HsText, HsButton } from "@hs-platforms/hs-core-ui";

const HeaderAside = ({ close }: { close: () => void }) => {
	return (
		<HsContainer
			position="fixed"
			left={0}
			top={0}
			width={"100%"}
			height={"100%"}
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
				height={"100%"}
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
						<HsButton
							borderRadius={"4px"}
							padding="10px"
							width={"48%"}
							backgroundColor="black"
							color="white"
						>
							Login
						</HsButton>
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
					</HsContainer>
				</HsContainer>
			</HsContainer>
		</HsContainer>
	);
};

export default HeaderAside;
