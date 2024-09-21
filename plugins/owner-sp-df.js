let fs = require('fs');
module.exports = {
   run: async (m, {
      text,
      usedPrefix,
      command
}) => {
  if (!text) throw `uhm.. teksnya mana?`;
  if (command === 'sp') {
    if (!m.quoted.text) throw `balas pesan nya!`;
    let path = `plugins/${text}.js`;
    await fs.writeFileSync(path, m.quoted.text);
    m.reply(`tersimpan di ${path}`);
  } else if (command === 'df') {
    let path = `plugins/${text}.js`;
    if (!fs.existsSync(path)) throw `file plugin ${text}.js tidak ditemukan`;
    await fs.unlinkSync(path);
    m.reply(`file plugin ${text}.js berhasil dihapus`);
  }
},
  help: ['df'],
  tags: ['owner'],
  rowner: true,
  command: ['df','sp']
}