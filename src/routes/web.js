import express from "express";
import chatfbController from "../controllers/chatfbController";
import sendMessage  from "../controllers/sendMessage";


let router = express.Router();

let initWebRoutes = (app)=> {
    router.get("/", chatfbController.getHomepage);
    router.post("/webhook",chatfbController.postWebhook)
    router.get("/webhook", chatfbController.getWebhook);
    router.post('/sendMessage',sendMessage.sendMessageOptions)
    return app.use("/", router);
};

module.exports = initWebRoutes;
