const { ErineClient, Errors } = require("erine");

const event = {
    name: 'contextError',
    /**
  * @param {Error} client
  */
    async code(error) {
        if(error instanceof Errors.CommandNotFound) return
        else if(error instanceof Errors.MissingRequiredParam) {
          return error.ctx.send(`Missing parameters: **${error.param.name}**`)
        }
        else if(error instanceof Errors.InvalidParamMember) {
            return error.ctx.send("User not found")
        }
        else if(error instanceof Errors.InvalidParamChannel) {
            return error.ctx.send("Channel not found")
        }
        else if(error instanceof Errors.InvalidParamRole) {
            return error.ctx.send("Role not found")
        }
        else if(error instanceof Errors.MissingPermission) {
          return error.ctx.send(`Missing **${error.permissions}** permissions`)
        }
        else if(error instanceof Errors.MissingBotPermission) {
        return error.ctx.send(`I missing **${error.permissions}** permissions`)
        }
    }
}


module.exports = { event }
