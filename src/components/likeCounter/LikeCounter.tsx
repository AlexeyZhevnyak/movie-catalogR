import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {useState} from "react";
import styles from './LikeCounter.module.css'

export const LikeCounter = ({
                                initialLikeCount,
                                onLike,
                                onDeactivateLike
                            }: {
    initialLikeCount: number,
    onLike: () => void,
    onDeactivateLike: () => void
}) => {
    const [likesCount, setLikesCount] = useState(initialLikeCount);
    const [isLiked, setIsLiked] = useState(false);
    return <div className={styles.wrapper}>
        <Typography>{likesCount}</Typography>
        <IconButton aria-label="add to favorites" onClick={() => {
            if (isLiked) {
                setLikesCount(likesCount - 1);
                setIsLiked(false);
                onDeactivateLike();
            } else {
                setLikesCount(likesCount + 1);
                setIsLiked(true);
                onLike();
            }
        }}>
            <FavoriteIcon style={{color: 'blue'}}/>
        </IconButton>
    </div>
}