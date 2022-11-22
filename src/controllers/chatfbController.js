let getHomepage = (req, res) => {
  return res.render("homepage.ejs");
};

let postWebhook = (req,res)=>{
    let body = req.body;
    if (body.object === "page") {
        body.entry.forEach(element => {
            let webhook_event = element.messaging[0];
            console.log(webhook_event);
        // Get the sender PSID
        let sender_psid = webhook_event.sender;
        console.log(sender_psid);
        });
        res.status(200).send("EVENT_RECEIVED");
      } else {
        res.sendStatus(404);
      }
}

let getWebhook = (req,res)=>{
    let mode = req.query["hub.mode"];
  let token = req.query["hub.verify_token"];
  let challenge = req.query["hub.challenge"];
  console.log("token");
  if (mode && token) {
    if (mode === "subscribe" && token === process.env.FACEBOOK_PAGE_ACCESS_TOKEN) {
      console.log("WEBHOOK_VERIFIED");
      res.status(200).send(challenge);
    } else {
      res.sendStatus(403);
    }
  }
}

module.exports={
  getHomepage,
    postWebhook,
    getWebhook
}