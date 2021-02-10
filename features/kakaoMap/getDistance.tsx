import Loading from "@features/common/Loading";
import React, { useEffect, useState } from "react";

const GDistance = ({ x, y }) => {
    const [dist, setDist] = useState("-1");
    const [isLoading, setIsLoading] = useState(true);

    const getDistance = () => {
        if (navigator.geolocation) {
            // GeoLocation을 이용해서 접속 위치를 얻어옵니다.
            navigator.geolocation.getCurrentPosition(function (position) {
                const lat = position.coords.latitude, // 위도
                    lon = position.coords.longitude; // 경도

                const dis = getDistanceFromLatLonInKm(lat, lon, y, x);
                console.log(dis);
                if (dis > 1) {
                    setDist(String(Math.floor(dis)) + " k");
                } else {
                    setDist(String(Math.floor(dis * 1000)) + " ");
                }
            });
        } else {
        }
    };

    function getDistanceFromLatLonInKm(
        lat1: number,
        lng1: number,
        lat2: number,
        lng2: number
    ) {
        function deg2rad(deg: number) {
            return deg * (Math.PI / 180);
        }
        const R = 6371; // Radius of the earth in km
        const dLat = deg2rad(lat2 - lat1); // deg2rad below
        const dLon = deg2rad(lng2 - lng1);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) *
                Math.cos(deg2rad(lat2)) *
                Math.sin(dLon / 2) *
                Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const d = R * c; // Distance in km
        return d;
    }

    useEffect(() => {
        getDistance();
        setIsLoading(false);
    }, []);

    return (
        <div>
            {isLoading ? null : (
                <div>{dist !== "-1" ? `${dist}m` : ". . ."}</div>
            )}
        </div>
    );
};

export default GDistance;
