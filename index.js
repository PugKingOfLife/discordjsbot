const { Client, GatewayIntentBits, messageLink } = require('discord.js');
require("dotenv").config();

const client = new Client({
   intents: [
        GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
   ]   
});

client.on("ready", () => {
   console.log(`Logged in as ${client.user.tag}`); 
});

client.on("messageCreate", (msg) => {
    if (msg.content == "ping") {
        msg.reply("pong");
    }
});

client.login(process.env.TOKEN);