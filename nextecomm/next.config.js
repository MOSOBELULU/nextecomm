/** @type {import('next').NextConfig} */
const NextConfig = {
    env: {
        DB_URI: process.env.DB_URI,
        API: process.env.API,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    }
}

module.exports = NextConfig;
