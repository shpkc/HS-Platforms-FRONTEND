import React from "react";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { HsContainer, HsText } from "@hs-platforms/hs-core-ui";
import { useScroll } from "src/hooks/scroll/useScroll";
import { css } from "@emotion/react";

const Header = () => {
	const { scrollY } = useScroll();
	return (
		<header>
			<HsContainer
				width={"100%"}
				position={"fixed"}
				left={0}
				top={12}
				zIndex={1000}
			>
				<HsContainer
					borderRadius={"8px"}
					padding={"16px 24px"}
					margin={"0 auto"}
					maxWidth={"1024px"}
					transition={"all 0.4s"}
					css={
						scrollY > 0 &&
						css`
							background-color: hsla(0, 0%, 100%, 0.7);
							box-shadow: 0 1px 15px #d8d8d8;
						`
					}
				>
					<HsContainer
						display={"flex"}
						alignItems={"center"}
						justifyContent={"space-between"}
						width={"100%"}
					>
						<Link href={"/"}>
							<HsText variant={"h4"} cursor={"pointer"}>
								TEVELOPER
							</HsText>
						</Link>
						<HsContainer display={"flex"} alignItems={"center"}>
							<Link href={"/blog"}>
								<HsText
									cursor={"pointer"}
									margin={"0 5px"}
									color={"gray.gray20"}
									fontWeight={"500"}
								>
									BLOG
								</HsText>
							</Link>
							<Link href={"/about"}>
								<HsText
									cursor={"pointer"}
									margin={"0 10px 0 5px"}
									color={"gray.gray20"}
									fontWeight={"500"}
								>
									ABOUT
								</HsText>
							</Link>
							<a href="https://github.com/shpkc" target={"_blank"}>
								<AiFillGithub size={24} />
							</a>
						</HsContainer>
					</HsContainer>
				</HsContainer>
			</HsContainer>
		</header>
	);
};

export default Header;
