import $api from "../http";

import {AxiosResponse} from "axios"
import {IUser} from "../models/IUser";
import {IUpdateUser} from "../models/IUpdateUser";
import {UserResponse} from "../models/response/UserResponse";



export default class UserService {
    static async update(props:IUpdateUser): Promise<AxiosResponse<UserResponse>> {
        return $api.put<UserResponse>('/users/update', {...props})
    }
    static async get(id:string): Promise<AxiosResponse<UserResponse>> {
        return $api.get<UserResponse>(`/users/${id}`)
    }
    static async getByUsername(username:string): Promise<AxiosResponse<UserResponse>> {
        return $api.get<UserResponse>(`/users/username/${username}`)
    }

}