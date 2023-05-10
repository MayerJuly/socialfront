import {AxiosResponse} from "axios";
import $api from "../http";

export default class UploadService {
    static async uploadImage(data: FormData): Promise<AxiosResponse> {
        return $api.post('/upload', data);
    }
}