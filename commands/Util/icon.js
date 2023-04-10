const { HybridBuilder, Context } = require('erine');
const { EmbedBuilder } = require('discord.js');

const body = {
    data: new HybridBuilder()
    .setName('servericon')
    .setAliases("icon")
    .setDescription('Muestra el icono del servidor'),
    /**
    @param {Context} ctx
    */
        async code(ctx) {
    let img = ctx.bot.guilds.cache.get(ctx.guild.id).iconURL({ size: 1024 })
    const e = new EmbedBuilder()
    
    .setTitle(`Icono de${ctx.guild.name}`)
    .setColor('dcdcdc')
    .setImage(img)
    await ctx.send({ embeds: [e] })
    }
}

module.exports = { body }
