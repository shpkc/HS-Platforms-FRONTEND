import { dehydrate } from "react-query";
import { GetStaticProps } from "next";
import LayoutTemplate from "src/components/templates/LayoutTemplate";

const Index = () => {
	return <div />;
};

// export const getStaticProps: GetStaticProps = async context => {
// 	return {
// 		revalidate: 10,
// 		props: {
// 			dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
// 		},
// 	};
// };
export default Index;
