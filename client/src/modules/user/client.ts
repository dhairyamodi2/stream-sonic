import { AxiosError } from "axios";
import { http } from "../../http"
import { User } from 'api/src/types/Prisma'
import { ResponseType } from "../../types/types";
import { HandleError } from "../../utils/HandleError";


export const getMe = async (token: string) => {
    try {
        const { data } = await http.get<ResponseType<User>>('/user/me', {
            headers: {
                'authorization': `Bearer ${token}`
            }
        });
        if (data && data.success) {
            return {
                data: data.data,
                message: data.message
            }
        }
        console.log(data)
        return {
            data: null,
            message: data.message ? data.message : "Something went wrong"
        }
    } catch (error) {
        console.log(error);
        return HandleError<null>(error, null);
    }
}


export const completeProfile = async (birthDate: Date, token: string) => {
    try {
        const { data } = await http.put<ResponseType<User>>('/user/completeprofile', { birthDate: birthDate }, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
        if (data && data.success) {
            return {
                data: data.data,
                message: data.message
            }
        }
        return {
            data: null,
            message: data.message ? data.message : "Something went wrong"
        }
    } catch (error) {
        console.log(error);
        return HandleError<null>(error, null);
    }
}