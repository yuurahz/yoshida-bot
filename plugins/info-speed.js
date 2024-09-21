module.exports = {
   run: async (m, {
}) => {
  let old = new Date()
  let speed = `${((new Date() - old) * 1)}`
  await m.reply('🏓 Pong!! : ' + speed + ' ms')
},
  help: ['ping'],
  tags: ['info'],
  command: ['ping']
}