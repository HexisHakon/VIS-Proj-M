const {SlashCommandBuilder} = require('@discordjs/builders')
const lang = require('../lang/EN_en.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('record')
        .setDescription(lang.command_record_description),
    async execute(interaction, client, args) {
        const voicechannel = interaction;

        await interaction.reply({content: lang.command_default_response, ephemeral: true})
    }
}