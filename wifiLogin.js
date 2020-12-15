'use strict'

const axios = require('axios');
const querystring = require('querystring');

const loginPortal = async () => {

    try {

        let response = await axios.post('REPLACE THE CAPTIVE PORTAL LOGIN HERE', //replace link if you need to
        querystring.stringify({
        user: 'REPLACE_USERNAME', //replace your username here
        password: 'REPLACE_PASSWORD', //replace your password here
        Login: 'Log In',
        btnSubmit: ''   
    }), {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    })
        console.log("Response ", response.status);
        console.log("Connected!");
    } catch (err) {
        console.error(err)
    }
}

loginPortal()