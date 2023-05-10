import $api from "../http";

import {AxiosResponse} from "axios"
import {IPost} from "../models/IPost";
import {ISendPostType} from "../models/ISendPostType";



export default class PostService {

    static async getTimeline(): Promise<AxiosResponse<IPost[]>> {
        return $api.get<IPost[]>(`/posts/following/all`)
    }
    static async getUserPosts(userId:string): Promise<AxiosResponse<IPost[]>> {
        return $api.post<IPost[]>(`/posts/myposts/all`, {userId})
    }
    static async likePost(postId:string): Promise<AxiosResponse<string>> {
        return $api.put<string>(`/posts/${postId}/like`)
    }
    static async getLikes(postId:string): Promise<AxiosResponse<string[]>> {
        return $api.get<string[]>(`/posts/${postId}/getlikes`)
    }
    static async addPost(post: ISendPostType): Promise<AxiosResponse>{
        return $api.post('/posts', post);
    }



}