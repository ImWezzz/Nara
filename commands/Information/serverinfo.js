const { HybridBuilder, ParamsBuilder } = require("erine");
const { EmbedBuilder } = require("discord.js");

const body = {
    data: new HybridBuilder()
    .setName('serverinfo')
    .setAliases('server')
    .setDescription('Muestra la información del servidor'),
    
    async code(d) {
      let icono = d.guild.iconURL()
    if (!icono) {
    icono = d.user.displayAvatarURL()
  }
    let serverinfo = new EmbedBuilder()
    
      .setTitle(`Información del servidor`) 
    
      .setDescription(`
**Nombre:** ${d.guild.name}
**ID:** ${d.guild.id} 
**Owner:** <@${d.guild.ownerId}>
**Canales:** ${d.guild.channels.cache.size} 
**Miembros:** ${d.guild.memberCount} 
**Boost:** ${d.guild.premiumSubscriptionCount}

**Creado el:** <t:${(d.guild.createdTimestamp / 1000).toFixed()}:R> 
**Descripción:** ${d.guild.description || 'No cuenta con una descripción.'}`)
    .setColor('dcdcdc')
    .setThumbnail(icono)
    d.send({
      embeds: [serverinfo]
    })
    }
}

module.exports = { body }
