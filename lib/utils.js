import dotenv from "dotenv";
dotenv.config();

/**
 * Check if a user has joined the required Telegram channel
 * @param {TelegramBot} bot - Telegram bot instance
 * @param {number} userId - Telegram user ID
 * @returns {Promise<boolean>}
 */
export async function checkSubscription(bot, userId) {
  try {
    const res = await bot.getChatMember(process.env.TELEGRAM_CHANNEL, userId);
    return ["member", "administrator", "creator"].includes(res.status);
  } catch (err) {
    console.error("Subscription check error:", err.message);
    return false;
  }
}

/**
 * Send main menu to user
 * @param {TelegramBot} bot - Telegram bot instance
 * @param {number} chatId - Chat ID
 * @param {string} username - Telegram username or first name
 */
export function sendMainMenu(bot, chatId, username) {
  const menuText = `
👋 Hello @${username}, welcome to NΞXØRΛ-TECH BOT

«••••••| NΞXØRΛ |••••••»
📌 List of Commands

【AI MENU】
/chatgpt  
/deepseek  
/qwen-ai  

【DOWNLOAD】
/apk <query>  
/play <query/link>  
/video <query/link>  
/gitclone <query/link>  
/ytmp4 <query/link>  

【GC MENU】
/antilink <on/off>  
/adminonly <on/off>  
/antibadword <on/off>  
/boost <on/off>  

【OTHER MENU】
/owner  
/buybot  
/menu  

【ADMIN CMDS】
/new-admin <user id>  
/broadcast <message>
`;
  
  const keyboard = {
    inline_keyboard: [
      [
        { text: "📢 Telegram Channel", url: process.env.TELEGRAM_CHANNEL },
      ],
      [
        { text: "💬 WhatsApp Updates", url: process.env.WHATSAPP_CHANNEL_LINK },
      ],
      [
        { text: "👑 Contact Owner", url: `https://t.me/${process.env.OWNER_USERNAME}` },
      ],
    ],
  };
  
  bot.sendMessage(chatId, menuText, { reply_markup: keyboard });
}

/**
 * Simple utility: format uptime in hh:mm:ss
 * @param {number} seconds
 * @returns {string}
 */
export function formatUptime(seconds) {
  const h = Math.floor(seconds / 3600)
    .toString()
    .padStart(2, "0");
  const m = Math.floor((seconds % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const s = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${h}:${m}:${s}`;
}