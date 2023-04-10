const { HybridBuilder, ParamsBuilder } = require('erine');
const { EmbedBuilder } = require("discord.js");

const body = {
    data: new HybridBuilder()
    .setName('avatar')
    .setAliases('pfp')
    .setDescription('Muestra el avatar de un usuario'),
    params: new ParamsBuilder()
    .addMember({ name: "user", description: "TEl usuario", required: false }),
    async code(ctx) {
    const u = ctx.get("user")?.user || ctx.author
    const embed = new EmbedBuilder()
        .setDescription(`Avatar de ${u.username}`)
        .setImage(u.displayAvatarURL({ size: 1024 }))
        .setColor('dcdcdc')
    await ctx.send({ embeds: [embed] })
    }
}

module.exports = { body }
