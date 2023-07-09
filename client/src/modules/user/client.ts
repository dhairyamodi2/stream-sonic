import { AxiosError } from "axios";
import { http } from "../../http"
import {User} from 'api/src/types/Prisma'
import { ResponseType } from "../../types/types";
import { HandleError } from "../../utils/HandleError";


export const getMe = async (token : string) => {
    try {
        const {data} = await http.get<ResponseType<User>>('/user/me', {
            headers: {
                'authorization' : `Bearer ${token}`
            }
        });
        if(data && data.success) {
            return {
                user : data.data,
                message: data.message
            }
        }
        console.log(data)
        return {
            user : null,
            message: data.message ? data.message : "Something went wrong"
        }
    } catch (error) {
        console.log(error);
        return HandleError(error);
    }
}


export const completeProfile = async (birthDate : Date, token : string) => {
    try {
        const {data} = await http.put<ResponseType<User>>('/user/completeprofile', {birthDate: birthDate}, {headers: {
            'authorization' : `Bearer ${token}`
        }})
        if(data && data.success) {
            return {
                user : data.data,
                message: data.message
            }
        }
        return {
            user : null,
            message: data.message ? data.message : "Something went wrong"
        }
    } catch (error) {
        console.log(error);
        return HandleError(error);
    }
}