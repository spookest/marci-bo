// Require the necessary discord.js classes
import { Client, Events, GatewayIntentBits } from "discord.js";
import { execute } from './commands/presenceUpdate.js';
import "dotenv/config";

// Create a new client instance
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildPresences,
		GatewayIntentBits.MessageContent,
    ],
});

client.on(Events.ClientReady, (readyClient) => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on('presenceUpdate', execute);

client.login(process.env.TOKEN);
