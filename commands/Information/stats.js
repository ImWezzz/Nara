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
**<:Nara:1086814524440584373> Bot Stats**

> Servidores: ${ctx.bot.guilds.cache.size}
> Usuarios: ${users}
> Comandos: ${commands}
> Ping: ${ctx.bot.ws.ping}ms

**<:Development:1086805736618737716> Desarollo**

> <:Developer:1086802501895999488> Desarollador: [Wez#9777](https://discord.com/users/759233882926350346)

> Languaje: <:JavaScript:1086800160039899277>  JavaScript
> Libreria: <:DiscordJS:1086800106742874155>  Discord.JS v${require('discord.js').version}
> Framework: <:Erine:1086800143170420766> Erine v${require('erine').version}

**<:link:1078064201454604369> Links**

> <:GitHub:1087509695922716682> GitHub: [Click here](https://github.com/ImWezzz/Nara)
> <:Invitame:1092644679541063761> Invite: [Click here](https://dsc.gg/nara-bot)
> <:People:1087509665954406480> Server: [Click here](https://discord.gg/5FAvD6a92b)

`)
      .setColor('dcdcdc')
      .setThumbnail("https://cdn.discordapp.com/avatars/977278077539323984/92576e166062a56260a1152d396bfafe.png?size=1024")
        await ctx.send({ embeds: [e] })
    }
}

module.exports = { body }
