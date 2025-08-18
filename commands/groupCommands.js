import { handleGroupCommand } from "../lib/group.js";

/**
 * Route group-related commands
 * @param {TelegramBot} bot - Telegram bot instance
 * @param {Object} msg - Telegram message object
 */
export async function handleGroupCommands(bot, msg) {
  try {
    await handleGroupCommand(bot, msg);
  } catch (err) {
    console.error("Group command error:", err.message);
    bot.sendMessage(msg.chat.id, "⚠️ Something went wrong while processing the group command.");
  }
}