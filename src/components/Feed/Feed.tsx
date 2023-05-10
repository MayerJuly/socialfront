import "./feed.scss"
import Share from "../Share/Share";
import Post from "../Post/Post";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import axios from "axios"
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getTimeline, getUserPosts} from "../../services/ActionCreator";
import {IPost} from "../../models/IPost";
import {useParams} from "react-router-dom";


interface FeedProps {
    id?:string | undefined,
    profile?: boolean
}

const Feed = ({id,profile}:FeedProps) => {



    const {timeline, postError, isPostLoading} = useAppSelector(state => state.postReducer)
    const dispatch = useAppDispatch()
    useEffect(() => {
        if(profile)
        {
            id &&
            dispatch(getUserPosts(id))
        }

        else {
            dispatch(getTimeline())

        }

    }, [id])







    return (
        <div className="feed">


            <div className="feed__wrapper">
                {profile?
                    <Share profile />
                    :
                    <Share />
                }
                    {!isPostLoading ?
                        timeline && timeline.map((post:IPost) =>{
                        return <Post key={post._id} {...post}/>})

                        : <div>Loading Posts...</div>}




                </div>
        </div>
    );
};

export default Feed;