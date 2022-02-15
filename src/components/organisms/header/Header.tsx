import React from "react";
import { css } from "@emotion/react";
import HsContainer from "src/components/atoms/layout/OldContainer";
import HsGrid from "src/components/atoms/layout/HsGrid";
import Link from "next/link";
import HsText from "src/components/atoms/text/OldText";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import HeaderAside from "./headerComponents/HeaderAside";

const Header = () => {
	const [isAsideOpen, setIsAsideOpen] = useState(false);
	return (
		<HsContainer
			fixed
			zIndex="999"
			minWidth="100%"
			padding="0 24px"
			border
			borderWidth={1}
			borderColor="#222227"
			css={headerStyle}
		>
			<>{isAsideOpen && <HeaderAside />}</>
			<HsGrid between colCenter>
				<Link href="/">
					<HsText
						bold
						h3
						color="white"
						letterSpacing={1}
						css={css`
							cursor: pointer;
						`}
					>
						NFTGAMES
					</HsText>
				</Link>
				{!isAsideOpen ? (
					<HsGrid>
						<Link href="/search">
							<IoSearch
								color="white"
								size={24}
								style={{ marginRight: "16px" }}
							/>
						</Link>
						<GiHamburgerMenu
							color="white"
							size={24}
							onClick={() => setIsAsideOpen(!isAsideOpen)}
						/>
					</HsGrid>
				) : (
					<MdClose size={30} onClick={() => setIsAsideOpen(!isAsideOpen)} />
				)}
			</HsGrid>
		</HsContainer>
	);
};

export default Header;

const headerStyle = css`
	height: 48px;
`;
