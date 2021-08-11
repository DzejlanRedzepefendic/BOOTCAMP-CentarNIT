var attempts = 6;
module.exports = {
	name: 'guess',
	aliases: ['guess'],
	description: 'guess my number',
	cooldown: 2,
	guildOnly: true,
	args:true,
	usage:false,
	// eslint-disable-next-line no-unused-vars
	execute(msg, args) {
    var secretNumber = Math.floor(Math.random() * 11);
        if(args[0] == secretNumber)
            return msg.reply("Uneli ste tacan broj");
        else{
            attempts--;
            msg.reply("Pogresili ste pokusajte ponovo"+ "broj pokusaja je " + attempts )
            if(attempts == 0)
                return msg.reply("Iskoristili ste sve moguce sanse... Vise srece drugi put");
        }
    },
};