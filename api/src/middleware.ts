import { NextFunction, Request, Response } from "express";
import { HandleUnauthorized } from "./Exceptions/Handlers";
import { JwtPayload, decode, verify } from "jsonwebtoken";
import { OrmClient } from "./db";

export const authenticate = async (req : Request, res : Response, next : NextFunction) => {
    try {
        
        const authHeaders = req.headers['authorization'];
        if (!authHeaders) {
            HandleUnauthorized(res);
            return;
        }

        let slices = authHeaders.split(" ");
        if(slices.length < 2) {
            HandleUnauthorized(res);
            return;
        }

        let token = slices[1];
        const decodedPayload = verify(token, 'RANDOMKEY') as JwtPayload;
        
        if(!decodedPayload || !decodedPayload.email || ! decodedPayload.user_id) {
            HandleUnauthorized(res);
            return;
        }
        const user = await OrmClient.user.findUnique({
            where: {
                user_id: decodedPayload.user_id
            }
        })

        if(!user) {
            HandleUnauthorized(res);
            return;
        }

        req.user = user;
        next();
    } catch (error) {
        console.log(error);
        HandleUnauthorized(res)
    }
}