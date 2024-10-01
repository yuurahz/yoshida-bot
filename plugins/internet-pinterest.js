module.exports = {
   run: async (m, {
      usedPrefix,
      command,
      args
}) => {
  if (!args || args.length < 1) {
    return m.reply(Func.example(usedPrefix, command, 'Anime'))
  }
  let response = args.join(" ").split("--")
  let query = response[0];
  let count = parseInt(response[1])
  await m.react('🔎')
  if (!count) {
    try {
      let pler = await Func.fetchJson(API('yosh', '/api/internet/pinterest', { query }))
      let url = pler.result[Math.floor(Math.random() * pler.result.length)]
     conn.sendFile(m.chat, url, '', `Result For: ${args}`, m)
    } catch (e) {
     m.reply(mess.eror)
    }
  } else {
    if (count > 10) return m.reply('Kebanyakan Woi, Maksimal 10')
    try {
      let res = await Func.fetchJson(API('yosh', '/api/internet/pinterest', { query }))
      let images = res.result
      for (let i = 0; i < count; i++) {
        let image = images[Math.floor(Math.random() * images.length)]
        setTimeout(() => {
        m.reply(image, `*Media*: *(${i + 1}/${count})*`)
        }, i * 5000)
      }
    } catch (e) {
      m.reply(mess.eror)
    }
  }
},
  help: ['pinterest'],
  tags: ['internet'],
  limit: 1,
  command: ['pinterest','pin']
}
