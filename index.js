const { ErineClient } = require('erine');
const { Database } = require('midb');
const { ActivityType } = require('discord.js');
const db = new Database();
const bot = new ErineClient({
  owners: ['759233882926350346'],
  intents: [
    'Guilds',
    'GuildMessages',
    'MessageContent'
  ],
  prefix: async function(ctx) {
    let prefix = await db.get(`prefix_${ctx.guild.id}`);
    return prefix || '!'
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

bot.login("pene");
