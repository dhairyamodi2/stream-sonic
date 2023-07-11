import { TracksWithArtists } from "api/src/types/Prisma"
import { http } from "../../http"
import { ResponseType } from "../../types/types";
import { HandleError } from "../../utils/HandleError";

export const fetchTracks = async () => {
    try {
        const {data} = await http.get<ResponseType<Array<TracksWithArtists>>>('/tracks/all');
        if (data.data) {
            return {
                data: data.data,
                message: ''
            }
        }

        return {
            data: [],
            message: data.message ? data.message : "Something went wrong"
        }
    } catch (error) {
        console.log(error);
        return HandleError<Array<TracksWithArtists>>(error, []);
    }
}