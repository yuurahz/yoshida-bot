module.exports = {
   run: async (m, {
      usedPrefix,
      command,
      args
}) => {
    let isClose = {
        'open': 'not_announcement',
        'close': 'announcement',
    }[(args[0] || '')]
    if (isClose === undefined) return m.reply(`Wrong format!!\n\nExample :\n${usedPrefix + command} close\n${usedPrefix + command} open`)
    await conn.groupSettingUpdate(m.chat, isClose)
},
  help: ['group'],
  tags: ['group'],
  admin: true,
  botAdmin: true,
  group: true,
  command: ['group','gc']
}