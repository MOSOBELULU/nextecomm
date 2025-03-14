

/** @type {import('next').NextConfig} */
const NextConfig = {
    env: {
        DB_URI: DB_URI,
        API: API,
        NEXTAUTH_SECRET: config.NEXTAUTH_SECRET,
    }
}
module.exports = NextConfig
