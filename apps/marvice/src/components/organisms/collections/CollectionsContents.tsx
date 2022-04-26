import React from "react";
import { AxiosResponse } from "axios";
import ProductItem from "src/components/organisms/common/ProductItem";
import { BsArrowRightShort } from "react-icons/bs";
import Link from "next/link";
import HomeBanner from "src/components/organisms/home/homeComponents/HomeBanner";
import CollectionItem from "src/components/organisms/common/CollectionItem";
import { HsContainer, HsText } from "@hs-platforms/hs-core-ui";
import InfiniteScrollTemplate from "src/components/templates/InniteScrollTemplate";

const CollectionsContents = ({
	data,
	nextPage,
}: {
	data: AxiosResponse["data"];
	nextPage: () => void;
}) => {
	console.log(data);
	return (
		<HsContainer padding={"100px 0 0 0"}>
			<HsContainer
				width={[, "1100px"]}
				margin={[, "0 auto"]}
				padding={"0 16px"}
			>
				<HsText
					fontSize={["1.8rem", "2.5rem"]}
					fontWeight="bold"
					margin="0 0 25px 0"
				>
					컬렉션
				</HsText>
				<HsText margin={"0 0 50px 0"}>취향에 맞는 컬렉션을 살펴보세요</HsText>
				<InfiniteScrollTemplate query="collections" nextPage={nextPage}>
					<HsContainer display={[, "flex"]} justifyContent="space-between">
						{data?.pages
							.map((item: AxiosResponse["data"]) => item.data)
							.flat()
							.map((item: AxiosResponse["data"], index: number) => (
								<CollectionItem key={index} data={item} />
							))}
					</HsContainer>
				</InfiniteScrollTemplate>
			</HsContainer>
		</HsContainer>
	);
};

export default CollectionsContents;
