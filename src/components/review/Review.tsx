import * as React from 'react';
import {useState} from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {red} from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {formatDate} from "../../data";

export const Review = ({
                           moviePoster,
                           movieTitle,
                           likes,
                           timestamp,
                           text,
                           movieYear,
                       }: {
    moviePoster: string;
    movieTitle: string;
    text: string;
    likes: number;
    timestamp: string;
    movieYear: string;
}) => {
    const [likesCount, setLikesCount] = useState(0);
    const [isLiked, setIsLiked] = useState(false);

    return (
        <Card sx={{
            width: '50%',
            bgcolor: '#555555',
            margin: '20px',
        }}>
            <CardHeader
                avatar={
                    <Avatar sx={{bgcolor: red[500]}} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon/>
                    </IconButton>
                }
                title={movieTitle}
                subheader={formatDate(timestamp)}
                subheaderTypographyProps={{color: 'white'}}
            />
            <CardMedia
                component="img"
                height="194"
                image={moviePoster}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2">
                    {text}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" onClick={() => {
                    if (isLiked) {
                        setLikesCount(likesCount - 1);
                        setIsLiked(false);
                    } else {
                        setLikesCount(likesCount + 1);
                        setIsLiked(true);
                    }
                }}>
                    <FavoriteIcon style={{color: 'blue'}}/>
                </IconButton>
                <Typography>{likesCount}</Typography>
            </CardActions>
        </Card>
    );
};
