import axios from 'axios';



export const http = axios.create({
    baseURL: 'https://streamsonic.loca.lt/',
    headers: {
        common: {
            'Content-Type' : 'application/json'
        }
    }
})
