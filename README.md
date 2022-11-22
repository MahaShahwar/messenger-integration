# facebook-messenger-chat bot( Talking with real agent)

##Host website on heroku
-Create account and create app on https://dashboard.heroku.com/apps
###IN project terminal write following commands(present in heroku app deploy)
-heroku login
-git add .
-git commit -am "any message"
-heroku git:remote -a herokuAppNamee
-heroku config:set NPM_CONFIG_PRODUCTION=false
-git push heroku master

--Open the link present in git push result

##Meta developers account and messenger setup
-Create free account in meta
-Create app
-Make app live by changing basic settings
-Create privacy policy url free from https://www.freeprivacypolicy.com/free-privacy-policy-generator/
-Save changes
-Add product, messenger setup and add page of fb where u want messenger functionality
-Callback url of ur hosted website 

##Messenger code
-From page, open business suite, settings,new page experience, advanced messaging

