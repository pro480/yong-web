/** @type {import('next').NextConfig} */
const{ i18n } = require("./next-i18next.config")

module.exports = {
    i18n,
    // reactStrictMode: true,
    images: {
        domains: [
            "www.inha.ac.kr",
            "www.nia.or.kr",
            "bit.ly",
            "p-yong21c.inha.ac.kr",
            "firebasestorage.googleapis.com",
            // 아래부터 MOU 기관 URL 리스트
            "ska.ksif.or.kr",
            "www.ksif.or.kr",
            "www.ikefbooks.com",
            "sdf.seoul.kr",
        ],
    },
};
