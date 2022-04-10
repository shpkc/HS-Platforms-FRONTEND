import { AiOutlinePicture } from "react-icons/ai";
import { IoMdShare } from "react-icons/io";
import { HsContainer, HsText, HsImage } from "@hs-platforms/hs-core-ui";
import { categoryHelper } from "src/services/helper/categoryHelper";

// NOTE : Product info
const ProductInfo = ({ data }) => {
	return (
		<HsContainer width={[, "384px"]}>
			<HsContainer display={["block", "none"]}>
				<HsText variant="h3" margin="0 0 15px 0">
					{data.name}
				</HsText>
				<HsContainer
					display={"flex"}
					justifyContent="space-between"
					margin="0 0 20px 0"
				>
					<HsContainer
						backgroundColor={"rgb(245, 245, 245)"}
						borderRadius={"4px"}
						padding="5px 12px"
					>
						<HsText fontWeight={500} fontSize={"0.7rem"} margin="3px 0 0 0">
							{categoryHelper(data.category)}
						</HsText>
					</HsContainer>
					<IoMdShare style={{ cursor: "pointer" }} size={24} />
				</HsContainer>
			</HsContainer>
			<HsContainer height={[, "240px"]} margin="0 0 30px 0">
				<HsImage
					src={`${process.env.NEXT_PUBLIC_IMG_HOST}/products/${data.id}/thumbnail.jpeg`}
					borderRadius={"4px"}
					objectFit={"cover"}
				/>
			</HsContainer>
			<HsText fontWeight={"500"} fontSize={"1.2rem"} margin="0 0 20px 0">
				서비스 소개
			</HsText>
			<HsText
				color={"gray.gray30"}
				lineHeight={1.4}
				margin="0 0 50px 0"
				fontSize={"1.1rem"}
			>
				{data.description}
			</HsText>
			<HsText fontWeight={"500"} fontSize={"1.2rem"} margin="0 0 20px 0">
				상세 정보
			</HsText>
			<HsContainer
				display={"flex"}
				justifyContent="space-between"
				margin="0 0 10px 0"
			>
				<HsText color={"gray.gray20"} fontSize="0.9rem">
					카테고리
				</HsText>
				<HsText fontSize="0.9rem" fontWeight={500}>
					{categoryHelper(data.category)}
				</HsText>
			</HsContainer>
			<HsContainer
				display={"flex"}
				justifyContent="space-between"
				margin="0 0 10px 0"
			>
				<HsText color={"gray.gray20"} fontSize="0.9rem">
					출시일
				</HsText>
				<HsText fontSize="0.9rem" fontWeight={500}>
					{data.releaseDate}
				</HsText>
			</HsContainer>
			<HsContainer
				display={"flex"}
				justifyContent="space-between"
				margin="0 0 10px 0"
			>
				<HsText color={"gray.gray20"} fontSize="0.9rem">
					회사명
				</HsText>
				<HsText fontSize="0.9rem" fontWeight={500}>
					{data.companyName}
				</HsText>
			</HsContainer>
			<HsContainer
				display={"flex"}
				justifyContent="space-between"
				margin="0 0 10px 0"
			>
				<HsText color={"gray.gray20"} fontSize="0.9rem">
					대표
				</HsText>
				<HsText fontSize="0.9rem" fontWeight={500}>
					{data.companyCeoName}
				</HsText>
			</HsContainer>
			<HsContainer
				display={"flex"}
				justifyContent="space-between"
				margin="0 0 10px 0"
			>
				<HsText color={"gray.gray20"} fontSize="0.9rem">
					홈페이지
				</HsText>
				<HsText fontSize="0.9rem" fontWeight={500}>
					<a
						href={data.homepage}
						target="_blank"
						style={{ textDecoration: "none", color: "black" }}
					>
						링크
					</a>
				</HsText>
			</HsContainer>
		</HsContainer>
	);
};

export default ProductInfo;
