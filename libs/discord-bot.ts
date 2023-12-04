import { Client, GatewayIntentBits, TextChannel } from 'discord.js';

export default async function runBotTask(): Promise<string> {
    const client = new Client({
        intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]
    });

    return new Promise((resolve, reject) => {
        client.once('ready', async () => {
            console.log(`Logged in as ${client.user?.tag}!`);

            try {
                const channel = await client.channels.fetch('CHANNEL_ID') as TextChannel; // Replace with your channel ID
                if (channel) {
                    const message = await channel.send('Hello from the bot!');
                    console.log('Message sent:', message.content);

                    client.destroy();
                    console.log('Bot shut down');
                    resolve(message.content);
                } else {
                    throw new Error('Channel is not a text channel');
                }
            } catch (error) {
                console.error('Error during bot operation:', error);
                client.destroy();
                reject(error);
            }
        });

        client.login(process.env.DISCORD_BOT_TOKEN); // Replace with your bot token
    });
}
