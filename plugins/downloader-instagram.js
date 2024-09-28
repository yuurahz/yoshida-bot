module.exports = {
   run: async (m, {
      text,
      usedPrefix,
      command
}) => {
        if (!text) return m.reply(Func.example(usedPrefix, command, 'Input Instagram links!'))
        m.react('⏱️')
        try {
         let yosh = await Func.fetchJson(API('yosh', '/api/downloader/igdl', { url: text }))
        for (let i of yosh.result.media) {
         conn.sendFile(m.chat, i, '', '',m)
         await Func.delay(1500)
        }
        } catch (e) {
          return m.reply(mess.eror)
        }
},
  help: ['instagram'],
  tags: ['downloader'],
  limit: 1,
  command: ['instagram', 'igdl', 'ig']
}