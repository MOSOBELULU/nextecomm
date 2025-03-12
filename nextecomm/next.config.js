const config = require("../config");

/** @type {import('next').NextConfig} */
const NextConfig = {
    env: {
        DB_URI: config.DB_URI,
    }
}
module.exports = NextConfig
