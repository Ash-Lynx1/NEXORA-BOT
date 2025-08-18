// In-memory storage for simplicity
const groupSettings = {}; // { chatId: { antilink: true, adminonly: true, antibadword: true, boost: true } }
const userWarnings = {}; // { chatId: { userId: warningCount } }
const badWords = ["badword1", "badword2"]; // Example bad words, extend as needed

/**
 * Handle group-related commands
 * @param {TelegramBot} bot - Bot instance
 * @param {Object} msg - Telegram message object
 */
export async function handleGroupCommand(bot, msg) {
  const chatId = msg.chat.id;
  const text = msg.text.trim().toLowerCase();
  
  // Initialize group settings if not exists
  if (!groupSettings[chatId]) {
    groupSettings[chatId] = { antilink: false, adminonly: false, antibadword: false, boost: false };
  }
  
  // Toggle commands
  if (text.startsWith("/antilink")) {
    const state = text.split(" ")[1] === "on";
    groupSettings[chatId].antilink = state;
    return bot.sendMessage(chatId, `✅ Anti-link is now ${state ? "ON" : "OFF"}`);
  }
  
  if (text.startsWith("/adminonly")) {
    const state = text.split(" ")[1] === "on";
    groupSettings[chatId].adminonly = state;
    return bot.sendMessage(chatId, `✅ Admin-only mode is now ${state ? "ON" : "OFF"}`);
  }
  
  if (text.startsWith("/antibadword")) {
    const state = text.split(" ")[1] === "on";
    groupSettings[chatId].antibadword = state;
    return bot.sendMessage(chatId, `✅ Anti-badword is now ${state ? "ON" : "OFF"}`);
  }
  
  if (text.startsWith("/boost")) {
    const state = text.split(" ")[1] === "on";
    groupSettings[chatId].boost = state;
    return bot.sendMessage(chatId, `✅ Boost is now ${state ? "ON" : "OFF"}`);
  }
  
  // Automatic message handling (example, extend later)
  if (msg.text && groupSettings[chatId].antibadword) {
    const message = msg.text.toLowerCase();
    for (const word of badWords) {
      if (message.includes(word)) {
        // Warn user
        if (!userWarnings[chatId]) userWarnings[chatId] = {};
        userWarnings[chatId][msg.from.id] = (userWarnings[chatId][msg.from.id] || 0) + 1;
        
        // Delete message
        try {
          await bot.deleteMessage(chatId, msg.message_id);
        } catch {}
        
        const warnings = userWarnings[chatId][msg.from.id];
        let warnText = `⚠️ Warning ${warnings}/3 for using bad words.`;
        if (warnings >= 3) {
          warnText = "⛔ User banned for 24 hours for repeated bad words.";
          // Implement ban logic if needed
        }
        
        return bot.sendMessage(chatId, warnText);
      }
    }
  }
}