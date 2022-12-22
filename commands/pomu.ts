import { Message } from "discord.js";
import { i18n } from "../utils/i18n";
import play from "./play";

export default {
  name: "pomu",
  cooldown: 3,
  description: i18n.__("pomu.description"),
  async execute(message: Message) {
    await play.execute(message, ["https://youtu.be/8KBDqn3WCv4", "!!"]);
  }
};
