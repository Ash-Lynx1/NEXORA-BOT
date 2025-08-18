import { handleDownload } from "../lib/download.js";

/**
 * Route download commands
 * @param {TelegramBot} bot - Telegram bot instance
 * @param {Object} msg - Telegram message object
 */
export async function handleDownloadCommands(bot, msg) {
  try {
    await handleDownload(bot, msg);
  } catch (err) {
    console.error("Download command error:", err.message);
    bot.sendMessage(msg.chat.id, "⚠️ Something went wrong while processing the download command.");
  }
}