import { Response } from "express";
import { parentPort } from "worker_threads";
import fs from 'fs'
import path from "path";
import { file_uri } from "../constants";

if (parentPort) {
    parentPort.on('message', function({id, res} : {id : string, res : Response}) {
        try {
            const filePath = path.resolve(file_uri, `./${id}.mp3`);
            const stream = fs.createReadStream(filePath);
            stream.pipe(res)
            parentPort?.postMessage({stream : stream})
        } catch (error) {
            console.log(error);
        }
    })
}