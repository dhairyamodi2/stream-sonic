import { Album, AlbumsWithTracksAndUser, AlbumsWithUser } from "api/src/types/Prisma"
import { http } from "../../http"
import { ResponseType } from "../../types/types";
import { HandleError } from "../../utils/HandleError";

export const fetchAlbums = async function () {
    try {
        const {data} = await http.get<ResponseType<Array<AlbumsWithUser>>>('/albums/all?user=false');
        if (data && data.data) {
            return {
                data : data.data,
                message: ''
            }
        }
        return {
            data: [],
            message: data.message ? data.message : 'Something went wrong'
            
        }
    } catch (error) {
        console.log(error);
        return HandleError<Array<AlbumsWithUser>>(error, []);
    }
}



export const getAlbum = async function ({album_id} : {album_id : string}) {
    try {
        const {data} = await http.get<ResponseType<AlbumsWithTracksAndUser>>(`/albums/${album_id}`);

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