const i18n = require("../util/i18n");
const { execute: play } = require("./play");

module.exports = {
  name: "amogus",
  cooldown: 3,
  description: i18n.__("amogus.description"),
  async execute(message) {
    const track = Math.floor(Math.random() * 10) ? 'https://youtu.be/jKLG0vLhWFI' : 'https://youtu.be/rcWcrL2o9bQ'
    await play(message, [track, '!!']);
  }
};
