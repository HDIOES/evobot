const i18n = require("../util/i18n");
const { execute: play } = require("./play");

module.exports = {
  name: "right",
  cooldown: 3,
  description: i18n.__("right.description"),
  async execute(message, args) {

    const { channel } = message.member.voice;

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!channel) return message.reply(i18n.__("play.errorNotChannel")).catch(console.error);

    if (serverQueue && channel !== message.guild.me.voice.channel)
      return message
        .reply(i18n.__mf("play.errorNotInSameChannel", { user: message.client.user }))
        .catch(console.error);

    if (!args.length)
      return message
        .reply(i18n.__mf("play.usageReply", { prefix: message.client.prefix }))
        .catch(console.error);

    args = ['right', 'version', ...args,];

    await play(message, args);
  }
};
