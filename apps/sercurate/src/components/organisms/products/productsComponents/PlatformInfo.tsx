import { IoMdShare } from "react-icons/io";
import { FaEthereum } from "react-icons/fa";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { HsContainer, HsText, HsButton } from "@hs-platforms/hs-core-ui";

// NOTE : Product's Platform Info
const PlatformInfo = ({ data }) => {
	return (
		<HsContainer width={[, "720px"]}>
			<HsContainer
				display={["none", "flex"]}
				justifyContent="space-between"
				alignItems={"center"}
				margin="0 0 50px 0"
			>
				<HsText variant="h3" margin={"0 10px 0 0"}>
					{data.name}
				</HsText>
				<IoMdShare style={{ cursor: "pointer" }} size={24} />
			</HsContainer>
			<HsContainer
				border="1px solid rgb(229, 232, 235)"
				borderRadius={"4px"}
				margin={["30px 0 20px 0", "0 0 30px 0"]}
			>
				<HsContainer
					borderBottom={"1px solid rgb(229, 232, 235)"}
					padding="20px"
				>
					<HsText color={"gray.gray20"} fontSize="1.1rem" fontWeight={500}>
						Current Price
					</HsText>
				</HsContainer>
				<HsContainer backgroundColor="rgb(251, 253, 255)" padding={"20px"}>
					<HsContainer
						display={"flex"}
						alignItems="flex-end"
						margin={["0 0 30px 0", "0 0 40px 0"]}
					>
						<HsContainer
							display={"flex"}
							alignItems="center"
							margin="0 3px 0 0"
						>
							<FaEthereum size={20} />
							<HsText fontWeight={"bold"} fontSize={"1.5rem"} margin="0 5px">
								{`${data.price} ${data.currency}`}
							</HsText>
						</HsContainer>
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
			<HsContainer border="1px solid rgb(229, 232, 235)" borderRadius={"4px"}>
				<HsContainer
					borderBottom={"1px solid rgb(229, 232, 235)"}
					padding="20px"
				>
					<HsContainer display={"flex"} alignItems="center">
						<AiOutlineUnorderedList size={18} />
						<HsText
							color={"gray.gray20"}
							fontSize="1.1rem"
							lineHeight={1.3}
							fontWeight={500}
							margin="0 0 0 10px"
						>
							Item Activity
						</HsText>
					</HsContainer>
				</HsContainer>
				<HsContainer width={"100%"} overflowX="auto">
					<HsContainer>
						<HsContainer display={"flex"}>
							<HsContainer
								minWidth={["110px", "20%"]}
								maxWidth={["110px", "20%"]}
								borderBottom={"1px solid rgb(229, 232, 235)"}
								backgroundColor="rgb(251, 253, 255)"
								padding={["12px 20px", "12px 0"]}
							>
								<HsText fontWeight={500} padding={[, "0 20px"]}>
									Event
								</HsText>
							</HsContainer>
							<HsContainer
								minWidth={["110px", "20%"]}
								maxWidth={["110px", "20%"]}
								borderBottom={"1px solid rgb(229, 232, 235)"}
								backgroundColor="rgb(251, 253, 255)"
								padding={["12px 20px", "12px 0"]}
							>
								<HsText fontWeight={500} padding={[, "0 20px"]}>
									Price
								</HsText>
							</HsContainer>
							<HsContainer
								minWidth={["110px", "20%"]}
								maxWidth={["110px", "20%"]}
								borderBottom={"1px solid rgb(229, 232, 235)"}
								backgroundColor="rgb(251, 253, 255)"
								padding={["12px 20px", "12px 0"]}
							>
								<HsText fontWeight={500} padding={[, "0 20px"]}>
									From
								</HsText>
							</HsContainer>
							<HsContainer
								minWidth={["130px", "20%"]}
								maxWidth={["130px", "20%"]}
								borderBottom={"1px solid rgb(229, 232, 235)"}
								backgroundColor="rgb(251, 253, 255)"
								padding={["12px 20px", "12px 0"]}
							>
								<HsText fontWeight={500} padding={[, "0 20px"]}>
									To
								</HsText>
							</HsContainer>
							<HsContainer
								minWidth={["130px", "20%"]}
								maxWidth={["130px", "20%"]}
								borderBottom={"1px solid rgb(229, 232, 235)"}
								backgroundColor="rgb(251, 253, 255)"
								padding={["12px 20px", "12px 0"]}
							>
								<HsText fontWeight={500} padding={[, "0 20px"]}>
									Date
								</HsText>
							</HsContainer>
						</HsContainer>
					</HsContainer>
					<HsContainer padding={"12px 20px"}>
						<HsContainer display={"flex"}>
							<HsContainer width={"20%"}>
								<HsText>Minted</HsText>
							</HsContainer>
						</HsContainer>
					</HsContainer>
				</HsContainer>
			</HsContainer>
		</HsContainer>
	);
};

export default PlatformInfo;
