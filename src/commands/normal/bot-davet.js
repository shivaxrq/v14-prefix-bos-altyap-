const { EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle } = require("discord.js")
module.exports = {
  name: "davet",
  aliases: ["invite"],
  cooldown: 5000,//1 saniye = 1000 ms / cooldown olmasını istemezseniz 0 yazın.
  run: async (client, message, args) => {

    let link_button = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setLabel('TIKLA GEL')
        .setStyle(ButtonStyle.Link)
        .setURL(`https://discord.gg/botstudios`))



    const embed = new EmbedBuilder()
      .setTitle("KULLANIN İŞTE ANNASINI SİKTİKLERİM SİZİ.")
      .setDescription(`[Botu davet etmek için tıkla](https://discord.gg/botstudio)`)
      .setDescription(`BU MAHALLENİN BABASI BENİM LAN BU SAATEN SONRA OROSPU COCUHLARI SİZİ BOBOBHYT`)
      .setColor("#0099ff")
      .setTimestamp()
      .setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 1024 }))
    return message.reply({ embeds: [embed], components: [link_button] })

  }
}
