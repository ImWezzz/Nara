const { HybridBuilder, ParamsBuilder } = require('erine');
const { EmbedBuilder } = require("discord.js");

const body = {
   data: new HybridBuilder()
   .setName('avatar')
   .setAliases('pfp')
   .setDescription('Get a user avatar'),
  params: new ParamsBuilder()
  .addMember({ name: "user", description: "The user", required: false }),
  async code(ctx) {
    const u = ctx.get("user")?.user || ctx.author
    const embed = new EmbedBuilder()
      .setDescription(`${u.username} avatar`)
      .setImage(u.displayAvatarURL({ size: 1024 }))
      .setColor('dcdcdc')
  await ctx.send({ embeds: [embed] })
  }
}

module.exports = { body }
