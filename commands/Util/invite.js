const { HybridBuilder } = require('erine')
const { EmbedBuilder } = require('discord.js')

const body = {
    data: new HybridBuilder()
    .setName('invite')
    .setDescription('Invite me for ours servers'),
    async code(ctx) {
    const e = new EmbedBuilder()
    .setTitle('Nara invitation')
    .setColor('dcdcdc')
    .setDescription('Here is my invitation \n All Perms: [Click here](https://discord.com/api/oauth2/authorize?client_id=977278077539323984&permissions=8&scope=bot) \n Recommended permissions: [Click here](https://discord.com/api/oauth2/authorize?client_id=977278077539323984&permissions=1377409825911&scope=bot)')
    ctx.send({ embeds: [e] })
    }
}

module.exports = { body }
