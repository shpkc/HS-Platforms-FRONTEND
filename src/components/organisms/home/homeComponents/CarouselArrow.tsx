import HsContainer from "src/components/atoms/layout/HsContainer";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const PrevArrow = props => {
	return (
		<HsContainer
			position={"absolute"}
			left={30}
			top={"219px"}
			display={["none", "block"]}
			zIndex={2}
			cursor="pointer"
		>
			<IoIosArrowBack color={"white"} size={62} onClick={props.onClick} />
		</HsContainer>
	);
};

export const NextArrow = props => {
	return (
		<HsContainer
			position={"absolute"}
			right={30}
			top={"219px"}
			display={["none", "block"]}
			zIndex={2}
			cursor="pointer"
		>
			<IoIosArrowForward color={"white"} size={62} onClick={props.onClick} />
		</HsContainer>
	);
};
