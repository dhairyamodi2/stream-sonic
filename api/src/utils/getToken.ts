import jwt from 'jsonwebtoken'


export const getToken = (email : string, sub : string) => {
    const token = jwt.sign({email, user_id : sub}, "RANDOMKEY", {
        expiresIn: '7d'
    })
    return token;
}