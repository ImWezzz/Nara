const { HybridBuilder, ParamsBuilder } = require("erine");

const body = {
    data: new HybridBuilder()
    .setName('say')
    .setDescription('Escribe algo para que lo repita'),
    params: new ParamsBuilder()
    .addString({ name: "text", description: "Tu texto", required: true, long: true }),
    async code(ctx) {
        await ctx.send(ctx.get("text"));
    }
}

module.exports = { body }
