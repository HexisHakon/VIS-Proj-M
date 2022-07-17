const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')
const { REST } = require('@discordjs/rest')
const { Routes } = require('discord-api-types/v9')
require('dotenv').config()
const lang = require('../lang/EN_en.json');

const rest = new REST({version: '9'}).setToken(process.env.DISCORD_TOKEN)

const clientID = process.env.CLIENT_ID
const guildID = process.env.GUILD_ID

module.exports = {
    data: new SlashCommandBuilder()
        .setName('commands')
        .setDescription(lang.command_commands_description),
    async execute(interaction) {
        await interaction.reply({content: lang.command_default_response, ephemeral: true})
        const commandsEmbed = new MessageEmbed()
            .setColor('#7b19d1')
            .setTitle('Commands')
            .setAuthor(interaction.user.username + "#" + interaction.user.discriminator, interaction.user.displayAvatarURL())
            .setDescription(lang.command_commands_embed_description)
            .setThumbnail('https://www.hexis-esports.de/wp-content/uploads/2021/10/Hexis_eSports_Logo.png')
            .setFooter(lang.command_commands_embed_footer)
        registered_commands = await rest.get(Routes.applicationGuildCommands(clientID, guildID))
        for(x of registered_commands){
            commandsEmbed.addField("/" + x.name, x.description);
        }
        interaction.channel.send({ embeds: [commandsEmbed]})
    }
}