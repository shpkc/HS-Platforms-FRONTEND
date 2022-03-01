import HsContainer from "src/components/atoms/layout/HsContainer";
import HsText from "src/components/atoms/text/HsText";
import { AxiosResponse } from "axios";
import Link from "next/link";
import HsButton from "src/components/atoms/button/HsButton";
import HsDivider from "src/components/atoms/divider/HsDivider";
import HsImage from "src/components/atoms/image/HsImage";
import { AiFillStar } from "react-icons/ai";

const GameItem = ({ item }: { item: AxiosResponse["data"] }) => {
	return (
		<HsContainer
			border="1px solid #222227"
			borderRadius={16}
			width={[, "1100px"]}
			margin={["0 0 30px 0", "0 auto 40px auto"]}
			display={[, "flex"]}
			alignItems={[, "flex-start"]}
		>
			<HsContainer
				minWidth={[, "600px"]}
				maxWidth={[, "600px"]}
				height={[, "350px"]}
			>
				<Link href={`games/detail/${item.id}`}>
					<HsImage
						src={`${process.env.NEXT_PUBLIC_IMG_HOST}/${item.id}/thumbnail.jpeg`}
						borderRadius={12}
					/>
				</Link>
			</HsContainer>
			<HsContainer padding={["20px", "10px 20px"]}>
				<HsText color="white" margin="0 0 15px 0" variant="h3">
					{item.title}
				</HsText>
				<HsText color="white" margin="0 0 15px 0" fontSize={"1.1rem"}>
					{item.genre}
				</HsText>
				<HsText color="gray.gray10" margin="0 0 20px 0" lineHeight={1.5}>
					{item.description.slice(0, 200)}...
				</HsText>
				<HsDivider direction="horizontal" color="#222227" margin="0 0 20px 0" />
				<HsContainer
					display={"flex"}
					justifyContent="space-between"
					margin="0 0 30px 0"
				>
					<HsText fontSize={"1.1rem"} color={"white"}>
						© {item.developer}
					</HsText>
					<HsContainer display={"flex"} alignItems="center">
						<AiFillStar
							color="white"
							size={20}
							style={{ margin: "0 5px 0 0" }}
						/>
						<HsText color={"white"} fontSize="1.1rem">
							4.4
						</HsText>
					</HsContainer>
				</HsContainer>
				<Link href={`games/detail/${item.id}`}>
					<HsButton
						borderRadius={12}
						height={50}
						color="white"
						backgroundColor="purple.primary"
						margin="0 0 20px 0"
					>
						READ MORE
					</HsButton>
				</Link>
			</HsContainer>
		</HsContainer>
	);
};

export default GameItem;
