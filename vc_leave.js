const discord = require("discord.js");

module.exports = {
        name: "👋",
        description: "Leaves the voice channel of the messenger",
        usage: "[leave]",

    run: async function (client, message, args) {
        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) return message.channel.send("You need to be in a voice channel");

        await voiceChannel.leave();
        await message.react('👋');
    }
}
