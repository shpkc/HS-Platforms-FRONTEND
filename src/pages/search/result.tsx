import React, { useState } from "react";
import { dehydrate } from "react-query";
import { GetStaticProps } from "next";
import LayoutTemplate from "src/components/templates/LayoutTemplate";
import { usePrefetchCourts, useQueryCourts } from "src/hooks/query/useCourts";
import HsTextField from "src/components/atoms/form/HsTextField";
import HsContainer from "src/components/atoms/layout/HsContainer";
import HsText from "src/components/atoms/text/HsText";
import { IoSearch } from "react-icons/io5";
import { AiFillAppstore, AiTwotoneBank } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import HsGrid from "src/components/atoms/layout/HsGrid";
import { useRouter } from "next/router";

const Search = () => {
	const router = useRouter();
	console.log(router);
	const keywordItems = (item: any, index: number) => {
		return (
			<HsGrid padding="12px 0" key={index} cursor>
				{item.icon}
				<HsText medium>{item.keyword}</HsText>
			</HsGrid>
		);
	};
	return (
		<LayoutTemplate
			seo={{
				title: "검색 | 테니스 플랫폼",
				description: "테니스 플랫폼",
			}}
		>
			<HsContainer padding="80px 24px 0 24px"></HsContainer>
		</LayoutTemplate>
	);
};

export default Search;
