import { Server } from "socket.io";

let ws = {};

const connection = (server) => {
    try {

        const io = new Server(server, {
            cors: {
                origin: "*"
            }
        });

        ws.io = io;

        io.on("connection", (socket) => {

            console.log("Socket connection, Socket: ", socket.id);

            if (socket.id) {
                ws.socket = socket;
            };
        });

        if (!ws.socket) {
            console.log("Number of customers - 0");
        };

    } catch (error) {
        console.log(error.message);
        return new Error(error);
    };
};

const EMIT = (message, data) => {
    try {
        const { io, socket } = ws;
        io.to(socket.id).emit(message, data);
    } catch (error) {
        console.log(error.message);
        return new Error(error);
    };
};

export default {
    connection,
    EMIT
}