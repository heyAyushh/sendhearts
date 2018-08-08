var Client = require('instagram-private-api').V1;
const path = require('path');
require('dotenv').config()

const device = new Client.Device(process.env.FROM_ID);
const storage = new Client.CookieFileStorage(path.join(__dirname, 'cookies', process.env.FROM_ID));

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