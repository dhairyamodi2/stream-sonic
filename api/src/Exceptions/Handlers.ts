import { PrismaClientKnownRequestError, PrismaClientValidationError } from "@prisma/client/runtime/library";
import { Response } from "express";
import { respond } from "../utils";

export function InternalServerError(res : Response){
    respond<any>(500, false, null, res, 'Internal Server Error')
}


export function HandlePrismaExceptions(error: any, res : Response){
    if (error instanceof PrismaClientValidationError) {
        respond<any>(400, false, null, res, error.message)
        return;
    }

    if (error instanceof PrismaClientKnownRequestError) {
        if(error.code === 'P2002') {
            respond<any>(400, false, null, res, "Account with given fields already registered")
            return;
        }
        if(error.code == 'P2025') {
            respond<any>(400, false, null, res, "Records with given fields already exists!")
            return;
        }
        respond<any>(400, false, null, res, error.message)
        return;
    }
    InternalServerError(res)
}



export function HandleUnauthorized(res : Response){
    respond<any>(401, false, null,res, "Unauthorized")
}

export function HandleBadRequest(res : Response, message?: string) {
    respond<any>(400, false, null, res, message ? message : "Bad Request");
}


export function HandleNotFound(res : Response, message? : string) {
    respond<any>(404, false, null, res, message ? message : "not found")
}