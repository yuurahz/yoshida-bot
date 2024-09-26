module.exports = {
   run: async (m, {
      usedPrefix,
      command 
}) => {
    let bot = conn.user.jid
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image/.test(mime)) {
      let img = await q.download()
      if (!img) return m.reply('Image not found')
      await conn.updateProfile(bot, img)
      conn.reply(m.chat, 'Successfully change bot profile picture', m)
    } else return m.reply(`send/reply picture with caption *${usedPrefix + command}*`)
},
  help: ['setppbot'],
  tags: ['owner'],
  rowner: true,
  command: ['setppbot','setpp']
}