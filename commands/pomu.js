const i18n = require("../util/i18n");
const { execute: play } = require("./play");

module.exports = {
  name: "pomu",
  cooldown: 3,
  description: i18n.__("pomu.description"),
  async execute(message) {

    await play(message, ['https://youtu.be/8KBDqn3WCv4']);
  }
};
