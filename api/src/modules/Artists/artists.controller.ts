import { Request, Response } from "express";
import { OrmClient } from "../../db";
import { respond } from "../../utils";
import { User } from "@prisma/client";
import { HandleNotFound, HandlePrismaExceptions } from "../../Exceptions/Handlers";
import { ArtistWithAlbumsAndTracks } from "../../types/Prisma";

export const getAll = async function (req : Request, res : Response) {
    try {
        const artists = await OrmClient.user.findMany();
        respond<Array<User>>(200, true, artists, res);
    } catch (error) {
        console.log(error);
        HandlePrismaExceptions(error, res);
    }
}


export const getArtist = async function (req : Request<{id? : string}>, res : Response) {
    try {
        const {id} = req.params


        const user = await OrmClient.user.findUnique({
            where : {
                user_id: id
            },
            include: {
                albums: true,
                tracks: {
                    include: {
                        artists: true
                    }
                }
            }
        })
        if (!user) {
            HandleNotFound(res, "No such artist exists!")
            return;
        }
        respond<ArtistWithAlbumsAndTracks>(200, true, user, res);
    } catch (error) {
        console.log(error);
        HandlePrismaExceptions(error, res);
    }
}