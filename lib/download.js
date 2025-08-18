import fs from "fs";
import path from "path";
import { downloadAPK, downloadMedia, downloadGitClone, downloadYTMP4 } from "./api.js";

/**
 * Handle download commands and send media files
 * @param {TelegramBot} bot - Bot instance
 * @param {Object} msg - Telegram message object
 */
export async function handleDownload(bot, msg) {
  const chatId = msg.chat.id;
  const text = msg.text.trim();
  const [command, ...args] = text.split(" ");
  const query = args.join(" ");
  
  if (!query) {
    return bot.sendMessage(chatId, "⚠️ Please provide a query or link. Example: /apk WhatsApp");
  }
  
  let buffer;
  try {
    if (command === "/apk") {
      buffer = await downloadAPK(query);
    } else if (command === "/play" || command === "/video") {
      buffer = await downloadMedia(query);
    } else if (command === "/gitclone") {
      buffer = await downloadGitClone(query);
    } else if (command === "/ytmp4") {
      buffer = await downloadYTMP4(query);
    } else {
      return; // Not a download command
    }
    
    // Save temporary file
    const filename = `${Date.now()}.mp4`; // Default to .mp4
    const filePath = path.join("./", filename);
    fs.writeFileSync(filePath, buffer);
    
    // Send file to user
    await bot.sendDocument(chatId, filePath);
    
    // Delete temporary file
    fs.unlinkSync(filePath);
  } catch (err) {
    console.error("Download error:", err.message);
    await bot.sendMessage(chatId, "⚠️ Failed to download or send the file.");
  }
}