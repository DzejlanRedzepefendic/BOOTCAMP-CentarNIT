let roll
let players = {}
let ids = []
let maxNumber = -Infinity
let nameOfWinner = ''
function ObjectLength(object) {
  var length = 0
  for (var key in object) {
    if (object.hasOwnProperty(key)) {
      ++length
    }
  }
  return length
}

module.exports = {
  name: 'rollsec',
  aliases: ['ranz'],
  description: 'Roll to win!',
  cooldown: 2,
  guildOnly: true,
  args: false,
  usage: false,
  // eslint-disable-next-line no-unused-vars
  execute(msg, args) {
    for (let index = 0; index < ids.length; index++) {
      if (ids[index] == msg.author.id) return msg.reply("U can't roll again")
    }
    if (msg.author.id) {
      ids.push(msg.author.id)
      roll = Math.ceil(Math.random() * 100)
      players = {
        ...players,
        [msg.author.id]: {
          roll: roll,
          user: msg.author.username,
        },
      }
      // console.log(players)
      // console.log(ids)
      setTimeout(() => {
        let lengthObj = ObjectLength(players)
        // console.log(lengthObj)
        for (let index = 0; index < lengthObj; index++) {
          console.log(index, lengthObj)
          console.log(players[ids[index]].roll)
          if (maxNumber < players[ids[index]].roll)
            maxNumber = players[ids[index]].roll
        }
        for (let index = 0; index < lengthObj; index++) {
          if (maxNumber == players[ids[index]].roll)
            nameOfWinner = players[ids[index]].user
        }
        msg.reply(`The highest roll was ${maxNumber}!Winner is ${nameOfWinner}`)
        if (maxNumber !== undefined) {
          maxNumber = -Infinity
          nameOfWinner = ''
          ids = []
        }
      }, 10000)
    }
  },
}
