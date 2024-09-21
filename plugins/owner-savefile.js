module.exports = {
   run: async (m, {
      text,
      usedPrefix,
      command 
}) => {
    if (!text) return m.reply('input code')
    if (!m.quoted.text) return m.reply('reply code')
    await require('fs').writeFileSync(text, m.quoted.text)
    m.reply(`Saved ${path} to file!`)
},
  help: ['savefile'],
  tags: ['owner'],
  rowner: true,
  command: ['savefile','sf']
}