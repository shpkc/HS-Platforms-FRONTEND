import React, { useState } from "react";
import LayoutTemplate from "src/components/templates/LayoutTemplate";
import HsTextField from "src/components/atoms/form/HsTextField";
import HsContainer from "src/components/atoms/layout/HsContainer";
import HsText from "src/components/atoms/text/HsText";
import { IoSearch } from "react-icons/io5";
import { AiFillAppstore, AiTwotoneBank } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import HsGrid from "src/components/atoms/layout/HsGrid";
import { useRouter } from "next/router";

const RECOMMEND_KEYWORDS = [
	{
		icon: (
			<AiFillAppstore
				color="#5E67EB"
				size={28}
				style={{ marginRight: "16px" }}
			/>
		),
		keyword: "온라인 예약",
	},
	{
		icon: (
			<AiTwotoneBank
				color="#5E67EB"
				size={28}
				style={{ marginRight: "16px" }}
			/>
		),
		keyword: "실내 코트",
	},
	{
		icon: (
			<IoLocationSharp
				color="#5E67EB"
				size={28}
				style={{ marginRight: "16px" }}
			/>
		),
		keyword: "서울시 코트",
	},
	{
		icon: (
			<IoLocationSharp
				color="#5E67EB"
				size={28}
				style={{ marginRight: "16px" }}
			/>
		),
		keyword: "경기도 코트",
	},
	{
		icon: (
			<IoLocationSharp
				color="#5E67EB"
				size={28}
				style={{ marginRight: "16px" }}
			/>
		),
		keyword: "제주도 코트",
	},
];

const Search = () => {
	const [keyword, setKeyword] = useState("");
	const router = useRouter();
	const keywordItems = (item: any, index: number) => {
		return (
			<HsGrid padding="12px 0" key={index} cursor>
				{item.icon}
				<HsText medium>{item.keyword}</HsText>
			</HsGrid>
		);
	};

	const enterEvent = (e: React.KeyboardEvent) => {
		if (e.key === "Enter") {
			e.preventDefault();
			router.push({ pathname: "/search/result", query: { query: keyword } });
		}
	};

	return (
		<LayoutTemplate
			seo={{
				title: "검색 | 테니스 플랫폼",
				description: "테니스 플랫폼",
			}}
		>
			<HsContainer padding="80px 24px 0 24px">
				<HsTextField
					startIcon={
						<IoSearch size={28} color="007aff" style={{ margin: "0 12px" }} />
					}
					autoFocus
					onChange={e => setKeyword(e.target.value)}
					fontSize="16px"
					placeholder="코트, 지역 검색"
					margin="0 0 24px 0"
					onKeyPress={enterEvent}
				/>
				<HsText bold large margin="0 0 16px 0">
					추천 검색어
				</HsText>
				<>
					{RECOMMEND_KEYWORDS.map((item: any, index: number) =>
						keywordItems(item, index)
					)}
				</>
			</HsContainer>
		</LayoutTemplate>
	);
};

export default Search;
