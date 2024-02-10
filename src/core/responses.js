const { EmbedBuilder } = require("discord.js")

const errorColor = 0xff5555
const successColor = 0x55ff55

exports.invalidPermsEmbed = (permission) => {
    const embed = new EmbedBuilder()
        .setTitle("Invalid perms")
        .setDescription(`You can't run this command, you need the perm \`${permission}\``)
        .setColor(errorColor)

    return embed
}

exports.selfTargetEmbed = () => {
    
    const embed = new EmbedBuilder()
        .setTitle("Invalid target")
        .setDescription("You cannot target yourself")
        .setColor(errorColor)

    return embed
}

exports.successEmbed = (message) => {
    
    const embed = new EmbedBuilder()
        .setTitle("Success")
        .setDescription(message)
        .setColor(successColor)

    return embed
}