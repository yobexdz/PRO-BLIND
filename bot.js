const axios = require("axios");
require("dotenv").config();

const sendToTelegram = async (name, question) => {
    const message = `📩 *طلب دعم جديد*\n\n👤 *الاسم:* ${name}\n❓ *السؤال:* ${question}`;
    const url = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;

    try {
        await axios.post(url, {
            chat_id: process.env.TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: "Markdown"
        });
    } catch (error) {
        console.error("Error sending message:", error);
    }
};

module.exports = { sendToTelegram };
