# npm i opusscript
# npm i ffmpeg-static

const { MessageEmbed } = require('discord.js');

module.exports = {
    name: '⏰',
    description: 'is time to stop soundboard',
    usage: "",
    aliases: [],
  
  run: async function(client, message, args) {

    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel)
      return message.channel.send("get in voice channel please.");

    const permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) return message.reply('I am missing permission!');

    var connection = await voiceChannel.join();
    await connection.voice.setSelfDeaf(true);
    connection.play("https://cdn.discordapp.com/attachments/851287450037911572/872466285018112060/Its_Time_to_Stop_Meme_Sound_-_Sound_Effect_for_editing_mp3cut.net.mp3").setVolumeLogarithmic(1);
  }
}
