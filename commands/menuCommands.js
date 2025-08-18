import { sendMainMenu } from "../lib/utils.js";

/**
 * Route menu commands
 * @param {TelegramBot} bot - Telegram bot instance
 * @param {Object} msg - Telegram message object
 */
export async function handleMenuCommands(bot, msg) {
  try {
    const chatId = msg.chat.id;
    const username = msg.from.username || msg.from.first_name;
    
    // Send main menu
    sendMainMenu(bot, chatId, username);
  } catch (err) {
    console.error("Menu command error:", err.message);
    bot.sendMessage(msg.chat.id, "⚠️ Failed to display menu. Try again later.");
  }
}