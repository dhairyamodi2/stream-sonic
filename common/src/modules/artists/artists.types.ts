import { User } from "api/src/types/Prisma";

export interface ArtistsState {
    isLoading : boolean,
    artists : Array<User>
    topArtists : Array<User>
}


export interface ArtistsActions {
    type : string;
    payload : {
        artists? : Array<User>
        topArtists? : Array<User>
    }
}