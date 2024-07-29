import socket from "../services/socket.service.js";

const PANEL = (req, res, next) => {
    try {
        const body = req?.body

        socket.EMIT("panel", body)


        return res
            .status(200)
            .json({
                status: 200,
                message: 'success'
            })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}

const STATS = (req, res, next) => {
    try {
        const body = req?.body

        socket.EMIT("stats", body)


        return res
            .status(200)
            .json({
                status: 200,
                message: 'success'
            })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}

export default {
    PANEL,
    STATS
}