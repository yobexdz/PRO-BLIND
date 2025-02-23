const express = require("express");
const cors = require("cors");
const { sendToTelegram } = require("./bot");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/send-question", async (req, res) => {
    const { name, question } = req.query;
    if (!name || !question) {
        return res.status(400).send("يرجى إدخال جميع البيانات.");
    }
    await sendToTelegram(name, question);
    res.send("✅ تم إرسال سؤالك بنجاح!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
