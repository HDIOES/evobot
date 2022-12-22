import { Message } from "discord.js";
import { i18n } from "../utils/i18n";
import play from "./play";

export default {
  name: "puff",
  cooldown: 3,
  description: i18n.__("puff.description"),
  async execute(message: Message) {
    await play.execute(message, ["https://www.youtube.com/watch?v=IdL3uOlVBPc", "!!"]);
  }
};
