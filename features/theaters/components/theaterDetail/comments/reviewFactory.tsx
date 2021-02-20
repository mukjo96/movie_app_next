import React, { useState } from "react";
import { firebaseClient } from "../../../../../firebase/firebaseClient";

import { Comment, Avatar, Form, Button, List, Input, Rate } from "antd";
import { useAuth } from "../../../../../firebase/auth";
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
                Add Comment
            </Button>
        </Form.Item>
    </>
);

const ReviewFactory = () => {
    const router = useRouter();
    const theaterId = router.query.theaterid;
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
            theaterId: theaterId,
            nickName: userObj.displayName,
            rate: rating,
        };
        await firebaseClient
            .firestore()
            .collection(`reviews-${theaterId}`)
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

    const ratingChanged = (newRating) => {
        setRating(newRating * 2);
    };

    return (
        <>
            <Comment
                avatar={
                    <Avatar
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        alt="Han Solo"
                    />
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
