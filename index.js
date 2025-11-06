require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const { 
  ButtonBuilder,
  EmbedBuilder,
  ButtonStyle,
  CommandInteraction,
  AttachmentBuilder,
  REST,
  Routes
} = require("discord.js");

const { createButtonRows, editButton, commands, emojis, sleep } = require("./utils.js");
const { startTime, chooseTimeout, timeBetweenRounds } = require("./config.json");
const { createWheel } = require("./wheel.js");
const Discord = require("discord.js");


// ✅ إعداد الويب (لـ KeepAlive)
const app = express();
const PORT = process.env.PORT || 3000;
const URL = process.env.URL || "https://example.com"; // حط رابطك في Render

app.get("/", (req, res) => {
  res.send("✅ Bot Is Alive");
});

app.listen(PORT, () => {
  console.log(`🌍 KeepAlive Running on: ${URL}`);
});


// ✅ اتصال MongoDB
mongoose.connect(process.env.MONGO_URL, {
})
.then(() => console.log("📦 MongoDB Connected"))
.catch(err => console.log("❌ MongoDB Error:", err));


// ✅ إعداد البوت
const client = new Discord.Client({
  intents: [Discord.IntentsBitField.Flags.Guilds]
});

const Games = new Map();


client.on("ready", async () => {
  const rest = new REST().setToken(process.env.TOKEN);

  try {
    console.log(`Updating Slash Commands...`);
    await rest.put(Routes.applicationCommands(client.user.id), { body: commands });
    console.log("✅ Slash Commands Loaded");
  } catch (err) {
    console.log(err);
  }

  console.log(`🤖 Bot Ready!`);
});


// ✅ باقي كودك نفس ما كان (ما غيرته)
client.on("interactionCreate", async (interaction) => {
  // نفس الكود اللي عندك بدون تغيير
  // ...
});


// (startGame) نفس الكود السابق بدون تغيير


client.login(process.env.TOKEN);