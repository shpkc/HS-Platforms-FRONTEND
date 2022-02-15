/*global kakao*/
import React, { useEffect } from "react";
import styled from "@emotion/styled";

declare var kakao: any;

const KakaoMap = ({
	lat,
	lng,
	title,
}: {
	lat: number;
	lng: number;
	title: string;
}) => {
	useEffect(() => {
		var container = document.getElementById("map");
		var options = {
			center: new kakao.maps.LatLng(lat, lng),
			level: 5,
			draggable: false,
			scrollwheel: false,
		};

		var map = new kakao.maps.Map(container, options);
		var markerPosition = new kakao.maps.LatLng(lat, lng);
		var marker = new kakao.maps.Marker({
			position: markerPosition,
			text: "텍스트를 표시할 수 있어요!",
		});
		marker.setMap(map);
		var iwContent = `<a href="https://map.kakao.com/link/map/${lat},${lng}" target="_blank"><div style="padding:10px; font-weight:bold; font-size:13px; text-align:center;">${title}</div></a>`,
			iwPosition = new kakao.maps.LatLng(lat, lng);

		var infowindow = new kakao.maps.InfoWindow({
			position: iwPosition,
			content: iwContent,
		});

		infowindow.open(map, marker);
	}, []);

	return <MapContainer id="map" />;
};

export default KakaoMap;

const MapContainer = styled.div`
	width: 100%;
	height: 200px;
`;
