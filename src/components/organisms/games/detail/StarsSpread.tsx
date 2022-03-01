import React from "react";
import HsContainer from "src/components/atoms/layout/HsContainer";
import { AiFillStar } from "react-icons/ai";

// NOTE : 0~1, 1~2, 2~3, 3~4, 4~5 구간
const StarsSpread = ({ score }: { score: number }) => {
	return (
		<HsContainer display="flex" margin={"0 10px 0 0"}>
			{Array.from({ length: 5 }, (_, i) => i + 1).map((item, index) => (
				<HsContainer key={index}>
					{score >= item ? (
						<AiFillStar
							color="#389BB2"
							size={36}
							style={{ margin: "0 0 0 0", cursor: "pointer" }}
						/>
					) : (
						<AiFillStar
							color="white"
							size={36}
							style={{ margin: "0 0 0 0", cursor: "pointer" }}
						/>
					)}
				</HsContainer>
			))}
		</HsContainer>
	);
};

export default StarsSpread;
