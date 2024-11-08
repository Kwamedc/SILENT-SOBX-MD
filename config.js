const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "37InlSSb#_rug94U1IPmWUjAze8jhDzSsOfYL_4f_djBhlKNMpRg",
MONGODB: process.env.MONGODB || "enter mongodb url",
};
