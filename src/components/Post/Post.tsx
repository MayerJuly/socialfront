import './post.scss'
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useEffect, useState} from "react";
import {IPost} from "../../models/IPost";
import {getLikes, getTimeline, likePost} from "../../services/ActionCreator";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {format} from "timeago.js"

const Post = (props: IPost) => {


    const PF = process.env.REACT_APP_SERVER_FOLDER
    const {postLikes} = useAppSelector(state => state.postReducer)
    const {authUser} = useAppSelector(state => state.authReducer)
    const dispatch = useAppDispatch()
    const [isLiked, setIsLiked] = useState(false);
    const [like, setLike] = useState(props.likes.length)


    useEffect(() => {
                setIsLiked(props.likes.includes(authUser._id))

    },[])


    const likeHandler = () => {
        dispatch(likePost(props._id))
        setLike(isLiked? like-1 : like+1)
        setIsLiked(!isLiked)



    }

    return (
        <div className="post">
            <div className="post__wrapper">
                <div className="post__top">
                        <img className="post__profile-img" src={`${PF}${props.profilePicture}`} alt=""/>
                        <span className="post__username">{props.NameUser} {props.SurnameUser}</span>
                        <span className="post__date">{format(props.createdAt)}</span>

                </div>
                <div className="post__center">
                    <span className="post__text">
                        {props.description}

                        {props.image? <img className="post__image" src={`${PF}${props.image}`} alt=""/> : ""}
                    </span>
                </div>
                <div className="post__bottom">
                    <FavoriteIcon className={(isLiked? 'liked ' : '') + 'post__likeIcon'} onClick={likeHandler}/>
                    <span className="post__likesCounter">
                        {like}
                    </span>
                </div>

            </div>

        </div>
    );
};

export default Post;