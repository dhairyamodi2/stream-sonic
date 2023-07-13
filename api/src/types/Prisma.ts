// import { User } from "@prisma/client";

import { Album, Track, User } from '@prisma/client';


export {User} from '@prisma/client';

export {Album} from '@prisma/client';

export {Track} from '@prisma/client';

export type TrackWithAlbum = Track & {artists : User[]}
export type TrackWithArtistsAndAlbums = Track & {artists : User[], album: Album | null}
export type AlbumsWithTracksAndUser = Album & {tracks : TrackWithAlbum[], user: User}



export type TracksWithArtists = Track & {artists : User[]}


export type AlbumsWithUser = Album & {user : User}


export type ArtistWithAlbumsAndTracks = User & {albums : Array<Album>, tracks : Array<TracksWithArtists>}