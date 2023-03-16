const { HybridBuilder, ParamsBuilder, Plugins } = require('erine');
const { Database } = require('midb');
const db = new Database();

const body = {
  data: new HybridBuilder()
    .setName('setprefix')
    .setDescription('Set a prefix for this server'),
  params: new ParamsBuilder()
    .addString({
      name: 'prefix',
      description: 'Set a new prefix',
      required: true
    }),
  plugins: [Plugins.hasPerms('ManageGuild')],
  async code(d) {
    let param = d.get('prefix');
    if(param.length >= 5) return d.send('The prefix cannot exceed 5 characters');
    await db.set(`prefix_${d.guild.id}`, param);
    await d.send(`Prefix changed to \`${param}\``);
    
  }
}

module.exports = { body } 
