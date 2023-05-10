import {IAuthUser} from "../IAuthUser";

export interface AuthResponse {
    token: string,
    user: IAuthUser
}