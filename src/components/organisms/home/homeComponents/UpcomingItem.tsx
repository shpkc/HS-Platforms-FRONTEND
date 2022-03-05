import HsContainer from "src/components/atoms/layout/HsContainer";
import HsText from "src/components/atoms/text/HsText";
import { AxiosResponse } from "axios";
import Link from "next/link";
import HsImage from "src/components/atoms/image/HsImage";

const UpcomingItem = ({ item }: { item: AxiosResponse["data"] }) => {
	return (
		<Link href={`/games/detail/${item.id}`}>
			<HsContainer
				width={["48%", "24%"]}
				borderRadius={"12px"}
				margin={["0 0 30px 0", "0"]}
			>
				<HsImage
					src={`${process.env.NEXT_PUBLIC_IMG_HOST}/${item.id}/thumbnail.jpeg`}
					height="160px"
					borderRadius={"8px"}
					objectFit="cover"
					margin="0 0 18px 0"
				/>
				<HsText color="white" fontSize={"1.25rem"} margin="0 0 10px 0">
					{item.title}
				</HsText>
				<HsText color="gray.gray10">{item.releaseDate}</HsText>
			</HsContainer>
		</Link>
	);
};

export default UpcomingItem;
