const {SlashCommandBuilder} = require('@discordjs/builders')
const lang = require('../lang/EN_en.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription(lang.command_ping_description),
    async execute(interaction) {
        await interaction.reply('Pong!')
    }
}