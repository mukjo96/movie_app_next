import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Modal } from "antd";
import ReactPlayer from "react-player/youtube";
import { getMovieVideos } from "@features/movieInfo/api/getDetail.api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PlayCircleTwoTone } from "@ant-design/icons";
import { posterType } from "@features/movieInfo/types/detailsTypes";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

const BackgroundPoster = ({ backdrop_path, movieId }: posterType) => {
    const [visible, setVisible] = useState(false);
    const [movieVideo, setMovieVideo] = useState();
    useEffect(() => {
        async function fetchTrailer() {
            setMovieVideo(undefined);
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
                {movieVideo ? (
                    <>
                        <Layer>
                            <StyledPlayIcon
                                icon={faPlayCircle}
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
                    </>
                ) : null}
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
    height: ${(800 / 1920) * 100}vw;

    @media screen and (min-width: 1280px) {
        width: 1280px;
        height: 533px;
    }
`;

const StyledPlayIcon = styled(FontAwesomeIcon)`
    width: 100px !important;
    height: 100px !important;
    text-align: center;
    color: #ffff;
    filter: drop-shadow(3px 6px #272634);
    opacity: 0.7;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        width: 50px !important;
        height: 50px !important;
    }
`;

const Background = styled.div`
    display: table;
    width: 100%;
    height: 100%;

    margin: 0 auto;

    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    -webkit-mask-image: linear-gradient(to bottom, black 75%, transparent 100%);
    mask-image: linear-gradient(to bottom, black 75%, transparent 100%);
`;
