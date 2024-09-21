const fs = require('fs')
const chalk = require('chalk')

module.exports = async(conn, json) => {
const { from, id, status } = json[0]
try {
if (status == 'offer') {
const stanza = {
tag: 'call',
attrs: {
from: conn.user.id,
to: from,
id: conn.generateMessageTag(),
},
content: [
{
tag: 'reject',
attrs: {
'call-id': id,
'call-creator': from,
count: '0',
},
content: undefined,
},
],
}
await conn.query(stanza)
await conn.updateBlockStatus(from, 'block')
db.data.users[from].banned = true
if (from !== global.owner) return conn.sendMessage(owner.jid, { text: `Terdeteksi @${from.split('@')[0]} telah menelfon bot`, mentions: [from] }, { quoted: fakes('Caller Bot Notification') })
}
} catch (e){console.log(e)}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.greenBright("[ UPDATE ]"), chalk.whiteBright(`${__filename}`) )
delete require.cache[file]
require(file)
})