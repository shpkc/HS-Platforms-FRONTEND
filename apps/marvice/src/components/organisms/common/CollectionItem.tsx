import { AxiosResponse } from "axios";
import Link from "next/link";
import { HsContainer, HsText, HsImage } from "@hs-platforms/hs-core-ui";

const CollectionItem = ({ data }: { data: AxiosResponse["data"] }) => {
	return (
		<Link href={`/collections/${data.id}`}>
			<HsContainer
				width={[, "260px"]}
				border="1px solid rgb(229, 232, 235)"
				borderRadius={"8px"}
				cursor="pointer"
				margin={"0 0 20px 0"}
			>
				<HsContainer height={["180px", "150px"]}>
					<HsImage
						src={`${process.env.NEXT_PUBLIC_IMG_HOST}/collections/${data.id}/thumbnail.jpeg`}
						objectFit={"cover"}
						borderTopLeftRadius={"8px"}
						borderTopRightRadius={"8px"}
					/>
				</HsContainer>
				<HsContainer padding={"20px 12px 10px 12px"}>
					<HsText textAlign={"center"} fontWeight="bold" margin={"0 0 10px 0"}>
						{data.title}
					</HsText>
					<HsText textAlign={"center"} lineHeight={1.2}>
						{data.description}
					</HsText>
				</HsContainer>
			</HsContainer>
		</Link>
	);
};

export default CollectionItem;
