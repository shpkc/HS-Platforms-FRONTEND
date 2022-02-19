import { AxiosResponse } from "axios";
import HsContainer from "src/components/atoms/layout/HsContainer";

const HomeContents = ({ data }: { data: AxiosResponse["data"] }) => {
	return <HsContainer></HsContainer>;
};

export default HomeContents;
