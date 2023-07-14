import { ArtistWithAlbumsAndTracks, User } from "api/src/types/Prisma"
import { http } from "../../http"
import { ResponseType } from "../../types/types";
import { HandleError } from "../../utils/HandleError";

export const fetchArtists = async function ({name}: {name? : string}) {
    try {
        const {data} = await http.get<ResponseType<Array<User>>>(`/artists/all${name ? `?name=${name}` : ''}`);
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


export const getArtist = async function ({id} : {id : string}) {
    try {
        const {data} = await http.get<ResponseType<ArtistWithAlbumsAndTracks>>(`/artists/${id}`);

        if (data && data.data) {
            return {
                data: data.data
            }
        }
        return {
            data: null
        }
    } catch (error) {
        console.log(error);
        return HandleError<null>(error, null)
    }
}