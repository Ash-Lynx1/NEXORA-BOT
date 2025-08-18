import { callChatGPT, callDeepSeek, callQwen } from "./api.js";

/**
 * Handle AI commands: /chatgpt, /deepseek, /qwen-ai
 * @param {TelegramBot} bot - The bot instance
 * @param {Object} msg - Telegram message object
 */
export async function handleAI(bot, msg) {
  const chatId = msg.chat.id;
  const text = msg.text.trim();
  
  // Extract query text after command
  const query = text.split(" ").slice(1).join(" ");
  if (!query) {
    return bot.sendMessage(chatId, "⚠️ Please provide a query. Example: /chatgpt Hello");
  }
  
  let response;
  
  try {
    if (text.startsWith("/chatgpt")) {
      response = await callChatGPT(query);
    } else if (text.startsWith("/deepseek")) {
      response = await callDeepSeek(query);
    } else if (text.startsWith("/qwen-ai")) {
      response = await callQwen(query);
    } else {
      return; // Not an AI command
    }
    
    await bot.sendMessage(chatId, `🤖 AI Response:\n\n${response}`);
  } catch (err) {
    console.error("AI handler error:", err.message);
    await bot.sendMessage(chatId, "⚠️ Failed to get AI response. Try again later.");
  }
}