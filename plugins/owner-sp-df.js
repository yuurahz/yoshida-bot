let fs = require('fs')
module.exports = {
   run: async (m, {
      text,
      usedPrefix,
      command
}) => {
  if (!text) return m.reply(Func.example(usedPrefix, command, 'reply code!'))
  if (command === 'sp') {
    if (!m.quoted.text) return m.reply('balas pesan nya!')
    let path = `plugins/${text}.js`
    await fs.writeFileSync(path, m.quoted.text)
    m.reply(`tersimpan di ${path}`)
  } else if (command === 'df') {
    let path = `plugins/${text}.js`
    if (!fs.existsSync(path)) return m.reply(`file plugin ${text}.js tidak ditemukan`)
    await fs.unlinkSync(path)
    m.reply(`file plugin ${text}.js berhasil dihapus`)
  }
},
  help: ['df'],
  tags: ['owner'],
  rowner: true,
  command: ['df','sp']
}