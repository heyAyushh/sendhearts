var Client = require('instagram-private-api').V1;
require('dotenv').config()
var device = new Client.Device(process.env.FROM_ID);
var storage = new Client.CookieFileStorage(__dirname + '/cookies/FROM_ID.json');

Client.Session.create(device, storage, process.env.FROM_ID, process.env.FROM_ID_PASS)
    .then(function(session) {
        return [session, Client.Account.searchForUser(session, process.env.TO_ID)]   
    })
    .spread(function(session, account) {
        return Client.Thread.configureText(session, account.id, '❤️')
    })
    .then(function(t) {
        {console.log("done")}
    })
