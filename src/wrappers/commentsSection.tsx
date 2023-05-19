import CommentForm from "../components/commentForm/commentForm";

import {Grid, ToggleButton, ToggleButtonGroup} from "@mui/material";
import {FormikValues} from "formik";
import {useSelector} from "react-redux/es/exports";
import {State} from "../redux/State";
import {AUTH_API} from "../http";
import {Comment} from "../components/comment/Comment";
import {Comment as CommentModel} from "../model/comment";
import React from "react";
import {decLikeCount, incLikeCount} from "../hooks/hooks";

export const CommentsSection = ({movieId, comments}: {
    movieId: string,
    comments: CommentModel[]
}) => {
    const user = useSelector((state: State) => state.user);
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setAlignment(newAlignment);
    };
    const onSubmit = (values: FormikValues) => {
        AUTH_API.post('http://localhost:3000/comments/add', values)
            .then(response => {
                window.location.reload(); // перезагрузка страницы
            })
            .catch(error => {
                console.log(error);
            });
    }

    return <div style={{
        display: "flex",
        flexDirection: 'column',
    }}>
        <CommentForm movieId={movieId} onSubmit={onSubmit} email={user.email}/>
        <ToggleButtonGroup
            color="info"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
            sx={{
                color: 'white',
                '& .Mui-selected': {backgroundColor: '#1976d2', color: 'white'},
                '& .Mui': {backgroundColor: 'white'},
                '& .Mui-selected:hover': {backgroundColor: '#1976d2'},
                '& .MuiToggleButton-root': {color: 'white'}
            }} // стили для активной и неактивной кнопок и наведения на них
        >
            <ToggleButton sx={{margin: '10px', color: 'white', bgcolor: '#555555'}} value="web">По
                популярности</ToggleButton>
            <ToggleButton sx={{margin: '10px', color: 'white', bgcolor: '#555555'}}
                          value="android">Актуальные</ToggleButton>
        </ToggleButtonGroup>
        <Grid container spacing={2} sx={{width: '80%', alignSelf: 'center'}}>
            {comments.map((comment) => <Comment onLike={() => {
                incLikeCount(comment._id, user.email);
            }} onDislike={() => {
                decLikeCount(comment._id, user.email);
            }} commentId={comment._id} likeCount={comment.likeCount} email={comment.email}
                                                timestamp={comment.timestamp}
                                                text={comment.text}/>)}
        </Grid>
    </div>;

}