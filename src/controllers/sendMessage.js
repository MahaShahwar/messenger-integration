var request = require('request');
let sendMessageOptions = (req,res)=>{

    let sendMessage = {
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
    let msgResponse;
    let message;
    request(sendMessage, async (error, response) => {
        if(error){
            console.log(error);
        }
        msgResponse = JSON.parse(response.body);
        var getMessage = {
            'method': 'GET',
            'url': `https://graph.facebook.com/v13.0/${msgResponse.message_id}?fields=message&access_token=${process.env.FACEBOOK_PAGE_ACCESS_TOKEN}`,
          };
          request(getMessage, function (error, response) {
            if (error) throw new Error(error);
            message=JSON.parse(response.body)
            //console.log(response.body);
            res.send(message.message)
          });
            // console.log(response);
            
    })
    //console.log('check',msg);
}
module.exports={
    sendMessageOptions
}