const { HybridBuilder, Context } = require("erine");

const body = {
    data: new HybridBuilder()
    .setName("ping")
    .setAliases("latency")
    .setDescription("Muestra mi ping"),
    async code(ctx) {
        ctx.send(`Mi ping es de: ${ctx.bot.ws.ping}ms`)
    }
}

module.exports = { body }
