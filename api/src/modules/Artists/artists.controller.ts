import { Request, Response } from "express";
import { OrmClient } from "../../db";
import { respond } from "../../utils";
import { User } from "@prisma/client";
import { HandlePrismaExceptions } from "../../Exceptions/Handlers";

export const getAll = async function (req : Request, res : Response) {
    try {
        const artists = await OrmClient.user.findMany();
        respond<Array<User>>(200, true, artists, res);
    } catch (error) {
        console.log(error);
        HandlePrismaExceptions(error, res);
    }
}