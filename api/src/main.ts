import { log } from "console";
import app from "./app";

app.listen(process.env.PORT, () => {
    log(`Server running on ${process.env.PORT}`);
})