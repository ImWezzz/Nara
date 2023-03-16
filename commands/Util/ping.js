const { HybridBuilder, ParamsBuilder } = require("erine");

const body = {
    data: new HybridBuilder()
    .setName('say')
    .setDescription('What do you want me to repeat?'),
    params: new ParamsBuilder()
    .addString({ name: "text", description: "Insert your text", required: true, long: true }),
    async code(ctx) {
       await ctx.send(ctx.get("text"));
    }
}

module.exports = { body }
