const MessageEmbed = require("discord.js").MessageEmbed;

const execute = (bot, msg, args) => {
  const clothing = new MessageEmbed()
    .setColor("#F5A405")
    .setTitle(``)
    .setURL("")
    .addFields(
      { name: '', value: 'by Rádio Brasil' }, 
      { name: 'Criador', value: 'Metaleiro', inline: true },
      { name: 'Cor', value: 'Azul', inline: true }, 
    )
    .setImage('')
    .setFooter('5', 'https://static.wikia.nocookie.net/roblox/images/5/50/Robux_2019_white.svg/revision/latest/scale-to-width-down/170?cb=20191122104417');
    
  msg.channel.send(clothing);
};

module.exports = {
  name: "clothing",
  help: "Retorna uma MessageEmbed",
  execute,
};
