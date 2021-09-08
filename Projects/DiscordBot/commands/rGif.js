const fetch = require('node-fetch')
module.exports = {
  name: 'gif',
  aliases: ['lol'],
  description: 'Make me laugh!',
  cooldown: 2,
  guildOnly: true,
  args: true,
  usage: false,
  // eslint-disable-next-line no-unused-vars
  execute(msg, args) {
    if (args.length === 1) {
      randomNumber = Math.floor(Math.random() * 18 + 1)
      fetch(`https://g.tenor.com/v1/random?q=${args[0]}`)
        .then((res) => {
          return res.json()
        })
        .then((result) => {
          console.log(result)
          return msg.reply(`${result.results[randomNumber].url}`)
        })
        .catch((e) => {
          console.log(e)
        })
    } else {
      msg.reply('samo jedan tag')
    }
  },
}
