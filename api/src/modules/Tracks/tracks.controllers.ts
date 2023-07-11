import { Request, Response } from "express";
import path from "path"
import { HandleBadRequest, HandleNotFound, HandlePrismaExceptions, HandleUnauthorized, InternalServerError } from "../../Exceptions/Handlers";
import { OrmClient } from "../../db";
import { respond } from "../../utils";
import { Track } from "@prisma/client";
import { TrackWithAlbum, TrackWithArtistsAndAlbums, TracksWithArtists } from "../../types/Prisma";
import { Worker } from "cluster";
import WorkerThread from "../../worker-threads/config";
import { file_uri } from "../../constants";
import fs from 'fs'

export const AddTracks = async (req: Request, res: Response) => {
    try {
        if (!req.file) {
            HandleBadRequest(res, "File required");
            return;
        }
        if (!req.user) {
            HandleUnauthorized(res);
            return;
        }
        if (!req.body.track_name) {
            HandleBadRequest(res, "Track name required");
            return;
        }

        const id = req.file.filename.split(".");
        console.log(id);
        if (id.length < 2) {
            InternalServerError(res);
            return;
        }
        if (id[1] != 'mp3') {
            HandleBadRequest(res, "only mp3 files allowed");
            return;
        }
        console.log('all fine')
        const track = await OrmClient.track.create({
            data: {
                track_name: req.body.track_name as string,
                track_id: id[0],
                artists: {
                    connect: [{ user_id: req.user.user_id }]
                }
            },

        })

        respond<Track>(201, true, track, res);
    } catch (error) {
        console.log(error);
        HandlePrismaExceptions(error, res);
    }
}


export const getAllTracks = async (req: Request<any, any, any, { track_name: string }>, res: Response) => {
    try {
        const { track_name } = req.query;

        let tracks = await OrmClient.track.findMany({
            where: {
                track_name: {
                    contains: track_name
                }
            },
            include: {
                artists: true
            }
        })
        respond<Array<TracksWithArtists>>(200, true, tracks, res);
    } catch (error) {
        console.log(error);
        HandlePrismaExceptions(error, res);
    }
}

export const getTracksById = async (req: Request<{ id: string }>, res: Response) => {
    try {
        const { id } = req.params;

        const track = await OrmClient.track.findUnique({
            where: {
                track_id: id
            },
            include: {
                album: true,
                artists: true
            }
        })

        if (!track) {
            HandleNotFound(res, "No such track found");
            return;
        }

        respond<TrackWithArtistsAndAlbums>(200, true, track, res);
    } catch (error) {
        console.log(error);
        HandlePrismaExceptions(error, res);
    }
}


export const playTrack = async (req: Request<{ id?: string }>, res: Response) => {
    try {
        if (!req.params.id) {
            // HandleBadRequest(res, "Params required");
            return;
        }
        const filePath = path.resolve(file_uri, `./${req.params.id}.mp3`);
        const stream = fs.createReadStream(filePath);
        stream.pipe(res)
    } catch (error) {
        console.log(error);

    }
}
