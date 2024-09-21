const os = require('os')
module.exports = {
   run: async (m, {
}) => {
  try {
    const json = await Func.fetchJson('http://ip-api.com/json')
    delete json.status
    let caption = `乂  *S E R V E R*\n\n`
    caption += `┌  ◦  OS : ${os.type()} (${os.arch()} / ${os.release()})\n`
    caption += `│  ◦  Ram : ${Func.formatSize(process.memoryUsage().rss)} / ${Func.formatSize(os.totalmem())}\n`
    for (let key in json) caption += `│  ◦  ${Func.ucword(key)} : ${json[key]}\n`
    caption += `│  ◦  Uptime : ${Func.toTime(os.uptime * 1000)}\n`
    caption += `└  ◦  Processor : ${os.cpus()[0].model}\n`
    return m.reply(caption)
  } catch(e) {
    return m.reply(String(e))
  }
},
  help: ['server'],
  tags: ['info'],
  command: ['server']
}