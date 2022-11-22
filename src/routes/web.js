import express from "express";
import chatfbController from "../controllers/chatfbController";


let router = express.Router();

let initWebRoutes = (app)=> {
    router.get("/", chatfbController.getHomepage);
    router.post("/webhook",chatfbController.postWebhook)
    router.get("/webhook", chatfbController.getWebhook);
    return app.use("/", router);
};

module.exports = initWebRoutes;
