import socket from "../services/socket.service.js";

const PANEL = (req, res, next) => {
    try {
        const query = req?.query;

        if (!query.id) {
            return res.status(404).
                json({ message: "No any data send" });
        };

        query.panel = true;

        socket.EMIT("panel", query);


        return res
            .status(200)
            .json({
                status: 200,
                message: 'success'
            });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};

const STATS = (req, res, next) => {
    try {
        const query = req?.query;

        if (!query.id) {
            return res.status(404).
                json({ message: "No any data send" });
        };

        query.panel = true;


        socket.EMIT("stats", query);

        return res
            .status(200)
            .json({
                status: 200,
                message: 'success'
            });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};

export default {
    PANEL,
    STATS
};