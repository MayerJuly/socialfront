import $api from "../http";

import {AxiosResponse} from "axios"
import {AuthResponse} from "../models/response/AuthResponse";
import {IUser} from "../models/IUser";

export default class AuthService {
    static async login(email:string, password:string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/auth/login', {email, password})
    }
    static async register(props: IUser): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/auth/register', {...props})
    }
    static async logout(): Promise<void> {
        return $api.get('/auth/logout')
    }
    static async check(): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/auth/check',)
    }

}