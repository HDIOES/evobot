import { ChatInputCommandInteraction, PermissionsBitField, SlashCommandBuilder, TextChannel } from "discord.js";
import { Message } from "discord.js";
import { i18n } from "../utils/i18n";
import play from "./play";

export default {
  data: new SlashCommandBuilder()
    .setName("right")
    .setDescription(i18n.__("right.description"))
    .addStringOption((option) => option.setName("song").setDescription("The song you want to play").setRequired(true)),

  name: "right",
  cooldown: 3,
  permissions: [
    PermissionsBitField.Flags.Connect,
    PermissionsBitField.Flags.Speak,
    PermissionsBitField.Flags.AddReactions,
    PermissionsBitField.Flags.ManageMessages
  ],
  async execute(interaction: ChatInputCommandInteraction, input: string) {
    await play.execute(interaction, `${input} right version`);
  }
};
