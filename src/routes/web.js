import express from "express";
import homepageController from "../controllers/homepageController";
import chatfbController from "../controllers/chatfbController";


let router = express.Router();

let initWebRoutes = (app)=> {
    router.get("/", homepageController.getHomePage);
    router.post("/webhook",chatfbController.postWebhook)
    router.get("/messaging-webhook", chatfbController.getWebhook);
    //router.post("/webhook", homepageController.postWebhook);
    router.post("/set-up-profile", homepageController.handleSetupProfile);
    router.get("/set-up-profile", homepageController.getSetupProfilePage);

    router.get("/info-order", homepageController.getInfoOrderPage);
    router.post("/set-info-order", homepageController.setInfoOrder);
    return app.use("/", router);
};

module.exports = initWebRoutes;
