import HsImage from "src/components/atoms/image/HsImage";
import HsContainer from "src/components/atoms/layout/HsContainer";
import HsText from "src/components/atoms/text/HsText";

const ProductsContents = ({ data }) => {
	console.log(data);
	return (
		<HsContainer
			padding={["80px 16px 0 16px", "140px 0 0 0"]}
			width={["100%", "1200px"]}
			margin="0 auto"
		>
			<HsContainer display={["block", "flex"]} justifyContent="space-between">
				<HsContainer width={[, "384px"]}>
					<HsContainer display={["block", "none"]}>
						<HsText variant="h3">{data.title}</HsText>
					</HsContainer>
					<HsContainer height={[, "384px"]} margin="0 0 30px 0">
						<HsImage
							src={data.image}
							borderRadius={"4px"}
							objectFit={"cover"}
						/>
					</HsContainer>
					<HsText fontWeight={"500"} fontSize={"1.2rem"} margin="0 0 5px 0">
						Description
					</HsText>
					<HsText color={"gray.gray20"}>{data.description}</HsText>
				</HsContainer>
				<HsContainer width={[, "720px"]}>
					<HsText variant="h3">{data.title}</HsText>
				</HsContainer>
			</HsContainer>
		</HsContainer>
	);
};

export default ProductsContents;
