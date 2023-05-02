import CommentForm from "../components/commentForm/commentForm";
import {Comment} from "../model/comment";
import {Grid} from "@mui/material";
import {formatDate} from "../data";

export const CommentsSection = ({movieId, comments}: {
    movieId: string,
    comments: Comment[]
}) => {
    return <div>
        <CommentForm movieId={movieId}/>
        <Grid container spacing={2}>
            {comments.map((comment) => (
                <>
                    <Grid item xs={1}>
                        ava
                    </Grid>
                    <Grid item xs={11}>
                        <Grid container>
                            <Grid style={{fontSize: '15px'}} item xs={12}>{comment._id}</Grid>
                            <Grid style={{fontSize: '13px'}} item xs={12}>{formatDate(comment.timestamp)}</Grid>
                        </Grid>
                    </Grid>
                    <Grid item style={{wordBreak: 'break-word'}} xs={12}>{comment.text}</Grid>
                </>
            ))}
        </Grid>
    </div>;

}