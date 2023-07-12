import { AlbumsWithUser } from "api/src/types/Prisma";

export interface AlbumState {
    isLoading : boolean;
    message : string;
    topAlbums : Array<AlbumsWithUser>
    albums : Array<AlbumsWithUser>
}


export interface AlbumAction {
    type : string;
    payload : {
        message : string;
        topAlbums? : Array<AlbumsWithUser>
        albums? : Array<AlbumsWithUser>
    }
}