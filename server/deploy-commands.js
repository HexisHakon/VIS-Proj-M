const fs = require('fs')
require('dotenv').config()
const { REST } = require('@discordjs/rest')
const { Routes } = require('discord-api-types/v9')

const clientID = process.env.CLIENT_ID
const guildID = process.env.GUILD_ID

const commands = []
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

for (file of commandFiles){
    let command = require(`./commands/${file}`)
    commands.push(command.data.toJSON())
}

const rest = new REST({version: '9'}).setToken(process.env.DISCORD_TOKEN)

// Commands werden geupdated
rest.put(Routes.applicationGuildCommands(clientID, guildID), {body: commands})
    .then(() => { console.log("commands updated!") })
