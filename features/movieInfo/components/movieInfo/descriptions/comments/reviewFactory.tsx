import React, { useState } from "react";
import { firebaseClient } from "../../../../../../firebase/firebaseClient";

import { Comment, Avatar, Form, Button, List, Input, Rate } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useAuth } from "../../../../../../firebase/auth";
import { useRouter } from "next/router";

const { TextArea } = Input;

const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <>
        <Form.Item>
            <TextArea rows={4} onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item>
            <Button
                htmlType="submit"
                loading={submitting}
                onClick={onSubmit}
                type="primary"
            >
                댓글 쓰기
            </Button>
        </Form.Item>
    </>
);

const ReviewFactory = () => {
    const router = useRouter();
    const movieid = router.query.movieid;
    const userObj = useAuth().user;

    const [review, setReview] = useState("");
    const [rating, setRating] = useState(7);

    const [submitting, setSubmitting] = useState(false);
    const onSubmit = async (event) => {
        event.preventDefault();

        if (review === "") {
            return;
        }
        setSubmitting(true);
        const reviewObj = {
            text: review,
            createdAt: Date.now(),
            creatorId: userObj.uid,
            movieid: movieid,
            nickName: userObj.displayName,
            profileURL: userObj.photoURL,
            rate: rating,
        };
        await firebaseClient
            .firestore()
            .collection(`movies-${movieid}`)
            .add(reviewObj);
        setReview("");
        setRating(0);
        setSubmitting(false);
    };

    const onRevChange = (event) => {
        const {
            target: { value },
        } = event;
        setReview(value);
    };

    const ratingChanged = (newRating: number) => {
        setRating(newRating * 2);
    };

    return (
        <>
            <Comment
                avatar={
                    userObj.photoURL ? (
                        <Avatar src={userObj.photoURL} />
                    ) : (
                        <Avatar icon={<UserOutlined />} />
                    )
                }
                content={
                    <>
                        <Form.Item>
                            <Rate
                                allowHalf={true}
                                defaultValue={3.5}
                                onChange={ratingChanged}
                            />
                        </Form.Item>
                        <Editor
                            onChange={onRevChange}
                            onSubmit={onSubmit}
                            submitting={submitting}
                            value={review}
                        />
                    </>
                }
            />
        </>
    );
};

export default ReviewFactory;
