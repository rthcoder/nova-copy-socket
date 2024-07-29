import cors from "cors";
import "./config/config.js";
import express from "express";
import { createServer } from "http";
import socket from "./services/socket.service.js";

const app = express();
const server = createServer(app);

socket.connection(server);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8000;

app.get("/", (req, res, next) => {
    res.json("Hello");
});

//start server
!async function () {
    try {
    } catch (error) {
        console.log(error);
    };
    app.use((error, req, res, next) => {

        fs.appendFileSync('./log.txt', `${req.url}__${req.method}__${Date.now()}__${error.name}__${error.message}\n`);

        if (error.name == 'ValidationError') {
            return res.status(error.status).json({
                status: error.status,
                message: error.message,
                errorName: error.name,
                error: true,
            });
        };


        if (error.status != 500) {
            error.status = error.status ? error.status : 404
            return res.status(error.status).json({
                status: error.status,
                message: error.message,
                errorName: error.name,
                error: true,
            });
        };


        return res.status(error.status).json({
            status: error.status,
            message: 'Internal Server Error',
            errorName: error.name,
            error: true,
        });
    });
    server.listen(PORT, () => console.log(`🚀 BackEnd server is running http://localhost:` + PORT));
}();