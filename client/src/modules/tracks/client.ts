import { TracksWithArtists } from "api/src/types/Prisma"
import { http } from "../../http"
import { ResponseType } from "../../types/types";
import { HandleError } from "../../utils/HandleError";

export const fetchTracks = async ({track_name, limit} : {track_name? : string, limit?: number}) => {
    try {
        let uri = '/tracks/all?';
        if (track_name) {
            uri += `track_name=${track_name}&`
        }
        const {data} = await http.get<ResponseType<Array<TracksWithArtists>>>(uri);
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