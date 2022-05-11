import { IoMdShare } from "react-icons/io";
import { BsFillStarFill } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { HsContainer, HsText, HsButton } from "@hs-platforms/hs-core-ui";
import { FaApple, FaChrome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { useMutate } from "src/hooks/query/mutate";
import { useRouter } from "next/router";
import { courtsRate } from "src/apis/PostsDomain";
import { useState } from "react";

// NOTE : Product's Platform Info
const PlatformInfo = ({ data }) => {
	const router = useRouter();
	const { id } = router.query;

	const [score, setScore] = useState<number>(0);

	// NOTE : product 별점 rate
	const { setter: rate } = useMutate({
		getFetch: courtsRate,
		onSuccess: res => console.log(res),
		refetch: `products${id}`,
	});

	// NOTE : 로그인 완성 시 로그인 처리
	const onClickRate = () => {
		rate({
			id,
			score,
		});
	};
	return (
		<HsContainer width={[, "650px"]}>
			<HsContainer
				display={["none", "flex"]}
				justifyContent="space-between"
				alignItems={"center"}
				margin="0 0 50px 0"
			>
				<HsText variant="h3" margin={"0 10px 0 0"}>
					{data.title}
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
						서비스 평점
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
							<BsFillStarFill size={20} />
							<HsContainer display={"flex"} alignItems="flex-end">
								<HsText fontWeight={"bold"} fontSize={"1.5rem"} margin="0 5px">
									{data.reviewScore.toFixed(1)}
								</HsText>
								<HsText
									color="gray.gray20"
									fontSize={"0.9rem"}
									lineHeight={1.2}
								>
									({data.reviewParticipants}명)
								</HsText>
							</HsContainer>
						</HsContainer>
					</HsContainer>
					<HsButton
						width={[, "300px"]}
						height="50px"
						borderRadius={"4px"}
						backgroundColor="black"
						color="white"
						onClick={onClickRate}
					>
						평가하기
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
							서비스 플랫폼
						</HsText>
					</HsContainer>
				</HsContainer>
				<HsContainer width={"100%"}>
					{data.isAppStore && (
						<a href={data.appStoreLink} target="_blank">
							<HsContainer>
								<HsContainer
									display={"flex"}
									backgroundColor="rgb(251, 253, 255)"
									borderBottom={"1px solid rgb(229, 232, 235)"}
								>
									<HsContainer
										padding={"12px 20px"}
										display="flex"
										justifyContent={"space-between"}
										alignItems="center"
										width="100%"
									>
										<HsContainer display={"flex"} alignItems="center">
											<FaApple size={24} />
											<HsText margin={"0 0 0 8px"} minWidth="100px">
												App Store
											</HsText>
										</HsContainer>
										<HsContainer display={"flex"} alignItems="center">
											<HsText
												fontSize={"0.9rem"}
												fontWeight={500}
												margin="0 3px 0 0"
												color="gray.gray20"
											>
												다운로드
											</HsText>
											<IoIosArrowForward />
										</HsContainer>
									</HsContainer>
								</HsContainer>
							</HsContainer>
						</a>
					)}
					{data.isPlayStore && (
						<a href={data.playStoreLink} target="_blank">
							<HsContainer>
								<HsContainer
									display={"flex"}
									backgroundColor="rgb(251, 253, 255)"
									borderBottom={"1px solid rgb(229, 232, 235)"}
								>
									<HsContainer
										padding={"12px 20px"}
										display="flex"
										justifyContent={"space-between"}
										alignItems="center"
										width="100%"
									>
										<HsContainer display={"flex"} alignItems="center">
											<IoLogoGooglePlaystore size={24} />
											<HsText margin={"0 0 0 8px"} minWidth="100px">
												Play Store
											</HsText>
										</HsContainer>
										<HsContainer display={"flex"} alignItems="center">
											<HsText
												fontSize={"0.9rem"}
												fontWeight={500}
												margin="0 3px 0 0"
												color="gray.gray20"
											>
												다운로드
											</HsText>
											<IoIosArrowForward />
										</HsContainer>
									</HsContainer>
								</HsContainer>
							</HsContainer>
						</a>
					)}
					{data.isWebService && (
						<a href={data.webServiceLink} target="_blank">
							<HsContainer>
								<HsContainer
									display={"flex"}
									backgroundColor="rgb(251, 253, 255)"
									borderBottom={"1px solid rgb(229, 232, 235)"}
								>
									<HsContainer
										padding={"12px 20px"}
										display="flex"
										justifyContent={"space-between"}
										alignItems="center"
										width="100%"
									>
										<HsContainer display={"flex"} alignItems="center">
											<FaChrome size={24} />
											<HsText margin={"0 0 0 8px"} minWidth="100px">
												Web Service
											</HsText>
										</HsContainer>
										<HsContainer display={"flex"} alignItems="center">
											<HsText
												fontSize={"0.9rem"}
												fontWeight={500}
												margin="0 3px 0 0"
												color="gray.gray20"
											>
												보러가기
											</HsText>
											<IoIosArrowForward />
										</HsContainer>
									</HsContainer>
								</HsContainer>
							</HsContainer>
						</a>
					)}
				</HsContainer>
			</HsContainer>
		</HsContainer>
	);
};

export default PlatformInfo;
