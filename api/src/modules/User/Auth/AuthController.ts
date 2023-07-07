import { Request, Response } from "express";
import { AuthCallbackService } from "./AuthService";

export const AuthCallback = async function (req : Request, res : Response) {
    const {code} : {code? : string}  = req.query;
    const result = await AuthCallbackService(code);
    if(result.success == false) {
        return res.status(result.status).json(result)
    }
    res.send(result.data)
    return; 
}