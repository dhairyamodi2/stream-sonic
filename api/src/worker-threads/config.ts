import path from "path";
import { Worker } from "worker_threads";

class WorkerThread {
    worker : Worker | undefined;

    public getWorker() {
        if (!this.worker) {
            this.worker = new Worker(path.resolve(__dirname, './worker.js'));
        }
        return this.worker
    }

}


export default WorkerThread;