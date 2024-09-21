module.exports = {
   run: async (m, {
      text,
      usedPrefix,
      command,
      setting
}) => {
  try {
    if (!text) return conn.reply(m.chat, Func.example(usedPrefix, command, setting.link), m)
    const isUrl = Func.isUrl(text)
    if (!isUrl) return conn.reply(m.chat, Func.texted('bold', `URL is invalid.`), m)
    setting.link = text
    conn.reply(m.chat, Func.texted('bold', `Link successfully set.`), m)
  } catch (e) {
    conn.reply(m.chat, Func.jsonFormat(e), m)
 }
},
  help: ['setlink'],
  tags: ['owner'],
  rowner: true,
  command: ['setlink']
}