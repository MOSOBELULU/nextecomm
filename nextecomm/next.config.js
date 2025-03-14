

/** @type {import('next').NextConfig} */
const NextConfig = {
    env: {
        DB_URI: DB_URI,
        API: API,
        NEXTAUTH_SECRET: NEXTAUTH_SECRET,
    }
}
module.exports = NextConfig
