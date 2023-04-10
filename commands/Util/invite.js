const { HybridBuilder } = require('erine')
const { EmbedBuilder } = require('discord.js')

const body = {
    data: new HybridBuilder()
    .setName('invite')
    .setDescription('Obten mi invitación'),
    async code(ctx) {
    const e = new EmbedBuilder()
    .setTitle('Invitación')
    .setColor('dcdcdc')
    .setDescription('Aquí tienes mi invitación \n Todos los permisos: [Click here](https://discord.com/api/oauth2/authorize?client_id=977278077539323984&permissions=8&scope=bot) \n Permisos recomendados: [Click here](https://discord.com/api/oauth2/authorize?client_id=977278077539323984&permissions=1377409825911&scope=bot)')
    ctx.send({ embeds: [e] })
    }
}

module.exports = { body }
