import HsImage from "src/components/atoms/image/HsImage";
import HsContainer from "src/components/atoms/layout/HsContainer";
import HsText from "src/components/atoms/text/HsText";
import { AiOutlinePicture } from "react-icons/ai";
import { IoMdShare } from "react-icons/io";
import { FaEthereum } from "react-icons/fa";
import { getEthereumPrice } from "src/apis/ProductsDomain";
import { useFetch } from "src/hooks/query/fetch";
import HsButton from "src/components/atoms/button/HsButton";

const ProductsContents = ({ data }) => {
	const { data: priceData } = useFetch("etherPrice", () => getEthereumPrice());

	return (
		<HsContainer padding={["80px 16px 0 16px", "140px 0 0 0"]}>
			<HsContainer
				display={["block", "flex"]}
				justifyContent="space-between"
				width={["100%", "1200px"]}
				margin="0 auto"
			>
				<HsContainer width={[, "384px"]}>
					<HsContainer display={["block", "none"]}>
						<HsText variant="h3">{data.title}</HsText>
					</HsContainer>
					<HsContainer
						height={[, "384px"]}
						margin="0 0 30px 0"
						position={"relative"}
					>
						<HsImage
							src={data.image}
							borderRadius={"4px"}
							objectFit={"cover"}
						/>
						{data.mediaType == "IMAGE" && (
							<HsContainer
								position={"absolute"}
								top={"12px"}
								left={"12px"}
								width="28px"
								height={"28px"}
								background="linear-gradient(109.81deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.2) 103.77%)"
								borderRadius={"4px"}
								display="flex"
								alignItems={"center"}
								justifyContent="center"
							>
								<AiOutlinePicture color="white" size={20} />
							</HsContainer>
						)}
					</HsContainer>
					<HsText fontWeight={"500"} fontSize={"1.2rem"} margin="0 0 20px 0">
						Description
					</HsText>
					<HsText color={"gray.gray30"} lineHeight={1.2} margin="0 0 50px 0">
						{data.description}
					</HsText>
					<HsText fontWeight={"500"} fontSize={"1.2rem"} margin="0 0 20px 0">
						Details
					</HsText>
					<HsContainer
						display={"flex"}
						justifyContent="space-between"
						margin="0 0 10px 0"
					>
						<HsText color={"gray.gray20"} fontSize="0.9rem">
							Creator
						</HsText>
						<HsText fontSize="0.9rem" fontWeight={500}>
							{`${data.seller.slice(0, 5)}...${data.seller.slice(-5)}`}
						</HsText>
					</HsContainer>
					<HsContainer
						display={"flex"}
						justifyContent="space-between"
						margin="0 0 10px 0"
					>
						<HsText color={"gray.gray20"} fontSize="0.9rem">
							Owner
						</HsText>
						<HsText fontSize="0.9rem" fontWeight={500}>
							{`${data.owner.slice(0, 5)}...${data.owner.slice(-5)}`}
						</HsText>
					</HsContainer>
					<HsContainer
						display={"flex"}
						justifyContent="space-between"
						margin="0 0 10px 0"
					>
						<HsText color={"gray.gray20"} fontSize="0.9rem">
							Token ID
						</HsText>
						<HsText fontSize="0.9rem" fontWeight={500}>
							{data.tokenId}
						</HsText>
					</HsContainer>
					<HsContainer
						display={"flex"}
						justifyContent="space-between"
						margin="0 0 10px 0"
					>
						<HsText color={"gray.gray20"} fontSize="0.9rem">
							Token Standard
						</HsText>
						<HsText fontSize="0.9rem" fontWeight={500}>
							ERC-721
						</HsText>
					</HsContainer>
					<HsContainer
						display={"flex"}
						justifyContent="space-between"
						margin="0 0 10px 0"
					>
						<HsText color={"gray.gray20"} fontSize="0.9rem">
							Blockchain
						</HsText>
						<HsText fontSize="0.9rem" fontWeight={500}>
							Ethereum
						</HsText>
					</HsContainer>
				</HsContainer>
				<HsContainer width={[, "720px"]}>
					<HsContainer
						display={"flex"}
						justifyContent="space-between"
						alignItems={"center"}
						margin="0 0 50px 0"
					>
						<HsContainer display={"flex"} alignItems="center">
							<HsText variant="h3" margin={"0 10px 0 0"}>
								{data.title}
							</HsText>
							<HsContainer
								backgroundColor={"rgb(245, 245, 245)"}
								borderRadius={"4px"}
								padding="5px 12px"
							>
								<HsText fontWeight={500} fontSize={"0.7rem"} margin="3px 0 0 0">
									{data.category}
								</HsText>
							</HsContainer>
						</HsContainer>
						<IoMdShare style={{ cursor: "pointer" }} size={24} />
					</HsContainer>
					<HsContainer
						border="1px solid rgb(229, 232, 235)"
						padding={"20px"}
						borderRadius={"4px"}
						backgroundColor="rgb(251, 253, 255)"
					>
						<HsText
							color={"gray.gray20"}
							fontSize="1.1rem"
							fontWeight={500}
							margin="0 0 10px 0"
						>
							Current Price
						</HsText>
						<HsContainer
							display={"flex"}
							alignItems="flex-end"
							margin={"0 0 40px 0"}
						>
							<HsContainer
								display={"flex"}
								alignItems="center"
								margin="0 3px 0 0"
							>
								<FaEthereum size={20} />
								<HsText
									fontWeight={"bold"}
									fontSize={"1.5rem"}
									margin="0 0 0 5px"
								>
									{`${data.price} ${data.currency}`}
								</HsText>
							</HsContainer>
							{priceData && (
								<HsText
									color="gray.gray20"
									textAlign={"right"}
									fontSize={"0.9rem"}
									lineHeight={1.5}
								>
									(${(priceData.USD * data.price).toFixed(1)})
								</HsText>
							)}
						</HsContainer>
						<HsButton
							width={[, "300px"]}
							height="50px"
							borderRadius={"4px"}
							backgroundColor="black"
							color="white"
						>
							Buy Now
						</HsButton>
					</HsContainer>
				</HsContainer>
			</HsContainer>
		</HsContainer>
	);
};

export default ProductsContents;
