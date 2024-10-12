let levelling = require('../lib/levelling')
module.exports = {
   run: async (m, {
      text,
      usedPrefix,
      command,
      isROwner
}) => {
  try {
  var sender = m.quoted?.sender || m.mentionedJid?.[0] || m.sender
  var pp = await conn.profilePictureUrl(sender, 'image')
  } catch (e) {
  var pp = './src/pp.png'
  } finally {
    let setting = db.data.users[sender]
    let { min, xp, max } = levelling.xpRange(setting.level, global.max.multiplier)
    let premiumDate = isNaN(setting.premiumDate)
      ? setting.premiumDate
      : `${(await Func.toDate(setting.premiumDate)) || "Tidak ada waktu durasi"}`     
    let pme = `乂  *U S E R - I N F O*\n\n`
    pme += `┌ ∘  *Name* : @${sender.split`@`[0]} ${setting.registered ? '(' + setting.name + ') ' : ''}\n`
    pme += `│ ∘  *Partner* : ${setting.pasangan ? ` @${setting.pasangan.split`@`[0]}` : '×'}\n`
    pme += `│ ∘  *Exp* : ${setting.exp} (${xp})\n`
    pme += `│ ∘  *Level* : ${setting.level}\n`
    pme += `│ ∘  *Role* : ${isROwner ? 'Developer' : 'User'}\n`
    pme += `│ ∘  *Rank* : ${setting.role}\n`
    pme += `│ ∘  *Limit* : ${setting.limit}\n`
    pme += `└ ∘  *Money* : ${setting.money}\n\n`
    pme += `乂  *U S E R - S T A T U S*\n\n`
    pme += `┌ ∘  *Register* : ${setting.registered ? "√" : "×"}\n`
    pme += `│ ∘  *Premium* : ${setting.premium ? "√" : "×"}\n`
    pme += `│ ∘  *Expired* : ${premiumDate || '-'}\n`
    pme += `└ ∘  *Banned* : ${setting.banned ? "√" : "×"}\n`
    conn.sendMessageModify(m.chat, pme, m, { largeThumb: true, thumbnail: await Func.fetchBuffer(pp), title: 'U S E R - P R O F I L E', body: null, url: `https://wa.me/${m.sender.split`@`[0]}` })
  }
},
  help: ['me'],
  tags: ['xp'],
  register: true,
  command: ['me','my']
}