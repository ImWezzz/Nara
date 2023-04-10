const { ErineClient, Errors } = require("erine");

const event = {
    name: 'contextError',
    /**
  * @param {Error} client
  */
    async code(error) {
        if(error instanceof Errors.CommandNotFound) return
        else if(error instanceof Errors.MissingRequiredParam) {
          return error.ctx.send(`Parametros faltantes! \nRequieres de: **${error.param.name}**`)
        }
        else if(error instanceof Errors.InvalidParamMember) {
            return error.ctx.send("Usuario no encontrado")
        }
        else if(error instanceof Errors.InvalidParamChannel) {
            return error.ctx.send("Canal no encontrado")
        }
        else if(error instanceof Errors.InvalidParamRole) {
            return error.ctx.send("Rol no encontrado")
        }
        else if(error instanceof Errors.MissingPermission) {
          return error.ctx.send(`Necesitas permisos para este comando. \nPermisos: **${error.permissions}**`)
        }
        else if(error instanceof Errors.MissingBotPermission) {
        return error.ctx.send(`Necesito permisos para este comando. \nPermisos: **${error.permissions}**`)
        }
    }
}


module.exports = { event }
