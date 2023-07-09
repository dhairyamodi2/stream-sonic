import { Request, Response } from "express";
import { HandleBadRequest, HandlePrismaExceptions, HandleUnauthorized, InternalServerError } from "../../Exceptions/Handlers";
import { respond } from "../../utils";
import { User } from "@prisma/client";
import { OrmClient } from "../../db";

export const getMe = function (req : Request, res : Response) {
    try {
        if (!req.user) {
            HandleUnauthorized(res);
            return;
        }


        respond<User>(200, true, req.user, res);
    } catch (error) {
        console.log(error);
        InternalServerError(res);
    }
}


export const completeProfile = async function (req : Request, res : Response) {
    try {
        const {birthDate} = req.body;

        if (!req.user){
            HandleUnauthorized(res);
            return;
        }
        if(!birthDate) {
            HandleBadRequest(res, "Birth date required");
            return;
        }

        const user = await OrmClient.user.update({
            where: {
                user_id: req.user.user_id
            },
            data: {
                birth_date:birthDate,
                completedProfile: true
            }
        })
        respond<User>(200, true, user, res, "Birth Data added");
    } catch (error) {
        console.log(error);
        HandlePrismaExceptions(error, res);
    }
}