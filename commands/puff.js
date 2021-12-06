const i18n = require("../util/i18n");
const { execute: play } = require("./play");

module.exports = {
  name: "puff",
  cooldown: 3,
  description: i18n.__("puff.description"),
  async execute(message) {
    await play(message, ['https://www.youtube.com/watch?v=IdL3uOlVBPc']);
  }
};
