const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require('uuid');
const axios = require('axios').default;

require('dotenv').config()

const upbit_access_key = process.env.UPBIT_ACCESS_KEY;
const upbit_secret_key = process.env.UPBIT_SECRET_KEY;
const upbit_server_url = process.env.UPBIT_SERVER_URL;


const payload = {
  access_key: upbit_access_key,
  nonce: uuidv4(),
};

const jwtToken = jwt.sign(payload, upbit_access_key);
const authorizationToken = `Bearer ${jwtToken}`;

const options = {
    method: "GET",
    url: upbit_server_url + "accounts",
    headers: {Authorization: authorizationToken},
}
axios(options)
.then((response) => {
    console.log(response.body);
})
.catch((err) => {
    console.log(err.response)
})