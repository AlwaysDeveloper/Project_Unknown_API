import Busboy from "busboy";
import { RequestHandler } from "express";
import { helperfactory, mime } from ".";
import FileSystem from "fs";
import { tmpdir } from "os";
import { Stream } from "node:stream";
import path from "path";
import { List } from "lodash";

interface File {
    name: string,
    filename: string,
    encoding: string,
    mimetype: string,
    buffer: []
}

interface Feild {
    name: string,
    value: any
}

export default class Upload {
    fileHolder: any;
    feildHolder: any;
    toServer: RequestHandler = helperfactory.catchAsync(
        async (req: any, res: Response, next: Function, storage: Object | undefined) => {
            const contentType: string = req.headers['content-type'];
            if(contentType.includes("multipart/form-data")){
                const busboy = new Busboy({ headers: req.headers });
                busboy.on("file", (field: String, file: Stream, filename: string, encoding: String, mimetype: String) => this.fileHandler(field, file, filename, encoding, mimetype, (file: File) => {
                    req.body[file.name] = file;
                }));
                busboy.on("field", (fieldname: String, value: any) => this.feildHandler(fieldname, value, (feild: Feild) => {
                    console.log(feild.name);
                    req.body[feild.name] = feild.value;
                }));
                busboy.on("finish", next);
                req.pipe(busboy);
            }else if(mime.getExtensionByMime(contentType)){
                let buffer: any = [];
                req.on("data", (data: any) => {
                    buffer.push(Buffer.from(data));
                });
                req.on("end", () => {
                    const fileBuffer: Buffer = Buffer.concat(buffer);
                    console.log(mime.getExtensionByBuffer(fileBuffer));
                    // console.log(path.extname(Buffer.concat(buffer).toString("utf8")))
                })
            }else{
               
            }
            next();
        }
    );

    fileHandler(field: String|undefined, file: Stream|undefined, filename: string|undefined, encoding: String|undefined, mimetype: String|undefined, callback: Function) {
        try {
            let buffer: any = [];
            if(file){
                file.on("data", (data) => {
                    buffer.push(Buffer.from(data))
                });
                file.on("end", () => {
                    // FileSystem.writeFileSync(`E:/Project Unknown/Project_Unknown_API/temp/${filename}`, Buffer.concat(buffer));
                    callback({
                        name: field,
                        file: filename,
                        encoding,
                        mimetype,
                        buffer:Buffer.concat(buffer)
                    });
                });
            }else{
                throw new Error("File not parsed correctly");
            }
        } catch (error) {
            throw new Error(error);
        }
    }

    feildHandler(name: String, value: any, callback: Function){
        callback({name, value});
    };
}