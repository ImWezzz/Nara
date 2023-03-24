const { HybridBuilder } = require("erine");
const { EmbedBuilder } = require("discord.js");

const body = {
    data: new HybridBuilder()
    .setName('serverinfo')
    .setAliases('server')
    .setDescription('Information from the server'),
    
    async code(d) {
       let icono = d.guild.iconURL()
    if (!icono) {
    icono = d.user.displayAvatarURL()
  }
    let serverinfo = new EmbedBuilder()
   
      .setTitle(`Server information`) 
    
      .setDescription(`
**Name:** ${d.guild.name}

**ID:** ${d.guild.id} 

**Owner:** <@${d.guild.ownerId}>

**Creation date:** <t:${(d.guild.createdTimestamp / 1000).toFixed()}:R> 

**Server description:** ${d.guild.description || 'Without description'} 

**Channels:** ${d.guild.channels.cache.size}
 
**Members:** ${d.guild.memberCount} 

**Boost:** ${d.guild.premiumSubscriptionCount}`)
    .setColor('dcdcdc')
    .setThumbnail(icono)
    d.send({
      embeds: [serverinfo]
    })
    }
}

module.exports = { body }
