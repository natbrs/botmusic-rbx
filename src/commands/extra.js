const MessageEmbed = require("discord.js").MessageEmbed;

const execute = (bot, msg, args) => {
  const embed = new MessageEmbed()
    .setColor("#F5A405")
    .setTitle(``)
    .setURL("")
    .setThumbnail('https://static.wikia.nocookie.net/roblox/images/b/b4/Soundimage2.png/revision/latest/scale-to-width-down/420?cb=20190114225033')
    .addFields(
      { name: 'Um novo áudio extra acaba de ser publicado na plataforma.', value: 'by Rádio Brasil'}, 
      { name: 'Audio ID', value: '', inline: true },
      { name: 'Artista', value: '', inline: true },
    )
    .setFooter('👍 Gostei  👎 Não gostei');

  msg.channel.send(embed);
};

module.exports = {
  name: "extra",
  help: "Retorna uma MessageEmbed",
  execute,
};
