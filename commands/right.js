const i18n = require("../util/i18n");
const { execute: play } = require("./play");
const ytdl = require("ytdl-core");
const YouTubeAPI = require("simple-youtube-api");
const scdl = require("soundcloud-downloader").default;
const https = require("https");
const { YOUTUBE_API_KEY, SOUNDCLOUD_CLIENT_ID, DEFAULT_VOLUME } = require("../util/Util");
const youtube = new YouTubeAPI(YOUTUBE_API_KEY);

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

    args = [...args, 'right', 'verson'];

    await play(message, args);
  }
};
