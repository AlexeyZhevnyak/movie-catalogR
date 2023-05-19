import * as React from "react";
import {Grid} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import {formatDate} from "../../data";
import {LikeCounter} from "../likeCounter/LikeCounter";
import {decLikeCount, incLikeCount} from "../../hooks/hooks";

export const Comment = ({ email, text, timestamp, likeCount, commentId, onLike, onDislike }: {
    email: string,
    timestamp: string,
    text: string,
    likeCount: number,
    commentId: string,
    onLike: () => void,
    onDislike: () => void
}) => {
    return <>
        <Grid item xs={0} display={'flex'} justifyContent={'flex-start'}>
            <Avatar>{email[0].toUpperCase()}</Avatar>
        </Grid>
        <Grid item xs={1} display={'flex'} alignItems={'flex-start'}>
            <Grid container>
                <Grid style={{fontSize: '15px'}} item xs={12}>{email.split('@')[0]}</Grid>
                <Grid style={{fontSize: '13px'}} item xs={12}>{formatDate(timestamp)}</Grid>
            </Grid>
        </Grid>
        <Grid item xs={10}>
            <Grid container display={'flex'}>
                <LikeCounter onDeactivateLike={onDislike} onLike={onLike}
                             initialLikeCount={likeCount}></LikeCounter>
            </Grid>
        </Grid>
        <Grid item style={{wordBreak: 'break-word'}} xs={12}>{text}</Grid>
        <Grid item xs={12}>
        </Grid>
    </>
}