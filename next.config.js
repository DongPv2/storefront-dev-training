/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    reactStrictMode: false,
    i18n: {
        locales: ["en-US", "vi"],
        defaultLocale: "vi"
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
};

module.exports = nextConfig;