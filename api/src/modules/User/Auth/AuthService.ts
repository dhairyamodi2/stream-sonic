import { GOOGLE_OAUTH_URL } from "../../../constants";
import { ResponseType } from "../../../types/types"

export const AuthCallbackService = async function(code : string | undefined) : Promise<ResponseType<any>>  {
    try {
        if (!code) {
            return {
                status: 200,
                success: false,
                message: "Invalid Code",
                data: null
            }
        }
        console.log(code)
        const clientId = process.env.GOOGLE_CLIENT_ID;
        const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
        
        const googleOauth = `${GOOGLE_OAUTH_URL}?code=${code}&client_id=${clientId}&client_secret=${clientSecret}&redirect_uri=${process.env.GOOGLE_REDIRECT_URI}&grant_type=authorization_code`;


        const res = await fetch(googleOauth, {
            method: 'POST',
            headers: {
                "Content-type" : "application/json"
            }
        });
        const {id_token} : {id_token? : string} = await res.json();
        if (!id_token) {
            return {
                status: 400,
                message: "Bad Request",
                success: false,
                data: null
            }
        }

        const verifyResponse = await fetch(
            `https://oauth2.googleapis.com/tokeninfo?id_token=${id_token}`
          );

        const verifyData = await verifyResponse.json();

        const {email, name, picture} : {email? : string, name? : string, picture? : string} = verifyData;
        if(!email || !name || !picture) {
            return {
                status: 400,
                message: "Bad Request",
                success: false,
                data: null
            }
        }
        return {
            success: true,
            status: 200,
            message: '',
            data: `<script>window.location.replace("exp://?email=${email}&name=${name}&picture=${picture}")</script>`
         }

    } catch (error) {
        console.log(error);
        return {
            status: 500,
            message: "Internal Server Error",
            success: false,
            data: null
        }
    }
}