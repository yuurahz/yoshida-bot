module.exports = {
   run: async (m, {
      text,
      usedPrefix,
      command
}) => {
 if (!text) return m.reply(Func.example(usedPrefix, command, 'https://vt.tiktok.com/linkya'))
  m.react('⏱️')
  try {
    let fetch = await Func.fetchJson(API('yosh', '/api/downloader/tiktok', { url: text }))
    let { data } = fetch.result
    if (data.images) {
    let c = 0, d = data.images.length
      for (let i of data.images) {
        if (c == 0) await conn.sendMessage(
          m.chat,
          {
            image: {
              url: i,
            },
            caption: `- Author : ${data.author.nickname}\n- Views : ${Func.formatNumber(data.play_count)}\n- Likes : ${Func.formatNumber(data.digg_count)}\n- Comment : ${Func.formatNumber(data.comment_count)}\n- Caption : ${data.title}`,
          },
          { quoted: m },
        );
        else await conn.sendFile(m.chat, i, '', null, m)
        c += 1
       await Func.delay(5000)
      }
    } else {
      await conn.sendMessage(
        m.chat,
        {
          video: {
            url: data.play,
          },
          caption: `- Author : ${data.author.nickname}\n- Views : ${Func.formatNumber(data.play_count)}\n- Likes : ${Func.formatNumber(data.digg_count)}\n- Comment : ${Func.formatNumber(data.comment_count)}\n- Caption : ${data.title}`,
        },
        { quoted: m },
      )
    }
  } catch (e) {
    m.reply(mess.eror)
  }
},
 help: ['tiktok'],
 tags: ['downloader'],
 limit: 1,
 command: ['tiktok', 'tt', 'ttdl']
}