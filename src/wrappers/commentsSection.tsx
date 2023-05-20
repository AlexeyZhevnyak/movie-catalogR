import CommentForm from "../components/commentForm/commentForm";

import {Grid, ToggleButton, ToggleButtonGroup} from "@mui/material";
import {FormikValues} from "formik";
import {useSelector} from "react-redux/es/exports";
import {State} from "../redux/State";
import {AUTH_API} from "../http";
import {Comment} from "../components/comment/Comment";
import {Comment as CommentModel} from "../model/comment";
import React, {useEffect, useState} from "react";
import {decLikeCount, incLikeCount} from "../hooks/hooks";
import styles from "./commentSection.module.scss";
import lodash, {set} from "lodash";


export const CommentsSection = ({movieId, comments}: {
    movieId: string,
    comments: CommentModel[]
}) => {
    const user = useSelector((state: State) => state.user);
    const [alignment, setAlignment] = React.useState("");
    const [commentsState, setCommentsState] = useState(comments);
    useEffect(() => setCommentsState(comments), [comments]);
    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        if (newAlignment === 'popular') {
            setCommentsState(lodash.sortBy(commentsState, [(o) => -o.likeCount]))
        }else if (newAlignment === 'actual'){
            setCommentsState(lodash.sortBy(commentsState, [(o) => -parseInt(o.timestamp)]))
        }
        setAlignment(newAlignment);
    };
    const onSubmit = (values: FormikValues) => {
        AUTH_API.post("http://localhost:3000/comments/add", values)
            .then(response => {
                window.location.reload(); // перезагрузка страницы
            })
            .catch(error => {
                console.log(error);
            });
    };
    const test = (comment: CommentModel) => {
        let b = comment.likedUsers.includes(user._id);
        return b;
    }

    return <div className={styles.container}>
        <CommentForm movieId={movieId} onSubmit={onSubmit} email={user.email}/>
        <ToggleButtonGroup
            color="info"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
            className={styles.toggleButtonGroup} // стили для активной и неактивной кнопок и наведения на них
        >
            <ToggleButton sx={{margin: "10px", color: "white", bgcolor: "#555555"}} value="popular">По
                популярности</ToggleButton>
            <ToggleButton sx={{margin: "10px", color: "white", bgcolor: "#555555"}}
                          value="actual">Актуальные</ToggleButton>
        </ToggleButtonGroup>
        <Grid container spacing={2} sx={{width: "80%", alignSelf: "center"}}>
            {commentsState.map((comment) => <Comment initialActive={test(comment)}
                                                     onLike={() => {
                                                         incLikeCount(comment._id, user.email);
                                                         comment.likeCount++;
                                                         comment.likedUsers.push(user._id);
                                                     }} onDislike={() => {
                decLikeCount(comment._id, user.email);
                comment.likeCount--;
                comment.likedUsers = comment.likedUsers.filter(c => c !== user._id);
            }} commentId={comment._id} likeCount={comment.likeCount} email={comment.email}
                                                     timestamp={comment.timestamp}
                                                     text={comment.text}/>)}
        </Grid>
    </div>;

};