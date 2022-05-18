import React from "react";
import { AxiosResponse } from "axios";
import { HsContainer } from "@hs-platforms/hs-core-ui";

const HomeContents = ({ data }: { data: AxiosResponse["data"] }) => {
	console.log(data);
	return <HsContainer padding={"61px 0 0 0"}></HsContainer>;
};

export default HomeContents;
