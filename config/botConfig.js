import dotenv from "dotenv";
dotenv.config();

export const BOT_CONFIG = {
  PREFIX: process.env.PREFIX || "/",
  OWNER_ID: process.env.OWNER_ID,
  OWNER_USERNAME: process.env.OWNER_USERNAME,
  TELEGRAM_CHANNEL: process.env.TELEGRAM_CHANNEL,
  WHATSAPP_CHANNEL: process.env.WHATSAPP_CHANNEL_LINK,
  BOT_USERNAME: process.env.BOT_USERNAME,
};