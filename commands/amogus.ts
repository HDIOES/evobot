import { Message } from "discord.js";
import { i18n } from "../utils/i18n";
import play from "./play";

export default {
  name: "amogus",
  cooldown: 3,
  description: i18n.__("amogus.description"),
  async execute(message: Message) {
    const track = Math.floor(Math.random() * 10) ? 'https://youtu.be/jKLG0vLhWFI' : 'https://youtu.be/rcWcrL2o9bQ'
    await play.execute(message, [track, '!!']);
  }
};
