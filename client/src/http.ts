import axios from 'axios';



export const http = axios.create({
    baseURL: 'http://192.168.1.6:5000',
    headers: {
        common: {
            'Content-Type' : 'application/json'
        }
    }
})
