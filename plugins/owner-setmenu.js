module.exports = {
   run: async (m, {
      args,
      usedPrefix,
      command,
      setting 
}) => {
  try {
    if (!args[0]) return m.reply(Func.example(usedPrefix, command, '2'))
    conn.reply(m.chat, `🚩 Successfully use styles *${args[0]}*.`, m).then(() => setting.style = parseInt(args[0]))
  } catch (e) {
    m.reply(Func.jsonFormat(e))
  }
},
  help: ['setmenu'],
  tags: ['owner'],
  rowner: true,
  command: ['setmenu']
}