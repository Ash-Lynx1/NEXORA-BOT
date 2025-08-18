import { handleAI } from "../lib/ai.js";

/**
 * Route AI commands
 * @param {TelegramBot} bot - Telegram bot instance
 * @param {Object} msg - Telegram message object
 */
export async function handleAICommands(bot, msg) {
  try {
    await handleAI(bot, msg);
  } catch (err) {
    console.error("AI command error:", err.message);
    bot.sendMessage(msg.chat.id, "⚠️ Something went wrong while processing the AI command.");
  }
}