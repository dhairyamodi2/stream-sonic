import { AxiosError } from "axios"

export const HandleError = async function<T> (error : any, data : T) {
    console.log(error.response.data);
    if (error instanceof AxiosError) {
        return {
            data : data,
            message : error.response && error.response.data.message ? error.response.data.message : "Something went wrong"
        }
    }
    return {
        data:data,
        message: "Something went wrong!"
    }
}