const { HybridBuilder } = require("erine");
const { EmbedBuilder } = require('discord.js');

const body = {
    data: new HybridBuilder()
    .setName('stats')
    .setAliases("about, botinfo")
    .setDescription('Show Nara stats'),
    async code(ctx) {
      let guilds = ctx.bot.guilds.cache.size;
      let commands = ctx.bot.skyfold.commands.HybridType.size;
      let users = ctx.bot.guilds.cache.map(x => x.memberCount ?? 0).reduce((a, b) => a + b, 0);
      let e = new EmbedBuilder()
      .setTitle(`${ctx.bot.user.username} stats`)
      .setDescription(`
**• Bot Stats**

**Servers:** ${ctx.bot.guilds.cache.size}
**Users:** ${users}
**Commands:** ${commands} 
**Ping:** ${ctx.bot.ws.ping}ms

**• Development**

**Language:** JavaScript
**Library:** Discord.JS v${require('discord.js').version}
**Package:** Erine v${require('erine').version}

`)
      .setColor('dcdcdc')
        await ctx.send({ embeds: [e] })
    }
}

module.exports = { body }
