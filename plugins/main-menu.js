module.exports = {
   run: async (m, {
      text,
      usedPrefix,
      command,
      args,
      setting 
}) => {

let moment = require('moment-timezone')
let os = require('os')
let perintah = args[0] || 'tags'
let tagCount = {}
let tagHelpMapping = {}

 Object.keys(global.plugins)
    .filter((plugin) => !plugin.disabled)
    .forEach((plugin) => {
      const tagsArray = Array.isArray(global.plugins[plugin].tags)
        ? global.plugins[plugin].tags
        : []

      if (tagsArray.length > 0) {
        const helpArray = Array.isArray(global.plugins[plugin].help)
          ? global.plugins[plugin].help
          : [global.plugins[plugin].help]

        tagsArray.forEach((tag) => {
          if (tag) {
            if (tagCount[tag]) {
              tagCount[tag]++
              tagHelpMapping[tag].push(...helpArray)
            } else {
              tagCount[tag] = 1
              tagHelpMapping[tag] = [...helpArray]
            }
          }
        })
      }
    })
            
  let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
    return {
      help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
      tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
      prefix: 'customPrefix' in plugin,
      limit: plugin.limit,
      premium: plugin.premium,
      enabled: !plugin.disabled,
    }
    })
                
    conn.menu = conn.menu ? conn.menu : {}
    const style = setting.style
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let platform = os.platform()
    let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let tanggalislam = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let version = `${require('../package.json').version}`
    let muptime = Func.clockString(_muptime)
    let uptime = Func.clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let fitur = Object.values(plugins)
       .filter((v) => v.command && v.help && v.tags).length
    let pepek = `Haiii @${m.sender.replace(/@.+/g, '')}! 👋🏻 I am an automatic system (WhatsApp Bot), which can help you to do something only through WhatsApp

\`DASHBOARD\`
├ Version : ${version}
├ Library : @whiskeysockets
├ Uptime : ${uptime}
├ Platform : ${platform}
├ Total User : ${totalreg}
├ Time : ${wib}
├ Date : ${date}
┴──`.trim()
 if (perintah === "tags") {
 const daftarTag = Object.keys(tagCount).sort()
 .join('\n├ ' + usedPrefix + command + '  ')
 let list = `${pepek}${readMore}\n\n*\`LIST MENU\`*\n├ ${usedPrefix + command} all\n├ ${usedPrefix + command} ${daftarTag}\n┴──`
      conn.sendMessage(
        m.chat,
        {
          text: list,
          contextInfo: {
            mentionedJid: conn.parseMention(list),
            externalAdReply: {
              title: 'Yoshida WaBot',
              body: botdate,
              thumbnailUrl: thumb,
              sourceUrl: set.gc,
              mediaType: 1,
              renderLargerThumbnail: true,
            },
          },
        },
        { quoted: m },
      )
 } else if (tagCount[perintah]) {
 const daftarHelp = tagHelpMapping[perintah]
 .sort()
 .map((helpItem, index) => {
      return `.${helpItem}`
    }).join('\n├'  + ' ')
  const mangan = `*\`MENU ${perintah.toUpperCase()}\`*\n├ ${daftarHelp}\n┴──`
      conn.sendMessage(
        m.chat,
        {
          text: mangan,
          contextInfo: {
            mentionedJid: conn.parseMention(mangan),
            externalAdReply: {
              title: set.wm,
              body: 'Artificial Inteligence, The begining of robot era',
              thumbnailUrl: thumb,
              sourceUrl: owner.gh,
              mediaType: 1,
              renderLargerThumbnail: true,
            },
          },
        },
        { quoted: m },
      )
   } else if (perintah === "all") {
   const allTagsAndHelp = Object.keys(tagCount).sort().map(tag => {
   const daftarHelp = tagHelpMapping[tag].sort().map((helpItem, index) => {
        return `.${helpItem}`
      }).join('\n├' + ' ')
      return`\n*\`${tag.toUpperCase()}\`*\n├ ${daftarHelp}\n┴──`
    }).join('\n')
  let kabeh =  `Welcome @${m.sender.replace(/@.+/g, '')} 🙌🏻\n✉️ Need Help?, Here is a list of available commands\n\nTotal Command:\n\`${fitur}\` More or less\n${readMore}\n${allTagsAndHelp}`
      conn.sendMessage(
        m.chat,
        {
          text: kabeh,
          contextInfo: {
            mentionedJid: conn.parseMention(kabeh),
            externalAdReply: {
              title: set.wm,
              body: 'Artificial Inteligence, The begining of robot era',
              thumbnailUrl: thumb,
              sourceUrl: owner.gh,
              mediaType: 1,
              renderLargerThumbnail: true,
            },
          },
        },
        { quoted: fakes(tanggalislam) },
      )
 } else {
    await conn.reply(
      m.chat,
      `*Perintah \`${usedPrefix + command} ${perintah}\` Tidak Terdaftar Di Menu!*`,
      m,
    )
  }
},
  command: ['menu','help','listmenu']
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)