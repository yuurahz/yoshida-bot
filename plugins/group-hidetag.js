module.exports = {
   run: async (m, {
      participants,
      text
}) => {
conn.sendMessage(m.chat, { text: text, mentions: participants.map(a => a.id) }, { quoted: null })
},
  help: ['hidetag'],
  tags: ['group'],
  group: true,
  admin: true,
  command: ['hidetag','h','ht']
}