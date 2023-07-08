import path from "path"

export const AddTracks = async (req : Request, res : Response) => {
    try {
        var s = path.resolve(__dirname, '../../../');
        console.log(s);
    } catch (error) {
        
    }
}