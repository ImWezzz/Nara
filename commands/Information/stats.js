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
      .setTitle(`${ctx.bot.user.username}'s stats`)
      .setDescription(`
**<:Nara:1086814524440584373> Bot Stats**

> Servers: ${ctx.bot.guilds.cache.size}
> Users: ${users}
> Commands: ${commands}
> Ping: ${ctx.bot.ws.ping}ms

**<:Development:1086805736618737716> Development**

> Language: <:JavaScript:1086800160039899277>  JavaScript
> Library: <:DiscordJS:1086800106742874155>  Discord.JS v${require('discord.js').version}
> Framework: <:Erine:1086800143170420766> Erine v${require('erine').version}

`)
      .setColor('dcdcdc')
        await ctx.send({ embeds: [e] })
    }
}

module.exports = { body }
