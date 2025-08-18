import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

// ==============================
// AI APIs
// ==============================
export async function callChatGPT(query) {
  try {
    const url = `${process.env.CHATGPT_API}${encodeURIComponent(query)}`;
    const { data } = await axios.get(url);
    return data.response || "⚠️ No response from ChatGPT API.";
  } catch (err) {
    console.error("ChatGPT API error:", err.message);
    return "⚠️ Failed to fetch ChatGPT response.";
  }
}

export async function callDeepSeek(query) {
  try {
    const url = `${process.env.DEEPSEEK_API}${encodeURIComponent(query)}`;
    const { data } = await axios.get(url);
    return data.response || "⚠️ No response from DeepSeek API.";
  } catch (err) {
    console.error("DeepSeek API error:", err.message);
    return "⚠️ Failed to fetch DeepSeek response.";
  }
}

export async function callQwen(query) {
  try {
    const url = `${process.env.QWEN_API}${encodeURIComponent(query)}`;
    const { data } = await axios.get(url);
    return data.response || "⚠️ No response from Qwen API.";
  } catch (err) {
    console.error("Qwen API error:", err.message);
    return "⚠️ Failed to fetch Qwen response.";
  }
}

// ==============================
// Download APIs
// ==============================
export async function downloadAPK(appName) {
  try {
    const url = `${process.env.APK_API}${encodeURIComponent(appName)}`;
    const { data } = await axios.get(url, { responseType: "arraybuffer" });
    return data;
  } catch (err) {
    console.error("APK download error:", err.message);
    throw new Error("Failed to download APK.");
  }
}

export async function downloadMedia(urlParam) {
  try {
    const url = `${process.env.PLAY_API}${encodeURIComponent(urlParam)}`;
    const { data } = await axios.get(url, { responseType: "arraybuffer" });
    return data;
  } catch (err) {
    console.error("Media download error:", err.message);
    throw new Error("Failed to download media.");
  }
}

export async function downloadGitClone(repoUrl) {
  try {
    const url = `${process.env.GITCLONE_API}${encodeURIComponent(repoUrl)}`;
    const { data } = await axios.get(url, { responseType: "arraybuffer" });
    return data;
  } catch (err) {
    console.error("GitClone download error:", err.message);
    throw new Error("Failed to download Git repo.");
  }
}

export async function downloadYTMP4(ytUrl) {
  try {
    const url = `${process.env.YTMP4_API}${encodeURIComponent(ytUrl)}`;
    const { data } = await axios.get(url, { responseType: "arraybuffer" });
    return data;
  } catch (err) {
    console.error("YTMP4 download error:", err.message);
    throw new Error("Failed to download YouTube video.");
  }
}