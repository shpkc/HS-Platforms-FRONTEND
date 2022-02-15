import React from "react";
import { COURTS_LIST } from "src/constants/api";
import { queryParams } from "src/helper/queryParamHelper";
import { getMethod } from "src/hooks/apiMethod/getMethod";
import { infiniteScrollMapper } from "src/services/mapper/infiniteScrollMapper";

const CourtsDomain = () => {
	const getCourts = ({ pageParam = 1 }: { pageParam?: number }) =>
		getMethod({
			url: queryParams(COURTS_LIST, [
				["page", `${pageParam}`],
				["perPage", "20"],
			]),
			mapper: infiniteScrollMapper(pageParam),
		})();

	const getCourtsDetail = (id: string) =>
		getMethod({
			url: `${COURTS_LIST}/${id}`,
		})();

	const getAllCourtsId = () =>
		getMethod({
			url: `${COURTS_LIST}/all-id`,
		})();
	return { getCourts, getCourtsDetail, getAllCourtsId };
};

export default CourtsDomain;
