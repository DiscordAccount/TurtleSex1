const Discord = require('discord.js')

const bot = new Discord.Client()

const token = process.env['token']

bot.on('ready', () => {
  console.log('bot logged in')
})

const prefix = '*' //PREFIXO








var nwc = 0;
console.log(nwc + ' XD')








bot.on('message', (msg) => {
  if(msg.content[0] !== prefix) {                                    // COMANDOS SEM PREFIXO
  console.log('no prefix')
  if (msg.content.includes('BMC') || msg.content.includes('bmc') ||  //BMC
  msg.content.includes('Bmc')) {
    msg.react(':Martinha:851186345326018630')
    msg.channel.send('Martinha is watching')
  }

  if (msg.content.includes('SIMP') || msg.content.includes('simp') ||  //Simp
  msg.content.includes('Simp')) {
    msg.react(':silencewench:814846617298534430')
  }
if (msg.content.includes('Reggin') || msg.content.includes('Reggina') ||  //SUS
  msg.content.includes('REGGIN') || msg.content.includes('reggin') || msg.content.includes('porn') ||msg.content.includes('porno') || msg.content.includes('sus') || msg.content.includes('Justin')) {
    msg.react(':sus:846348704973717535')
  }

  if (msg.content.includes('BD') || msg.content.includes('Norberto') ||  //BD
  msg.content.includes('Albino') || msg.content.includes('bd')) {
    msg.react(':BD:818861703130644551')

  }
  if (msg.content.includes('Nigga') || msg.content.includes('NIGGA') ||  //N-Word-Count
  msg.content.includes('nigga') || msg.content.includes('Nigger') || msg.content.includes('NIGGER') || msg.content.includes('nigger'))
  {                                                   //nwc++ = nwc+1
nwc++
  }

  return
  }

  

  const args = msg.content.slice(prefix.length).trim().split(' ')
  console.log(args)
  const command = args.shift().toLowerCase()
  console.log(command)


  if (command === "nwc"){               //N-Word-Count
    msg.channel.send('A N-Word foi citada em ' + nwc + " mensagens")
  }

  
  
})


bot.login(token)
