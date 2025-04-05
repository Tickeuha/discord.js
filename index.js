const { Client, GatewayIntentBits } = require('discord.js');

// Remplace avec ton bot token
const TOKEN = 'TMTM1ODAzNjE1NzcwMjYwNjg5OA.Gwa73i.Vs_qkmOjfd1PFRTeE3TQdIyTjIMiAXa4lJYMJA';

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.once('ready', () => {
  console.log(`✅ Bot connecté en ligne en tant que ${client.user.tag}`);
});

client.login(TOKEN);
