import React from "react";
import { dehydrate } from "react-query";
import LayoutTemplate from "src/components/templates/LayoutTemplate";
import dynamic from "next/dynamic";
import {
	usePrefetchCourtsDetail,
	useQueryCourtsDetail,
} from "src/hooks/query/useCourts";
import { GetStaticPaths } from "next";
import CourtsDomain from "src/domains/CourtsDomain";

const CourtsDetailContents = dynamic(
	() => import("src/components/organisms/courts/detail/CourtsDetailContents")
);

const CourtsDetail = ({ id }: { id: string }) => {
	const { data } = useQueryCourtsDetail(id);
	if (!data) {
		return <div />;
	}
	return (
		<>
			<LayoutTemplate
				seo={{
					title: data.result.name,
					description: data.result.name,
				}}
			>
				<CourtsDetailContents data={data.result} id={data.result.id} />
			</LayoutTemplate>
		</>
	);
};
export const getStaticProps = async ({
	params: { id },
}: {
	params: { id: string };
}) => {
	const queryClient = await usePrefetchCourtsDetail(id);

	return {
		props: {
			dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
			id,
		},
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const { getAllCourtsId } = CourtsDomain();
	const { result } = await getAllCourtsId();
	const paths = result.map((item: any) => ({
		params: { id: item.id.toString() },
	}));
	return {
		paths,
		fallback: true,
	};
};
export default CourtsDetail;
