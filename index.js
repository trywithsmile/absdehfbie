const TelegramBot = require('node-telegram-bot-api');

// Temporary hardcoded token - BAAD MEIN HATA DENGE
const TOKEN = process.env.BOT_TOKEN || "7127937231:AAEoq1vO2C5CjJePVqKjK6JqkqYqX2aXJ9c";
const CHANNEL_USERNAME = process.env.CHANNEL_USERNAME || "your_channel_username";

console.log("Using token:", TOKEN ? "Present" : "Missing");

if (!TOKEN) {
  console.error('ERROR: BOT_TOKEN environment variable not set!');
  console.error('Please set BOT_TOKEN in Railway dashboard');
  process.exit(1);
}

try {
  const bot = new TelegramBot(TOKEN, { polling: true });
  console.log('Bot started successfully with token!');

  // Simple test command
  bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Bot is working! Token is correct.');
  });

  bot.on('message', (msg) => {
    console.log('Received message:', msg.text);
  });

  console.log('Bot is ready and listening...');

} catch (error) {
  console.error('Failed to initialize bot:', error);
}
