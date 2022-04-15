// NOTE : 카테고리 한글 변환
export const categoryHelper = (category: string) => {
	switch (true) {
		case category === "pet":
			return "반려동물";
		case category === "hiring":
			return "채용";
		case category === "idol":
			return "아이돌";
		case category === "interior":
			return "인테리어";
		case category === "real estate":
			return "부동산";
		case category === "commerce":
			return "커머스";
		case category === "health":
			return "건강";
		default:
			return "카테고리";
	}
};
