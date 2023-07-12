import { User } from "api/src/types/Prisma"
import { http } from "../../http"
import { ResponseType } from "../../types/types";
import { HandleError } from "../../utils/HandleError";

export const fetchArtists = async function () {
    try {
        const {data} = await http.get<ResponseType<Array<User>>>('/artists/all');
        if (data && data.data) {
            return {
                data : data.data,
                message: data.message
            }
        }

        return {
            data : [],
            message : data.message ? data.message : 'Something went wrong'
        }
    } catch (error) {
        console.log(error);
        return HandleError<Array<User>>(error, []);
    }
}