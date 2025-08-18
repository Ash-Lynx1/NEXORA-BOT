import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

import { checkSubscription, sendMainMenu } from "./lib/utils.js";
import { handleAICommands } from "./commands/aiCommands.js";
import { handleDownloadCommands } from "./commands/downloadCommands.js";
import { handleGroupCommands } from "./commands/groupCommands.js";
import { handleAdminCommands } from "./commands/adminCommands.js";
import { handleMenuCommands } from "./commands/menuCommands.js";

// Initialize bot
const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

const OWNER_ID = process.env.OWNER_ID;

// Bot ready
console.log("✅ NΞXØRΛ-BOT is running...");

// ==============================
// START COMMAND
// ==============================
bot.onText(/\/start/, async (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const username = msg.from.username || msg.from.first_name;
  
  // Check if user joined the Telegram channel
  const isMember = await checkSubscription(bot, userId);
  
  if (!isMember) {
    return bot.sendMessage(
      chatId,
      "🚫 You cannot use this bot yet. Please join our Telegram channel first.",
      {
        reply_markup: {
          inline_keyboard: [
            [
              { text: "📢 Join Telegram Channel", url: process.env.TELEGRAM_CHANNEL },
            ],
            [
              { text: "💬 WhatsApp Updates", url: process.env.WHATSAPP_CHANNEL_LINK },
            ],
          ],
        },
      }
    );
  }
  
  // Send main menu if verified
  sendMainMenu(bot, chatId, username);
});

// ==============================
// MESSAGE HANDLER
// ==============================
bot.on("message", async (msg) => {
  if (!msg.text) return;
  
  const text = msg.text.trim();
  
  // AI Commands
  if (text.startsWith("/chatgpt") || text.startsWith("/deepseek") || text.startsWith("/qwen-ai")) {
    return handleAICommands(bot, msg);
  }
  
  // Download Commands
  if (
    text.startsWith("/apk") ||
    text.startsWith("/play") ||
    text.startsWith("/video") ||
    text.startsWith("/gitclone") ||
    text.startsWith("/ytmp4")
  ) {
    return handleDownloadCommands(bot, msg);
  }
  
  // Group Commands
  if (
    text.startsWith("/antilink") ||
    text.startsWith("/adminonly") ||
    text.startsWith("/antibadword") ||
    text.startsWith("/boost")
  ) {
    return handleGroupCommands(bot, msg);
  }
  
  // Admin & Menu Commands
  if (
    text.startsWith("/owner") ||
    text.startsWith("/buybot") ||
    text.startsWith("/menu") ||
    text.startsWith("/new-admin") ||
    text.startsWith("/broadcast")
  ) {
    return handleAdminCommands(bot, msg, OWNER_ID);
  }
});

// ==============================
// Graceful shutdown
// ==============================
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));