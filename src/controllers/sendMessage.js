var request = require('request');
let sendMessageOptions = (req,res)=>{

    let msg = {
        'method': 'POST',
        'url': `https://graph.facebook.com/v15.0/me/messages?access_token=${process.env.FACEBOOK_PAGE_ACCESS_TOKEN}`,
        'headers': {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "recipient": {
            "id": req.body.recipient
          },
          "message": {
            "text": req.body.message
        }})
    }
    let c;
    request(msg, async (error, response) => {
        if(error){
            console.log(error);
        }
        c = JSON.parse(response.body);
        // console.log(typeof c);
        // console.log(c.message_id);
        var message = {
            'method': 'GET',
            'url': `https://graph.facebook.com/v13.0/${c.message_id}?fields=message&access_token=${process.env.FACEBOOK_PAGE_ACCESS_TOKEN}`,
          };
          console.log('message',message);
          request(message, function (error, response) {
            if (error) throw new Error(error);
            console.log(response.body);
            res.send(response.body)
          });
            // console.log(response);
            
    })
    console.log('check',msg);
}
module.exports={
    sendMessageOptions
}