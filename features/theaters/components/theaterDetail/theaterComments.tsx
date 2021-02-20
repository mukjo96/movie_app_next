import React, { useEffect, useState } from "react";
import { Comment, Avatar, Form, Button, List, Input, Typography } from "antd";
import { UserOutlined, DeleteOutlined, LikeOutlined } from "@ant-design/icons";
import moment from "moment";
import styled from "styled-components";
import ReviewFactory from "./comments/reviewFactory";
import { firebaseClient } from "../../../../firebase/firebaseClient";
import { useRouter } from "next/router";
import Loading from "@features/common/Loading";
import { useAuth } from "../../../../firebase/auth";

const { Paragraph } = Typography;
const { TextArea } = Input;

/* const CommentList = ({ comments }) => (
    <List
        dataSource={comments}
        header={`${comments.length} ${
            comments.length > 1 ? "replies" : "reply"
        }`}
        itemLayout="horizontal"
        renderItem={(props) => <Comment {...props} />}
    />
); */

type reviewObj = {
    id: string;
    text?: string;
    createdAt?: Date;
    creatorId?: string;
    theaterId?: string;
    nickName?: string;
    rate?: number;
};

const TheaterComments = () => {
    const router = useRouter();
    const { theaterid } = router.query;
    const { user } = useAuth();

    const [reviews, setReviews] = useState([]);
    const [ratingAvg, setRatingAvg] = useState(0);
    const [ratedUser, setRatedUser] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const onDeleteClick = ({ id }) => async (event: any) => {
        const ok = window.confirm(
            "Are you sure you want to delete this review?"
        );
        if (ok) {
            await firebaseClient
                .firestore()
                .collection(`reviews-${theaterid}`)
                .doc(id)
                .delete();
        }
    };

    const getCinemaInfos = () => {
        let ratingAverage = 0;
        firebaseClient
            .firestore()
            .collection(`reviews-${theaterid}`)
            .orderBy("createdAt", "desc")
            .onSnapshot((snapshot) => {
                const reviewArray: Array<reviewObj> = snapshot.docs.map(
                    (doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    })
                );
                reviewArray.map((review) => (ratingAverage += review.rate));
                if (reviewArray.length > 0) {
                    ratingAverage = ratingAverage / reviewArray.length;
                }
                setReviews(reviewArray);
                setIsLoading(false);
                setRatingAvg(Number(ratingAverage.toFixed(1)));
                setRatedUser(reviewArray.length > 0 ? reviewArray.length : 0);
            });
    };

    useEffect(() => {
        if (theaterid) {
            getCinemaInfos();
            console.log(reviews);
        }
    }, [theaterid]);

    return (
        <Container>
            <>
                {isLoading ? (
                    <Loading />
                ) : (
                    reviews.length > 0 && (
                        <List
                            className="comment-list"
                            header={`${reviews.length} replies / ${ratingAvg}(${ratedUser})`}
                            itemLayout="horizontal"
                            dataSource={reviews}
                            renderItem={(item) => (
                                <li>
                                    {console.log(
                                        `reviews-${theaterid}/${item.id}`
                                    )}
                                    <Comment
                                        author={item.nickName + " " + item.rate}
                                        avatar={
                                            <Avatar icon={<UserOutlined />} />
                                        }
                                        content={item.text}
                                        datetime={
                                            <div>
                                                {moment(item.createdAt).format(
                                                    "YYYY.MM.DD HH:mm:ss"
                                                )}
                                                {/* {item.creatorId ===
                                                user.uid.toString() ? (
                                                    <StyledDelete
                                                        onClick={onDeleteClick(
                                                            item.id
                                                        )}
                                                    />
                                                ) : null} */}
                                            </div>
                                        }
                                    />
                                </li>
                            )}
                        />
                    )
                )}
                <ReviewFactory />
            </>
        </Container>
    );
};

export default TheaterComments;

const Container = styled.div`
    width: 90%;
    margin: 0 auto;
`;

const StyledDelete = styled(DeleteOutlined)`
    color: #333333;
    margin-left: 1em;
    cursor: pointer;
`;
