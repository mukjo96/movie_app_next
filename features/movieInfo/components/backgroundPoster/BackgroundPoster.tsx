import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Modal } from "antd";
import ReactPlayer from "react-player/youtube";
import { getMovieVideos } from "@features/movieInfo/api/getDetail.api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PlayCircleFilled } from "@ant-design/icons";

const BackgroundPoster = ({ backdrop_path, movieId }) => {
    const [visible, setVisible] = useState(false);
    const [movieVideo, setMovieVideo] = useState();
    useEffect(() => {
        async function fetchTrailer() {
            const trailerID = await getMovieVideos(movieId);
            if (trailerID.results[0] !== undefined) {
                let key = trailerID.results[0].key;
                setMovieVideo(key);
            }
        }
        if (movieId !== undefined) {
            fetchTrailer();
        }
    }, [movieId]);

    return (
        <Container>
            <Background
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${backdrop_path})`,
                }}
            >
                <Layer>
                    <PlayCircleFilled
                        style={{
                            textAlign: "center",
                            fontSize: "6em",
                            color: "#000",
                            opacity: "0.7",
                            cursor: "pointer",
                        }}
                        onClick={() => setVisible(true)}
                    />
                </Layer>
                <Modal
                    title="Trailer"
                    centered
                    visible={visible}
                    onOk={() => setVisible(false)}
                    onCancel={() => setVisible(false)}
                    width={700}
                >
                    <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${movieVideo}`}
                        playing={visible}
                        width="100%"
                    />
                </Modal>
            </Background>
        </Container>
    );
};

export default BackgroundPoster;

const Layer = styled.div`
    display: table-cell;
    text-align: center;
    vertical-align: middle;
`;

const Container = styled.div`
    width: 100%;
    height: 500px;
`;

const Background = styled.div`
    display: table;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;
