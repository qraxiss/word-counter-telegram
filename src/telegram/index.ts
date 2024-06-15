import { config } from "dotenv";
import TelegramBot from "node-telegram-bot-api";
import onMessage from "./message";
config();

export const BOT = new TelegramBot(process.env.TOKEN);
BOT.on("message", onMessage(BOT));

export function startPolling() {
  BOT.startPolling();
}

export async function stopPolling() {
  await BOT.stopPolling();
}
