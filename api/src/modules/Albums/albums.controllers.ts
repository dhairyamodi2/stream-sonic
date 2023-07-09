import { Request, Response } from "express";
import { HandleBadRequest, HandleNotFound, HandlePrismaExceptions, HandleUnauthorized } from "../../Exceptions/Handlers";
import { OrmClient } from "../../db";
import crypto from 'crypto'
import { respond } from "../../utils";
import { Album, Track } from "@prisma/client";
import { AlbumsWithTracksAndUser, AlbumsWithUser } from "../../types/Prisma";

export const CreateAlbums = async (req : Request<any, any, {album_name? : string}>, res : Response) => {
    try {
        if (!req.user) {
            HandleUnauthorized(res);
            return;
        }

        const {album_name} = req.body;
        if (!album_name) {
            HandleBadRequest(res, "Album name required");
            return;
        }

        const album = await OrmClient.album.create({
            data: {
                album_id: crypto.randomUUID(),
                album_name: album_name,
                user: {
                    connect: {
                        user_id: req.user.user_id
                    }
                }
            }
        })

        respond<Album>(201, true, album, res);
    } catch (error) {
        console.log(error);
        HandlePrismaExceptions(error, res);
    }
}


export const AddTracks = async (req : Request<any,any,{album_id? : string, track_id? : string}>, res : Response) => {
    try {
        const {album_id, track_id} = req.body;
        if (!album_id || !track_id) {
            HandleBadRequest(res, "Both album_id and track_id required");
            return;
        }


        const album = OrmClient.album.update({
            where: {
                album_id: album_id
            },
            data: {
                tracks: {
                    connect: {
                        track_id
                    }
                }
            },
            include: {
                tracks: true
            }
        })
        respond<any>(200, true, null, res, "Track added to album");
    } catch (error) {
        console.log(error);
        HandlePrismaExceptions(error, res);
    }
}


export const getAll = async (req : Request<any, any, any, {album_name? : string}>, res : Response) => {
    try {
        const {album_name} = req.query;
        // let albums = await OrmClient.album.findMany({
        //    where: {
        //       album_name: {
        //         startsWith: album_name
        //       }
        //    }
        // })
        let albums = await OrmClient.album.findMany({
            where: {
                album_name: {
                    contains: album_name
                }
            },
            include: {
                user : true
            }
        })
       
        respond<Array<AlbumsWithUser>>(200, true, albums, res);
    } catch (error) {
        console.log(error);
        HandlePrismaExceptions(error, res);
    }
}


export const getAlbum = async (req : Request<{id: string}>, res : Response) => {
    try {
        const {id} = req.params;

        const album = await OrmClient.album.findUnique({
            where: {
                album_id: id
            },
            include: {
                tracks: {
                    include: {
                        artists: true
                    }
                },
                user: true
            }
        })
        if (!album) {
            HandleNotFound(res, "No such album exist!")
            return;
        }
        respond<AlbumsWithTracksAndUser>(200, true, album, res);
    } catch (error) {
        console.log(error);
        HandlePrismaExceptions(error, res)
    }
}