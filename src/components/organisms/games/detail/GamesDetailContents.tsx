import React from "react";
import HsContainer from "src/components/atoms/layout/HsContainer";
import HsText from "src/components/atoms/text/HsText";
import HsImage from "src/components/atoms/image/HsImage";
import HsDivider from "src/components/atoms/divider/HsDivider";
import {
	HiOutlineOfficeBuilding,
	HiOutlineCube,
	HiViewGrid,
} from "react-icons/hi";
import { FaSteam } from "react-icons/fa";

import { AiFillStar, AiFillWindows } from "react-icons/ai";
import HsButton from "src/components/atoms/button/HsButton";
import Link from "next/link";
import { GameType } from "src/types/game";

const GamesDetailContents = ({ data, id }: { data: GameType; id: number }) => {
	return (
		<HsContainer
			padding={["100px 15px 0 15px", "100px 0 0 0"]}
			margin={[, "0 auto"]}
			width={[, "1100px"]}
		>
			<HsText color={"white"} variant={"h1"} margin="0 0 30px 0">
				{data.title}
			</HsText>
			<HsContainer display={["block", "flex"]} margin={[, "0 0 20px 0"]}>
				<HsContainer
					padding={"20px 10px"}
					border="1px solid #222227"
					borderRadius={16}
					margin={["0 0 20px 0", "0 30px 0 0"]}
					flex={[, "0 0 66%"]}
				>
					<HsImage
						src={`${process.env.NEXT_PUBLIC_IMG_HOST}/${id}/thumbnail.jpeg`}
						objectFit="cover"
					/>
				</HsContainer>
				<HsContainer>
					<HsText color={"white"} margin="0 0 15px 0" fontSize={"1.1rem"}>
						Descriptions
					</HsText>
					<HsText color={"gray.gray10"} lineHeight={1.625} margin="0 0 20px 0">
						{data.description}
					</HsText>
					<HsDivider
						direction="horizontal"
						color="#222227"
						margin="0 0 20px 0"
					/>
					<HsContainer>
						<HsContainer padding={"0 20px"}>
							<HsContainer
								display={"flex"}
								alignItems="center"
								margin={"0 0 20px 0"}
							>
								<HiOutlineOfficeBuilding
									color="#6164FF"
									size={22}
									style={{ margin: "0 5px 0 0" }}
								/>
								<HsText color={"white"}>Developer</HsText>
							</HsContainer>
							<HsText color={"white"} fontSize={"1.2rem"} margin={"0 0 20px 0"}>
								{data.developer}
							</HsText>
						</HsContainer>
						<HsDivider
							direction="horizontal"
							color="#222227"
							margin="0 0 20px 0"
						/>
						<HsContainer display={"flex"} margin="0 0 50px 0">
							<HsContainer
								width={"50%"}
								padding={"0 20px"}
								borderRight="1px solid #222227"
							>
								<HsContainer
									display={"flex"}
									alignItems="center"
									margin={"0 0 20px 0"}
								>
									<HiViewGrid
										color="#6164FF"
										size={22}
										style={{ margin: "0 5px 0 0" }}
									/>
									<HsText color={"white"}>Genre</HsText>
								</HsContainer>
								<HsText color={"white"} fontSize={"1.2rem"}>
									{data.genre}
								</HsText>
							</HsContainer>
							<HsContainer width={"50%"} padding={"0 20px"}>
								<HsContainer
									display={"flex"}
									alignItems="center"
									margin={"0 0 20px 0"}
								>
									<HiOutlineCube
										color="#6164FF"
										size={24}
										style={{ margin: "0 5px 0 0" }}
									/>
									<HsText color={"white"}>Platform</HsText>
								</HsContainer>
								<HsContainer display={"flex"}>
									{data.isWindow && (
										<AiFillWindows
											color="white"
											size={24}
											style={{ margin: "0 5px 0 0" }}
										/>
									)}
									{data.isSteam && (
										<FaSteam
											color="white"
											size={22}
											style={{ margin: "0 5px 0 0" }}
										/>
									)}
								</HsContainer>
							</HsContainer>
						</HsContainer>
						<Link href={data.website}>
							<HsButton
								borderRadius={12}
								height={50}
								color="white"
								backgroundColor="purple.primary"
								margin="0 0 20px 0"
							>
								WEBSITE
							</HsButton>
						</Link>
					</HsContainer>
				</HsContainer>
			</HsContainer>
			<HsContainer
				padding={"20px 10px"}
				border="1px solid #222227"
				borderRadius={16}
				display={"flex"}
				justifyContent={"space-between"}
				alignItems={"center"}
			>
				<HsContainer display="flex" alignItems={"center"}>
					<HsContainer display="flex" margin={"0 10px 0 0"}>
						<AiFillStar
							color="white"
							size={36}
							style={{ margin: "0 0 0 0", cursor: "pointer" }}
						/>
						<AiFillStar color="white" size={36} style={{ margin: "0 0 0 0" }} />
						<AiFillStar color="white" size={36} style={{ margin: "0 0 0 0" }} />
						<AiFillStar color="white" size={36} style={{ margin: "0 0 0 0" }} />
						<AiFillStar color="white" size={36} style={{ margin: "0 0 0 0" }} />
					</HsContainer>
					<HsContainer>
						<HsText color="white">(VOTE NOW)</HsText>
					</HsContainer>
				</HsContainer>
				<HsContainer
					backgroundColor={"#6164FF"}
					borderRadius={6}
					padding="15px"
				>
					<HsText color={"white"} fontWeight="bold" fontSize={20}>
						4.4
					</HsText>
				</HsContainer>
			</HsContainer>
		</HsContainer>
	);
};

export default GamesDetailContents;
