const { HybridBuilder, ParamsBuilder, Context } = require('erine');
const { EmbedBuilder } = require('discord.js')

const body = {
      data: new HybridBuilder()
      .setName('user')
      .setAliases("userinfo","user info")
      .setDescription('Muestra la información de un usuario'),  
      params: new ParamsBuilder()
      .addMember({ name: "user", description: "El usuario", required: false }),
      async code(ctx) {
      const usuario = ctx.get("user")?.user || ctx.author
      const member = ctx.get("member")?.member || ctx.member
      const embed = new EmbedBuilder()
      .setTitle(`Información de ${usuario.username}`)
      .setDescription(`\n **Username:** ${usuario.username}\n **Tag:** ${usuario.discriminator}\n **ID:** ${usuario.id}
      \n **Cuenta creada:** <t:${(usuario.createdTimestamp / 1000).toFixed()}:R> \n **Unión al servidor:** <t:${(member.joinedTimestamp / 1000).toFixed()}:R>`)
      .setColor('dcdcdc')
      .setThumbnail(`${usuario.displayAvatarURL()}`)
      ctx.send({ embeds: [embed]})
   }
}

module.exports = { body }
