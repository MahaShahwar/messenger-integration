import express from "express";
import chatfbController from "../controllers/chatfbController";


let router = express.Router();

let initWebRoutes = (app)=> {
    router.get("/", chatfbController.getHomepage);
    router.post("/webhook",chatfbController.postWebhook)
    router.get("/webhook", chatfbController.getWebhook);
    //router.post("/webhook", homepageController.postWebhook);
    // router.post("/set-up-profile", homepageController.handleSetupProfile);
    // router.get("/set-up-profile", homepageController.getSetupProfilePage);

    // router.get("/info-order", homepageController.getInfoOrderPage);
    // router.post("/set-info-order", homepageController.setInfoOrder);
    return app.use("/", router);
};

module.exports = initWebRoutes;
