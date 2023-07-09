import { Response } from "express";

export function respond<T>(
    status: 200 | 201 | 400 | 401 | 403 | 404 | 422 | 500,
    success: boolean,
    data: T,
    res : Response,
    message? : string
) {
    res.status(status).json({success, data, message: message ? message : ""});
    return;
}