const express = require('express');
const cors = require('cors');
const passport = require('passport');


const api = express();
const PORT = 8080;


api.listen(PORT, (error) => {
    if(error){
        console.log(error);
    }
    console.log(`Server is listening on port: ${PORT}`);
    console.log('Use Ctrl-C to close');
})