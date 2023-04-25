import React from "react";
import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import CommentForm from "../components/commentForm/commentForm";
import {CommentsSection} from "../wrappers/commentsSection";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/CommentForm">
                <CommentForm movieId={'326'}/>
            </ComponentPreview>
            <ComponentPreview path="/ComponentPreviews">
                <ComponentPreviews/>
            </ComponentPreview>
            <ComponentPreview path="/CommentsSection">
                <CommentsSection movieId={'111543'} comments={[{_id: '1', movieId:'111543', text: 'aa', timestamp: '1111111111111', userId: '2'}]}/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;