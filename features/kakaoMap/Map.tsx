import React, { useEffect } from "react";
import KakaomapComponent from "@features/kakaoMap/KakaomapComponent";
import { LayoutContext } from "antd/lib/layout/layout";

const Map = ({ locX, locY }) => {
    const kakaoMap = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (kakaoMap && kakaoMap.current) {
            const x = locX;
            const y = locY;
            const coords = new (window as any).daum.maps.LatLng(y, x); // 지도의 중심좌표
            const options = {
                center: coords,
                level: 3,
            };
            const map = new (window as any).daum.maps.Map(
                kakaoMap.current,
                options
            );
            const marker = new (window as any).daum.maps.Marker({
                position: coords,
                map,
            });
            if (navigator.geolocation) {
                // GeoLocation을 이용해서 접속 위치를 얻어옵니다.
                navigator.geolocation.getCurrentPosition(function (position) {
                    const lat = position.coords.latitude, // 위도
                        lon = position.coords.longitude; // 경도
                    const currentCoords = new (window as any).daum.maps.LatLng(
                        lat,
                        lon
                    );
                    const markerSize = new (window as any).daum.maps.Size(
                        16,
                        16
                    );
                    const markerImage = new (window as any).daum.maps.MarkerImage(
                        "https://ssl.pstatic.net/static/maps/m/pin_rd.png",
                        markerSize
                    );
                    const currentMarker = new (window as any).daum.maps.Marker({
                        position: currentCoords,
                        map,
                        image: markerImage,
                    });
                    currentMarker.setPosition(currentCoords);
                });
            } else {
            }

            // 맵의 중앙으로 이동
            map.relayout();
            map.setCenter(coords);
            // 마커를 중앙으로 이동
            marker.setPosition(coords);

            // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
            const mapTypeControl = new (window as any).daum.maps.MapTypeControl();

            // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
            // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
            map.addControl(
                mapTypeControl,
                (window as any).kakao.maps.ControlPosition.TOPRIGHT
            );
            // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
            /* const zoomControl = new (window as any).daum.maps.ZoomControl();
            map.addControl(
                zoomControl,
                (window as any).daum.maps.ControlPosition.RIGHT
            ); */
        }
    }, [kakaoMap]);
    return <KakaomapComponent ref={kakaoMap} />;
};

export default Map;
