const { ErineClient } = require('erine');
const { Database } = require('midb');
const { ActivityType } = require('discord.js');
const db = new Database();
const bot = new ErineClient({
  intents: [
    'Guilds',
    'GuildMessages',
    'MessageContent'
  ],
  prefix: '!'
  },
  presence: {
    activities: [{
      name: "!help",
      type: ActivityType.Playing
    }],
    status: "online"
  },
});

bot.load_commands("./commands");
bot.load_events("./events");

bot.login("TOKEN");
