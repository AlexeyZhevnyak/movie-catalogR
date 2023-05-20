import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {useEffect, useState} from "react";
import styles from './LikeCounter.module.css'
import {FavoriteBorder} from "@mui/icons-material";

export const LikeCounter = ({
                                initialLikeCount,
                                onLike,
                                onDeactivateLike,
                                initialActive
                            }: {
    initialLikeCount: number,
    onLike: () => void,
    onDeactivateLike: () => void,
    initialActive: boolean
}) => {
    const [likesCount, setLikesCount] = useState(initialLikeCount);
    const [isLiked, setIsLiked] = useState(initialActive);
    useEffect(() => {
        setIsLiked(initialActive);
        setLikesCount(initialLikeCount)
        console.log(initialActive)
    }, [initialActive, initialLikeCount]);
    // useEffect(() => {
    //     setLikesCount(initialLikeCount)
    //     console.log(initialLikeCount)
    // }, [initialLikeCount]);
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
            {isLiked ? <FavoriteIcon/> : <FavoriteBorder/>}
        </IconButton>
    </div>
}