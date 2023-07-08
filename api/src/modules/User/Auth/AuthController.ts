import { Request, Response } from "express";
import { GOOGLE_OAUTH_URL } from "../../../constants";
import axios from "axios";
import { getToken, respond } from "../../../utils";
import { HandlePrismaExceptions, InternalServerError } from "../../../Exceptions/Handlers";
import { OrmClient } from "../../../db";
import { User } from "@prisma/client";
import jwt from 'jsonwebtoken'

export const AuthCallback = async function (req : Request, res : Response) {
    try {
        const {code} : {code? : string}  = req.query;
        if (!code) {
            respond<any>(400, false, null, res, "Invalid Code");
            return;
        }
        console.log(code)
        const clientId = process.env.GOOGLE_CLIENT_ID;
        const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

        const googleOauth = `${GOOGLE_OAUTH_URL}?code=${code}&client_id=${clientId}&client_secret=${clientSecret}&redirect_uri=${process.env.GOOGLE_REDIRECT_URI}&grant_type=authorization_code`;


        const resp = await fetch(googleOauth, {
            method: 'POST',
            headers: {
                "Content-type" : "application/json"
            }
        })
        const {id_token} : {id_token? : string} = await resp.json()
        if (!id_token) {
            respond<any>(400, false, null, res, "Invalid Code")
            return;
        }

        const verifyResponse = await axios.get(
            `https://oauth2.googleapis.com/tokeninfo?id_token=${id_token}`
          );

        const verifyData = verifyResponse.data

        const {email, name, picture, sub} : {email? : string, name? : string, picture? : string, sub? : string} = verifyData;
        if(!email || !name || !picture || !sub) {
            respond<any>(400, false, null, res, "Invalid Code");
            return;
        }
        console.log('sub here');
        console.log(sub);

        let result = await OrmClient.user.findUnique({
            where: {
                user_id: sub,
            }
        })

        if(result) {
            const token = getToken(email, sub);
            var data = `<script>window.location.replace("exp://192.168.1.6:19000/--/app?token=${token}")</script>`
            res.send(data)
            return;
        }
        const user = await OrmClient.user.create({
            data: {
                email, name, user_id: sub
            }
        })

        const token = getToken(email, sub);

        var data = `<script>window.location.replace("exp://192.168.1.6:19000/--/app?token=${token}")</script>`
        res.send(data);

    } catch (error) {
        console.log(error);
        HandlePrismaExceptions(error, res)
    }
}


