const { HybridBuilder } = require("erine");
const { EmbedBuilder } = require('discord.js');

const body = {
    data: new HybridBuilder()
    .setName('stats')
    .setAliases("about, botinfo")
    .setDescription('Muestra las estadisticas de Nara'),
    async code(ctx) {
      let guilds = ctx.bot.guilds.cache.size;
      let commands = ctx.bot.skyfold.commands.HybridType.size;
      let users = ctx.bot.guilds.cache.map(x => x.memberCount ?? 0).reduce((a, b) => a + b, 0);
      let e = new EmbedBuilder()
      .setTitle(`Estadisticas de ${ctx.bot.user.username}`)
      .setDescription(`
**Bot Stats**

> Servidores: ${ctx.bot.guilds.cache.size}
> Usuarios: ${users}
> Comandos: ${commands}
> Ping: ${ctx.bot.ws.ping}ms

**Desarollo**

> Desarollador: [Wez](https://discord.com/users/759233882926350346)

> Languaje: JavaScript
> Libreria: Discord.JS v${require('discord.js').version}
> Framework: Erine v${require('erine').version}

**Links**

> GitHub: [Click here](https://github.com/ImWezzz/Nara)
> Invite: [Click here](https://dsc.gg/nara-bot)
> Server: [Click here](https://discord.gg/5FAvD6a92b)

`)
      .setColor('dcdcdc')
      .setThumbnail("https://cdn.discordapp.com/avatars/977278077539323984/92576e166062a56260a1152d396bfafe.png?size=1024")
        await ctx.send({ embeds: [e] })
    }
}

module.exports = { body }
