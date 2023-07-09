import { AxiosError } from "axios"

export const HandleError = async function (error : any) {
    console.log(error.response.data);
    if (error instanceof AxiosError) {
        return {
            user : null,
            message : error.response && error.response.data.message ? error.response.data.message : "Something went wrong"
        }
    }
    return {
        user : null,
        message: "Something went wrong!"
    }
}