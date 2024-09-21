module.exports = {
   run: async (m, {
}) => {
  if (!process.send) return m.reply('Dont: node main.js\nDo: node index.js')
  if (global.conn.user.jid == conn.user.jid) {
    m.reply('Resetting the bot... Please wait')
    await global.db.write()
    process.send('reset')
  } else throw '_eeeeeiiittsssss..._'
},
  help: ['debounce' + (process.send ? '' : ' Not Working')],
  tags: ['owner'],
  rowner: true,
  command: ['debounce','restart']
}