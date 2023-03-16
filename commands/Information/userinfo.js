const { HybridBuilder, ParamsBuilder, Context } = require('erine');
const { EmbedBuilder } = require('discord.js')

const body = {
    data: new HybridBuilder()
    .setName('user')
    .setAliases("userinfo","user info")
    .setDescription('Display information about a user'),  
    params: new ParamsBuilder()
    .addMember({ name: "user", description: "The user", required: false }),
    async code(ctx) {
      const usuario = ctx.get("user")?.user || ctx.author
      const member = ctx.get("member")?.member || ctx.member
      const embed = new EmbedBuilder()
      .setTitle(`${usuario.username}'s info`)
      .setDescription(`\n **Username:** ${usuario.username}\n **Tag:** ${usuario.discriminator}\n **ID:** ${usuario.id}
      \n **Created account:** <t:${(usuario.createdTimestamp / 1000).toFixed()}:R> \n **Joined:** <t:${(member.joinedTimestamp / 1000).toFixed()}:R>`)
      .setColor('dcdcdc')
      .setThumbnail(`${usuario.displayAvatarURL()}`)
      ctx.send({ embeds: [embed]})
   }
}

module.exports = { body }
