const { HybridBuilder, ParamsBuilder } = require("erine");
const { EmbedBuilder } = require("discord.js");

const body = {
    data: new HybridBuilder()
    .setName('help')
    .setAliases('h','help')
    .setDescription('Help menu'),
    
    async code(d) {
       let icono = d.guild.iconURL()
    if (!icono) {
    icono = d.user.displayAvatarURL()
  }
    let serverinfo = new EmbedBuilder()
   
      .setTitle(`Nara Commands`) 
    
      .setDescription(`
Hello ${d.author} this is my list of commands.

**Information**
userinfo・serverinfo

**Moderation/Administration**
setprefix

**Tools**
8ball・avatar・say・ping・invite`)
    .setColor('dcdcdc')
    .setThumbnail(icono)
    d.send({
      embeds: [serverinfo]
    })
    }
}

module.exports = { body }
