const { HybridBuilder, ParamsBuilder } = require("erine");
const { EmbedBuilder } = require("discord.js");

const body = {
    data: new HybridBuilder()
    .setName('help')
    .setAliases('h','help')
    .setDescription('Muestra mi lista de comandos'),
    
    async code(d) {
        let icono = d.guild.iconURL()
    if (!icono) {
    icono = d.user.displayAvatarURL()
    }
    let help = new EmbedBuilder()
    
        .setTitle(`Lista de comandos`)     
        .setDescription(`
Hola ${d.author} aquí tienes mi lista de comandos

> Administración
setprefix 

> Información
serverinfo  •  stats  •  userinfo

> Utilidad
8ball  •  avatar  •  icon  •  invite  •  ping  •  say
        `)
    .setColor('dcdcdc')
    .setThumbnail(icono)
    d.send({
        embeds: [help]
    })
    }
}

module.exports = { body }
