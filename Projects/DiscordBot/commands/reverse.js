let ceoString = []
let NoviString = ''
module.exports = {
  name: 'reverse',
  aliases: [],
  description: 'Ping!',
  cooldown: 5,
  guildOnly: true,
  args: true,
  usage: false,
  // eslint-disable-next-line no-unused-vars
  execute(msg, args) {
    for (let index = 0; index < args.length; index++) {
      let swap = args[index].split('')
      swap.reverse()
      ceoString.push(swap.join(''))
    }
    NoviString = ceoString.join(' ')
    return msg.reply(NoviString)
  },
}
