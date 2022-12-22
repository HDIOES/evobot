import { Message } from "discord.js";
import { i18n } from "../utils/i18n";
import play from "./play";

export default {
  name: "right",
  cooldown: 3,
  description: i18n.__("right.description"),
  async execute(message: Message, args: string[]) {
    await play.execute(message, ["right", "version", ...args]);
  }
};
