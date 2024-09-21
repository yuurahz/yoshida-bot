module.exports = {
   run: async (m, {
      text,
      usedPrefix,
      command,
      setting 
}) => {
  try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!/image\/(jpe?g|png)/.test(mime)) return m.reply(`Send or reply to images with commands ${usedPrefix + command}`)
    let img = await q.download()
    if (!img) return m.reply(mess.wrong)
    let json = await scrap.uploadImage(img)
    setting.cover = json.data.url
    m.reply('Cover successfully changed')
  } catch (e) {
    console.log(e)
    return m.reply(Func.jsonFormat(e))
  }
},
  help: ['setcover'],
  tags: ['owner'],
  rowner: true,
  command: ['setcover']
}