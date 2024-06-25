const {Client, Collection, Intents} = require('discord.js')
require('dotenv').config()
const fs = require('fs')

const express = require('express');
const cors = require('cors');
const DASHBOARD = require("./routes/dashboard");
const RECORDINGS = require("./routes/api/recordings")
const MATCHES = require("./routes/api/matches")
const CHAMPIONS = require("./routes/api/champions")
const VOICEDATA = require("./routes/api/voiceData")
const STOPWORDS = require("./routes/api/stopwords")
const SENTIMENTS = require("./routes/api/sentiments")

const APP = express();

APP.use(express.json({limit: "30mb", extended: true}));
APP.use(express.urlencoded({limit: "30mb", extended: true}));

APP.listen(5500, console.log('API erreichbar unter http://localhost:' + 5500));

// Route Middlewares
APP.use('/', DASHBOARD);
APP.use('/routes/api/recordings', RECORDINGS);
APP.use('/routes/api/matches', cors(), MATCHES);
APP.use('/routes/api/champions', cors(), CHAMPIONS);
APP.use('/routes/api/voicedata', cors(), VOICEDATA);
APP.use('/routes/api/stopwords', cors(), STOPWORDS)
APP.use('/routes/api/sentiments', cors(), SENTIMENTS)


const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_VOICE_STATES]})

// Events are loaded in

const eventFiles = fs.readdirSync('./server/events').filter(file => file.endsWith('.js'))

for(file of eventFiles) {
    let event = require(`./events/${file}`)
    if (event.once){
        client.once(event.name, (...args) => event.execute(...args))
    } else {
        client.on(event.name, (...args) => event.execute(...args))
    }
}

// Commands are loaded in

client.commands = new Collection()
const commandFiles = fs.readdirSync('./server/commands').filter(file => file.endsWith('.js'))

for (file of commandFiles){
    let command = require(`./commands/${file}`)
    client.commands.set(command.data.name, command)
}

// Interaction handling

client.on('interactionCreate', async interaction => {
    if(interaction.member.voice.channelId){
        console.log(client.channels.resolve(interaction.member.voice.channelId).name)
    }

    // DEBUGGING: 
    // console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`)

	if (!interaction.isCommand()) return

	const command = client.commands.get(interaction.commandName)

    if(!command) return

    try {
        await command.execute(interaction)
    } catch (err) {
        console.error(err)
        await interaction.reply({content: "There was an error while executing this command!", ephemeral: true})
    }
});

/* // 'ready'-action
client.once('ready', () => {
    console.log("Bot online!");
})

// Login on server
client.login(process.env.DISCORD_TOKEN); */